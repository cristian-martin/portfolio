export const PROFILE = {
  name: "Cristian Martin",
  initials: "CM.",
  title: "Software Engineer",
  tagline:
    "I build AI-powered products end to end — iOS and web apps, ML pipelines, and payments — and ship them.",
  location: "Charlotte, NC",
  email: "cristian.msf23@gmail.com",
  github: "https://github.com/cristian-martin",
  // Add your LinkedIn URL to show the link (e.g. "https://www.linkedin.com/in/your-handle")
  linkedin: "https://www.linkedin.com/in/cristian-flores-dev/",
  // Drop a resume.pdf into /public and set this to "/resume.pdf" to show the button
  resume: "",
} as const;

export const NAV_LINKS = ["Projects", "Experience", "Skills", "About", "Contact"] as const;

export const HERO_SPECS: [string, string][] = [
  ["Status", "Open to work"],
  ["Role", "Software Engineer"],
  ["Focus", "Full-stack · iOS · AI/ML"],
  ["Based", "Charlotte, NC"],
];

export const ABOUT_SPECS: [string, string][] = [
  ["Education", "B.S. Information Systems Technology — Miami Dade College (2023)"],
  ["Coursework", "CS50x (Python) · iPhone App Dev (Swift) · CompTIA A+"],
  ["Languages", "English (Advanced) · Spanish (Native)"],
  ["Interests", "Color science · AR/XR · Agentic AI · Fintech"],
];
