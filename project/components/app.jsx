// App.jsx — root composition. Tweaks for accent color + hero background style.

const { useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F26522",
  "heroBg": "flat"
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  "#F26522": "orange",
  "#FF5F03": "redorange",
  "#2EE000": "green",
  "#8B82E3": "lavender",
  "#CDE600": "acid",
};

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  // Reflect accent in :root class
  useEffectA(() => {
    const cls = document.documentElement.classList;
    Object.values(ACCENT_MAP).forEach(c => cls.remove("accent-" + c));
    const name = ACCENT_MAP[t.accent] || "orange";
    if (name !== "orange") cls.add("accent-" + name);
  }, [t.accent]);

  return (
    <>
      <Navbar />
      <main>
        <Hero bgVariant={t.heroBg} />
        <PorQue />
        <Campaign />
        <Experiencia />
        <Alianzas />
        <Somos />
      </main>
      <Footer />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="Color de acento">
          <window.TweakColor
            label="Acento"
            value={t.accent}
            options={["#F26522", "#FF5F03", "#2EE000", "#8B82E3", "#CDE600"]}
            onChange={(v) => setTweak("accent", v)}
          />
        </window.TweakSection>

        <window.TweakSection label="Hero">
          <window.TweakRadio
            label="Fondo"
            value={t.heroBg}
            options={[
              { value: "imagen", label: "Imagen" },
              { value: "blobs", label: "Blobs" },
              { value: "dots", label: "Puntos" },
              { value: "flat", label: "Plano" },
            ]}
            onChange={(v) => setTweak("heroBg", v)}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
