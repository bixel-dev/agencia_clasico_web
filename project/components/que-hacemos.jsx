// QueHacemos.jsx — image-right, quote-left. 50/50 split on desktop.

function QueHacemos() {
  // Warm group portrait — laughing at a table; placeholder via unsplash
  const FALLBACK = "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=1400&q=80";
  const img = (window.__resources && window.__resources.qhPortrait) || FALLBACK;

  return (
    <section id="que-hacemos" data-screen-label="02 Que hacemos" className="section-pad bg-paper-100">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 32 }}>
          <span className="eyebrow-num">1</span>
          <span className="eyebrow-label">Qué hacemos</span>
        </div>

        <div className="split-2" style={{ alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 className="qh-quote">
              Trabajamos para crear ideas que la <em>gente comente</em> en el asado, en la oficina y por WhatsApp.
            </h2>

            <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 12 }}>
              {["Estrategia", "Concepto", "Diseño", "Producción", "Audiovisual"].map(t => (
                <span key={t} style={{
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 999,
                  padding: "6px 14px",
                  fontSize: 13,
                  background: "white"
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="qh-image">
            <img src={img} alt="Personas comentando una marca clásica" loading="lazy" />
            <div className="qh-image-badge">
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent-orange)" }} />
              <span>El boca a boca, en serio.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.QueHacemos = QueHacemos;
