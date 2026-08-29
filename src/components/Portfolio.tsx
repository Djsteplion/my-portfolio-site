import { useMemo, useState } from 'react';
import { usePostHog } from '@posthog/react';

import { portfolioItems } from '../data/portfolio';
import type { FilterValue } from '../types';
import { useCarousel } from '../hooks/useCarousel';
import { useSwipe } from '../hooks/useSwipe';
import PortfolioCard from './PortfolioCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const filters: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Landing Pages', value: 'landing pages' },
  { label: 'e-commerce', value: 'e-commerce' },
  { label: 'SaaS', value: 'SaaS' },
  { label: 'Finance & Crypto', value: 'crypto' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const headerRef = useScrollReveal<HTMLDivElement>();
  const containerRef = useScrollReveal<HTMLDivElement>();
  const posthog = usePostHog();

  const filteredItems = useMemo(
    () =>
      activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  const {
    slidesPerView,
    next,
    prev,
    canGoNext,
    canGoPrev,
    trackPercent,
  } = useCarousel(filteredItems);

  const swipeHandlers = useSwipe(next, prev);

  const handleFilterChange = (value: FilterValue, label: string) => {
    setActiveFilter(value);

    posthog.capture(
      `The filter ${label} tab has been clicked, on the PORTFOLIO SECTION in my PORTFOLIO WEBSITE`,
    );
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="bg-[var(--bg-color)] px-[70px] pb-[30px] pt-[110px] text-[var(--text-main)] max-[1024px]:px-5 max-[1024px]:pb-[100px] max-[1024px]:pt-[150px] max-[700px]:px-2.5 max-[700px]:pb-0 max-[700px]:pt-[30px]"
    >
      <div
        ref={headerRef}
        className="reveal flex flex-row items-end justify-between pb-[60px] max-[700px]:pr-[15px]"
      >
        <div className="flex flex-col items-start">
          <p
            className="flex items-center gap-3 text-xs uppercase tracking-[4px] text-[#999999] before:h-0.5 before:w-5 before:bg-[#999999] before:content-['']"
            aria-hidden="true"
          >
            My Works
          </p>

          <h2
            id="portfolio-title"
            className="mt-2.5 text-[36px] font-bold text-[#2A2C3C] max-[768px]:text-[36px]"
          >
            Featured Portfolios
          </h2>
        </div>

        <div
          className="flex flex-row gap-4"
          aria-label="Portfolio carousel controls"
        >
          <button
            type="button"
            onClick={prev}
            disabled={!canGoPrev}
            aria-label="Previous projects"
            className="flex items-center justify-center rounded-[18px] border-none p-2.5 text-lg outline-none transition-all duration-300 hover:cursor-pointer hover:scale-125 hover:bg-[#F0F0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-transparent"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            disabled={!canGoNext}
            aria-label="Next projects"
            className="flex items-center justify-center rounded-[18px] border-none p-2.5 text-lg outline-none transition-all duration-300 hover:cursor-pointer hover:scale-125 hover:bg-[#F0F0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-transparent"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="mb-2.5 flex flex-row items-center justify-center gap-2.5 max-[500px]:flex-wrap"
        role="group"
        aria-label="Filter portfolio projects"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() =>
                handleFilterChange(filter.value, filter.label)
              }
              aria-pressed={isActive}
              className={`rounded-[20px] border px-[15px] py-1.5 text-[13px] transition-all duration-300 hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF] ${
                isActive
                  ? 'border-[#6C63FF] bg-[#6C63FF] text-white'
                  : 'border-[var(--resume-border)] bg-transparent text-[var(--text-secondary)] hover:border-[#6C63FF] hover:text-[var(--text-main)]'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div
        ref={containerRef}
        className="reveal relative bg-[var(--bg-color)] pt-2.5"
        aria-live="polite"
        aria-atomic="true"
      >
        <div
          className="overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured portfolio projects"
        >
          <div
            className="flex touch-pan-y transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${trackPercent}%)`,
              willChange: 'transform',
            }}
            {...swipeHandlers}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="mt-[30px] shrink-0 px-2.5"
                style={{ width: `${100 / slidesPerView}%` }}
                role="group"
                aria-roledescription="slide"
                aria-label={`Project ${index + 1} of ${filteredItems.length}`}
              >
                <PortfolioCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 && (
          <p className="py-10 text-center text-[var(--text-secondary)]">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}