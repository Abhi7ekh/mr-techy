import { STANDARD_TOPIC_META, STANDARD_TOPIC_ORDER } from "../../learn/content/topicOrder";

export const quantitative = {
  id: "quantitative",
  label: "Quantitative",
  icon: "📊",
  topicOrder: STANDARD_TOPIC_ORDER,
  topics: {
    introduction: {
      title: STANDARD_TOPIC_META.introduction.label,
      blocks: [
        { type: "p", text: "Quantitative aptitude is about solving numerical problems quickly and accurately using math fundamentals and smart shortcuts." },
        { type: "h2", text: "What you’ll learn" },
        { type: "ul", items: ["Percentages, ratios, averages", "Time & work, speed & distance", "Profit & loss, simple interest", "Number system basics"] },
        {
          type: "callout",
          variant: "note",
          title: "Goal",
          text: "Don’t memorize solutions—learn patterns, estimation, and which formula to use.",
        },
      ],
    },
    "why-it-is-used": {
      title: STANDARD_TOPIC_META["why-it-is-used"].label,
      blocks: [
        { type: "ul", items: ["Placement/competitive exams", "Improves mental math and estimation", "Builds problem-solving speed"] },
      ],
    },
    "core-concepts": {
      title: STANDARD_TOPIC_META["core-concepts"].label,
      blocks: [
        { type: "h2", text: "Percent → fraction mental map" },
        { type: "ul", items: ["50% = 1/2", "25% = 1/4", "20% = 1/5", "12.5% = 1/8"] },
        {
          type: "diagram",
          title: "Fast approach",
          code: `flowchart TB
  Read[Read question] --> Identify[Identify topic]
  Identify --> Formula[Pick formula/pattern]
  Formula --> Simplify[Simplify / cancel]
  Simplify --> Compute[Mental math]
  Compute --> Check[Sanity check]`,
        },
      ],
    },
    "syntax-basics": {
      title: STANDARD_TOPIC_META["syntax-basics"].label,
      blocks: [
        { type: "h2", text: "Key formulas" },
        {
          type: "code",
          language: "text",
          code: `Percentage change = (New - Old) / Old × 100
Average = Sum / Count
Work: If A does work in x days => 1 day work = 1/x`,
        },
      ],
    },
    example: {
      title: STANDARD_TOPIC_META.example.label,
      blocks: [
        { type: "p", text: "Example: If a price increases from 200 to 250, what is the percentage increase?" },
        {
          type: "code",
          language: "text",
          code: `Increase = 250 - 200 = 50
% increase = 50/200 × 100 = 25%`,
        },
      ],
    },
    "best-practices": {
      title: STANDARD_TOPIC_META["best-practices"].label,
      blocks: [{ type: "ul", items: ["Use cancellation before multiplying", "Estimate to catch mistakes", "Practice timed sets"] }],
    },
    "common-mistakes": {
      title: STANDARD_TOPIC_META["common-mistakes"].label,
      blocks: [{ type: "ul", items: ["Mixing up base in percentage problems", "Rounding too early", "Skipping sanity checks"] }],
    },
    "interview-questions": {
      title: STANDARD_TOPIC_META["interview-questions"].label,
      blocks: [{ type: "ul", items: ["Explain how you solve percent change quickly.", "What’s your method for time & work problems?"] }],
    },
    "mini-project": {
      title: STANDARD_TOPIC_META["mini-project"].label,
      blocks: [
        { type: "p", text: "Create a 7-day practice plan: 20 questions/day, track accuracy + time per question." },
        { type: "ul", items: ["Day 1–2: percentages/ratios", "Day 3–4: averages/time-work", "Day 5: speed-distance", "Day 6–7: mixed revision"] },
      ],
    },
    summary: {
      title: STANDARD_TOPIC_META.summary.label,
      blocks: [{ type: "p", text: "Quantitative aptitude is pattern + practice. Learn the core formulas, simplify fast, and train accuracy under time." }],
    },
  },
};

