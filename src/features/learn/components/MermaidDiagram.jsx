import { useEffect, useId, useMemo, useRef, useState } from "react";

const mermaidConfig = {
  startOnLoad: false,
  securityLevel: "strict",
  theme: "dark",
  themeVariables: {
    background: "#0f0f0f",
    primaryColor: "#0f0f0f",
    primaryTextColor: "#e9feff",
    primaryBorderColor: "#222",
    lineColor: "#00d8ff",
    fontFamily: "system-ui",
  },
};

export default function MermaidDiagram({ code, title }) {
  const reactId = useId();
  const renderId = useMemo(
    () => `mmd-${reactId.replace(/[:]/g, "")}-${Math.random().toString(16).slice(2)}`,
    [reactId],
  );
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setError(null);
      try {
        const { default: mermaid } = await import("mermaid");
        mermaid.initialize(mermaidConfig);
        const { svg } = await mermaid.render(renderId, code);

        if (cancelled) return;
        if (containerRef.current) containerRef.current.innerHTML = svg;
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [code, renderId]);

  return (
    <section className="doc-diagram">
      {title ? <div className="doc-diagram-title">{title}</div> : null}
      {error ? (
        <div className="doc-diagram-error">
          Diagram failed to render.
          <pre className="doc-pre">
            <code>{error}</code>
          </pre>
        </div>
      ) : (
        <div ref={containerRef} className="doc-diagram-canvas" />
      )}
    </section>
  );
}

