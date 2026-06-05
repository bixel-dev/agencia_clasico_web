// Wordmark.jsx — the actual Clasico logomark.
// Renders the stacked "cla / si / co." + "}" bracket as a PNG (dropped-out bg).

function Wordmark({ size = 28, dark = false, mono = false, inline = true, className = "", style }) {
  const R = (typeof window !== "undefined" && window.__resources) || {};
  const src = mono
    ? (R.logoMono || "assets/clasico-logo-mono.png")
    : (dark ? (R.logoDark || "assets/clasico-logo-dark.png") : (R.logoColor || "assets/clasico-logo.png"));
  // Size = visual height. Aspect ~1:1 (1282×1294), slight horizontal trim from } looks ~1.02.
  const h = typeof size === "number" ? size : undefined;
  return (
    <img
      src={src}
      alt="Clasico"
      className={"clasico-logo " + (inline ? "is-inline " : "") + className}
      style={{
        height: h ? h + "px" : (size === "inherit" ? "1.1em" : size),
        width: "auto",
        display: inline ? "inline-block" : "block",
        verticalAlign: inline ? "middle" : undefined,
        ...style,
      }}
    />
  );
}

window.Wordmark = Wordmark;
