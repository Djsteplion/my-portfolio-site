import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useImagePreload } from './hooks/useImagePreload';
import { allSiteImages } from './data/images';
import Loader from './components/Loader';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { loaded, progress } = useImagePreload(allSiteImages);
  const [menuOpen, setMenuOpen] = useState(false);

  // Requirement #4: don't mount the site at all until every image is
  // loaded (or has failed/timed out) — only the loader is shown until then.
  if (!loaded) {
    return <Loader progress={progress} />;
  }

  return (
    <ThemeProvider>
      <SideNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <section className="text-[var(--text-main)]">
        <Header onOpenMenu={() => setMenuOpen(true)} />
        <Hero />
      </section>
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
