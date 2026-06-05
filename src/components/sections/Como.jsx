import { useState } from 'react'
import { ArrowRight } from '../ui/Icons'

const STEPS = [
  {
    n: '01',
    title: 'Entender',
    tagline: 'Antes de hacer, entender',
    items: ['Diagnóstico de marca', 'Problema real de comunicación', 'Hallazgo estratégico', 'Territorio de marca'],
  },
  {
    n: '02',
    title: 'Definir',
    tagline: 'Una buena idea no sólo llama la atención. Ordena',
    items: ['Concepto creativo', 'Lenguaje de marca', 'Dirección visual'],
  },
  {
    n: '03',
    title: 'Crear',
    tagline: 'Hacer piezas es fácil. Hacer piezas coherentes es otra cosa',
    items: [
      'Claridad antes que ruido',
      'Coherencia antes que tendencia',
      'Recordación antes que impacto momentáneo',
      'Ideas capaces de sostenerse en el tiempo',
    ],
  },
  {
    n: '04',
    title: 'Mantener',
    tagline: 'Las marcas no se construyen en una campaña',
    items: ['Construcción de valor', 'Consistencia de marca', 'Reconocimiento', 'Largo plazo'],
  },
]

export default function Como() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section id="como" data-screen-label="03 Como" className="section-pad bg-paper-0">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 40 }}>
          <span className="eyebrow-num">2</span>
          <span className="eyebrow-label">Cómo</span>
        </div>

        <div className="como-tag-stack">
          <span>Buenas <em>ideas</em></span>
          <span>Bien <em>pensadas</em></span>
          <span>Bien <em>hechas</em></span>
        </div>

        <p className="como-prose">
          El mercado (mal) aprendió a solo producir. Nosotros aprendimos a{' '}
          <em>pensar bien</em>
          <br /><br />
          Clásico. nace para marcas que todavía creen que{' '}
          <em>una buena idea</em>{' '}
          vale más que diez piezas mediocres
        </p>

        <div className="process">
          <div className="process-header">
            <h3 className="process-title">
              Cómo <em>trabajamos.</em>
            </h3>
            <p className="process-meta">
              Cuatro etapas, una secuencia. Hacemos clic en cada paso para ver el detalle.
            </p>
          </div>

          <div className="process-flow">
            <div className="process-line">
              <div className="progress" style={{ width: `${activeIdx / (STEPS.length - 1) * 100}%` }} />
            </div>

            {STEPS.map((s, i) => {
              const isActive = i === activeIdx
              const isDone = i < activeIdx
              return (
                <button
                  key={s.n}
                  type="button"
                  className={'process-step' + (isActive ? ' active' : '') + (isDone ? ' done' : '')}
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                  aria-current={isActive ? 'step' : undefined}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
                    <div className="process-node">{s.n}</div>
                    <span className="process-arrow" aria-hidden="true">
                      <ArrowRight size={12} strokeWidth={2.2} />
                    </span>
                  </div>

                  <div className="process-card">
                    <div className="process-card-head">
                      <h4 className="process-card-title">{s.title}</h4>
                      <span className="process-card-stage">Fase {i + 1} / {STEPS.length}</span>
                    </div>
                    <p className="process-card-tagline">{s.tagline}</p>
                    <ul className="process-card-list">
                      {s.items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
