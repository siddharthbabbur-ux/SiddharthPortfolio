import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import About from '@components/About';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import Timeline from '@components/Timeline';
import Testimonials from '@components/Testimonials';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.14),_transparent_24%)]" />
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
