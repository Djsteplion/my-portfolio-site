import { useEffect, useState } from 'react';

import { experienceItems } from '../data/experience';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const [activeId, setActiveId] = useState(experienceItems[0]?.id);
  const [showAllResponsibilities, setShowAllResponsibilities] = useState(false);

  const active =
    experienceItems.find((item) => item.id === activeId) ??
    experienceItems[0];

  const titleRef = useScrollReveal<HTMLDivElement>();
  const tabsRef = useScrollReveal<HTMLDivElement>();
  const contentRef = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    setShowAllResponsibilities(false);
  }, [activeId]);

  if (!active) {
    return null;
  }

  const visibleResponsibilities = showAllResponsibilities
    ? active.responsibilities
    : active.responsibilities.slice(0, 5);

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="flex flex-col items-start justify-start bg-[var(--bg-color)] px-[70px] py-[150px] text-[var(--text-main)] max-[1024px]:px-5 max-[700px]:mt-[100px] max-[700px]:px-2.5 max-[700px]:py-10"
    >
      <div className="w-full">
        <div ref={titleRef} className="reveal">
          <p
            className="flex items-center gap-3 text-xs uppercase tracking-[4px] text-[#999999] before:h-0.5 before:w-5 before:bg-[#999999] before:content-['']"
            aria-hidden="true"
          >
            CAREER PATH
          </p>

          <h2
            id="experience-title"
            className="mt-2.5 text-[36px] font-bold tracking-[-0.02em] text-[var(--text-main)]"
          >
            Work Experiences
          </h2>
        </div>

        <div
          ref={tabsRef}
          className="reveal mt-[100px] flex flex-row flex-wrap items-center gap-[10px] md:gap-[30px] max-[1024px]:mt-[70px] max-[1024px]:w-full max-[1024px]:!items-center max-[700px]:mt-[30px]"
          role="tablist"
          aria-label="Work experience companies"
        >
          {experienceItems.map((item) => {
            const isActive = item.id === activeId;

            const shortLabel =
              item.company === 'CreatorRealm'
                ? 'CreatorRealm'
                : item.company === 'ATC-AFRICA'
                  ? 'AtcAfrica'
                  : item.company === 'SABO'
                    ? 'Sabo'
                    : 'Jojega';

            const tabId = `experience-tab-${item.id}`;
            const panelId = `experience-panel-${item.id}`;

            return (
              <button
                key={item.id}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(item.id)}
                className={`flex h-5 min-w-fit items-center justify-center gap-2.5 rounded-lg px-10 py-[15px] text-[14px] transition-colors duration-200 hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF] md:text-base max-[1024px]:min-w-[120px] max-[1024px]:max-w-[120px] max-[700px]:h-5 max-[700px]:min-w-[70px] max-[700px]:max-w-[100px] max-[700px]:rounded-[2.5px] max-[700px]:px-4 max-[700px]:py-[5px] max-[700px]:text-[12.52px] max-[700px]:leading-[1.5] ${
                  isActive
                    ? 'bg-[var(--exp-bg-color)] text-[var(--company-label)]'
                    : 'bg-[var(--bg-color)] text-[var(--text-secondary)] hover:bg-[var(--text-main)] hover:text-[var(--bg-color)]'
                }`}
              >
                <span className="text-[12px] md:text-base">
                  {shortLabel}
                </span>

                <span
                  className="max-[1024px]:hidden"
                  aria-hidden="true"
                >
                  &#10095;
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        ref={contentRef}
        key={activeId}
        id={`experience-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`experience-tab-${active.id}`}
        tabIndex={0}
        className="reveal is-visible mt-[50px] w-full outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6C63FF] min-[1025px]:ml-[150px] min-[1025px]:mt-[50px] min-[1025px]:w-auto max-[1024px]:mt-[30px] max-[1024px]:ml-0"
      >
        <div className="flex flex-row items-center">
          <h3 className="text-[22px] text-[var(--text-main)] max-[700px]:text-[17px]">
            {active.role}
          </h3>

          {active.companyUrl ? (
            <a
              href={active.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${active.company} website (opens in a new tab)`}
              className="ml-2.5 rounded-sm text-base font-normal text-[var(--text-main)] underline decoration-1 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF] max-[700px]:text-xs"
            >
              {active.company}
            </a>
          ) : (
            <span className="ml-2.5 text-[22px] text-[var(--text-main)] max-[700px]:text-xs">
              {active.company}
            </span>
          )}
        </div>

        <p className="pt-2.5 text-sm text-[#999999]">
          <span className="sr-only">Employment period: </span>
          {active.timeFrame}
        </p>

        <ul
          className="my-[15px] flex flex-row flex-wrap items-center gap-2.5"
          aria-label={`${active.company} technologies and tools`}
        >
          {active.tools.map((tool) => (
            <li
              key={tool}
              className="list-none rounded border border-[#333] px-3 py-1 text-xs text-[var(--text-main)]"
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="my-[25px] border-t border-[#333] pt-[25px]">
          <h4 className="sr-only">Responsibilities</h4>

          <ul aria-label={`${active.company} responsibilities`}>
            {visibleResponsibilities.map((resp, index) => (
              <li
                key={`${active.id}-responsibility-${index}`}
                className="relative mb-[15px] pl-5 leading-[1.4] text-[#999999] before:absolute before:left-0 before:content-['—']"
              >
                {resp}
              </li>
            ))}
          </ul>

          {active.responsibilities.length > 5 && (
            <button
              type="button"
              onClick={() =>
                setShowAllResponsibilities((previous) => !previous)
              }
              aria-expanded={showAllResponsibilities}
              className="mt-2.5 rounded-md border border-[#333] px-4 py-2 text-sm text-[var(--text-main)] transition-colors duration-200 hover:cursor-pointer hover:border-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF]"
            >
              {showAllResponsibilities ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}