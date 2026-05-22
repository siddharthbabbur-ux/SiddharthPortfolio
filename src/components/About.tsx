'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A thoughtful developer building high-impact digital products.</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft backdrop-blur-xl"
          >
            <p className="leading-8 text-slate-300">
              I am passionate about building polished web experiences that merge sharp aesthetics with intuitive performance. My work focuses on clean UI/UX, scalable systems, and modern architecture that supports ambitious product goals.
            </p>
            <p className="mt-6 leading-8 text-slate-300">
              Strong across frontend and backend technologies, I enjoy bringing AI-enabled workflows and intelligent automation to life with a developer-first mindset.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-5"
          >
            {[
              'Passionate developer with a strong eye for elegant product details.',
              'Fluent in both frontend and backend stacks for full product delivery.',
              'Focused on AI, modern web apps, and progressive digital experiences.',
              'Loves crafting clean interfaces with accessible, responsive layouts.',
              'Driven to build scalable systems with a premium developer experience.'
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300 shadow-glow">
                <p>{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
