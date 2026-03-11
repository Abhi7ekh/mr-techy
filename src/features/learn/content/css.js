import { STANDARD_TOPIC_META, STANDARD_TOPIC_ORDER } from "./topicOrder";

export const css = {
  id: "css",
  label: "CSS",
  icon: "🎨",
  topicOrder: STANDARD_TOPIC_ORDER,
  topics: {
    introduction: {
      title: STANDARD_TOPIC_META.introduction.label,
      blocks: [
        { type: "p", text: "CSS (Cascading Style Sheets) controls how HTML looks: colors, spacing, typography, layout, and responsive design." },
        {
          type: "callout",
          variant: "note",
          title: "What “cascading” means",
          text: "When multiple styles apply, CSS uses rules (specificity + source order + importance) to decide the final style.",
        },
        { type: "h2", text: "How CSS is applied" },
        {
          type: "diagram",
          title: "Cascade (simplified)",
          code: `flowchart TB
  Match[Rules match an element] --> Spec[Specificity + order]
  Spec --> Win[Winning declaration]
  Win --> Paint[Browser paints styles]`,
        },
        { type: "h2", text: "CSS syntax basics" },
        {
          type: "code",
          language: "css",
          code: `/* selector { property: value; } */
.card {
  padding: 16px;
  border: 1px solid #222;
  border-radius: 12px;
}`,
        },
        { type: "h2", text: "Layout mental model" },
        {
          type: "ul",
          items: [
            "Box model: content + padding + border + margin",
            "Flexbox: 1D layout (row/column)",
            "Grid: 2D layout (rows + columns)",
            "Media queries for responsiveness",
          ],
        },
        { type: "h2", text: "Key terms you must know" },
        {
          type: "ul",
          items: ["Selector", "Specificity", "Box model", "Flexbox", "Grid", "Responsive design"],
        },
      ],
    },
    "why-it-is-used": {
      title: STANDARD_TOPIC_META["why-it-is-used"].label,
      blocks: [
        { type: "p", text: "CSS turns plain HTML into a real product UI: layout, spacing, typography, color, and responsive behavior." },
        {
          type: "ul",
          items: [
            "Responsive design across devices (mobile → desktop)",
            "Consistent branding (colors, typography, spacing)",
            "Modern layouts with Flexbox and Grid",
            "Animations and interactions for better UX",
          ],
        },
        {
          type: "callout",
          variant: "note",
          title: "Professional CSS",
          text: "Great CSS is predictable and reusable: design tokens, consistent spacing, and minimal “magic numbers”.",
        },
      ],
    },
    "core-concepts": {
      title: STANDARD_TOPIC_META["core-concepts"].label,
      blocks: [
        { type: "h2", text: "Box model" },
        {
          type: "diagram",
          title: "Box model",
          code: `flowchart TB
  Margin --> Border
  Border --> Padding
  Padding --> Content`,
        },
        { type: "h2", text: "Specificity + cascade" },
        {
          type: "p",
          text: "When rules conflict, the browser chooses based on specificity and source order. IDs beat classes; classes beat elements.",
        },
        { type: "h2", text: "Layout: Flexbox vs Grid" },
        {
          type: "ul",
          items: [
            "Flexbox: align items in one direction (row OR column)",
            "Grid: align items in two directions (rows AND columns)",
            "Use the simplest tool that fits the layout",
          ],
        },
        { type: "h2", text: "Sizing and units" },
        {
          type: "ul",
          items: ["px: fixed size", "rem: scalable with root font-size", "%: relative", "vh/vw: viewport-based"],
        },
      ],
    },
    "syntax-basics": {
      title: STANDARD_TOPIC_META["syntax-basics"].label,
      blocks: [
        { type: "h2", text: "Selectors" },
        {
          type: "code",
          language: "css",
          code: `h1 { color: white; }       /* element */
.btn { padding: 12px; }      /* class */
#app { min-height: 100vh; }  /* id */`,
        },
        { type: "h2", text: "Flexbox starter" },
        {
          type: "code",
          language: "css",
          code: `.row {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}`,
        },
        { type: "h2", text: "Responsive starter" },
        {
          type: "code",
          language: "css",
          code: `.container { padding: 16px; }
@media (min-width: 900px) {
  .container { padding: 32px; }
}`,
        },
      ],
    },
    example: {
      title: STANDARD_TOPIC_META.example.label,
      blocks: [
        { type: "p", text: "Example: create a clean documentation card component using tokens and consistent spacing." },
        {
          type: "code",
          language: "css",
          code: `:root{
  --bg: #0b0b0b;
  --panel: #0f0f0f;
  --border: #222;
  --text: #e9feff;
  --muted: #d7d7d7;
  --accent: #00d8ff;
}

.card{
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
}
.card h3{ margin:0 0 8px; color: var(--text); }
.card p{ margin:0; color: var(--muted); line-height:1.6; }`,
        },
      ],
    },
    "best-practices": {
      title: STANDARD_TOPIC_META["best-practices"].label,
      blocks: [
        {
          type: "ul",
          items: [
            "Use design tokens (CSS variables) for colors/spacing",
            "Prefer rem for typography and spacing scale",
            "Keep selectors simple (avoid overly specific chains)",
            "Use Flexbox/Grid instead of margins for layout spacing",
            "Create reusable utilities/components (buttons, cards, badges)",
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
            "Overusing !important to “fix” specificity issues",
            "Hardcoding lots of random pixel values (inconsistent spacing)",
            "Mixing layout approaches without a system",
            "Not testing responsive layouts early",
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
            "Explain the box model.",
            "How does specificity work?",
            "Flexbox vs Grid — when do you use each?",
            "What’s the difference between rem and em?",
          ],
        },
      ],
    },
    "mini-project": {
      title: STANDARD_TOPIC_META["mini-project"].label,
      blocks: [
        { type: "p", text: "Build a responsive documentation layout (like yours): Header + Sidebar + Content + Topic tabs." },
        {
          type: "ul",
          items: [
            "Desktop: fixed sidebar and max-width content",
            "Mobile: sidebar becomes a drawer",
            "Use tokens for spacing and colors",
            "Add focus styles for keyboard navigation",
          ],
        },
      ],
    },
    summary: {
      title: STANDARD_TOPIC_META.summary.label,
      blocks: [
        { type: "p", text: "CSS controls UI appearance and layout. Master the cascade, box model, Flexbox/Grid, and build reusable styles with tokens for professional results." },
      ],
    },
  },
};

