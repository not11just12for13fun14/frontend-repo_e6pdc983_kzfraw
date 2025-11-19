import { motion } from "framer-motion";
import { Mic, Touchpad, BookOpen, Languages, Shield, Store } from "lucide-react";

const features = [
  { icon: Mic, title: "Voice + Touch interaction", desc: "Natural speech and tactile controls designed for retail floors." },
  { icon: BookOpen, title: "Product knowledge engine", desc: "Answers grounded in your catalog, specs, and policies." },
  { icon: Touchpad, title: "Upselling suggestions", desc: "Tasteful, context-aware recommendations." },
  { icon: Languages, title: "Multilingual support", desc: "Serve diverse customers in their language." },
  { icon: Shield, title: "Privacy-first architecture", desc: "On-device guardrails and data minimization." },
  { icon: Store, title: "Works standalone in-store", desc: "No phones, no apps — just walk up and ask." },
];

const FeatureCards = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,120,87,0.15),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.04 }}
            viewport={{ once: true }}
            className="group rounded-3xl border border-emerald-400/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-[0_25px_80px_-40px_rgba(68,214,165,0.25)]"
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <f.icon className="h-6 w-6 text-emerald-300 drop-shadow-[0_0_12px_rgba(68,214,165,0.7)]" />
              <span className="h-[1px] w-12 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-emerald-100/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
