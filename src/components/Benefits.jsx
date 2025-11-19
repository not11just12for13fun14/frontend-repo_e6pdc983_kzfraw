import { motion } from "framer-motion";

const benefits = [
  { title: "Reduce staff workload", desc: "Handle routine questions so teams focus where it matters." },
  { title: "Consistent expertise", desc: "One clear standard across every shift and store." },
  { title: "Increase purchase value", desc: "Tasteful upsell prompts that feel helpful, not pushy." },
  { title: "Higher satisfaction", desc: "Fast, accurate answers build trust instantly." },
  { title: "Operates 24/7", desc: "Always on, always ready, no scheduling." },
  { title: "GDPR compliant", desc: "Privacy built in from day one." },
];

const Benefits = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,120,87,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-emerald-400/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6"
            >
              <h3 className="text-white">{b.title}</h3>
              <p className="mt-1 text-emerald-100/70">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
