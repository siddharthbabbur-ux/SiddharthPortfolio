'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '@lib/data';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
          Siddharth
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-200 transition hover:border-white/40 md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-slate-200 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
