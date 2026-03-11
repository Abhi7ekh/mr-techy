import { STANDARD_TOPIC_META, STANDARD_TOPIC_ORDER } from "./topicOrder";

export const react = {
  id: "react",
  label: "React",
  icon: "⚛",
  topicOrder: STANDARD_TOPIC_ORDER,
  topics: {
    introduction: {
      title: STANDARD_TOPIC_META.introduction.label,
      blocks: [
        {
          type: "p",
          text: "React is a JavaScript library for building user interfaces by composing small, reusable components.",
        },
        {
          type: "callout",
          variant: "note",
          title: "What React is (and isn’t)",
          text: "React focuses on UI rendering + state management patterns. Routing, data fetching, and styling are typically handled by additional libraries or frameworks.",
        },
        { type: "h2", text: "Where React fits in a web app" },
        {
          type: "diagram",
          title: "Frontend overview",
          code: `flowchart LR
  User[User] --> Browser[Browser UI]
  Browser --> React[React Components]
  React --> API[Backend API]
  API --> DB[(Database)]`,
        },
        { type: "h2", text: "Core mental model" },
        {
          type: "ul",
          items: [
            "Your UI is a function of state: UI = f(state)",
            "Components receive inputs (props) and return UI (JSX)",
            "State updates trigger re-rendering of affected parts",
          ],
        },
        {
          type: "diagram",
          title: "Render loop (simplified)",
          code: `flowchart TB
  State[State] --> Render[Render UI]
  Render --> UI[DOM Output]
  UI --> Event[User Event]
  Event --> Update[setState]
  Update --> State`,
        },
        { type: "h2", text: "Minimal React example" },
        {
          type: "code",
          language: "jsx",
          code: `import { useState } from "react";

export default function Greeting() {
  const [name, setName] = useState("World");
  return (
    <div>
      <h1>Hello, {name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}`,
        },
        {
          type: "h2",
          text: "Key terms you must know",
        },
        {
          type: "ul",
          items: ["Component", "JSX", "Props", "State", "Re-render", "Effect (useEffect)"],
        },
      ],
    },
    "why-it-is-used": {
      title: STANDARD_TOPIC_META["why-it-is-used"].label,
      blocks: [
        {
          type: "ul",
          items: [
            "Component-based UI for reuse and consistency",
            "Fast iteration with a strong ecosystem",
            "Great fit for interactive single-page apps",
          ],
        },
      ],
    },
    "core-concepts": {
      title: STANDARD_TOPIC_META["core-concepts"].label,
      blocks: [
        { type: "p", text: "React is built around a few core ideas. Learn them in order: UI as components, data in props/state, and side-effects in effects." },
        {
          type: "diagram",
          title: "Component tree (UI composition)",
          code: `flowchart TB
  App --> Header
  App --> Sidebar
  App --> Content
  Content --> Topic
  Topic --> Example`,
        },
        { type: "h2", text: "Props (data flows down)" },
        {
          type: "diagram",
          title: "Props flow",
          code: `sequenceDiagram
  participant Parent
  participant Child
  Parent->>Child: props (data)
  Child-->>Parent: event callback (optional)
  Note over Parent,Child: One-way data flow`,
        },
        {
          type: "code",
          language: "jsx",
          code: `function Parent() {
  return <Child title="Hello" />;
}

function Child({ title }) {
  return <h2>{title}</h2>;
}`,
        },
        { type: "h2", text: "State (data changes over time)" },
        {
          type: "code",
          language: "jsx",
          code: `import { useState } from "react";

export function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)}>
      {on ? "ON" : "OFF"}
    </button>
  );
}`,
        },
        { type: "h2", text: "Effects (sync with the outside world)" },
        {
          type: "callout",
          variant: "warning",
          title: "Rule of thumb",
          text: "Don’t use effects to compute values you can compute during render. Use effects for subscriptions, network calls, timers, and imperative APIs.",
        },
        {
          type: "code",
          language: "jsx",
          code: `import { useEffect, useState } from "react";

export function User({ id }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(\`/api/users/\${id}\`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setUser(data);
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!user) return <p>Loading...</p>;
  return <div>{user.name}</div>;
}`,
        },
      ],
    },
    "syntax-basics": {
      title: STANDARD_TOPIC_META["syntax-basics"].label,
      blocks: [
        { type: "p", text: "React commonly uses JSX, a syntax extension for JavaScript that lets you write UI with a HTML-like syntax." },
        {
          type: "callout",
          variant: "note",
          title: "JSX mental model",
          text: "JSX is just syntax for calling functions that create elements. You can pass values, expressions, and components like normal JavaScript.",
        },
        {
          type: "code",
          language: "jsx",
          code: `function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}`,
        },
        {
          type: "code",
          language: "jsx",
          code: `// JSX supports expressions
const price = 199;
const el = <div>Total: {price * 1.15}</div>;`,
        },
      ],
    },
    example: {
      title: STANDARD_TOPIC_META.example.label,
      blocks: [
        {
          type: "code",
          code: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Count: {count}
    </button>
  );
}`,
        },
      ],
    },
    "best-practices": {
      title: STANDARD_TOPIC_META["best-practices"].label,
      blocks: [
        {
          type: "ul",
          items: [
            "Keep components small and focused",
            "Lift state only when needed",
            "Prefer derived state over duplicated state",
          ],
        },
      ],
    },
    "common-mistakes": {
      title: STANDARD_TOPIC_META["common-mistakes"].label,
      blocks: [
        {
          type: "ul",
          items: [
            "Mutating state directly",
            "Overusing useEffect for derived values",
            "Putting too much logic in a single component",
          ],
        },
      ],
    },
    "interview-questions": {
      title: STANDARD_TOPIC_META["interview-questions"].label,
      blocks: [
        {
          type: "ul",
          items: [
            "What is reconciliation in React?",
            "Explain props vs state.",
            "When would you use useMemo/useCallback?",
          ],
        },
      ],
    },
    "mini-project": {
      title: STANDARD_TOPIC_META["mini-project"].label,
      blocks: [
        {
          type: "p",
          text: "Build a small Todo app with filters (All/Active/Completed) and localStorage persistence.",
        },
      ],
    },
    summary: {
      title: STANDARD_TOPIC_META.summary.label,
      blocks: [
        {
          type: "p",
          text: "React helps you build complex UIs from small, reusable pieces. Master components, props/state, and hooks first.",
        },
      ],
    },
  },
};

