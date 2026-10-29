# girl in red — « . » en 3D, version web

Mini projet perso : recréer en 3D le visuel Spotify Canvas du morceau **« . » de girl in red**, d'abord dans **Blender**, puis le porter sur le **web** en temps réel avec Three.js.

Un personnage rouge recroquevillé dans l'herbe, seul sous un ciel étoilé et la voie lactée, avec la caméra qui tourne lentement autour, comme dans la vidéo d'origine.

🎧 [Écouter le morceau sur Spotify](https://open.spotify.com/track/4r1AqGpB9YrXV2ivcrqfJY)

---

## Du Blender au navigateur

| Étape | Blender | Web |
| --- | --- | --- |
| Personnage | Modélisé et éclairé dans Blender | Éclairage Cycles **baké par sommet** (vertex colors) + léger contre-jour calculé en direct |
| Sol | Éclairage baké dans une lightmap | Lightmap `ground_irradiance.webp` + bruit procédural |
| Herbe | Geometry Nodes | Brins instanciés (`InstancedMesh`) générés au chargement, même répartition (dense près du personnage, plus clairsemée au loin), animés par le vent dans le shader |
| Ciel | Shader d'étoiles | Shader procédural : 3 couches d'étoiles qui scintillent en boucle, voie lactée, dégradé vers l'horizon |
| Caméra | Turntable autour du personnage | Même orbite, en boucle infinie |
| Rendu | Cycles | Bloom, tone mapping AgX, grain et vignettage |

La scène est exportée en glTF compressé Draco (`public/bake/scene.glb`, ~390 Ko).

## Utilisation

### Sur ordinateur
Le panneau en haut à droite donne accès à tout :
- **Son** : ▶ Musique (le morceau), ▶ Ambiance (sons de nature, `wild.mp3`), lien Spotify
- **Caméra** : 3 modes
  - *Follow path* : la caméra tourne seule (molette = zoom)
  - *Scroll* : la molette fait avancer la caméra sur le chemin
  - *Free view* : clic-glisser pour tourner, ZQSD / WASD + E / C pour voler (Shift = rapide)
- **Rendu** : vue wireframe façon Blender, exposition, bloom, contre-jour, grain, vignettage
- **Environnement** : vent, scintillement, étoiles, voie lactée, densité de l'herbe

### Sur téléphone
Version épurée, avec un seul bouton : **Play** lance le son et la rotation de la caméra, **Pause** arrête les deux.

### Liens directs
`?t=0.5` (position sur le chemin, 0 à 1) · `?speed=0` (caméra figée) · `?fov=30` · `?mode=scroll|free` · `?grass=0.5` · `?bloom=0.8`

## Performances

Deux profils, choisis automatiquement selon l'appareil :

| | Ordinateur | Téléphone |
| --- | --- | --- |
| Résolution max | 1,25× | 1× |
| Antialiasing (MSAA) | 4× | 2× |
| Bloom | oui | non |
| Brins d'herbe | 160 000 | 45 000 (plus larges) |
| Octaves de bruit | 6 | 4 |

Dans les deux cas, la résolution baisse toute seule si l'appareil passe sous ~50 fps. Les shaders sont compilés pendant l'écran de chargement, et les fichiers audio ne se téléchargent qu'une fois la scène prête.

## Lancer le projet

```bash
npm install
npm run dev      # serveur de dev
npm run build    # build de production dans dist/
npm run preview  # tester le build
```

## Structure

```
src/
  App.tsx               interface (chargement, texte, bouton mobile)
  three/Experience.ts   scène, caméra, GUI, audio, profils de qualité
  three/shaders.ts      shaders GLSL (ciel, herbe, sol, personnage, post-process)
public/bake/            scène exportée de Blender + lightmap
public/draco/           décodeur Draco
```

## Stack

Blender (Cycles, Geometry Nodes) · Three.js · React · TypeScript · Vite · lil-gui

---

Projet fan, non officiel. Le morceau et le visuel original appartiennent à girl in red et à leurs ayants droit.
