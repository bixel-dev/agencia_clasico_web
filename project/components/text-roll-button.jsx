// TextRollButton.jsx — signature Clasico CTA (text-roll on hover + arrow circle rotate)
const { ArrowRight: ArrowR } = window.ClasicoIcons;

function TextRollButton({ label = "Comenzar", variant = "orange", href, onClick, type = "button" }) {
  const Tag = href ? "a" : "button";
  const cls = "btn" + (variant === "dark" ? " dark" : variant === "ghost" ? " ghost" : "");
  return (
    <Tag
      className={cls}
      href={href}
      onClick={onClick}
      {...(href ? {} : { type })}
    >
      <span className="roll">
        <span>{label}</span>
        <span>{label}</span>
      </span>
      <span className="circ"><ArrowR size={14} strokeWidth={2} /></span>
    </Tag>
  );
}

window.TextRollButton = TextRollButton;
