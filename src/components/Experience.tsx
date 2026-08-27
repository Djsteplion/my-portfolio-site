import { useState } from 'react';
import { experienceItems } from '../data/experience';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const [activeId, setActiveId] = useState(experienceItems[0].id);
  const active = experienceItems.find((item) => item.id === activeId) ?? experienceItems[0];

  const titleRef = useScrollReveal<HTMLDivElement>();
  const tabsRef = useScrollReveal<HTMLDivElement>();
  const contentRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="experience"
      className="flex flex-col items-start justify-start bg-[var(--bg-color)] px-[70px] py-[150px] text-[var(--text-main)]
        max-[1024px]:px-5 max-[700px]:mt-[100px] max-[700px]:px-2.5 max-[700px]:py-10"
    >
      <div className="w-full">
        <div ref={titleRef} className="reveal">
          <span className="flex items-center gap-3 text-xs uppercase tracking-[4px] text-[#999999] before:h-0.5 before:w-5 before:bg-[#999999] before:content-['']">
            CAREER PATH
          </span>
          <h2 className="mt-2.5 text-[36px] font-bold tracking-[-0.02em] text-[var(--text-main)]">Work Experiences</h2>
        </div>

        <div
          ref={tabsRef}
          className="reveal mt-[100px] flex flex-row sm:flex-wrap items-center gap-[30px] max-[1024px]:mt-[70px] max-[1024px]:w-full max-[1024px]:!items-center max-[700px]:mt-[30px]"
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
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex h-5 items-center justify-center gap-2.5 rounded-lg px-6 py-[15px] text-[14px] min-w-fit md:text-base transition-colors duration-200 hover:cursor-pointer
                  max-[1024px]:h-5 max-[1024px]:min-w-[120px] max-[1024px]:max-w-[120px]
                  max-[700px]:h-5 max-[700px]:min-w-[70px] max-[700px]:max-w-[70px] max-[700px]:rounded-[5px] max-[700px]:px-2 max-[700px]:py-[5px] max-[700px]:text-[12.52px] max-[700px]:leading-[1.5]
                  ${isActive ? 'bg-[var(--exp-bg-color)] text-[var(--company-label)]' : 'bg-[var(--bg-color)] text-[var(--text-secondary)] hover:bg-[var(--text-main)] hover:text-[var(--bg-color)]'}
                `}
              >
                <p className='text-[10px] md:text-base'>{shortLabel}</p>
                <span className={`max-[1024px]:hidden ${isActive ? '' : ''}`}>&#10095;</span>
              </button>
            );
          })}
        </div>
      </div>

      <div ref={contentRef}  key={activeId} className="reveal is-visible mt-[50px] w-full min-[1025px]:ml-[150px] min-[1025px]:mt-[50px] min-[1025px]:w-auto max-[1024px]:mt-[30px] max-[1024px]:ml-0">
        <div className="flex flex-row items-center">
          <h3 className="text-[22px] text-[var(--text-main)] max-[700px]:text-[17px]">{active.role}</h3>
          {active.companyUrl ? (
            <a
              href={active.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2.5 text-base font-normal text-[var(--text-main)] underline decoration-1 underline-offset-4 max-[700px]:text-xs"
            >
              {active.company}
            </a>
          ) : (
            <span className="ml-2.5 text-[22px] text-[var(--text-main)] max-[700px]:text-xs">{active.company}</span>
          )}
        </div>
       {/* <p className="my-2.5 text-sm text-[#999999]">{active.location}</p>*/ }
        <p className="pt-2.5 text-sm text-[#999999]">{active.timeFrame}</p>

        <div className="my-[15px] flex flex-row flex-wrap items-center gap-2.5">
          {active.tools.map((tool) => (
            <span key={tool} className="rounded border border-[#333] px-3 py-1 text-xs text-[var(--text-main)] hover:cursor-pointer">
              {tool}
            </span>
          ))}
        </div>

        <div className="my-[25px] border-t border-[#333] pt-[25px]">
          {active.responsibilities.map((resp, i) => (
            <p key={i} className="relative mb-[15px] pl-5 leading-[1.4] text-[#999999] before:absolute before:left-0 before:content-['—']">
              {resp}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
