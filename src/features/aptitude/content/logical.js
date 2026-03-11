import { STANDARD_TOPIC_META, STANDARD_TOPIC_ORDER } from "../../learn/content/topicOrder";

export const logical = {
  id: "logical",
  label: "Logical Reasoning",
  icon: "🧠",
  topicOrder: STANDARD_TOPIC_ORDER,
  topics: {
    introduction: {
      title: STANDARD_TOPIC_META.introduction.label,
      blocks: [
        { type: "p", text: "Logical reasoning tests how well you can analyze patterns, draw conclusions, and avoid assumptions." },
        { type: "ul", items: ["Statements & conclusions", "Seating/arrangement", "Syllogisms", "Blood relations", "Direction sense"] },
      ],
    },
    "why-it-is-used": { title: STANDARD_TOPIC_META["why-it-is-used"].label, blocks: [{ type: "ul", items: ["Assesses structured thinking", "Used in aptitude rounds and interviews"] }] },
    "core-concepts": {
      title: STANDARD_TOPIC_META["core-concepts"].label,
      blocks: [
        { type: "h2", text: "Rule-based thinking" },
        {
          type: "diagram",
          title: "Reasoning workflow",
          code: `flowchart TB
  Given[Given statements] --> Rules[Convert to rules]
  Rules --> Diagram[Draw table/diagram]
  Diagram --> Deduce[Deduce constraints]
  Deduce --> Answer[Select answer]`,
        },
      ],
    },
    "syntax-basics": { title: STANDARD_TOPIC_META["syntax-basics"].label, blocks: [{ type: "p", text: "Use tables, symbols, and diagrams to reduce cognitive load." }] },
    example: { title: STANDARD_TOPIC_META.example.label, blocks: [{ type: "p", text: "Example: draw a seating circle and mark positions before deducing neighbors." }] },
    "best-practices": { title: STANDARD_TOPIC_META["best-practices"].label, blocks: [{ type: "ul", items: ["Draw diagrams early", "Don’t assume extra facts", "Eliminate options systematically"] }] },
    "common-mistakes": { title: STANDARD_TOPIC_META["common-mistakes"].label, blocks: [{ type: "ul", items: ["Assuming instead of deducing", "Losing track of constraints", "Not checking all conditions"] }] },
    "interview-questions": { title: STANDARD_TOPIC_META["interview-questions"].label, blocks: [{ type: "ul", items: ["How do you solve arrangement problems quickly?", "How do you avoid assumptions?"] }] },
    "mini-project": { title: STANDARD_TOPIC_META["mini-project"].label, blocks: [{ type: "p", text: "Make a notebook of 50 classic reasoning puzzles with your diagram approach." }] },
    summary: { title: STANDARD_TOPIC_META.summary.label, blocks: [{ type: "p", text: "Logical reasoning improves with diagrams, constraints, and practice. Convert words into structured rules." }] },
  },
};

