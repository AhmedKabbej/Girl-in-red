// GLSL shaders for the sky, grass, ground and character.
// All materials output LINEAR radiance; tone mapping happens once in OutputPass (AgX).

const noiseChunk = /* glsl */ `
#ifndef FBM_OCTAVES
#define FBM_OCTAVES 6
#endif
// pcg3d integer hash (inputs are integer cell coords). The old sin() hash lost float
// precision on the large star-cell coords, which showed up as square seams in the sky.
vec3 hash33(vec3 p) {
  uvec3 v = uvec3(ivec3(p)) * 1664525u + 1013904223u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  v ^= v >> 16u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  return vec3(v) * (1.0 / 4294967295.0);
}
float vnoise(vec3 p) {
  vec3 i = floor(p); vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  float n000 = hash33(i).x;
  float n100 = hash33(i + vec3(1, 0, 0)).x;
  float n010 = hash33(i + vec3(0, 1, 0)).x;
  float n110 = hash33(i + vec3(1, 1, 0)).x;
  float n001 = hash33(i + vec3(0, 0, 1)).x;
  float n101 = hash33(i + vec3(1, 0, 1)).x;
  float n011 = hash33(i + vec3(0, 1, 1)).x;
  float n111 = hash33(i + vec3(1, 1, 1)).x;
  return mix(mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
             mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y), u.z);
}
float fbm(vec3 p) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < FBM_OCTAVES; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.55; }
  return s;
}
`;

// ---------------------------------------------------------------- SKY
export const skyVertex = /* glsl */ `
// One triangle covering the whole screen, no sphere: with a tessellated sphere, MSAA shaded
// the pixels on every triangle edge twice and the sub-pixel star layer showed a dark grid.
// vRay is the homogeneous far-plane point of this pixel; the fragment shader divides it.
varying vec4 vRay;
void main() {
  gl_Position = vec4(position.xy, 1.0, 1.0);
  vRay = inverse(projectionMatrix * viewMatrix) * gl_Position;
}
`;

export const skyFragment = /* glsl */ `
uniform float uPhase;     // 0..2PI over one loop -> seamless twinkle
uniform float uTwinkle;
uniform float uStars;
uniform float uMilky;
uniform float uWire;
varying vec4 vRay;
${noiseChunk}

// Voronoi-style star layer: one star per 3D cell, anti-aliased with fwidth
float starLayer(vec3 d, float scale, float size, float keep, float gain, float tw, float seed) {
  vec3 p = d * scale + seed * 101.0;
  vec3 c = floor(p); vec3 f = fract(p);
  // only the 2x2x2 cells on the near side of f can hold a point closer than 0.5:
  // exact for visible stars, 8 lookups instead of 27
  vec3 side = step(0.5, f) - 1.0;
  float best = 10.0; vec3 bestCell = c;
  for (int i = 0; i <= 1; i++)
  for (int j = 0; j <= 1; j++)
  for (int k = 0; k <= 1; k++) {
    vec3 o = side + vec3(float(i), float(j), float(k));
    vec3 r = o + hash33(c + o) - f;
    float dd = dot(r, r);
    if (dd < best) { best = dd; bestCell = c + o; }
  }
  vec3 rnd = hash33(bestCell + vec3(17.0, 31.0, 53.0));
  float dist = sqrt(best);
  float px = length(fwidth(p)) * 0.9;           // pixel footprint in cell units
  float s = max(size, px);
  float energy = (size * size) / (s * s);        // keep brightness when star < 1px
  float core = pow(clamp(1.0 - dist / s, 0.0, 1.0), 3.0) * energy;
  float on = step(keep, rnd.x);
  float bright = core * on * rnd.y * rnd.y;
  float cyc = floor(rnd.z * 5.0) + 1.0;          // integer cycles per loop
  float t = (1.0 - tw) + tw * (0.5 + 0.5 * sin(uPhase * cyc + rnd.x * 40.0));
  t = mix(1.0, t, uTwinkle);
  return bright * t * gain;
}

void main() {
  if (uWire > 0.5) { gl_FragColor = vec4(0.0); return; }
  vec3 d = normalize(vRay.xyz / vRay.w - cameraPosition);
  float h = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(vec3(0.012, 0.025, 0.06), vec3(0.002, 0.006, 0.02), smoothstep(0.0, 0.6, h));

  // milky way band along a tilted great circle
  vec3 axis = normalize(vec3(0.30, 0.866, -0.40));
  float band = smoothstep(0.33, 0.0, abs(dot(d, axis)));
  if (band > 0.0 && uMilky > 0.0) { // skip the two fbm outside the band
    float clouds = smoothstep(0.42, 0.78, fbm(d * 4.0));
    float dust = smoothstep(0.55, 0.75, fbm(d * 9.0 + 3.1));
    col += vec3(0.16, 0.11, 0.20) * band * clouds * (1.0 - 0.6 * dust) * uMilky;
  }

  float st = 0.0;
  st += starLayer(d, 380.0, 0.33, 0.30, 5.0, 0.35, 1.3);
  st += starLayer(d, 900.0, 0.40, 0.15, 3.0, 0.45, 3.7);
  st += starLayer(d, 110.0, 0.22, 0.86, 16.0, 0.55, 7.1);
  st *= 1.0 + band * 1.5;
  col += vec3(0.85, 0.9, 1.0) * st * uStars;

  // fade stars into the horizon haze
  col *= smoothstep(-0.05, 0.04, d.y) * 0.85 + 0.15;
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- shared lightmap lookup
const lightmapChunk = /* glsl */ `
uniform sampler2D uLM;
uniform float uLMHalf;
uniform float uLMScale;
uniform vec3 uLMEdge;
vec3 groundIrradiance(vec2 xz) {
  vec2 uv = (xz + uLMHalf) / (2.0 * uLMHalf);
  vec2 e = min(uv, 1.0 - uv);
  float inside = smoothstep(0.0, 0.06, min(e.x, e.y));
  vec3 lm = texture2D(uLM, clamp(uv, 0.001, 0.999)).rgb * uLMScale;
  return mix(uLMEdge, lm, inside);
}
`;

// ---------------------------------------------------------------- GRASS (instanced)
export const grassVertex = /* glsl */ `
uniform float uTime;
uniform float uWind;
varying float vH;
varying float vRand;
varying vec3 vIrr;
varying float vFog;
${lightmapChunk}
void main() {
  vec4 root = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float h = uv.y;
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  float ph = root.x * 0.7 + root.z * 0.45;
  float gust = 0.6 + 0.4 * sin(uTime * 0.35 + root.x * 0.08);
  float w = (sin(uTime * 1.7 + ph) * 0.6 + sin(uTime * 2.9 + ph * 2.3) * 0.25) * gust;
  wp.x += w * uWind * h * h * 0.05;
  wp.z += cos(uTime * 1.25 + ph * 1.7) * uWind * h * h * 0.025;
  vIrr = groundIrradiance(root.xz);
  vH = h;
  vRand = fract(sin(dot(root.xz, vec2(12.9898, 78.233))) * 43758.5453);
  vec4 mv = viewMatrix * wp;
  vFog = 1.0 - exp(-0.0025 * dot(mv.xyz, mv.xyz));
  gl_Position = projectionMatrix * mv;
}
`;

export const grassFragment = /* glsl */ `
uniform vec3 uFogColor;
uniform float uWire;
varying float vH;
varying float vRand;
varying vec3 vIrr;
varying float vFog;
void main() {
  if (uWire > 0.5) { gl_FragColor = vec4(0.05, 0.05, 0.05, 0.35); return; }
  vec3 rootC = vec3(0.006, 0.02, 0.004);
  vec3 tipC = vec3(0.30, 0.55, 0.08);
  vec3 base = mix(rootC, tipC, smoothstep(0.0, 1.0, vH));
  base *= mix(0.6, 1.2, vRand);
  base.r *= mix(0.85, 1.25, fract(vRand * 7.13));      // slight hue variation
  vec3 diffuse = base * vIrr * (0.35 + 0.65 * vH);
  vec3 trans = base * vIrr * 0.45 * vH * vH;          // light through the blade tips
  vec3 col = (diffuse + trans) * 0.85;
  col = mix(col, uFogColor, vFog);
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- GROUND
export const groundVertex = /* glsl */ `
varying vec3 vWorld;
varying float vFog;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mv = viewMatrix * wp;
  vFog = 1.0 - exp(-0.0025 * dot(mv.xyz, mv.xyz));
  gl_Position = projectionMatrix * mv;
}
`;

export const groundFragment = /* glsl */ `
uniform vec3 uFogColor;
uniform float uWire;
varying vec3 vWorld;
varying float vFog;
${noiseChunk}
${lightmapChunk}
void main() {
  if (uWire > 0.5) { gl_FragColor = vec4(0.04, 0.04, 0.04, 1.0); return; }
  float n = fbm(vWorld * 3.0);
  vec3 albedo = mix(vec3(0.004, 0.008, 0.002), vec3(0.03, 0.07, 0.012), n);
  vec3 col = albedo * groundIrradiance(vWorld.xz);
  col = mix(col, uFogColor, vFog);
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- CHARACTER (baked Cycles + live rim)
export const charVertex = /* glsl */ `
attribute vec3 bakeColor;   // Cycles "Combined" bake stored per vertex (linear, scaled)
varying vec3 vBake;
varying vec3 vN;
varying vec3 vV;
void main() {
  vBake = bakeColor;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const charFragment = /* glsl */ `
uniform float uBakeScale;
uniform vec3 uRimColor;
uniform float uRim;
uniform float uWire;
varying vec3 vBake;
varying vec3 vN;
varying vec3 vV;
void main() {
  if (uWire > 0.5) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
  vec3 baked = vBake * uBakeScale;
  float fr = pow(1.0 - max(dot(normalize(vN), normalize(vV)), 0.0), 3.0);
  // soft moonlit rim, tinted by the surface so shadows stay rich (no grey wash)
  vec3 tint = mix(uRimColor, normalize(baked + 1e-4) * 1.2, 0.55);
  float lift = 0.35 + 0.65 * clamp(vN.y + 0.3, 0.0, 1.0);
  vec3 col = baked + tint * fr * uRim * lift * (0.25 + min(dot(baked, vec3(0.33)) * 4.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- final grain + vignette (post tone-map)
export const finishShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uGrain: { value: 0.05 },
    uVignette: { value: 0.35 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uGrain;
    uniform float uVignette;
    varying vec2 vUv;
    float rnd(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = vUv - 0.5;
      float v = 1.0 - uVignette * smoothstep(0.25, 0.85, length(q * vec2(1.1, 1.0)) * 1.4);
      c.rgb *= v;
      c.rgb += (rnd(vUv * 731.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }
  `,
};
