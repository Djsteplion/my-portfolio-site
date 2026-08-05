import { useTheme } from '../contexts/ThemeContext';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { href: '#about', label: 'ABOUT' },
  { href: '#services', label: 'SERVICES' },
  { href: '#portfolio', label: 'PORTFOLIO' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#contact', label: 'CONTACT' },
];

export default function SideNav({ isOpen, onClose }: SideNavProps) {
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    // Let the close animation start before scrolling.
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  return (
    <div
      className="fixed right-0 top-0 z-[7] flex h-full flex-col items-center justify-center gap-[30px] bg-[rgba(17,17,17,0.8)] backdrop-blur-[15px] transition-all duration-500 ease-in-out overflow-hidden"
      style={{ width: isOpen ? '100%' : '0', opacity: isOpen ? 1 : 0 }}
      aria-hidden={!isOpen}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 text-3xl font-bold text-[var(--menu-link-color)] transition-all duration-500 ease-in-out"
        aria-label="Close menu"
      >
        &times;
      </button>

      {isOpen && (
        <div className="flex flex-col items-center gap-5">
          <button onClick={toggleTheme} className="flex h-5 w-5 items-center justify-center" aria-label="Toggle theme">
            <img
              src={theme === 'light' ? '/images/sun (1).png' : '/images/moon (1).png'}
              alt={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="h-full w-full"
            />
          </button>
          <a
            href="/images/Stephen-Olayiwola-Resume.pdf"
            download="Stephen_Olayiwola_Resume"
            className="flex items-center gap-2.5 rounded-md border border-[#444444] px-6 py-2.5 text-xs text-[var(--menu-link-color)] no-underline"
          >
            <span>Resume</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      )}

      {links.map((link) => (
        <div key={link.href} className={isOpen ? 'reveal is-visible' : 'reveal'}>
          <a
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="block text-center text-2xl font-bold tracking-[2px] text-[var(--menu-link-color)] no-underline transition-all duration-500 ease-in-out"
          >
            {link.label}
          </a>
        </div>
      ))}
    </div>
  );
}
