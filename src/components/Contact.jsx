import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Placeholder submit; replace with your backend endpoint if needed
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(68,214,165,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Request a demo</h2>
          <p className="mt-2 text-emerald-100/70">Tell us about your store and we’ll reach out.</p>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-emerald-400/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-emerald-200">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-emerald-100/40 outline-none focus:border-emerald-400/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-emerald-200">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-emerald-100/40 outline-none focus:border-emerald-400/60"
                placeholder="name@company.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm text-emerald-200">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-emerald-100/40 outline-none focus:border-emerald-400/60"
              placeholder="What would you like to achieve with Askeve?"
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-emerald-100/60">We respond within one business day.</p>
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="rounded-full bg-emerald-400/90 px-6 py-3 text-black shadow-[0_10px_40px_-10px_rgba(68,214,165,0.6)] transition hover:bg-emerald-400"
            >
              {status === "loading" ? "Sending…" : status === "success" ? "Sent ✓" : "Request Demo"}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
