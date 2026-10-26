import { PROJECTS, type Project } from "../data/projects";
import { SectionLabel, Tag } from "./ui";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <article
      id={`project-${project.slug}`}
      className="border-t border-black py-14 grid md:grid-cols-12 gap-8 md:gap-12"
    >
      {/* Left column: identity */}
      <div className="md:col-span-4">
        <div className="flex items-baseline justify-between md:block">
          <span className="text-xs text-gray-500 uppercase tracking-widest">{n}</span>
          <span className="text-xs text-gray-500 uppercase tracking-widest md:block md:mt-1">
            {project.period}
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.tagline}</p>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">{project.role}</p>

        {project.image && (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="w-full border border-black mb-6"
          />
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <div className="text-xs uppercase tracking-widest text-gray-500 space-y-2">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="block text-black hover:underline underline-offset-4"
            >
              ↗ {l.label}
            </a>
          ))}
          <p>{project.code}</p>
        </div>
      </div>

      {/* Right column: case study */}
      <div className="md:col-span-8 space-y-8">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Problem</p>
          <p className="text-gray-700 leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">What I built</p>
          <ul className="space-y-3">
            {project.built.map((b, i) => (
              <li key={i} className="text-gray-700 leading-relaxed flex gap-3">
                <span className="text-gray-400 shrink-0">→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Outcome</p>
          <p className="text-gray-700 leading-relaxed">{project.outcome}</p>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-black">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>01 / Projects</SectionLabel>
        <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          Products I designed and built end to end. Source for these is private; I'm happy to walk
          through the code and architecture in a call.
        </p>
        <div>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
