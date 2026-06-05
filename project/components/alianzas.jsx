// Alianzas.jsx — 3-column grid of partner brand logos.

const PARTNERS = [
{ name: "Blackbird", src: "assets/partners/blackbird.png", h: 52 },
{ name: "It sounds Dumb", src: "assets/partners/dumbstudio.webp", h: 88 },
{ name: "The To-Do", src: "assets/partners/todo.png", h: 70 }];


function Alianzas() {
  return (
    <section id="alianzas" data-screen-label="09 Alianzas" className="section-pad-sm section-dark">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="eyebrow-num">4</span>
              <span className="eyebrow-label">Alianzas estratégicas</span>
            </div>
            <h2 className="display-md" style={{ maxWidth: 720 }}>
              No estamos <em>solos</em>
            </h2>
          </div>
          <p className="muted" style={{ fontSize: 13, maxWidth: 360 }}>

          </p>
        </div>

        <div className="alianzas-grid">
          {PARTNERS.map((p) =>
          <div key={p.name} className="alianza-cell">
              <img
              src={p.src}
              alt={p.name}
              className="alianza-logo-img"
              style={{ height: p.h }} />
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.Alianzas = Alianzas;