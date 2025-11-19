import { motion, useScroll, useTransform } from "framer-motion";

const ProductVisual = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section className="relative bg-black py-28" aria-label="Product Visual">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(68,214,165,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-emerald-400/10 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
          <motion.div style={{ rotate, scale }} className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-black">
            {/* Placeholder hardware silhouette */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-40 w-72 rounded-2xl bg-gradient-to-b from-white/20 to-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_30px_120px_-40px_rgba(68,214,165,0.4)]" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(68,214,165,0.2),transparent_60%)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductVisual;
