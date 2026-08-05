import type { PortfolioItem } from '../types';

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="flex h-full select-none flex-col overflow-hidden rounded-xl border border-[var(--resume-border)] bg-[var(--card-bg)] transition-all duration-[400ms] ease-in-out hover:cursor-pointer hover:shadow-[0_30px_80px_rgba(255,255,255,0.4)]">
      <img src={item.image} alt={`${item.title} thumbnail`} className="h-[200px] w-full object-cover" draggable={false} />
      <div className="flex h-full w-full flex-col items-start bg-[var(--text-main)] p-5">
        <h4 className="mb-1 text-xl font-bold tracking-[-0.01em] text-[var(--bg-color)]">{item.title}</h4>
        <p className="line-clamp-3 mb-4 text-sm leading-[1.6] text-[#555555]">{item.summary}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {item.languages.map((lang) => (
            <span key={lang} className="rounded-xl border border-[#b0b0b0] px-1.5 py-1 text-xs font-medium text-[#666666]">
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
          <span className="pl-2.5 text-xs text-[#666666]">{item.viewLinkLabel}</span>
        </a>
      </div>
    </div>
  );
}
