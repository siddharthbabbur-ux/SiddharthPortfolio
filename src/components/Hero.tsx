'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const techIcons = ['HTML', 'CSS', 'JS', 'TS', 'React', 'Node'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-24 md:pt-28 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/5" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.22),_transparent_25%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-medium tracking-[0.2em] text-cyan-200 backdrop-blur-xl">
              Elite Developer Portfolio
            </span>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-slate-100">Siddharth Babbur</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Full Stack Developer | AI Enthusiast | Problem Solver. I craft elegant, scalable digital experiences with modern web systems, intelligent interfaces, and premium motion-driven design.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                View Projects
                <FiArrowRight className="ml-3 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),_transparent_22%)]" />
              <div className="relative grid gap-5 sm:grid-cols-2">
                {techIcons.map((label, index) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-center text-sm font-medium text-slate-100 shadow-glow"
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="mt-12 flex items-center justify-start gap-4"
        >
          <div className="h-16 w-16 rounded-3xl border border-cyan-400/10 bg-slate-950/80 p-4 text-center shadow-soft">
            <span className="block h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
          </div>
          <div className="space-y-1 text-sm text-slate-300">
            <p className="uppercase tracking-[0.28em] text-cyan-300">Luxury experience</p>
            <p>World-class design, clean performance, and seamless interactions for every screen.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
