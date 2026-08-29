import { useEffect, useRef } from 'react';
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    onClose();

    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      window.history.replaceState(null, '', href);
    }, 150);
  };

  return (
    <aside
      id="mobile-navigation"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      className="fixed right-0 top-0 z-[7] flex h-full flex-col items-center justify-center gap-[30px] overflow-hidden bg-[rgba(17,17,17,0.8)] backdrop-blur-[15px] transition-all duration-500 ease-in-out"
      style={{
        width: isOpen ? '100%' : '0',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 rounded-sm border-0 bg-transparent text-3xl font-bold text-[var(--menu-link-color)] transition-all duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6C63FF]"
        aria-label="Close navigation menu"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <div className="flex flex-col items-center gap-5">
        <button
          type="button"
          onClick={toggleTheme}
          className="flex h-5 w-5 items-center justify-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6C63FF]"
          aria-label={
            theme === 'light'
              ? 'Switch to dark mode'
              : 'Switch to light mode'
          }
          title={
            theme === 'light'
              ? 'Switch to dark mode'
              : 'Switch to light mode'
          }
        >
          <img
            src={
              theme === 'light'
                ? '/images/sun (1).png'
                : '/images/moon (1).png'
            }
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="h-full w-full"
          />
        </button>

        <a
          href="/images/Stephen-Olayiwola-Resume.pdf"
          download="Stephen_Olayiwola_Resume.pdf"
          className="flex items-center gap-2.5 rounded-md border border-[#444444] px-6 py-2.5 text-xs text-[var(--menu-link-color)] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF]"
          aria-label="Download Stephen Olayiwola's resume as a PDF"
        >
          <span>Resume</span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>

      <nav aria-label="Primary navigation">
        <ul className="flex flex-col items-center gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <div className={isOpen ? 'reveal is-visible' : 'reveal'}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block rounded-sm text-center text-2xl font-bold tracking-[2px] text-[var(--menu-link-color)] no-underline transition-all duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6C63FF]"
                >
                  {link.label}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}