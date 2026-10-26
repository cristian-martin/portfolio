import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen font-mono">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
