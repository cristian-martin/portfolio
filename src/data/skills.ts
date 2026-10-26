export type SkillGroup = { group: string; items: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Swift", "Python", "Java", "SQL"],
  },
  {
    group: "Frontend & Mobile",
    items: ["React", "Next.js", "Tailwind CSS", "SwiftUI", "ARKit", "Android (Java)"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "REST API design", "PostgreSQL", "Drizzle ORM", "Redis", "Serverless (Vercel, Cloudflare Workers)"],
  },
  {
    group: "AI / ML",
    items: ["LLM integration (Gemini, OpenAI)", "Vertex AI", "CoreML", "PyTorch", "OpenCV", "Embeddings & semantic search", "Agent tooling"],
  },
  {
    group: "Testing & Delivery",
    items: ["Playwright", "TestCafe", "SoapUI", "GitHub Actions", "Git", "ESLint"],
  },
  {
    group: "Domains",
    items: ["Color science (CIELAB, ΔE2000)", "Payments (Stripe)", "Blockchain (Stellar)", "Computer vision", "AR / XR"],
  },
];
