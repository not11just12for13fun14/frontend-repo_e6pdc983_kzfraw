import { motion } from "framer-motion";
import { User, Mic, Cpu, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: User, title: "Approach", desc: "Customer walks up to the device." },
  { icon: Mic, title: "Ask", desc: "Speaks or taps a question." },
  { icon: Cpu, title: "Process", desc: "AI parses product data and context." },
  { icon: CheckCircle2, title: "Deliver", desc: "Clear, instant recommendations." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(68,214,165,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="h-[1px] w-10 bg-emerald-400/60" />
          <h2 className="text-lg tracking-wide text-emerald-200">How it works</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-emerald-400/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6"
            >
              <s.icon className="h-6 w-6 text-emerald-300" />
              <h3 className="mt-4 text-white">{s.title}</h3>
              <p className="mt-1 text-emerald-100/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
