import { useState } from 'react';
import { usePostHog } from '@posthog/react';

import type { PortfolioItem } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const posthog = usePostHog();

  const handleProjectClick = () => {
    posthog.capture(
      `This site ${item.title} at ${item.viewLinkUrl} has just been clicked, from the PROJECTS SECTION in my PORTFOLIO WEBSITE`,
    );
  };

  return (
    <article className="flex h-full select-none flex-col overflow-hidden rounded-xl border border-[var(--resume-border)] bg-[var(--card-bg)] transition-all duration-[400ms] ease-in-out hover:cursor-pointer hover:shadow-[0_30px_80px_rgba(255,255,255,0.4)]">
      <div className="relative h-[160px] min-h-[160px] w-full shrink-0 overflow-hidden bg-[var(--card-bg)]">
        {!imageLoaded && (
          <div
            className="absolute inset-0 z-10 overflow-hidden bg-[var(--card-bg)]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[var(--resume-border)] to-transparent" />
          </div>
        )}

        <img
          src={item.image}
          alt={`${item.title} project preview`}
          width={640}
          height={360}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          draggable={false}
          className={`absolute top-[-6px] min-h-full min-w-full object-contain transition-opacity duration-300 md:bottom-0 md:left-0 md:top-0 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="flex h-full w-full flex-col items-start bg-[var(--card-bg)] p-5">
        <h3 className="mb-1 text-xl font-bold tracking-[-0.01em] text-[var(--text-main)]">
          {item.title}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm leading-[1.6] text-[var(--portfolio-summary-text)]">
          {item.summary}
        </p>

        <ul
          className="mt-auto flex flex-wrap gap-2"
          aria-label={`${item.title} technologies`}
        >
          {item.languages.map((lang) => (
            <li
              key={lang}
              className="list-none rounded-xl border border-[#b0b0b0] px-1.5 py-1 text-xs font-medium text-[var(--portfolio-lang)]"
            >
              {lang}
            </li>
          ))}
        </ul>

        <a
          href={item.viewLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleProjectClick}
          aria-label={`${item.viewLinkLabel}: ${item.title} (opens in a new tab)`}
          className="mt-2.5 flex w-fit flex-row items-center rounded-xl border border-[#b0b0b0] px-2.5 py-[5px] no-underline transition-transform duration-300 hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF]"
        >
          <img
            //src="/images/Link.png"
            src={ theme === 'light'
              ? '/images/link-24.png'
              : '/images/link-5-24.png'}
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            loading="lazy"
            decoding="async"
            className="h-3 w-3"
          />

          <span className={`pl-2.5 text-xs ${theme === 'light' ? 'text-neutral-700' : 'text-[#f9f7f7]'}`}>
            {item.viewLinkLabel}
          </span>
        </a>
      </div>
    </article>
  );
}