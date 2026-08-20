import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const titleRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="mt-[70px] bg-[var(--bg-color)] px-[70px] py-2.5 max-[1024px]:px-5 max-[700px]:px-2.5"
    >
      <div ref={titleRef} className="reveal">
        <span className="flex items-center gap-3 text-xs uppercase tracking-[4px] text-[#999999] before:h-0.5 before:w-5 before:bg-[#999999] before:content-['']">
          GET IN TOUCH
        </span>
        <h2 className="mt-2.5 text-[36px] font-bold text-[var(--text-main)]">Contact Me</h2>
      </div>

      <div className="mt-[30px] flex w-full flex-col-reverse items-start gap-[50px] pb-[30px] min-[1025px]:mt-[50px] min-[1025px]:flex-row min-[1025px]:items-center min-[1025px]:gap-[100px]">
        <div>
          <div className="mt-[30px] flex flex-row items-center gap-2.5">
            <img src="/images/Icon (9).png" alt="" className="h-14 w-14" />
            <div>
              <h6 className="pb-3 text-sm text-[#6C63FF]">Location</h6>
              <h5 className="text-base text-[#999]">Nigeria</h5>
            </div>
          </div>
          <div className="mt-[30px] flex flex-row items-center gap-2.5">
            <img src="/images/Icon (11).png" alt="" className="h-14 w-14" />
            <div>
              <h6 className="pb-3 text-sm text-[#6C63FF]">Phone</h6>
              <h5 className="text-base text-[#999]">(+234)9045977499</h5>
            </div>
          </div>
          <div className="mt-[30px] flex flex-row items-center gap-2.5">
            <img src="/images/Icon (13).png" alt="" className="h-14 w-14" />
            <div>
              <h6 className="pb-3 text-sm text-[#6C63FF]">Email</h6>
              <a href="mailto:stephenolayiwola100@gmail.com" className="text-base text-[#999] no-underline">
                stephenolayiwola100@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="w-full box-border rounded-[20px] border border-[#333] bg-[#1a1a1a] p-10">
          <div className="mb-5 flex w-full flex-row items-center gap-2.5">
            <div className="h-2.5 w-2.5 animate-pulseDot rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
            <p className="text-white pt-[25px]">Available for new projects</p>
          </div>
          <h3 className="mb-[15px] text-[28px] text-white">Let's work together!</h3>
          <p className="mb-[25px] leading-[1.6] text-[#999]">
            I am 100% available for full-time and contract opportunities. If you have a project in mind, let's talk.
          </p>
          <a
            href="mailto:stephenolayiwola100@gmail.com"
            className="inline-block rounded-lg bg-[#6C63FF] px-[30px] py-3 font-semibold text-white no-underline transition-colors duration-300 hover:bg-[#5a52d4]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
