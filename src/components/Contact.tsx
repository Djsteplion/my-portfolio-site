import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const titleRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mt-[70px] bg-[var(--bg-color)] px-[70px] py-2.5 max-[1024px]:px-5 max-[700px]:px-2.5"
    >
      <div ref={titleRef} className="reveal">
        <p
          className="flex items-center gap-3 text-xs uppercase tracking-[4px] text-[#999999] before:h-0.5 before:w-5 before:bg-[#999999] before:content-['']"
          aria-hidden="true"
        >
          GET IN TOUCH
        </p>

        <h2
          id="contact-title"
          className="mt-2.5 text-[36px] font-bold text-[var(--text-main)]"
        >
          Contact Me
        </h2>
      </div>

      <div className="mt-[30px] flex w-full flex-col-reverse items-start gap-[50px] pb-[30px] min-[1025px]:mt-[50px] min-[1025px]:flex-row min-[1025px]:items-start min-[1025px]:gap-[100px]">
        <address className="not-italic">
          {/*<div className="mt-[30px] flex flex-row items-center gap-2.5">
            <img
              src="/images/Icon (9).png"
              alt=""
              aria-hidden="true"
              width={56}
              height={56}
              loading="lazy"
              decoding="async"
              className="h-14 w-14"
            />

            <div>
              <h3 className="pb-3 text-sm font-normal text-[var(--contact-text)]">
                Location
              </h3>
              <p className="text-base text-[#999]">Nigeria</p>
            </div>
          </div>*/}

          {/*<div className="mt-[30px] flex flex-row items-center gap-2.5">
            <img
              src="/images/Icon (11).png"
              alt=""
              aria-hidden="true"
              width={56}
              height={56}
              loading="lazy"
              decoding="async"
              className="h-14 w-14"
            />

           <div>
              <h3 className="pb-3 text-sm font-normal text-[var(--contact-text)]">
                Phone
              </h3>
              <a
                href="tel:+2349045977499"
                aria-label="Call Stephen Olayiwola"
                className="rounded-sm text-base text-[#999] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF]"
              >
                (+234) 904 597 7499
              </a>
            </div>
          </div>*/}

          <div className="mt-[40px] flex flex-row items-center gap-2.5">
            <img
              src="/images/Icon (13).png"
              alt=""
              aria-hidden="true"
              width={56}
              height={56}
              loading="lazy"
              decoding="async"
              className="h-14 w-14"
            />

            <div>
              <h3 className="pb-3 text-sm font-normal text-[var(--contact-text)]">
                Email
              </h3>

              <a
                href="mailto:stephenolayiwola100@gmail.com"
                className="rounded-sm text-base text-[#999] no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF]"
              >
                stephenolayiwola100@gmail.com
              </a>
            </div>
          </div>
        </address>

        <div
          className="box-border w-full rounded-[20px] border border-[#333] bg-[#1a1a1a] p-10"
          aria-labelledby="contact-cta-title"
        >
          <div className="mb-5 flex w-full flex-row items-center gap-2.5">
            <span
              className="h-2.5 w-2.5 animate-pulseDot rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]"
              aria-hidden="true"
            />

            <p className="pt-[25px] text-white">
              Available for new projects
            </p>
          </div>

          <h3
            id="contact-cta-title"
            className="mb-[15px] text-[28px] text-white"
          >
            Let's work together!
          </h3>

          <p className="mb-[25px] leading-[1.6] text-[#999]">
            I am 100% available for full-time and contract opportunities. If
            you have a project in mind, let's talk.
          </p>

          <a
            href="mailto:stephenolayiwola100@gmail.com"
            aria-label="Email Stephen Olayiwola about a project or job"
            className="inline-block rounded-lg bg-[#6A15B7] px-[30px] py-3 font-semibold text-white no-underline transition-colors duration-300 hover:bg-[#5a52d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}