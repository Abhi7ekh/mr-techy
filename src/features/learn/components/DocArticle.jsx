import MermaidDiagram from "./MermaidDiagram";

function Block({ block }) {
  if (block.type === "h2") return <h2 className="doc-h2">{block.text}</h2>;
  if (block.type === "p") return <p className="doc-p">{block.text}</p>;
  if (block.type === "ul")
    return (
      <ul className="doc-ul">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  if (block.type === "callout")
    return (
      <div className={`doc-callout ${block.variant ?? "note"}`}>
        <div className="doc-callout-title">{block.title ?? "Note"}</div>
        <div className="doc-callout-body">{block.text}</div>
      </div>
    );
  if (block.type === "code")
    return (
      <section className="doc-code">
        {block.language ? <div className="doc-code-lang">{block.language}</div> : null}
        <pre className="doc-pre">
          <code>{block.code}</code>
        </pre>
      </section>
    );
  if (block.type === "diagram")
    return <MermaidDiagram title={block.title} code={block.code} />;

  return null;
}

export default function DocArticle({ techLabel, topic }) {
  return (
    <article className="doc">
      <div className="doc-kicker">{techLabel}</div>
      <h1 className="doc-title">{topic.title}</h1>
      <div className="doc-body">
        {topic.blocks.length ? (
          topic.blocks.map((block, idx) => <Block key={idx} block={block} />)
        ) : (
          <p className="doc-empty">Content coming soon.</p>
        )}
      </div>
    </article>
  );
}

