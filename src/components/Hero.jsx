import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute -inset-[20%] rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(12,83,66,0.6),rgba(0,0,0,0.6)_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(68,214,165,0.08),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(68,214,165,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-2 lg:gap-10">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/5 px-3 py-1 text-emerald-300/90 shadow-[0_0_0_1px_rgba(68,214,165,0.1)_inset]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(68,214,165,0.8)]" />
            Ultra-premium in‑store AI
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Askeve — The Future of In‑Store AI Assistance
          </h1>
          <p className="mt-4 max-w-xl text-lg text-emerald-100/80">
            A premium voice‑ and touch‑driven AI advisor for physical retail.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#how"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-400/90 px-6 py-3 text-black shadow-[0_10px_40px_-10px_rgba(68,214,165,0.6)] transition hover:bg-emerald-400"
            >
              See How It Works
              <ArrowRight className="h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-white/5 px-6 py-3 text-emerald-100 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* 3D Spline Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[60vh] w-full md:h-[70vh]"
        >
          <div className="absolute inset-0 rounded-3xl border border-emerald-400/10 bg-gradient-to-b from-white/5 to-white/0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]" />
          <Spline
            scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          {/* Glow accents */}
          <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[radial-gradient(ellipse_at_top_left,rgba(68,214,165,0.25),transparent_60%)]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
