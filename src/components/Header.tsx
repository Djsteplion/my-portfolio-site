import { useTheme } from '../contexts/ThemeContext';
import { useScrolled } from '../hooks/useScrolled';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  const scrolled = useScrolled(50);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[3] flex flex-row items-center justify-between transition-all duration-300 ease-in-out ${
        scrolled
          ? 'border-b border-white/10 bg-[var(--header-glass)] px-[70px] py-[15px] backdrop-blur-[10px] max-[1024px]:px-[15px] max-[700px]:px-[11px] max-[700px]:pb-[5px] max-[700px]:pt-[15px]'
          : 'bg-transparent px-[50px] py-5 max-[1024px]:px-[10px]'
      }`}
    >
      <a className="flex flex-row items-center gap-[5px] text-[22px] font-bold tracking-[-0.5px] no-underline max-[1024px]:text-[19px]" href="#">
        <span className="text-logoAccent">Stephen</span>
        <span className="text-[var(--text-main)]">Olayiwola</span>
      </a>

      <nav className="hidden flex-row items-center justify-between min-[701px]:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="px-2.5 text-sm font-medium tracking-[0.5px] text-[var(--link-color)] opacity-70 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 max-[1024px]:px-2 max-[1024px]:text-xs"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden flex-row items-center justify-center min-[701px]:flex">
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
          className="ml-[15px] flex items-center justify-center rounded-md border border-[var(--resume-border)] px-6 py-2.5 text-xs text-[var(--text-main)] no-underline"
        >
          Resume
        </a>
      </div>

      <div
        onClick={onOpenMenu}
        className="hidden text-xl text-[var(--menu-icon-color)] min-[701px]:hidden max-[700px]:block"
        role="button"
        aria-label="Open menu"
      >
        &#9776;
      </div>
    </div>
  );
}
