import { motion } from "framer-motion";
import { Clock, Brain, TrendingUp, Sparkles } from "lucide-react";

const items = [
  { icon: Clock, title: "Instant Answers.", subtitle: "Zero Wait Time." },
  { icon: Brain, title: "Consistent Expert Knowledge.", subtitle: "Every time." },
  { icon: TrendingUp, title: "Smarter Upselling.", subtitle: "Subtle, relevant, effective." },
  { icon: Sparkles, title: "Human‑level clarity, 24/7.", subtitle: "Always available." },
];

const ValueProps = () => {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(68,214,165,0.08),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-emerald-400/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex items-center gap-3">
              <item.icon className="h-5 w-5 text-emerald-300 drop-shadow-[0_0_12px_rgba(68,214,165,0.6)]" />
              <span className="h-[1px] w-10 bg-gradient-to-r from-emerald-400/60 to-transparent" />
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-emerald-100/70">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
