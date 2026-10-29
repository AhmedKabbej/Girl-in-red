import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import GUI from 'lil-gui';
import audioUrl from '../girl in red.official audio.mp3';
import ambientUrl from '../wild.mp3';
import {
  skyVertex, skyFragment, grassVertex, grassFragment,
  groundVertex, groundFragment, charVertex, charFragment, finishShader,
} from './shaders';

type CamMode = 'path-auto' | 'path-scroll' | 'free';

interface BakeMeta {
  charScale: number;
  groundScale: number;
  groundHalf: number;
  groundEdge: [number, number, number];
}

const BASE = import.meta.env.BASE_URL;

// phone / tablet: lighter render and a single play button (see App.tsx)
const IS_MOBILE = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;

const QUALITY = IS_MOBILE
  ? { maxPixelRatio: 1, minPixelRatio: 0.6, msaa: 2, bloom: false, maxBlades: 45000, fbmOctaves: 4 }
  : { maxPixelRatio: 1.25, minPixelRatio: 0.75, msaa: 4, bloom: true, maxBlades: 160000, fbmOctaves: 6 };

export class Experience {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private composer: EffectComposer;
  private bloom: UnrealBloomPass;
  private finish: ShaderPass;
  private controls: OrbitControls;
  private clock = new THREE.Clock();
  private gui: GUI;
  private raf = 0;
  readonly mobile = IS_MOBILE;
  private pixelRatio = Math.min(window.devicePixelRatio, QUALITY.maxPixelRatio);
  private frameTimes = 0;
  private frameCount = 0;
  private spin = IS_MOBILE ? 0 : 1; // mobile: the camera only turns while the sound plays
  private disposed = false;
  private keys = new Set<string>();

  private skyMat!: THREE.ShaderMaterial;
  private grassMat!: THREE.ShaderMaterial;
  private groundMat!: THREE.ShaderMaterial;
  private charMat!: THREE.ShaderMaterial;
  private grass?: THREE.InstancedMesh;
  private grid: THREE.Group;
  private wireMats: THREE.Material[] = [];

  // follow path state (same orbit as the Blender turntable)
  private progress = 0;          // 0..1 along the loop (infinite, wraps)
  private scrollTarget = 0;

  readonly params = {
    mode: 'path-auto' as CamMode,
    loopSeconds: 40,
    speed: 1,
    fov: 46.4,
    radius: 6.8,
    height: 1.35,
    targetHeight: 0.42,
    progress: 0,
    wireframe: false,
    exposure: 1.0,
    bloom: 0.45,
    grain: 0.045,
    vignette: 0.35,
    wind: 1.0,
    twinkle: 1.0,
    stars: 1.0,
    milkyWay: 1.0,
    rim: 0.18,
    grassDensity: 1.0,
  };

  private totalBlades = 0;
  private onProgress?: (p: number, label: string) => void;
  private onModeChange?: (m: CamMode) => void;
  private onPlayingChange?: (playing: boolean) => void;
  private audio: HTMLAudioElement;
  private ambient: HTMLAudioElement;

  constructor(
    private container: HTMLElement,
    hooks: {
      onProgress?: (p: number, label: string) => void;
      onModeChange?: (m: CamMode) => void;
      onPlayingChange?: (playing: boolean) => void;
    } = {},
  ) {
    this.onProgress = hooks.onProgress;
    this.onModeChange = hooks.onModeChange;
    this.onPlayingChange = hooks.onPlayingChange;

    // soundtrack (looping), driven by the Play/Pause button
    this.audio = new Audio(audioUrl);
    this.audio.loop = true;
    this.audio.preload = 'none'; // loaded after the scene so it doesn't slow it down
    // nature ambience (wild.mp3), looping, with its own Play/Pause button
    this.ambient = new Audio(ambientUrl);
    this.ambient.loop = true;
    this.ambient.volume = 0.35;

    this.audio.addEventListener('play', () => {
      if (this.mobile) this.ambient.play().catch(() => {});
      this.onPlayingChange?.(true);
    });
    this.audio.addEventListener('pause', () => {
      if (this.mobile) this.ambient.pause();
      this.onPlayingChange?.(false);
    });

    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.toneMapping = THREE.AgXToneMapping;
    this.renderer.toneMappingExposure = this.params.exposure;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(this.params.fov, container.clientWidth / container.clientHeight, 0.05, 400);
    this.scene.add(this.camera);

    // post: MSAA HDR target -> bloom -> AgX output -> grain/vignette
    const rt = new THREE.WebGLRenderTarget(container.clientWidth, container.clientHeight, {
      type: THREE.HalfFloatType,
      samples: QUALITY.msaa,
    });
    this.composer = new EffectComposer(this.renderer, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), this.params.bloom, 0.55, 2.2);
    this.bloom.enabled = QUALITY.bloom;
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.finish = new ShaderPass(finishShader);
    this.composer.addPass(this.finish);
    // the targets above were sized in CSS pixels: apply the pixel ratio (sharp on Retina)
    this.composer.setSize(container.clientWidth, container.clientHeight);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.target.set(0, this.params.targetHeight, 0);
    this.controls.enabled = false;
    this.controls.maxDistance = 60;

    this.grid = this.makeBlenderGrid();
    this.grid.visible = false;
    this.scene.add(this.grid);

    // deep links: ?t=0.5 (position on the path), ?fov=20, ?mode=scroll|free|auto, ?speed=0 (pause)
    const q = new URLSearchParams(window.location.search);
    if (q.has('t')) this.progress = this.scrollTarget = parseFloat(q.get('t')!) || 0;
    if (q.has('speed')) this.params.speed = parseFloat(q.get('speed')!) || 0;
    if (q.has('bloom')) { this.params.bloom = parseFloat(q.get('bloom')!) || 0; this.bloom.strength = this.params.bloom; }
    if (q.has('fov')) {
      this.params.fov = parseFloat(q.get('fov')!) || this.params.fov;
      this.camera.fov = this.params.fov;
      this.camera.updateProjectionMatrix();
    }

    this.gui = this.buildGui();
    this.bindEvents();
    this.applyCameraOnPath(this.progress);
    const m = q.get('mode');
    if (m === 'scroll') this.setMode('path-scroll');
    else if (m === 'free') this.setMode('free');
  }

  // ------------------------------------------------------------------ loading
  async load() {
    const manager = new THREE.LoadingManager();
    manager.onProgress = (_url, loaded, total) => this.onProgress?.(loaded / total, 'Chargement de la scène');

    const meta: BakeMeta = await fetch(`${BASE}bake/meta.json`).then((r) => r.json());
    const texLoader = new THREE.TextureLoader(manager);
    const lmTex = await texLoader.loadAsync(`${BASE}bake/ground_irradiance.webp`);
    lmTex.colorSpace = THREE.SRGBColorSpace;
    lmTex.flipY = false;

    const draco = new DRACOLoader(manager);
    draco.setDecoderPath(`${BASE}draco/`);
    const gltfLoader = new GLTFLoader(manager);
    gltfLoader.setDRACOLoader(draco);
    const gltf = await gltfLoader.loadAsync(`${BASE}bake/scene.glb`);

    const fogColor = new THREE.Color(0.0015, 0.003, 0.008);
    const lmUniforms = {
      uLM: { value: lmTex },
      uLMHalf: { value: meta.groundHalf },
      uLMScale: { value: meta.groundScale },
      uLMEdge: { value: new THREE.Vector3(...meta.groundEdge) },
    };

    this.charMat = new THREE.ShaderMaterial({
      vertexShader: charVertex,
      fragmentShader: charFragment,
      uniforms: {
        uBakeScale: { value: meta.charScale },
        uRimColor: { value: new THREE.Color(0.45, 0.62, 1.0) },
        uRim: { value: this.params.rim },
        uWire: { value: 0 },
      },
    });
    this.groundMat = new THREE.ShaderMaterial({
      vertexShader: groundVertex,
      fragmentShader: groundFragment,
      uniforms: { ...lmUniforms, uFogColor: { value: fogColor }, uWire: { value: 0 } },
      defines: { FBM_OCTAVES: QUALITY.fbmOctaves },
    });

    gltf.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      if (/char/i.test(m.name)) {
        // glTF COLOR_0 (sRGB-encoded, maybe RGBA) -> linear RGB attribute for the bake shader
        const src = m.geometry.getAttribute('color');
        if (src) {
          const n = src.count;
          const out = new Float32Array(n * 3);
          for (let i = 0; i < n; i++) {
            out[i * 3] = srgbToLinear(src.getX(i));
            out[i * 3 + 1] = srgbToLinear(src.getY(i));
            out[i * 3 + 2] = srgbToLinear(src.getZ(i));
          }
          m.geometry.setAttribute('bakeColor', new THREE.BufferAttribute(out, 3));
          m.geometry.deleteAttribute('color');
        }
        m.material = this.charMat;
      } else m.material = this.groundMat;
    });
    this.scene.add(gltf.scene);

    this.buildSky();
    this.buildGrass(lmUniforms, fogColor);
    this.wireMats = [this.charMat, this.groundMat, this.grassMat, this.skyMat];
    const gq = new URLSearchParams(window.location.search).get('grass');
    if (gq && this.grass) {
      this.params.grassDensity = THREE.MathUtils.clamp(parseFloat(gq) || 1, 0.05, 1);
      this.grass.count = Math.floor(this.totalBlades * this.params.grassDensity);
    }
    // compile shaders up front (in parallel when supported) instead of freezing the first frame
    await this.renderer.compileAsync(this.scene, this.camera);
    this.audio.preload = 'auto';
    this.ambient.preload = 'auto';
    this.onProgress?.(1, 'Prêt');
  }

  private buildSky() {
    this.skyMat = new THREE.ShaderMaterial({
      vertexShader: skyVertex,
      fragmentShader: skyFragment,
      depthWrite: false,
      depthTest: false,
      defines: { FBM_OCTAVES: QUALITY.fbmOctaves },
      uniforms: {
        uPhase: { value: 0 },
        uTwinkle: { value: this.params.twinkle },
        uStars: { value: this.params.stars },
        uMilky: { value: this.params.milkyWay },
        uWire: { value: 0 },
      },
    });
    // fullscreen triangle (see skyVertex)
    const tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
    const sky = new THREE.Mesh(tri, this.skyMat);
    sky.frustumCulled = false;
    sky.renderOrder = -1;
    this.scene.add(sky);
  }

  private buildGrass(lmUniforms: Record<string, THREE.IUniform>, fogColor: THREE.Color) {
    // tapered, slightly curved blade (same as Blender's)
    const segs = 4;
    const pos: number[] = [];
    const uv: number[] = [];
    const idx: number[] = [];
    const W = 0.015;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const w = W * Math.pow(1 - t, 0.8);
      const bend = 0.25 * t * t;
      if (i < segs) {
        pos.push(-w, t, -bend, w, t, -bend);
        uv.push(0, t, 1, t);
      } else {
        pos.push(0, t, -bend);
        uv.push(0.5, 1);
      }
    }
    for (let i = 0; i < segs - 1; i++) {
      const a = 2 * i, b = a + 1, c = a + 3, d = a + 2;
      idx.push(a, b, c, a, c, d);
    }
    const last = 2 * (segs - 1);
    idx.push(last, last + 1, 2 * segs);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();

    this.grassMat = new THREE.ShaderMaterial({
      vertexShader: grassVertex,
      fragmentShader: grassFragment,
      side: THREE.DoubleSide,
      uniforms: {
        ...lmUniforms,
        uTime: { value: 0 },
        uWind: { value: this.params.wind },
        uFogColor: { value: fogColor },
        uWire: { value: 0 },
      },
    });

    // density: full near the character, fading towards the rim (like the GN setup)
    // far blades are sub-pixel and fogged: fewer of them, but wider so coverage stays the same.
    // The blade budget depends on the device (QUALITY.maxBlades); the near field is filled first.
    const R = 14;
    const MAX = QUALITY.maxBlades;
    const nearDensity = IS_MOBILE ? 500 : 1400; // blades per m² next to the character
    const xs = new Float32Array(MAX);
    const zs = new Float32Array(MAX);
    const ws = new Float32Array(MAX);
    let n = 0;
    const rng = mulberry32(7);
    const area = Math.PI * R * R;
    const candidates = Math.floor(area * nearDensity);
    for (let i = 0; i < candidates && n < MAX; i++) {
      const r = R * Math.sqrt(rng());
      const a = rng() * Math.PI * 2;
      const t = THREE.MathUtils.smoothstep(r, 2.0, 7.0);
      const keep = 1 - t * 0.9;
      if (rng() > keep) continue;
      if (r < 0.2) continue; // no blades poking through the seat
      xs[n] = Math.cos(a) * r;
      zs[n] = Math.sin(a) * r;
      ws[n] = (1 + t * 1.5) * (IS_MOBILE ? 1.6 : 1);
      n++;
    }
    // shuffle so lowering .count thins uniformly
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      let tmp = xs[i]; xs[i] = xs[j]; xs[j] = tmp;
      tmp = zs[i]; zs[i] = zs[j]; zs[j] = tmp;
      tmp = ws[i]; ws[i] = ws[j]; ws[j] = tmp;
    }
    const mesh = new THREE.InstancedMesh(geo, this.grassMat, n);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const s = new THREE.Vector3();
    const p = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      e.set((rng() - 0.5) * 0.5, rng() * Math.PI * 2, (rng() - 0.5) * 0.5);
      q.setFromEuler(e);
      const h = 0.10 + rng() * 0.14;
      s.set(h * 1.25 * ws[i], h, h);
      p.set(xs[i], 0, zs[i]);
      m4.compose(p, q, s);
      mesh.setMatrixAt(i, m4);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    this.totalBlades = n;
    this.grass = mesh;
    this.scene.add(mesh);
  }

  private makeBlenderGrid() {
    const g = new THREE.Group();
    const grid = new THREE.GridHelper(40, 40, 0x5a5a5a, 0x474747);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.9;
    g.add(grid);
    const fine = new THREE.GridHelper(40, 400, 0x404040, 0x404040);
    (fine.material as THREE.Material).transparent = true;
    (fine.material as THREE.Material).opacity = 0.35;
    g.add(fine);
    const axis = (color: number, a: THREE.Vector3, b: THREE.Vector3) => {
      const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
      return new THREE.Line(geo, new THREE.LineBasicMaterial({ color }));
    };
    g.add(axis(0xff3352, new THREE.Vector3(-20, 0.001, 0), new THREE.Vector3(20, 0.001, 0))); // X red
    g.add(axis(0x8bdc00, new THREE.Vector3(0, 0.001, 20), new THREE.Vector3(0, 0.001, -20))); // Blender Y green
    return g;
  }

  // ------------------------------------------------------------------ camera
  private applyCameraOnPath(t: number) {
    const th = t * Math.PI * 2;
    const { radius, height, targetHeight } = this.params;
    // Blender (x,y,z) -> three (x,z,-y) ; turntable starts behind the character
    this.camera.position.set(-radius * Math.sin(th), height, -radius * Math.cos(th));
    this.camera.lookAt(0, targetHeight, 0);
  }

  toggleAmbient() {
    if (this.ambient.paused) this.ambient.play().catch(() => {});
    else this.ambient.pause();
  }

  togglePlay() {
    if (this.audio.paused) this.audio.play().catch(() => this.onPlayingChange?.(false));
    else this.audio.pause();
  }

  setMode(mode: CamMode) {
    this.params.mode = mode;
    const free = mode === 'free';
    this.controls.enabled = free;
    if (free) {
      this.controls.target.set(0, this.params.targetHeight, 0);
      this.controls.update();
    } else {
      this.scrollTarget = this.progress;
    }
    this.renderer.domElement.style.cursor = free ? 'grab' : mode === 'path-scroll' ? 'ns-resize' : 'default';
    this.onModeChange?.(mode);
    this.gui.controllersRecursive().forEach((c) => c.updateDisplay());
  }

  private setWireframe(on: boolean) {
    this.params.wireframe = on;
    for (const m of this.wireMats) {
      const sm = m as THREE.ShaderMaterial;
      if (sm.uniforms?.uWire) sm.uniforms.uWire.value = on ? 1 : 0;
      sm.wireframe = on && sm !== this.skyMat;
      sm.transparent = on && sm === this.grassMat;
    }
    this.grid.visible = on;
    this.scene.background = on ? new THREE.Color(0x3d3d3d) : null;
    this.bloom.enabled = !on;
    this.finish.enabled = !on;
    this.renderer.toneMapping = on ? THREE.NoToneMapping : THREE.AgXToneMapping;
  }

  // ------------------------------------------------------------------ GUI
  private buildGui() {
    const gui = new GUI({ title: 'girl in red — scène' });
    const p = this.params;

    const cam = gui.addFolder('Caméra');
    cam.add(p, 'mode', {
      'Follow path (auto, infini)': 'path-auto',
      'Follow path (scroll)': 'path-scroll',
      'Free view (spectate)': 'free',
    }).name('Mode').onChange((m: CamMode) => this.setMode(m));
    cam.add(p, 'fov', 12, 90, 0.1).name('POV / zoom (FOV)').onChange((v: number) => {
      this.camera.fov = v;
      this.camera.updateProjectionMatrix();
    });
    cam.add(p, 'speed', -3, 3, 0.01).name('Vitesse du path');
    cam.add(p, 'loopSeconds', 8, 160, 1).name('Durée d’un tour (s)');
    cam.add(p, 'progress', 0, 1, 0.001).name('Progression').listen().onChange((v: number) => {
      this.progress = v;
      this.scrollTarget = v;
    });
    cam.add(p, 'radius', 2, 15, 0.01).name('Rayon du path');
    cam.add(p, 'height', 0.2, 6, 0.01).name('Hauteur du path');
    cam.add(p, 'targetHeight', 0, 2, 0.01).name('Hauteur visée');

    const look = gui.addFolder('Rendu');
    look.add(p, 'wireframe').name('Vue wireframe (Blender)').onChange((v: boolean) => this.setWireframe(v));
    look.add(p, 'exposure', 0.2, 3, 0.01).name('Exposition').onChange((v: number) => (this.renderer.toneMappingExposure = v));
    look.add(p, 'bloom', 0, 2, 0.01).name('Bloom (étoiles)').onChange((v: number) => (this.bloom.strength = v));
    look.add(p, 'rim', 0, 1.5, 0.01).name('Contre-jour').onChange((v: number) => (this.charMat.uniforms.uRim.value = v));
    look.add(p, 'grain', 0, 0.15, 0.001).name('Grain');
    look.add(p, 'vignette', 0, 1, 0.01).name('Vignettage');
    const env = gui.addFolder('Environnement');
    env.add(p, 'wind', 0, 4, 0.01).name('Vent dans l’herbe');
    env.add(p, 'twinkle', 0, 1, 0.01).name('Scintillement');
    env.add(p, 'stars', 0, 3, 0.01).name('Étoiles');
    env.add(p, 'milkyWay', 0, 3, 0.01).name('Voie lactée');
    env.add(p, 'grassDensity', 0.1, 1, 0.01).name('Densité herbe').onChange((v: number) => {
      if (this.grass) this.grass.count = Math.floor(this.totalBlades * v);
    });

    const sound = gui.addFolder('Son');
    const c = {
      play: () => this.togglePlay(),
      ambient: () => this.toggleAmbient(),
      spotify: () => window.open('https://open.spotify.com/track/4r1AqGpB9YrXV2ivcrqfJY', '_blank', 'noopener'),
      github: () => window.open('https://github.com/AhmedKabbej', '_blank', 'noopener'),
    };
    const playBtn = sound.add(c, 'play').name('▶ Musique');
    this.audio.addEventListener('play', () => playBtn.name('❚❚ Musique'));
    this.audio.addEventListener('pause', () => playBtn.name('▶ Musique'));
    const ambientBtn = sound.add(c, 'ambient').name('▶ Ambiance');
    this.ambient.addEventListener('play', () => ambientBtn.name('❚❚ Ambiance'));
    this.ambient.addEventListener('pause', () => ambientBtn.name('▶ Ambiance'));
    sound.add(c, 'spotify').name('Le morceau sur Spotify');

    const credits = gui.addFolder('Crédits');
    credits.add(c, 'github').name('Réalisé par Ahmed Kebbaj ↗');
    const info = { song: 'girl in red — « . »', tools: 'Blender · Three.js' };
    credits.add(info, 'song').name('Morceau').disable();
    credits.add(info, 'tools').name('Fait avec').disable();

    // par défaut seul le dossier Son est ouvert
    cam.close();
    look.close();
    env.close();
    if (this.mobile) gui.hide(); // phone: only the play button in App.tsx
    return gui;
  }

  // ------------------------------------------------------------------ events
  private onWheel = (ev: WheelEvent) => {
    if (this.params.mode === 'path-scroll') {
      ev.preventDefault();
      this.scrollTarget += ev.deltaY * 0.00022;
    } else if (this.params.mode === 'path-auto') {
      ev.preventDefault();
      const fov = THREE.MathUtils.clamp(this.camera.fov + ev.deltaY * 0.02, 12, 90);
      this.params.fov = fov;
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
      this.gui.controllersRecursive().forEach((ctl) => ctl.updateDisplay());
    }
  };
  private touchY: number | null = null;
  private onTouchStart = (ev: TouchEvent) => { this.touchY = ev.touches[0]?.clientY ?? null; };
  private onTouchMove = (ev: TouchEvent) => {
    if (this.params.mode !== 'path-scroll' || this.touchY === null) return;
    const y = ev.touches[0].clientY;
    this.scrollTarget += (this.touchY - y) * 0.0008;
    this.touchY = y;
  };
  private onKeyDown = (ev: KeyboardEvent) => this.keys.add(ev.key.toLowerCase());
  private onKeyUp = (ev: KeyboardEvent) => this.keys.delete(ev.key.toLowerCase());
  private onResize = () => {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
  };

  private bindEvents() {
    const el = this.renderer.domElement;
    el.addEventListener('wheel', this.onWheel, { passive: false });
    el.addEventListener('touchstart', this.onTouchStart, { passive: true });
    el.addEventListener('touchmove', this.onTouchMove, { passive: true });
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('resize', this.onResize);
  }

  // ------------------------------------------------------------------ loop
  start() {
    const tick = () => {
      if (this.disposed) return;
      this.raf = requestAnimationFrame(tick);
      const dt = Math.min(this.clock.getDelta(), 0.1);
      const time = this.clock.elapsedTime;
      const p = this.params;
      this.adaptResolution(dt);

      if (p.mode === 'path-auto') {
        // mobile: the orbit eases in/out with play/pause
        const target = !this.mobile || !this.audio.paused ? 1 : 0;
        this.spin += (target - this.spin) * Math.min(1, dt * 1.5);
        this.progress += (dt / p.loopSeconds) * p.speed * this.spin;
        this.applyCameraOnPath(this.progress);
      } else if (p.mode === 'path-scroll') {
        this.progress += (this.scrollTarget - this.progress) * Math.min(1, dt * 6);
        this.applyCameraOnPath(this.progress);
      } else {
        this.freeFly(dt);
        this.controls.update();
      }
      p.progress = ((this.progress % 1) + 1) % 1;

      // twinkle phase is tied to the loop so it repeats seamlessly; time drives the wind
      const phase = (time / p.loopSeconds) * Math.PI * 2;
      if (this.skyMat) {
        this.skyMat.uniforms.uPhase.value = phase;
        this.skyMat.uniforms.uTwinkle.value = p.twinkle;
        this.skyMat.uniforms.uStars.value = p.stars;
        this.skyMat.uniforms.uMilky.value = p.milkyWay;
      }
      if (this.grassMat) {
        this.grassMat.uniforms.uTime.value = time;
        this.grassMat.uniforms.uWind.value = p.wind;
      }
      this.finish.uniforms.uTime.value = time % 10;
      this.finish.uniforms.uGrain.value = p.grain;
      this.finish.uniforms.uVignette.value = p.vignette;

      this.composer.render();
    };
    tick();
  }

  // drops the render resolution step by step while the frame rate stays under ~50 fps
  private adaptResolution(dt: number) {
    if (this.clock.elapsedTime < 2) return; // ignore the first frames (uploads, warm-up)
    this.frameTimes += dt;
    if (++this.frameCount < 90) return;
    const avg = this.frameTimes / this.frameCount;
    this.frameTimes = 0;
    this.frameCount = 0;
    if (avg > 1 / 50 && this.pixelRatio > QUALITY.minPixelRatio) {
      this.pixelRatio = Math.max(QUALITY.minPixelRatio, this.pixelRatio - 0.15);
      this.renderer.setPixelRatio(this.pixelRatio);
      this.composer.setPixelRatio(this.pixelRatio);
    }
  }

  private freeFly(dt: number) {
    const k = this.keys;
    if (!k.size) return;
    const speed = (k.has('shift') ? 6 : 2) * dt;
    const fwd = new THREE.Vector3();
    this.camera.getWorldDirection(fwd);
    const right = new THREE.Vector3().crossVectors(fwd, this.camera.up).normalize();
    const move = new THREE.Vector3();
    if (k.has('z') || k.has('w') || k.has('arrowup')) move.add(fwd);
    if (k.has('s') || k.has('arrowdown')) move.sub(fwd);
    if (k.has('q') || k.has('a') || k.has('arrowleft')) move.sub(right);
    if (k.has('d') || k.has('arrowright')) move.add(right);
    if (k.has('e') || k.has(' ')) move.y += 1;
    if (k.has('c')) move.y -= 1;
    if (move.lengthSq() === 0) return;
    move.normalize().multiplyScalar(speed);
    this.camera.position.add(move);
    this.controls.target.add(move);
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.audio.pause();
    this.audio.src = '';
    this.ambient.pause();
    this.ambient.src = '';
    const el = this.renderer.domElement;
    el.removeEventListener('wheel', this.onWheel);
    el.removeEventListener('touchstart', this.onTouchStart);
    el.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('resize', this.onResize);
    this.gui.destroy();
    this.controls.dispose();
    this.composer.dispose();
    this.renderer.dispose();
    el.remove();
  }
}

// The Blender exporter writes COLOR_0 already linear; three's GLTFLoader keeps it linear too.
// Bake values were stored with an sRGB-like curve (pow 1/2.2) for 8/16-bit precision in the darks.
function srgbToLinear(v: number) {
  return Math.pow(Math.max(v, 0), 2.2);
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
