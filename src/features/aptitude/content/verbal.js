import { STANDARD_TOPIC_META, STANDARD_TOPIC_ORDER } from "../../learn/content/topicOrder";

export const verbal = {
  id: "verbal",
  label: "Verbal Ability",
  icon: "📝",
  topicOrder: STANDARD_TOPIC_ORDER,
  topics: {
    introduction: {
      title: STANDARD_TOPIC_META.introduction.label,
      blocks: [
        { type: "p", text: "Verbal ability focuses on reading comprehension, vocabulary, grammar, and clear communication." },
        { type: "ul", items: ["Reading comprehension", "Sentence correction", "Synonyms/antonyms", "Para-jumbles", "Fill in the blanks"] },
        {
          type: "callout",
          variant: "note",
          title: "Fast improvement",
          text: "Read daily, build a small vocabulary list, and practice timed comprehension passages.",
        },
      ],
    },
    "why-it-is-used": { title: STANDARD_TOPIC_META["why-it-is-used"].label, blocks: [{ type: "ul", items: ["Communication skill indicator", "Common in placement exams"] }] },
    "core-concepts": { title: STANDARD_TOPIC_META["core-concepts"].label, blocks: [{ type: "ul", items: ["Context clues", "Grammar rules", "Sentence structure"] }] },
    "syntax-basics": { title: STANDARD_TOPIC_META["syntax-basics"].label, blocks: [{ type: "p", text: "Focus on subject-verb agreement, tense consistency, and modifiers." }] },
    example: { title: STANDARD_TOPIC_META.example.label, blocks: [{ type: "p", text: "Example: identify the main idea of a paragraph before answering questions." }] },
    "best-practices": { title: STANDARD_TOPIC_META["best-practices"].label, blocks: [{ type: "ul", items: ["Skim then read", "Eliminate options", "Track common grammar errors"] }] },
    "common-mistakes": { title: STANDARD_TOPIC_META["common-mistakes"].label, blocks: [{ type: "ul", items: ["Guessing without context", "Ignoring grammar cues", "Overthinking simple sentences"] }] },
    "interview-questions": { title: STANDARD_TOPIC_META["interview-questions"].label, blocks: [{ type: "ul", items: ["How do you improve comprehension speed?", "How do you learn vocabulary effectively?"] }] },
    "mini-project": { title: STANDARD_TOPIC_META["mini-project"].label, blocks: [{ type: "p", text: "Write a daily 150-word summary of an article for 10 days and check clarity + grammar." }] },
    summary: { title: STANDARD_TOPIC_META.summary.label, blocks: [{ type: "p", text: "Verbal ability is trainable: read, practice, and learn patterns of grammar and meaning." }] },
  },
};

