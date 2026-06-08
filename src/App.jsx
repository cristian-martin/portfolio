import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Contact"];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping experience with real-time inventory and payment integration.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Design System",
    description:
      "Component library used across 5 products, reducing UI inconsistencies by 80%.",
    tags: ["TypeScript", "Storybook", "SCSS"],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization platform processing 1M+ events daily.",
    tags: ["Python", "D3.js", "Redis"],
  },
];

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Figma",
  "GraphQL",
];

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
            JD.
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
          Available for work
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-6">
          John
          <br />
          Doe.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-10">
          Full-stack developer crafting minimal, purposeful digital experiences.
          I turn complex problems into clean code.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            View Work
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
            <h2 className="text-4xl font-bold mb-6">Simplicity is the key.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a developer with 5+ years of experience building web
              applications. I care deeply about performance, accessibility, and
              clean architecture.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, I'm exploring minimal design, reading about
              systems thinking, or hiking somewhere remote.
            </p>
          </div>
          <div className="border border-black p-1">
            <div className="bg-gray-100 aspect-square flex items-center justify-center">
              <span className="text-8xl font-bold text-gray-200 select-none">
                JD
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 border-t border-black bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
            02 / Projects
          </p>
          <h2 className="text-4xl font-bold mb-12">Selected Work</h2>
          <div className="grid md:grid-cols-3 gap-px bg-gray-700">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className="bg-black p-8 hover:bg-gray-900 transition-colors group cursor-pointer"
              >
                <span className="text-xs text-gray-500 uppercase tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3 group-hover:underline underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
          <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
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
            Have a project in mind or just want to connect? My inbox is always
            open.
          </p>
          <a
            href="mailto:hello@johndoe.com"
            className="inline-block px-8 py-4 border border-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            hello@johndoe.com
          </a>
          <div className="mt-16 flex justify-center gap-8 text-xs uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black text-gray-600 px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs uppercase tracking-widest">
          <span>© 2026 John Doe</span>
          <span>Built with React + Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
