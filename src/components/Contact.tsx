'use client';

import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s build your next digital experience.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft backdrop-blur-xl"
          >
            <p className="text-slate-300 leading-8">
              Ready to collaborate? I&apos;m available for new projects, freelance work, and meaningful partnerships. Reach out with your ideas and let&apos;s create something exceptional.
            </p>
            <div className="mt-8 space-y-5 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Email</p>
                <a href="mailto:siddharthbabbur@gmail.com" className="mt-2 block text-lg text-white hover:text-cyan-300">siddharthbabbur@gmail.com</a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Phone</p>
                <a href="tel:+918623014981" className="mt-2 block text-lg text-white hover:text-cyan-300">+91 8623014981</a>
              </div>
              <div className="space-x-4 pt-4">
                <a href="#" aria-label="GitHub link" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-300">
                  <BsGithub className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn link" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-300">
                  <BsLinkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Twitter link" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-300">
                  <BsTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft backdrop-blur-xl"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10" />
              </label>
            </div>
            <label className="mt-5 space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea rows={5} name="message" placeholder="Tell me about your project" className="w-full rounded-[1.5rem] border border-white/10 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10" />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
