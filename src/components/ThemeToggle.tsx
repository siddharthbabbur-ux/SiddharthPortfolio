'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = theme === 'system' ? resolvedTheme : theme;

  if (!mounted) {
    return <button className="w-11 h-11 rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-200 transition hover:border-white/40" aria-label="Toggle theme" />;
  }

  return (
    <button
      onClick={() => setTheme(activeTheme === 'dark' ? 'light' : 'dark')}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-100 transition hover:border-white/40 hover:text-cyan-300"
      aria-label="Toggle theme"
    >
      {activeTheme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  );
}
