import { Linkedin, Instagram, Mail } from '../ui/Icons'
import Wordmark from '../ui/Wordmark'
import TextRollButton from '../ui/TextRollButton'

export default function Footer() {
  return (
    <footer id="footer" data-screen-label="10 Footer" className="site-foot">
      <div className="container">
        <h2 className="foot-hero">
          <em></em>
        </h2>

        <div className="foot-grid">
          <div>
            <Wordmark size={64} dark />
            <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.6)', maxWidth: 320 }}></p>
          </div>

          <div className="foot-mid" style={{ display: 'flex', justifyContent: 'center' }}>
            <TextRollButton label="contacto@esunclasico.com" href="mailto:contacto@esunclasico.com" />
          </div>

          <div className="foot-right">
            <a className="foot-social" href="https://www.linkedin.com/company/clasicocl/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a className="foot-social" href="https://www.instagram.com/clasicocl?igsh=eXFvMmVpamxxbmx0" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a className="foot-social" href="mailto:contacto@esunclasico.com" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>Clasico. 2026</span>
          <span>Desarrollado por <a href="#" style={{ color: 'white' }}>Bixel</a> &amp; <a href="#" style={{ color: 'white' }}>Claude</a></span>
        </div>
      </div>
    </footer>
  )
}
