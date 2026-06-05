// Experiencia.jsx — continuous single-row marquee of real client logos.

const BRANDS = [
{ name: "BancoEstado", src: "assets/brands/bancoestado.svg", h: 26 },
{ name: "TVN", src: "assets/brands/tvn.png", h: 56 },
{ name: "Falabella", src: "assets/brands/falabella.svg", h: 34 },
{ name: "Claro", src: "assets/brands/claro.png", h: 60 },
{ name: "Shell", src: "assets/brands/shell.png", h: 60 },
{ name: "Canal 13", src: "assets/brands/canal13.png", h: 56 },
{ name: "Lollapalooza", src: "assets/brands/lolla.png", h: 42 },
{ name: "Chery", src: "assets/brands/chery.png", h: 46 },
{ name: "DUC", src: "assets/brands/cduc.jpg", h: 58 },
{ name: "Upa!", src: "assets/brands/upa.png", h: 48 },
{ name: "PC Factory", src: "assets/brands/pcfactory.webp", h: 40, dark: true }];


function Marquee({ items, reverse }) {
  return (
    <div className="marquee">
      <div className={"marquee-track" + (reverse ? " reverse" : "")}>
        {[...items, ...items, ...items].map((b, i) =>
        <span key={i} className={"brand-chip" + (b.dark ? " brand-chip-dark" : "")} title={b.name}>
            <img src={b.src} alt={b.name} style={{ height: b.h }} loading="lazy" />
          </span>
        )}
      </div>
    </div>);

}

function Experiencia() {
  return (
    <section id="experiencia" data-screen-label="06 Experiencia" className="section-pad-sm bg-paper-0">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="eyebrow-num">3</span>
              <span className="eyebrow-label">Marcas</span>
            </div>
            <h2 className="display-md" style={{ fontSize: "51px", fontWeight: "400", whiteSpace: "nowrap" }}>
              Marcas que nos trajeron hasta acá <em> </em>
            </h2>
          </div>
          <p className="muted" style={{ fontSize: 13, maxWidth: 360 }}>

          </p>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gap: 20 }}>
        <Marquee items={BRANDS} />
      </div>
    </section>);

}

window.Experiencia = Experiencia;
