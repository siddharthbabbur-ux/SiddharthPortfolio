import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="pb-16 pt-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 text-center text-slate-400">
        <p>Built with passion by Siddharth Babbur</p>
        <a
          href="#home"
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-300"
        >
          Scroll to Top <FiArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
