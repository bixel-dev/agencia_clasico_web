// Campaign.jsx — interactive video carousel.
// - Hover a card → YouTube preview kicks in (muted, autoplay)
// - Click → fullscreen lightbox player

const { useState: useStateCmp, useEffect: useEffectCmp, useRef: useRefCmp } = React;
const { Play: PlayIcon, X: XCmp, ChevronLeft, ChevronRight } = window.ClasicoIcons;

// Real campaign videos — referenced by YouTube id.
// Title + channel are fetched live from YouTube's oEmbed endpoint (no invented metadata).
const CAMPAIGNS = [
{ id: "Z--FArbBFGQ", featured: true },
{ id: "1IbAJkQ--tU" },
{ id: "z3cqAGYUfiQ" },
{ id: "LgafSY-G06I" },
{ id: "ZqT3SoRE6H0" },
{ id: "OnOuXEa-uio" },
{ id: "7yQVkHBRv7Q" },
{ id: "ebpi0Znn2G0" },
{ id: "VXlwdegO5w4" },
{ id: "PBARXU-XTrQ" }];


// Simple in-memory cache so each video's oEmbed is fetched once.
const __oembedCache = {};
function useOembed(id) {
  const [meta, setMeta] = useStateCmp(__oembedCache[id] || null);
  useEffectCmp(() => {
    if (__oembedCache[id]) {setMeta(__oembedCache[id]);return;}
    let alive = true;
    fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`).
    then((r) => r.ok ? r.json() : null).
    then((d) => {
      if (!d) return;
      const m = { title: d.title, author: d.author_name };
      __oembedCache[id] = m;
      if (alive) setMeta(m);
    }).
    catch(() => {});
    return () => {alive = false;};
  }, [id]);
  return meta;
}


function CampaignCard({ c, onOpen }) {
  const [previewing, setPreviewing] = useStateCmp(false);
  const timerRef = useRefCmp();
  const meta = useOembed(c.id);
  const title = meta && meta.title || "Campaña";

  const onEnter = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setPreviewing(true), 500);
  };
  const onLeave = () => {
    clearTimeout(timerRef.current);
    setPreviewing(false);
  };

  // YouTube thumbnail (hqdefault is widely supported)
  const fallbackThumb = `https://i.ytimg.com/vi/${c.id}/hqdefault.jpg`;
  const thumb = window.__resources && window.__resources["thumb_" + c.id] || fallbackThumb;
  const preview = `https://www.youtube-nocookie.com/embed/${c.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.id}&modestbranding=1&showinfo=0&rel=0&playsinline=1`;

  return (
    <article
      className={"campaign-card" + (c.featured ? " featured" : "") + (previewing ? " previewing" : "")}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={() => onOpen(c)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {if (e.key === "Enter") onOpen(c);}}
      aria-label={title}>
      
      <img className="campaign-thumb" src={thumb} alt={title} loading="lazy" />
      {previewing &&
      <div className="campaign-iframe-wrap">
          <iframe
          src={preview}
          title={title}
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen />
        
        </div>
      }
      <div className="campaign-overlay">
        <div className="campaign-meta-row">
          <span>Campaña</span>
        </div>
        <h3 className="campaign-title">{title}</h3>
      </div>
      <div className="campaign-play"><PlayIcon size={18} /></div>
    </article>);

}

function Campaign() {
  const [open, setOpen] = useStateCmp(null);

  useEffectCmp(() => {
    const onKey = (e) => {if (e.key === "Escape") setOpen(null);};
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffectCmp(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const goRel = (delta) => {
    if (!open) return;
    const i = CAMPAIGNS.findIndex((x) => x.id === open.id);
    const next = CAMPAIGNS[(i + delta + CAMPAIGNS.length) % CAMPAIGNS.length];
    setOpen(next);
  };

  return (
    <section id="campaign" data-screen-label="07 Campaign" className="section-pad section-dark">
      <div className="container">
        <div className="campaign-header">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="eyebrow-num">2</span>
              <span className="eyebrow-label">Campañas</span>
            </div>
            <h2 className="display-lg" style={{ maxWidth: 800 }}>
              Trabajos que <em>nos hicieron lo que somos</em>
            </h2>
          </div>
          <p className="muted" style={{ fontSize: 14, maxWidth: 380, lineHeight: 1.55 }}>

          </p>
        </div>

        <div className="campaign-grid">
          {CAMPAIGNS.map((c) =>
          <CampaignCard key={c.id} c={c} onOpen={setOpen} />
          )}
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={"lightbox" + (open ? " open" : "")}
        onClick={() => setOpen(null)}
        role="dialog"
        aria-modal="true">
        
        <button
          className="step-toggle"
          style={{ position: "absolute", top: "50%", left: 24, transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", color: "white", width: 52, height: 52 }}
          onClick={(e) => {e.stopPropagation();goRel(-1);}}
          aria-label="Anterior">
          
          <ChevronLeft size={22} />
        </button>
        <button
          className="step-toggle"
          style={{ position: "absolute", top: "50%", right: 24, transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", color: "white", width: 52, height: 52 }}
          onClick={(e) => {e.stopPropagation();goRel(1);}}
          aria-label="Siguiente">
          
          <ChevronRight size={22} />
        </button>

        <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Cerrar">
            <XCmp size={18} />
          </button>
          {open &&
          <iframe
            key={open.id}
            src={`https://www.youtube-nocookie.com/embed/${open.id}?autoplay=1&rel=0&modestbranding=1`}
            title={open.id}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            frameBorder="0" />

          }
          {open &&
          <LightboxMeta id={open.id} />
          }
        </div>
      </div>
    </section>);

}

function LightboxMeta({ id }) {
  const meta = useOembed(id);
  if (!meta) return null;
  return (
    <div className="lightbox-meta">
      <strong style={{ color: "white", fontFamily: "var(--font-display-serif)", fontSize: 20 }}>{meta.title}</strong>
    </div>);

}

window.Campaign = Campaign;