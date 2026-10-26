import { ABOUT_SPECS } from "../data/profile";
import { SectionLabel } from "./ui";

export function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-black bg-black text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel dark>04 / About</SectionLabel>
          <h2 className="text-4xl font-bold mb-6">I like hard problems with a product attached.</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I'm a software engineer in Charlotte, NC. Over the last two years I've designed and
            shipped complete products on my own — an iOS + web colorimetry platform with its own
            trained CoreML model, a Stripe-to-Stellar payments app, and the tooling behind an
            autonomous trading agent. Before that I worked in AR development, QA automation and
            technical support, which is where I learned to care about testing and about the people
            on the other end of the software.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I'm looking for a software engineering role where I can build and ship with a team —
            full-stack, mobile, or AI-adjacent. I read the research, measure before I guess, and
            write down what didn't work so nobody has to repeat it.
          </p>
        </div>
        <div className="md:pt-9">
          <div className="border border-gray-700 divide-y divide-gray-800">
            <div className="px-5 py-3 text-xs uppercase tracking-widest bg-white text-black">At a glance</div>
            {ABOUT_SPECS.map(([k, v]) => (
              <div key={k} className="px-5 py-4">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">{k}</p>
                <p className="text-sm leading-snug text-gray-200">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
