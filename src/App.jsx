import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Experience", "Skills", "Contact"];

const EXPERIENCE = [
  {
    role: "Swift Developer",
    company: "City of Coral Gables · Internship",
    location: "Coral Gables, FL · On-site",
    period: "Jul 2024 – Sep 2024",
    points: [
      "Developed augmented reality experiences using ARKit within Xcode.",
      "Handled 3D objects — focusing on positioning and rotation — to build realistic AR environments.",
      "Used SwiftUI to enhance the user interface and interaction with AR elements.",
    ],
    tags: ["Swift", "ARKit", "SwiftUI", "Xcode"],
  },
  {
    role: "Dev QA & QC",
    company: "Temperies Solution",
    location: "Miami, FL · WeWork",
    period: "2021 – 2022",
    points: [
      "Built automated test suites for multiple applications using TestCafe.",
      "Performed API and front-end testing with TestCafe and SoapUI.",
      "Authored test cases and ran both manual and automated testing.",
    ],
    tags: ["TestCafe", "SoapUI", "QA Automation"],
  },
  {
    role: "Technical Support",
    company: "Kelly Services",
    location: "Miami, FL",
    period: "2020 – 2021",
    points: [
      "Provided first-level technical support on proprietary software and applications.",
      "Diagnosed issues and escalated calls to the appropriate support tier.",
      "Resolved customer queries and ran phone troubleshooting to meet company goals.",
    ],
    tags: ["Tech Support", "Troubleshooting", "CompTIA A+"],
  },
];

const SKILLS = ["Java", "JavaScript", "Python", "Swift"];
const TOOLS = ["Git", "Xcode", "ARKit", "SwiftUI", "TestCafe", "SoapUI"];

const HERO_SPECS = [
  ["Status", "Open to work"],
  ["Role", "Developer"],
  ["Focus", "iOS · Web · QA"],
  ["Based", "Charlotte, NC"],
];

const ABOUT_SPECS = [
  ["Education", "B.S. Information Systems Technology — Miami Dade College (2023)"],
  ["Coursework", "CS50x (Python) · iPhone App Dev (Swift) · CompTIA A+"],
  ["Languages", "English (Advanced) · Spanish (Native)"],
];

const GITHUB_URL = "https://github.com/cristian-martin";
const EMAIL = "cristian.msf23@gmail.com";

function SpecCard({ title, items }) {
  return (
    <div className="border border-black divide-y divide-gray-200">
      {title && (
        <div className="px-5 py-3 text-xs uppercase tracking-widest bg-black text-white">
          {title}
        </div>
      )}
      {items.map(([k, v]) => (
        <div key={k} className="px-5 py-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">
            {k}
          </p>
          <p className="text-sm leading-snug">{v}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen font-mono">
      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white border-b border-black" : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg tracking-widest uppercase">CM.</span>
          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm uppercase tracking-widest hover:underline underline-offset-4"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black px-6 py-4">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm uppercase tracking-widest hover:underline underline-offset-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center py-28">
          <div>
            <p className="text-xs uppercase tracking-widest mb-6 text-gray-500">
              Available for work
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tight mb-6">
              Cristian
              <br />
              Martin.
            </h1>
            <p className="text-lg text-gray-600 max-w-md mb-10">
              Developer and Information Systems Technology graduate. I build
              clean, reliable software — from QA automation to web and iOS apps.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#experience"
                className="px-6 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="w-full md:max-w-xs md:justify-self-end">
            <SpecCard items={HERO_SPECS} />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-black">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              01 / About
            </p>
            <h2 className="text-4xl font-bold mb-6">Driven to build and ship.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a developer with a B.S. in Information Systems Technology from
              Miami Dade College (2023). My background spans QA automation,
              full-stack fundamentals, and mobile development — including a
              recent internship building augmented-reality experiences with
              ARKit and SwiftUI.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Self-motivated and detail-oriented, I care about writing clean code
              and solving problems that create real value for the teams I work
              with. Now based in Charlotte, NC.
            </p>
          </div>
          <div className="md:pt-9">
            <SpecCard title="At a glance" items={ABOUT_SPECS} />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-24 px-6 border-t border-black bg-black text-white"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
            02 / Experience
          </p>
          <h2 className="text-4xl font-bold mb-12">Where I've Worked</h2>
          <div className="grid md:grid-cols-3 gap-px bg-gray-700">
            {EXPERIENCE.map((job, i) => (
              <div
                key={i}
                className="bg-black p-8 hover:bg-gray-900 transition-colors group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    0{i + 1}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {job.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-1">{job.role}</h3>
                <p className="text-sm text-gray-400 mb-1">{job.company}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">
                  {job.location}
                </p>
                <ul className="space-y-2 mb-6">
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-gray-400 text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-gray-600">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-gray-600 px-2 py-1 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 border-t border-black">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            03 / Skills
          </p>
          <h2 className="text-4xl font-bold mb-12">Core Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-black">
            {SKILLS.map((skill, i) => (
              <div
                key={skill}
                className="border-r border-b border-black px-6 py-10 flex flex-col gap-4 hover:bg-black hover:text-white transition-colors cursor-default group"
              >
                <span className="text-xs text-gray-500 group-hover:text-gray-400 tracking-widest">
                  0{i + 1}
                </span>
                <span className="text-2xl md:text-3xl font-bold tracking-tight">
                  {skill}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Tools &amp; Frameworks
            </p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="text-xs border border-black px-3 py-2 uppercase tracking-widest hover:bg-black hover:text-white transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 border-t border-black bg-black text-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
            04 / Contact
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Let&apos;s Talk.</h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            Open to developer and QA roles. Have a project in mind or just want
            to connect? My inbox is always open.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block px-8 py-4 border border-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            {EMAIL}
          </a>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest text-gray-500">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
              Email
            </a>
            <span className="text-gray-600">Charlotte, NC</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black text-gray-600 px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs uppercase tracking-widest">
          <span>© 2026 Cristian Martin</span>
          <span>Built with React + Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
