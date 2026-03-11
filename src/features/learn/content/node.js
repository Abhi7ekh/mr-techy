import { STANDARD_TOPIC_META, STANDARD_TOPIC_ORDER } from "./topicOrder";

export const node = {
  id: "node",
  label: "Node.js",
  icon: "⬢",
  topicOrder: STANDARD_TOPIC_ORDER,
  topics: {
    introduction: {
      title: STANDARD_TOPIC_META.introduction.label,
      blocks: [
        { type: "p", text: "Node.js is a JavaScript runtime that lets you run JavaScript outside the browser (usually on a server)." },
        {
          type: "callout",
          variant: "note",
          title: "Runtime vs framework",
          text: "Node.js is the runtime. Frameworks like Express/Nest sit on top to help you build APIs faster.",
        },
        { type: "h2", text: "Where Node.js fits" },
        {
          type: "diagram",
          title: "Backend overview",
          code: `flowchart LR
  Client[Browser / Mobile] --> API[Node.js API]
  API --> DB[(MySQL)]
  API --> Cache[(Redis?)]
  API --> Services[External services]`,
        },
        { type: "h2", text: "Core mental model: event loop" },
        {
          type: "p",
          text: "Node handles many requests efficiently by using an event loop and asynchronous I/O (it doesn’t block while waiting for files/network).",
        },
        {
          type: "diagram",
          title: "Async I/O (simplified)",
          code: `sequenceDiagram
  participant App as Node app
  participant OS as OS/Kernel
  participant DB as Database
  App->>DB: start query (async)
  App->>OS: handle other events
  DB-->>App: query result callback
  App-->>OS: send HTTP response`,
        },
        { type: "h2", text: "Minimal HTTP server" },
        {
          type: "code",
          language: "js",
          code: `import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node!\\n");
});

server.listen(3000, () => console.log("http://localhost:3000"));`,
        },
        { type: "h2", text: "Key terms you must know" },
        {
          type: "ul",
          items: ["Runtime", "Event loop", "Async/await", "Modules", "HTTP", "npm"],
        },
      ],
    },
    "why-it-is-used": {
      title: STANDARD_TOPIC_META["why-it-is-used"].label,
      blocks: [
        {
          type: "p",
          text: "Node.js is popular because it’s productive for web backends and efficient for I/O-heavy workloads (APIs, real-time apps, streaming).",
        },
        {
          type: "ul",
          items: [
            "One language end-to-end (frontend + backend)",
            "Non-blocking I/O: handles many concurrent connections well",
            "Massive npm ecosystem for libraries and tooling",
            "Great fit for APIs, webhooks, queues, and real-time (WebSockets)",
          ],
        },
        {
          type: "diagram",
          title: "Good fit vs not ideal",
          code: `flowchart LR
  A[Node.js excels] --> A1[APIs + web servers]
  A --> A2[Real-time apps]
  A --> A3[Streaming / I/O heavy]
  B[Be careful] --> B1[CPU-heavy tasks]
  B --> B2[Long blocking loops]
  B --> B3[Use workers/queues]`,
        },
        {
          type: "callout",
          variant: "note",
          title: "CPU-heavy work",
          text: "If your code spends lots of time on CPU (e.g., video encoding), move it to a worker thread, separate service, or queue so the main event loop stays responsive.",
        },
      ],
    },
    "core-concepts": {
      title: STANDARD_TOPIC_META["core-concepts"].label,
      blocks: [
        { type: "h2", text: "1) Event loop + async I/O" },
        {
          type: "p",
          text: "Node runs your JavaScript on a single main thread and relies on async operations (network, file system) so it can keep serving other requests.",
        },
        {
          type: "code",
          language: "js",
          code: `// Async I/O: Node can keep handling requests while waiting.
import fs from "node:fs/promises";

const text = await fs.readFile("file.txt", "utf8");
console.log(text);`,
        },
        { type: "h2", text: "2) Modules" },
        { type: "p", text: "Modern Node commonly uses ES Modules (import/export). Some projects still use CommonJS (require/module.exports)." },
        {
          type: "code",
          language: "js",
          code: `// ES Modules
import path from "node:path";
export function join(a, b) {
  return path.join(a, b);
}`,
        },
        { type: "h2", text: "3) HTTP request/response" },
        {
          type: "diagram",
          title: "HTTP lifecycle (simplified)",
          code: `sequenceDiagram
  participant Client
  participant Server as Node server
  Client->>Server: HTTP request
  Server->>Server: route + validate + auth
  Server->>Server: business logic
  Server->>Server: DB query / external API
  Server-->>Client: HTTP response (JSON)`,
        },
        { type: "h2", text: "4) Errors + status codes" },
        { type: "p", text: "APIs should return consistent errors and meaningful status codes (400/401/403/404/500)." },
      ],
    },
    "syntax-basics": {
      title: STANDARD_TOPIC_META["syntax-basics"].label,
      blocks: [
        { type: "h2", text: "Async/await" },
        {
          type: "code",
          language: "js",
          code: `async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Request failed");
  return await res.json();
}`,
        },
        { type: "h2", text: "Creating an API route (Express example)" },
        {
          type: "code",
          language: "js",
          code: `import express from "express";
const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.listen(3000);`,
        },
        {
          type: "callout",
          variant: "note",
          title: "Why Express here?",
          text: "Node’s built-in http module is great for learning, but most production APIs use a framework (Express/Fastify/Nest) for routing, middleware, and DX.",
        },
      ],
    },
    example: {
      title: STANDARD_TOPIC_META.example.label,
      blocks: [
        { type: "p", text: "A practical pattern is: validate input → run business logic → return JSON → handle errors consistently." },
        {
          type: "code",
          language: "js",
          code: `// Example: basic controller-style handler (framework-agnostic)
export async function listUsers(req, res) {
  try {
    const limit = Math.min(Number(req.query.limit ?? 20), 100);
    const users = await db.users.findMany({ limit });
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
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
            "Use async/await and handle errors centrally",
            "Validate and sanitize input (never trust client data)",
            "Keep routes thin: move logic into services/modules",
            "Use environment variables for secrets/config",
            "Add logging + request IDs for debugging",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Security baseline",
          text: "Always protect against injection, enforce auth, rate-limit sensitive endpoints, and avoid leaking stack traces to clients.",
        },
      ],
    },
    "common-mistakes": {
      title: STANDARD_TOPIC_META["common-mistakes"].label,
      blocks: [
        {
          type: "ul",
          items: [
            "Blocking the event loop with CPU-heavy work",
            "Not awaiting promises (unhandled rejections)",
            "Returning inconsistent error shapes across endpoints",
            "Hardcoding secrets in code instead of env vars",
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
            "Explain the Node.js event loop.",
            "What’s the difference between process.nextTick, setImmediate, and setTimeout?",
            "When would you use worker threads?",
            "How do you handle errors in async code?",
          ],
        },
      ],
    },
    "mini-project": {
      title: STANDARD_TOPIC_META["mini-project"].label,
      blocks: [
        { type: "p", text: "Build a REST API for a Notes app." },
        {
          type: "ul",
          items: [
            "Endpoints: GET /notes, POST /notes, PUT /notes/:id, DELETE /notes/:id",
            "Validation: title required, max length constraints",
            "Add pagination and a /health endpoint",
            "Stretch: add auth (JWT) and rate limiting",
          ],
        },
        {
          type: "diagram",
          title: "Mini project architecture",
          code: `flowchart LR
  Routes --> Controllers
  Controllers --> Services
  Services --> DB[(MySQL)]
  Controllers --> Response[JSON Response]`,
        },
      ],
    },
    summary: {
      title: STANDARD_TOPIC_META.summary.label,
      blocks: [
        {
          type: "p",
          text: "Node.js is a server-side JavaScript runtime great for I/O-heavy applications. Master async/await, the event loop, HTTP, and clean API design patterns.",
        },
      ],
    },
  },
};

