'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface text-slate-100">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        className="h-16 w-16 rounded-full border-4 border-cyan-300 border-t-transparent"
      />
    </div>
  );
}
