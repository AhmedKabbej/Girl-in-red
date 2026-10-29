# girl in red — « . » en 3D sur le web

![Aperçu de la scène](src/readmeeee.png)

Petit projet perso que j'ai fait sur mon temps libre. L'idée de départ : refaire en 3D le Spotify Canvas du morceau **« . » de girl in red** (le perso rouge recroquevillé dans l'herbe, la nuit, sous les étoiles). Je l'ai d'abord fait dans **Blender**, puis j'ai voulu voir si j'arrivais à le faire tourner en temps réel dans un navigateur avec **Three.js**.

Spoiler : oui, mais ça m'a pris beaucoup plus de temps que prévu 😅

🎧 [Le morceau sur Spotify](https://open.spotify.com/track/4r1AqGpB9YrXV2ivcrqfJY)

---

## Comment j'ai fait

En gros j'ai essayé de garder le même rendu que dans Blender, mais en trichant un peu partout pour que ça reste fluide :

- **Le personnage** : modélisé dans Blender, et j'ai baké l'éclairage Cycles directement dans les vertex colors. Comme ça pas besoin de calculer la lumière en direct (juste un petit contre-jour en plus dans le shader).
- **Le sol** : pareil, l'éclairage est baké dans une lightmap (`ground_irradiance.webp`), avec un peu de bruit procédural par-dessus.
- **L'herbe** : dans Blender c'était des Geometry Nodes. Sur le web c'est un `InstancedMesh` avec les brins générés au chargement. J'ai gardé la même répartition (plus dense autour du perso, plus clairsemé au loin) et le vent est fait dans le vertex shader.
- **Le ciel** : un shader procédural avec 3 couches d'étoiles qui scintillent, la voie lactée et un dégradé vers l'horizon.
- **La caméra** : elle tourne autour du perso en boucle, comme dans le Canvas d'origine.
- **Post-process** : bloom, tone mapping AgX, un peu de grain et de vignettage pour se rapprocher du rendu Cycles.

La scène est exportée en glTF avec compression Draco (`public/bake/scene.glb`), ça fait environ 390 Ko.

## Utilisation

### Sur PC
Il y a un panneau en haut à droite (lil-gui) où on peut tout régler :
- **Son** : lancer la musique, ou juste l'ambiance nature (`wild.mp3`)
- **Caméra**, 3 modes :
  - *Follow path* : la caméra tourne toute seule, la molette sert à zoomer
  - *Scroll* : c'est la molette qui fait avancer la caméra
  - *Free view* : clic-glisser pour tourner, ZQSD / WASD + E / C pour se déplacer (Shift pour aller plus vite)
- **Rendu** : une vue wireframe façon Blender, l'expo, le bloom, le grain, etc.
- **Environnement** : le vent, les étoiles, la densité de l'herbe...

### Sur téléphone
J'ai fait une version plus simple avec juste un bouton **Play / Pause** qui lance (ou coupe) le son et la rotation de la caméra.

### Paramètres dans l'URL
Pratique pour tester des trucs vite fait :
`?t=0.5` (position sur le chemin, entre 0 et 1) · `?speed=0` (caméra figée) · `?fov=30` · `?mode=scroll|free` · `?grass=0.5` · `?bloom=0.8`

## Perfs

C'est la partie qui m'a le plus galéré. Au début ça ramait pas mal sur mon téléphone, donc j'ai fini par faire deux profils qui se choisissent automatiquement :

| | PC | Téléphone |
| --- | --- | --- |
| Résolution max | 1,25× | 1× |
| MSAA | 4× | 2× |
| Bloom | oui | non |
| Brins d'herbe | 160 000 | 45 000 (mais plus larges) |
| Octaves de bruit | 6 | 4 |

En plus de ça, la résolution baisse toute seule si ça descend sous ~50 fps. Les shaders sont compilés pendant l'écran de chargement (sinon il y avait un gros freeze au début) et l'audio n'est téléchargé qu'une fois la scène prête.

## Lancer le projet

```bash
npm install
npm run dev      # serveur de dev
npm run build    # build dans dist/
npm run preview  # pour tester le build
```

## Organisation du code

```
src/
  App.tsx               l'interface (chargement, texte, bouton mobile)
  three/Experience.ts   la scène, la caméra, la GUI, l'audio, les profils de qualité
  three/shaders.ts      tous les shaders GLSL (ciel, herbe, sol, perso, post-process)
public/bake/            la scène exportée depuis Blender + la lightmap
public/draco/           le décodeur Draco
```

## Technos utilisées

**3D**
- **Blender** : modélisation du perso et de la scène
  - **Cycles** pour le rendu et le bake de l'éclairage (vertex colors + lightmap)
  - **Geometry Nodes** pour l'herbe
- **glTF / GLB** + compression **Draco** pour l'export vers le web

**Web**
- **[Three.js](https://threejs.org/)** (v0.170) : tout le rendu 3D, avec les addons :
  - `GLTFLoader` + `DRACOLoader` pour charger la scène
  - `OrbitControls` pour la vue libre
  - `EffectComposer`, `RenderPass`, `UnrealBloomPass`, `ShaderPass`, `OutputPass` pour le post-process
- **GLSL** : shaders custom pour le ciel, l'herbe, le sol, le perso et le post-process
- **[React](https://react.dev/)** 18 : l'interface autour (écran de chargement, bouton mobile)
- **[lil-gui](https://lil-gui.georgealways.com/)** : le panneau de réglages
- **HTML5 Audio** (`new Audio()`) pour la musique et l'ambiance

**Outils**
- **[TypeScript](https://www.typescriptlang.org/)** 5.6
- **[Vite](https://vite.dev/)** 6 (avec `@vitejs/plugin-react`)
- **ESLint** 9 (+ `typescript-eslint`, `eslint-plugin-react-hooks`)

---

C'est un projet de fan, pas du tout officiel. Le morceau et le visuel d'origine appartiennent à girl in red et à leurs ayants droit.
