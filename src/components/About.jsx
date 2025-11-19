import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-black py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(68,214,165,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-xl leading-relaxed text-emerald-50"
        >
          Built by a team of engineers and retail operators who believe that physical shopping deserves the same clarity, accuracy, and intelligence as online experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
