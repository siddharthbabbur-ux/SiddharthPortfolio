'use client';

import { motion } from 'framer-motion';
import { skills } from '@lib/data';

const gradients = [
  'from-purple-500 to-cyan-400',
  'from-sky-500 to-violet-500',
  'from-fuchsia-500 to-cyan-300'
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Technologies I work with every day.</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft backdrop-blur-xl"
            >
              <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className={`h-full w-full bg-gradient-to-r ${gradients[index % gradients.length]} transition group-hover:scale-x-105`} />
              </div>
              <p className="text-lg font-semibold text-white">{skill}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">Expertise in {skill} for modern web products, fast experiences, and intuitive interfaces.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
