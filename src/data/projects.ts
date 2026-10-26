export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  period: string;
  role: string;
  problem: string;
  built: string[];
  outcome: string;
  stack: string[];
  links: ProjectLink[];
  /** Code visibility note shown on the card */
  code: string;
  /** Optional screenshot path under /public, e.g. "/projects/tristim.png" */
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "tristim",
    name: "Tristim",
    tagline: "Skin-tone colorimetry and AI shade matching — iOS + web",
    period: "2025 – 2026",
    role: "Founder · sole engineer",
    problem:
      "Finding a foundation or lipstick shade online is guesswork, and phone cameras can't measure skin color reliably. Tristim turns a face scan into a scientifically grounded color profile and matches it against real products.",
    built: [
      "SwiftUI + ARKit iOS app with an on-device CoreML classifier (MobileNetV3, focal loss) for undertone and depth — ~100 ms inference, Gemini Vision fallback on low confidence.",
      "Hand-implemented CIELAB / ΔE2000 color engine shared across Swift and TypeScript, validated against 15k spectrophotometer reference measurements.",
      "Next.js 15 backend with ~40 API routes: Vertex AI + Gemini recommendations, embedding search, Redis caching, Apify product-feed ingestion, Snap Camera Kit AR try-on.",
      "Python computer-vision 'refinery' (OpenCV + segmentation) that extracts Lab color from product images.",
      "Self-improving loop: Cloudflare Worker + D1 collects consented learning signals → GitHub Actions retrains and converts the model to CoreML → app pulls the update.",
    ],
    outcome:
      "Recommendations across 14 cosmetic categories; 96% of scans classified on-device with no image leaving the phone. Controlled lighting experiments (197 frames, 3 conditions) proved the camera can't recover b*, and the design was changed to classification-first — documented so the mistake isn't repeated.",
    stack: [
      "Swift",
      "SwiftUI",
      "ARKit",
      "CoreML",
      "PyTorch",
      "TypeScript",
      "Next.js",
      "Vertex AI",
      "Gemini",
      "Cloudflare Workers",
      "D1",
      "GitHub Actions",
      "Python",
      "OpenCV",
    ],
    links: [{ label: "tristim.io", href: "https://tristim.io" }],
    code: "Private repo · walkthrough available on request",
  },
  {
    slug: "stellartip",
    name: "StellarTip",
    tagline: "Card-to-stablecoin tipping for hospitality workers",
    period: "2026",
    role: "Solo project",
    problem:
      "Tipped workers lose a cut to processors and wait days for payouts, while guests won't touch a crypto wallet. StellarTip lets a guest scan a QR code and pay by card; the worker receives USDC on Stellar within seconds.",
    built: [
      "Per-worker QR tip pages and a Stripe Checkout flow; a verified webhook triggers the on-chain payout so payments are idempotent and never double-sent.",
      "Stellar integration with the official SDK: custodial wallets provisioned automatically (Friendbot funding + USDC trustline), payments with memos, explorer links on every tip.",
      "Postgres schema with Drizzle ORM on Neon; Auth.js magic-link sign-in via Resend; worker and admin dashboards.",
    ],
    outcome:
      "End-to-end testnet flow — card in, stablecoin out — in ~2.5k lines of typed code with a clean separation between payment, ledger and UI layers.",
    stack: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Stripe",
      "Stellar SDK",
      "Drizzle ORM",
      "PostgreSQL (Neon)",
      "Auth.js",
      "Tailwind",
    ],
    links: [],
    code: "Private repo · available on request",
  },
  {
    slug: "wealth-engine",
    name: "OpenClaw Wealth Engine",
    tagline: "Research + execution toolkit for an autonomous trading agent",
    period: "2026",
    role: "Solo project",
    problem:
      "An LLM agent that manages money needs deterministic, auditable tools — not free-form web browsing. This is the toolbelt for a self-hosted OpenClaw agent running on a Mac mini.",
    built: [
      "19 Python CLIs with JSON-only output: SEC EDGAR 13F parser and XBRL fundamentals, FRED macro, FMP valuations and earnings transcripts, Marketaux sentiment, OpenFIGI, USASpending, PatentsView, Semantic Scholar.",
      "Cross-fund consensus scorer and divergence detector over 13F watchlists; portfolio-intelligence briefings that combine live prices, macro regime and DCF signals.",
      "Dynamic risk engine that adapts position limits from realized P&L and the VIX regime; Alpaca execution layer with bracket orders, emergency exit and append-only JSONL audit logs.",
      "Scheduled LaunchDaemon that compiles a morning intelligence brief and delivers it over Telegram.",
    ],
    outcome:
      "~10k lines of Python powering a paper-trading agent with a full audit trail; every action the agent takes is reproducible from the logs.",
    stack: [
      "Python",
      "pandas",
      "NumPy",
      "Alpaca API",
      "SEC EDGAR",
      "FRED",
      "yfinance",
      "Agentic AI",
      "macOS LaunchDaemon",
    ],
    links: [],
    code: "Private repo · available on request",
  },
];
