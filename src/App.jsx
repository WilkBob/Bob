import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProgressMeter from "./components/ProgressMeter";
import Projects from "./components/Projects/Projects";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const sectionIds = ["hero", "about", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);
  return (
    <main className="min-h-screen bg-gradient-to-bl from-teal-800 to-zinc-800 flex flex-col items-center justify-center text-teal-100 selection:bg-white/20 selection:text-teal-100">
      <ProgressMeter sectionIDs={sectionIds} currentID={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
