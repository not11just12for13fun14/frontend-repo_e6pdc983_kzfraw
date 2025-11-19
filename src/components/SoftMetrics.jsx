import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { label: "Faster decisions", value: 2.1, suffix: "x" },
  { label: "Higher conversions", value: 18, suffix: "%" },
  { label: "Lower costs", value: 22, suffix: "%" },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <span ref={ref} className="text-4xl font-semibold text-white">
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {value}
      </motion.span>
      <span className="text-emerald-300">{suffix}</span>
    </span>
  );
};

const SoftMetrics = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,120,87,0.12),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-emerald-400/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 text-center"
          >
            <Counter value={m.value} suffix={m.suffix} />
            <p className="mt-2 text-emerald-100/70">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SoftMetrics;
