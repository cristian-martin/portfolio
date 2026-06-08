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

const GITHUB_URL = "https://github.com/cristian-martin";
const EMAIL = "cristian.msf23@gmail.com";

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
          <span className="font-bold text-lg tracking-widest uppercase">
            CM.
          </span>
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
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto relative">
        <p className="text-xs uppercase tracking-widest mb-6 text-gray-500">
          Available for work · Charlotte, NC
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-6">
          Cristian
          <br />
          Martin.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-10">
          Developer and Information Systems Technology graduate. I build clean,
          reliable software — from QA automation to web and iOS apps.
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
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gray-300 animate-pulse" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-black">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              01 / About
            </p>
            <h2 className="text-4xl font-bold mb-6">Driven to build and ship.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a developer with a B.S. in Information Systems Technology from
              Miami Dade College (2023, 3.52 GPA). My background spans QA
              automation, full-stack fundamentals, and mobile development — with
              hands-on coursework in CS50x (Python) and iPhone app development
              (Swift).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Self-motivated and detail-oriented, I care about writing clean code
              and solving problems that create real value for the teams I work
              with. Now based in Charlotte, NC.
            </p>
          </div>
          <div className="border border-black p-1">
            <div className="bg-gray-100 aspect-square flex items-center justify-center">
              <span className="text-8xl font-bold text-gray-200 select-none">
                CM
              </span>
            </div>
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
          <div className="flex flex-wrap gap-0">
            {SKILLS.map((skill, i) => (
              <div
                key={i}
                className="border border-black px-6 py-4 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors cursor-default -ml-px -mt-px"
              >
                {skill}
              </div>
            ))}
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
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Let&apos;s Talk.
          </h2>
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
          <div className="mt-16 flex justify-center gap-8 text-xs uppercase tracking-widest text-gray-500">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-white transition-colors"
            >
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
