import About from "./components/About";
import Hero from "./components/Hero";
import ProgressMeter from "./components/ProgressMeter";
import Projects from "./components/Projects";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const sectionIds = ["hero", "about", "projects"];
  const activeSection = useActiveSection(sectionIds);
  return (
    <main className="min-h-screen bg-gradient-to-bl from-teal-800 to-zinc-800 flex flex-col items-center justify-center text-teal-100 selection:bg-white/20 selection:text-teal-100">
      <Hero />
      <About />
      <Projects />
      <ProgressMeter sectionIDs={sectionIds} currentID={activeSection} />
    </main>
  );
}

export default App;
