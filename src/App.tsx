import { useEffect, useRef, useState } from 'react';
import { Experience } from './three/Experience';
import './App.css';

type Mode = 'path-auto' | 'path-scroll' | 'free';

const HINTS: Record<Mode, string> = {
  'path-auto': 'Follow path en boucle · molette = zoom',
  'path-scroll': 'Scrolle pour faire avancer la caméra sur le path',
  free: 'Free view · clic-glisser pour tourner · clic droit pour déplacer · ZQSD/WASD + E/C pour voler (Shift = rapide)',
};

export default function App() {
  const mount = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<{ p: number; label: string } | null>({ p: 0, label: 'Chargement' });
  const [mode, setMode] = useState<Mode>('path-auto');
  const [error, setError] = useState<string | null>(null);
  const expRef = useRef<Experience | null>(null);
  const [mobile, setMobile] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!mount.current) return;
    const exp = new Experience(mount.current, {
      onProgress: (p, label) => setLoading(p >= 1 ? null : { p, label }),
      onModeChange: (m) => setMode(m),
      onPlayingChange: (p) => setPlaying(p),
    });
    expRef.current = exp;
    setMobile(exp.mobile);
    exp.load()
      .then(() => {
        setLoading(null);
        exp.start();
      })
      .catch((e: unknown) => setError(String(e)));
    return () => exp.dispose();
  }, []);

  return (
    <div className="stage">
      <div ref={mount} className="canvas" />
      {loading && (
        <div className="loader">
          <div className="loader-title">girl in red</div>
          <div className="loader-bar"><span style={{ width: `${Math.round(loading.p * 100)}%` }} /></div>
          <div className="loader-label">{Math.round(loading.p * 100)}%</div>
        </div>
      )}
      {error && <div className="loader"><div className="loader-label">Erreur : {error}</div></div>}
      <a className="wordmark" href="https://open.spotify.com/track/4r1AqGpB9YrXV2ivcrqfJY" target="_blank" rel="noreferrer">
        girl in red <span className="wordmark-arrow">↗</span>
      </a>
      {mobile ? (
        // phone: one button plays the sound and turns the camera
        !loading && (
          <>
          <button
            className={`play${playing ? ' is-playing' : ''}`}
            onClick={() => expRef.current?.togglePlay()}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {playing
                ? <path d="M8 6h3v12H8zM13 6h3v12h-3z" />
                : <path d="M9 6.5v11l9-5.5z" />}
            </svg>
          </button>
          <div className="desktop-note">plus d’options en version desktop</div>
          </>
        )
      ) : (
        <div key={mode} className="hint">{HINTS[mode]}</div>
      )}
    </div>
  );
}
