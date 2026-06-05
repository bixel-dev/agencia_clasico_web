// PorQue.jsx — black section, pixelated heart + curly-brace mark, big editorial statement.
const { useEffect: useEffectP, useState: useStatePQ } = React;

// 11x10 pixel-heart grid. 1 = filled.
const HEART = [
[0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
[1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
[0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
[0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]];


function PorQue() {
  return (
    <section id="por-que" data-screen-label="04 Por que" className="porque section-pad bg-paper-0">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="eyebrow" style={{ marginBottom: 40 }}>
          <span className="eyebrow-num">1</span>
          <span className="eyebrow-label">Filosofia</span>
        </div>

        <div className="split-2">
          <div className="porque-graphic" aria-hidden="true">
            <div className="pixel-heart beat">
              {HEART.flatMap((row, r) =>
              row.map((v, c) =>
              <span
                key={`${r}-${c}`}
                className="px"
                style={{
                  gridColumn: c + 1,
                  gridRow: r + 1,
                  opacity: v ? 1 : 0,
                  animationDelay: v ? `${(r + c) * 30}ms` : "0ms"
                }} />

              )
              )}
            </div>
            <span className="porque-brace">{"}"}</span>
          </div>

          <div>
            <h2 className="porque-headline">
              Creemos en recuperar el <em>alma</em> de la <em>publicidad chilena</em> para construir marcas <em>imposibles de olvidar</em>
            </h2>

            <div className="porque-meta">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

window.PorQue = PorQue;