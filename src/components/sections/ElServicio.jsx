import Wordmark from '../ui/Wordmark'
import TextRollButton from '../ui/TextRollButton'
import { smoothTo } from '../../utils/navigation'

const SERVICES = ['Conceptualización', 'Diseño', 'Estrategia de marca', 'Marketing digital', 'Audiovisual']

export default function ElServicio() {
  return (
    <section id="servicio" data-screen-label="05 El servicio" className="section-pad bg-paper-50">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 40 }}>
          <span className="eyebrow-num">4</span>
          <span className="eyebrow-label">El servicio</span>
        </div>

        <h2 className="display-lg" style={{ maxWidth: 920, marginBottom: 80 }}>
          ¿Cómo <em>funcionamos?</em>
        </h2>

        <div className="servicio-grid">
          <div>
            <p className="servicio-copy">
              <Wordmark size={56} inline={true} style={{ verticalAlign: '-0.32em', marginRight: 4 }} /> tiene como núcleo a una dupla:{' '}
              <em>un director de arte y un redactor creativo.</em>
              {' '}Los mismos que piensan son los que hacen
            </p>

            <p className="servicio-copy" style={{ marginTop: 32, textAlign: 'left' }}>
              <em>El equipo crece según el brief,</em>{' '}
              no según la estructura. Cuando el proyecto lo requiere, sumamos:
              un planner estratégico, un especialista en marketing digital, u otro
              perfil según lo que necesite la marca
            </p>

            <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <TextRollButton label="Conocer al equipo" onClick={() => smoothTo('somos')} />
              <TextRollButton label="Ver campañas" variant="dark" onClick={() => smoothTo('campaign')} />
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="eyebrow-label" style={{ background: 'transparent' }}>Hacemos</span>
            </div>
            <ul className="servicio-list">
              {SERVICES.map((s, i) => (
                <li key={s}>
                  <span>{s}</span>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
