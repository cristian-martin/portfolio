import { HERO_SPECS, PROFILE } from "../data/profile";
import { Button, SpecCard } from "./ui";

export function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center py-28">
        <div>
          <p className="text-xs uppercase tracking-widest mb-6 text-gray-500">
            {PROFILE.title} · {PROFILE.location}
          </p>
          <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tight mb-6">
            Cristian
            <br />
            Martin.
          </h1>
          <p className="text-lg text-gray-600 max-w-md mb-10">{PROFILE.tagline}</p>
          <div className="flex gap-4 flex-wrap">
            <Button href="#projects">View Projects</Button>
            <Button href={PROFILE.github} variant="outline" external>
              GitHub
            </Button>
            {PROFILE.resume && (
              <Button href={PROFILE.resume} variant="outline" external>
                Résumé
              </Button>
            )}
          </div>
        </div>
        <div className="w-full md:max-w-xs md:justify-self-end">
          <SpecCard items={HERO_SPECS} />
        </div>
      </div>
    </section>
  );
}
