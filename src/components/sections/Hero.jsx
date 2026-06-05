import { useState, useEffect, useRef } from 'react'
import TextRollButton from '../ui/TextRollButton'
import { smoothTo } from '../../utils/navigation'

const HERO_PHRASES = [
  'El oficio de ayer',
  'Las herramientas del mañana',
  'Un objetivo olvidado',
  'Que las marcas trasciendan',
]

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const tryPlay = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}) }
    tryPlay()
    v.addEventListener('loadeddata', tryPlay)
    document.addEventListener('visibilitychange', tryPlay)
    return () => {
      v.removeEventListener('loadeddata', tryPlay)
      document.removeEventListener('visibilitychange', tryPlay)
    }
  }, [])

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_PHRASES.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="inicio" data-screen-label="01 Hero" className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/assets/video/fondo_1920_1080_30fps.mp4"
      />
      <div className="hero-body container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 30, marginBottom: 32, opacity: 0.7 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent-orange)' }} />
          <span style={{ fontSize: 13, letterSpacing: '0.02em', color: 'rgb(255, 255, 255)' }}>Compañia creativa · Santiago, Chile</span>
        </div>

        <img
          src="/assets/images/clasico-logo-dark.png"
          alt="clasi.co"
          className="hero-logo"
        />

        <div className="hero-rotator-wrap" aria-live="polite">
          <span className="hero-rotator-sizer" aria-hidden="true">
            {HERO_PHRASES.reduce((a, b) => a.length > b.length ? a : b)}
          </span>
          {HERO_PHRASES.map((p, i) => (
            <div
              key={p}
              className={'hero-rotator-line ' + (
                i === idx ? 'active' : i === (idx - 1 + HERO_PHRASES.length) % HERO_PHRASES.length ? 'exit' : ''
              )}
              style={{ color: 'rgb(255, 255, 255)' }}
            >
              {p}
            </div>
          ))}
        </div>

        <div className="hero-meta">
          <TextRollButton
            label="Conversemos"
            href="#footer"
            onClick={(e) => { e.preventDefault(); smoothTo('footer') }}
          />
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
            <span></span>
            <span style={{ opacity: 0.4 }}></span>
            <span></span>
            <span style={{ opacity: 0.4 }}></span>
            <span></span>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', left: 24, bottom: 24, zIndex: 5, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-secondary)' }}>
        ↓ Scroll
      </div>
    </section>
  )
}
