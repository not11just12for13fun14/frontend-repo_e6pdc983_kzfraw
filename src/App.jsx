import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import FeatureCards from "./components/FeatureCards";
import ProductVisual from "./components/ProductVisual";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import UseCases from "./components/UseCases";
import SoftMetrics from "./components/SoftMetrics";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Global subtle vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_4px_rgba(68,214,165,0.6)]" />
            <span className="text-sm tracking-wide text-emerald-100/90">Askeve</span>
          </div>
          <nav className="hidden gap-6 text-sm text-emerald-100/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <ValueProps />
        <section id="features">
          <FeatureCards />
        </section>
        <ProductVisual />
        <HowItWorks />
        <Benefits />
        <UseCases />
        <SoftMetrics />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-emerald-100/60">
        © {new Date().getFullYear()} Askeve. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
