export default function Somos() {
  return (
    <section id="somos" data-screen-label="08 Somos" className="section-pad bg-paper-0">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 40, justifyContent: 'center', display: 'flex' }}>
          <span className="eyebrow-num">5</span>
          <span className="eyebrow-label">Somos</span>
        </div>

        <div className="somos-statement">
          <p>
            Somos un equipo con una misma obsesión: Recuperar una manera de
            hacer publicidad en Chile{' '}
            <span style={{ fontFamily: 'var(--font-display-sans)', color: 'var(--accent-orange)' }}>{'}'}</span> mas humana, mas cercana y
            mas divertida. Porque si le gusta a tu mamá, al taxista, a la
            peluquera, al oficinista y a tu abuelita, es publicidad que hace
            grande a una marca
          </p>
        </div>
      </div>
    </section>
  )
}
