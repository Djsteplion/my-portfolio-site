import { useState } from 'react';
import type { PortfolioItem } from '../types';

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex h-full select-none flex-col overflow-hidden rounded-xl border border-[var(--resume-border)] bg-[var(--card-bg)] transition-all duration-[400ms] ease-in-out hover:cursor-pointer hover:shadow-[0_30px_80px_rgba(255,255,255,0.4)]">
      
      {/* Image with skeleton loader */}
      <div className="relative h-[160px] min-h-[160px] w-full shrink-0 overflow-hidden bg-[var(--card-bg)]">
        {!imageLoaded && (
          <div className="absolute inset-0 z-10 overflow-hidden bg-[var(--card-bg)]">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[var(--resume-border)] to-transparent" />
          </div>
        )}

        <img
          src={item.image}
          alt={`${item.title} thumbnail`}
          onLoad={() => setImageLoaded(true)}
          className={`absolute top-[-6px] md:top-0 md:bottom-0 md:left-0 min-h-full min-w-full object-contain transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          draggable={false}
        />
      </div>

      <div className="flex h-full w-full flex-col items-start bg-[var(--text-main)] p-5">
        <h4 className="mb-1 text-xl font-bold tracking-[-0.01em] text-[var(--bg-color)]">
          {item.title}
        </h4>

        <p className="mb-4 line-clamp-3 text-sm leading-[1.6] text-[#888888]">
          {item.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {item.languages.map((lang) => (
            <span
              key={lang}
              className="rounded-xl border border-[#b0b0b0] px-1.5 py-1 text-xs font-medium text-[#666666]"
            >
              {lang}
            </span>
          ))}
        </div>

        <a
          href={item.viewLinkUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2.5 flex w-fit flex-row items-center rounded-xl border border-[#b0b0b0] px-2.5 py-[5px] no-underline transition-transform duration-300 hover:cursor-pointer"
        >
          <img src="/images/Link (1).png" alt="site-link icon" className="h-2.5 w-5" />
          <span className="pl-2.5 text-xs text-[#8f8c8c]">{item.viewLinkLabel}</span>
        </a>
      </div>
    </div>
  );
}