import { SKILL_GROUPS } from "../data/skills";
import { SectionLabel } from "./ui";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-black">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>03 / Skills</SectionLabel>
        <h2 className="text-4xl font-bold mb-12">What I Work With</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-black">
          {SKILL_GROUPS.map((g, i) => (
            <div key={g.group} className="border-r border-b border-black px-6 py-8">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-xs text-gray-500 tracking-widest">0{i + 1}</span>
                <h3 className="text-sm uppercase tracking-widest font-bold">{g.group}</h3>
              </div>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-gray-400">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
