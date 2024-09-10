import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-bl from-teal-800 to-zinc-800 flex flex-col items-center justify-center text-teal-100 selection:bg-white/20 selection:text-teal-100">
      <Hero />
      <About />
    </main>
  );
}

export default App;
