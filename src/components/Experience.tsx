import { EXPERIENCE } from "../data/experience";
import { SectionLabel, Tag } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-black bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel dark>02 / Experience</SectionLabel>
        <h2 className="text-4xl font-bold mb-12">Where I've Worked</h2>
        <div className="grid md:grid-cols-3 gap-px bg-gray-700">
          {EXPERIENCE.map((job, i) => (
            <div key={job.company} className="bg-black p-8 hover:bg-gray-900 transition-colors">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs text-gray-500 uppercase tracking-widest">0{i + 1}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">{job.period}</span>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-1">{job.role}</h3>
              <p className="text-sm text-gray-400 mb-1">{job.company}</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">{job.location}</p>
              <ul className="space-y-2 mb-6">
                {job.points.map((point) => (
                  <li key={point} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                    <span className="text-gray-600">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <Tag key={tag} dark>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
