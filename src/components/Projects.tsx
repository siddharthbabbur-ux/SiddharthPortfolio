'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '@lib/data';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Premium projects built for impactful experiences.</h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="mb-6 h-48 rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-slate-200 shadow-inner">
                <div className="flex h-full items-end justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured Project</p>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <span className="rounded-3xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">Live</span>
                </div>
              </div>

              <p className="mb-4 text-sm leading-7 text-slate-300">{project.description}</p>
              <p className="mb-6 text-xs uppercase tracking-[0.24em] text-slate-500">{project.stack}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  <FiGithub className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                >
                  Live Demo <FiExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
