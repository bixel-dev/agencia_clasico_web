// Navbar.jsx — fixed top pill nav. Logo on the RIGHT, links on the LEFT (per brief).
const { useState, useEffect } = React;
const { Menu: MenuIcon, X: XIcon } = window.ClasicoIcons;

const NAV_LINKS = [
{ id: "por-que", label: "Filosofia" },
{ id: "campaign", label: "Campañas" },
{ id: "experiencia", label: "Marcas" },
{ id: "alianzas", label: "Alianzas" },
{ id: "somos", label: "Somos" }];


function smoothTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 92;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function Navbar({ dark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="nav-shell">
        <div className="nav-shell-inner">
          <nav className={"nav-pill" + (dark ? " dark" : "")} aria-label="Primary">
            {/* LEFT — links */}
            <div className="nav-links">
              {NAV_LINKS.map((l) =>
              <a
                key={l.id}
                href={`#${l.id}`}
                className="nav-link"
                onClick={(e) => {e.preventDefault();smoothTo(l.id);}} style={{ color: "rgb(255, 255, 255)" }}>
                
                  {l.label}
                </a>
              )}
            </div>

            <div className="nav-spacer" />

            <a
              href="#inicio"
              onClick={(e) => {e.preventDefault();window.scrollTo({ top: 0, behavior: "smooth" });}}
              className="nav-wordmark"
              aria-label="Clasico — Inicio"
              style={{ display: "none" }}>
              
              <Wordmark size={36} mono />
            </a>

            {/* MOBILE burger */}
            <button
              className="nav-burger"
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}>
              
              {open ? <XIcon size={18} /> : <MenuIcon size={18} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile sheet */}
      <div className={"mobile-menu" + (open ? " open" : "")} onClick={() => setOpen(false)}>
        <div className="mobile-menu-sheet" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <Wordmark size={42} />
            <button
              className="nav-burger"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{ background: "var(--paper-100)", color: "var(--ink-900)" }}>
              
              <XIcon size={18} />
            </button>
          </div>
          {NAV_LINKS.map((l) =>
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => {e.preventDefault();setOpen(false);setTimeout(() => smoothTo(l.id), 220);}}>
            
              {l.label}
            </a>
          )}
          <div style={{ marginTop: 32 }}>
            <TextRollButton label="Hablemos" href="#footer" onClick={(e) => {e.preventDefault();setOpen(false);setTimeout(() => smoothTo("footer"), 220);}} />
          </div>
        </div>
      </div>
    </>);

}

window.Navbar = Navbar;
window.smoothTo = smoothTo;