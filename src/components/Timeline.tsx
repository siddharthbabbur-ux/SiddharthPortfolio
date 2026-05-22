'use client';

import { motion } from 'framer-motion';
import { timeline } from '@lib/data';

export default function Timeline() {
  return (
    <section id="journey" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Journey</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Experience mapped in a premium timeline.</h2>
        </div>

        <div className="relative ml-4 before:absolute before:-left-1 before:top-0 before:h-full before:w-px before:bg-white/10">
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="relative pl-8"
              >
                <span className="absolute left-[-1.35rem] top-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-xs font-semibold text-slate-950">
                  {item.year}
                </span>
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.year}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
