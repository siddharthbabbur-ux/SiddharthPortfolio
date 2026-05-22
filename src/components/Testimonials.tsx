'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">What partners say about working together.</h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft backdrop-blur-xl"
            >
              <p className="mb-6 text-slate-300 leading-8">“{item.quote}”</p>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-white">{item.name}</p>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
