import { STANDARD_TOPIC_META, STANDARD_TOPIC_ORDER } from "../../learn/content/topicOrder";

export const puzzles = {
  id: "puzzles",
  label: "Puzzles",
  icon: "🧩",
  topicOrder: STANDARD_TOPIC_ORDER,
  topics: {
    introduction: {
      title: STANDARD_TOPIC_META.introduction.label,
      blocks: [
        { type: "p", text: "Puzzles develop creative problem-solving: break problems into cases, track constraints, and reason step-by-step." },
        { type: "ul", items: ["Logic grid puzzles", "Pattern puzzles", "Probability basics", "Brainteasers"] },
      ],
    },
    "why-it-is-used": { title: STANDARD_TOPIC_META["why-it-is-used"].label, blocks: [{ type: "ul", items: ["Tests creativity + clarity of thinking", "Common in interviews"] }] },
    "core-concepts": {
      title: STANDARD_TOPIC_META["core-concepts"].label,
      blocks: [
        { type: "h2", text: "Casework + constraints" },
        { type: "p", text: "List possibilities, eliminate impossible cases, and keep a clean table of what’s known." },
      ],
    },
    "syntax-basics": { title: STANDARD_TOPIC_META["syntax-basics"].label, blocks: [{ type: "p", text: "Use tables, symbols, and diagrams. The “syntax” is your representation." }] },
    example: { title: STANDARD_TOPIC_META.example.label, blocks: [{ type: "p", text: "Example: solve a classic river crossing puzzle by enumerating valid moves." }] },
    "best-practices": { title: STANDARD_TOPIC_META["best-practices"].label, blocks: [{ type: "ul", items: ["Write constraints first", "Use casework", "Explain your reasoning clearly"] }] },
    "common-mistakes": { title: STANDARD_TOPIC_META["common-mistakes"].label, blocks: [{ type: "ul", items: ["Jumping to an answer", "Forgetting a constraint", "Messy tracking of cases"] }] },
    "interview-questions": { title: STANDARD_TOPIC_META["interview-questions"].label, blocks: [{ type: "ul", items: ["How do you approach an unfamiliar puzzle?", "How do you communicate your steps?"] }] },
    "mini-project": { title: STANDARD_TOPIC_META["mini-project"].label, blocks: [{ type: "p", text: "Create a set of 20 puzzles and write a clean, step-by-step solution for each." }] },
    summary: { title: STANDARD_TOPIC_META.summary.label, blocks: [{ type: "p", text: "Puzzles reward structured thinking: represent, constrain, explore cases, and communicate clearly." }] },
  },
};

