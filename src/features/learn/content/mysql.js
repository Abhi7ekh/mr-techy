import { STANDARD_TOPIC_META, STANDARD_TOPIC_ORDER } from "./topicOrder";

export const mysql = {
  id: "mysql",
  label: "MySQL",
  icon: "🗄",
  topicOrder: STANDARD_TOPIC_ORDER,
  topics: {
    introduction: {
      title: STANDARD_TOPIC_META.introduction.label,
      blocks: [
        { type: "p", text: "MySQL is a relational database used to store structured data in tables and query it using SQL." },
        {
          type: "callout",
          variant: "note",
          title: "Relational = structured + relationships",
          text: "Data lives in tables (rows/columns). Relationships between tables are defined with keys (primary/foreign keys).",
        },
        { type: "h2", text: "How data is organized" },
        {
          type: "diagram",
          title: "Tables and relationships",
          code: `erDiagram
  USERS ||--o{ ORDERS : places
  USERS {
    int id PK
    varchar name
    varchar email
  }
  ORDERS {
    int id PK
    int user_id FK
    decimal total
  }`,
        },
        { type: "h2", text: "What SQL looks like" },
        {
          type: "code",
          language: "sql",
          code: `-- Read data
SELECT id, name, email
FROM users
WHERE email LIKE '%@gmail.com'
ORDER BY id DESC
LIMIT 10;`,
        },
        { type: "h2", text: "What MySQL is used for" },
        {
          type: "ul",
          items: [
            "User accounts, orders, inventory, and other business data",
            "Reporting and analytics with SQL queries",
            "Powering backend APIs for web/mobile apps",
          ],
        },
        { type: "h2", text: "Key terms you must know" },
        {
          type: "ul",
          items: [
            "Database / Schema",
            "Table / Row / Column",
            "Primary key / Foreign key",
            "Index",
            "JOIN",
            "Transaction",
          ],
        },
      ],
    },
    "why-it-is-used": {
      title: STANDARD_TOPIC_META["why-it-is-used"].label,
      blocks: [
        { type: "p", text: "MySQL is widely used because it’s reliable, fast for many workloads, and works well for structured, relational business data." },
        {
          type: "ul",
          items: [
            "Strong fit for transactional apps (orders, payments, inventory)",
            "ACID transactions for consistency and correctness",
            "Powerful SQL for reporting and analytics",
            "Mature ecosystem, tooling, and community",
          ],
        },
        {
          type: "callout",
          variant: "note",
          title: "When SQL is a great choice",
          text: "Use a relational DB when you need clear relationships, constraints, joins, and strong consistency.",
        },
      ],
    },
    "core-concepts": {
      title: STANDARD_TOPIC_META["core-concepts"].label,
      blocks: [
        { type: "h2", text: "Tables, rows, columns" },
        { type: "p", text: "A table stores rows (records). Columns define the data fields and types." },
        { type: "h2", text: "Keys and constraints" },
        {
          type: "ul",
          items: [
            "Primary key: uniquely identifies a row (often AUTO_INCREMENT id)",
            "Foreign key: links one table to another (enforces relationship)",
            "NOT NULL / UNIQUE constraints: enforce data rules",
          ],
        },
        { type: "h2", text: "Joins" },
        {
          type: "diagram",
          title: "Join mental model",
          code: `flowchart LR
  Users[users table] -- join on user_id --> Orders[orders table]
  Note1[Use joins to combine related data] --- Users`,
        },
        { type: "h2", text: "Indexes" },
        {
          type: "p",
          text: "Indexes speed up reads by allowing MySQL to find rows faster, but they add write overhead. Index columns you filter/sort/join on frequently.",
        },
        { type: "h2", text: "Transactions" },
        {
          type: "p",
          text: "Transactions group multiple operations so they either all succeed or all fail—critical for correctness (e.g., balance updates).",
        },
      ],
    },
    "syntax-basics": {
      title: STANDARD_TOPIC_META["syntax-basics"].label,
      blocks: [
        { type: "h2", text: "Create a table" },
        {
          type: "code",
          language: "sql",
          code: `CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        },
        { type: "h2", text: "Insert, update, delete" },
        {
          type: "code",
          language: "sql",
          code: `INSERT INTO users (name, email) VALUES ('Amina', 'amina@example.com');

UPDATE users SET name = 'Amina Khan' WHERE id = 1;

DELETE FROM users WHERE id = 1;`,
        },
        { type: "h2", text: "Select + join" },
        {
          type: "code",
          language: "sql",
          code: `SELECT u.name, o.total
FROM users u
JOIN orders o ON o.user_id = u.id
WHERE o.total > 100
ORDER BY o.total DESC;`,
        },
      ],
    },
    example: {
      title: STANDARD_TOPIC_META.example.label,
      blocks: [
        { type: "p", text: "Example: design a simple e-commerce data model (users → orders → order_items → products)." },
        {
          type: "diagram",
          title: "E-commerce schema (simplified)",
          code: `erDiagram
  USERS ||--o{ ORDERS : places
  ORDERS ||--o{ ORDER_ITEMS : contains
  PRODUCTS ||--o{ ORDER_ITEMS : referenced_by
  USERS { int id PK }
  ORDERS { int id PK  int user_id FK }
  ORDER_ITEMS { int id PK  int order_id FK  int product_id FK  int qty }
  PRODUCTS { int id PK  varchar name  decimal price }`,
        },
        {
          type: "code",
          language: "sql",
          code: `-- Total spend per user
SELECT u.id, u.email, SUM(o.total) AS total_spend
FROM users u
JOIN orders o ON o.user_id = u.id
GROUP BY u.id, u.email
ORDER BY total_spend DESC;`,
        },
      ],
    },
    "best-practices": {
      title: STANDARD_TOPIC_META["best-practices"].label,
      blocks: [
        {
          type: "ul",
          items: [
            "Use constraints (NOT NULL, UNIQUE, FK) to protect data integrity",
            "Add indexes intentionally (measure with EXPLAIN)",
            "Prefer transactions for multi-step updates",
            "Store timestamps in UTC and use consistent naming",
            "Avoid SELECT * in production queries",
          ],
        },
        {
          type: "callout",
          variant: "note",
          title: "Performance rule",
          text: "Fix slow queries first (indexes + query shape) before scaling hardware.",
        },
      ],
    },
    "common-mistakes": {
      title: STANDARD_TOPIC_META["common-mistakes"].label,
      blocks: [
        {
          type: "ul",
          items: [
            "No indexes on frequently filtered columns (slow queries)",
            "Using VARCHAR for everything (bad types and constraints)",
            "Not using transactions for related updates",
            "Storing duplicate data instead of normalizing appropriately",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Data loss risk",
          text: "Always test migrations/backups. A single DELETE without WHERE can remove everything.",
        },
      ],
    },
    "interview-questions": {
      title: STANDARD_TOPIC_META["interview-questions"].label,
      blocks: [
        {
          type: "ul",
          items: [
            "What is normalization? When would you denormalize?",
            "Explain indexes and how they speed up queries.",
            "What is a transaction? What does ACID mean?",
            "INNER JOIN vs LEFT JOIN — when do you use each?",
          ],
        },
      ],
    },
    "mini-project": {
      title: STANDARD_TOPIC_META["mini-project"].label,
      blocks: [
        { type: "p", text: "Build a database for a Blog system." },
        {
          type: "ul",
          items: [
            "Tables: users, posts, comments",
            "Constraints: FK relationships, NOT NULL fields, UNIQUE email",
            "Queries: latest posts, comments per post, posts by user",
            "Stretch: tags table + post_tags join table",
          ],
        },
        {
          type: "code",
          language: "sql",
          code: `-- Latest posts with author
SELECT p.id, p.title, u.name AS author
FROM posts p
JOIN users u ON u.id = p.user_id
ORDER BY p.created_at DESC
LIMIT 20;`,
        },
      ],
    },
    summary: {
      title: STANDARD_TOPIC_META.summary.label,
      blocks: [
        { type: "p", text: "MySQL stores structured relational data using tables and SQL. Master keys, joins, indexes, and transactions to build reliable backends." },
      ],
    },
  },
};

