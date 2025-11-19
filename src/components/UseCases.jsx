import { motion } from "framer-motion";

const tiles = [
  "Fashion retail",
  "Electronics stores",
  "Pharmacies",
  "DIY & hardware",
  "Specialty retail",
];

const UseCases = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(68,214,165,0.08),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-5">
        {tiles.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-emerald-400/10 bg-white/[0.04] p-6 backdrop-blur-sm"
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-b from-white/10 to-transparent p-4 text-white">
              <div className="h-24 w-full rounded-xl bg-[linear-gradient(110deg,rgba(68,214,165,0.2),rgba(68,214,165,0)_40%)]" />
              <p className="mt-4 text-sm text-emerald-100/80">{t}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
