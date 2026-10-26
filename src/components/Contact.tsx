import { PROFILE } from "../data/profile";
import { SectionLabel } from "./ui";

export function Contact() {
  const links: { label: string; href: string }[] = [
    { label: "GitHub", href: PROFILE.github },
    ...(PROFILE.linkedin ? [{ label: "LinkedIn", href: PROFILE.linkedin }] : []),
    ...(PROFILE.resume ? [{ label: "Résumé", href: PROFILE.resume }] : []),
    { label: "Email", href: `mailto:${PROFILE.email}` },
  ];

  return (
    <section id="contact" className="py-24 px-6 border-t border-black">
      <div className="max-w-5xl mx-auto text-center">
        <SectionLabel>05 / Contact</SectionLabel>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Let&apos;s Talk.</h2>
        <p className="text-gray-600 mb-10 max-w-md mx-auto">
          Open to software engineering roles — full-stack, iOS, or AI/ML — in Charlotte or remote.
          Want a walkthrough of any project? Email me.
        </p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-block px-8 py-4 border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
        >
          {PROFILE.email}
        </a>
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest text-gray-500">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="hover:text-black transition-colors"
            >
              {l.label}
            </a>
          ))}
          <span className="text-gray-400">{PROFILE.location}</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black px-6 py-6 text-gray-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs uppercase tracking-widest">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>React · TypeScript · Tailwind · Vite</span>
      </div>
    </footer>
  );
}
