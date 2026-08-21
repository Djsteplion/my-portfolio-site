import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePostHog } from "@posthog/react";

export default function Hero() {
  const textRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>();
  const posthog = usePostHog();

  
  const alertMyLinkedin = () => {
    posthog.capture("My Linkedin link has just been clicked, from the HERO SECTION in my PORTFOLIO WEBSITE");
  }

  const alertMyGithub = () => {
    posthog.capture("My Github Account link has just been clicked, from the HERO SECTION in my PORTFOLIO WEBSITE");
  }

  return (
    <div
      id="about"
      className="relative flex flex-col-reverse items-center justify-between gap-10 px-5 pb-[70px] pt-[230px] text-left
        min-[1025px]:flex-row min-[1025px]:px-[70px] min-[1025px]:pr-5 min-[1025px]:text-left
        max-[1024px]:flex-col-reverse max-[1024px]:px-[30px] max-[1024px]:pt-[300px] max-[1024px]:text-center
        max-[700px]:px-[10px] max-[700px]:pt-[200px] max-[700px]:text-left"
    >
      <div ref={textRef} className="reveal w-full min-[1025px]:w-1/2 max-[1024px]:mt-[200px] max-[700px]:mt-[170px]">
        <div className="flex flex-row items-center justify-start max-[1024px]:justify-center max-[700px]:justify-start">
          <img src="/images/Above title line (1).png" alt="dash sign" className="h-0.5 w-5" />
          <h5 className="ml-2.5 text-xs font-normal tracking-[3px] text-[var(--text-secondary)]" id="hero_text">MY NAME IS</h5>
        </div>
        <div className="mt-5 flex flex-row items-center justify-start max-[1024px]:justify-center max-[700px]:justify-start">
          <h1 className="md:text-[48px] font-bold tracking-[-0.02em] text-[var(--text-main)] max-[700px]:text-[17px]">
            Stephen
          </h1>
          <h1 className="ml-2.5 md:text-[48px] font-bold tracking-[-0.02em] text-[#6C63FF] max-[700px]:text-[17px]">
            Olayiwola
          </h1>
        </div>
        <div className="mt-10">
          <p className="text-base leading-[1.8] text-[var(--text-secondary)]">
            A Frontend Engineer with five years of experience in tech communities and startups. Proficient in
            Html, Css, Tailwind, Javascript, Typescript, React.js, Next.js, Dart and Flutter.Experienced in frontend architecture, performance optimization, API integration and reusable component systems.
          </p>
        </div>
        <div className="mt-[35px] flex flex-row gap-2.5">
          <a href="https://github.com/Djsteplion" onClick={alertMyGithub}>
            <img src="/images/Github (1).png" alt="Github handle" className="social-icon h-5 w-5 opacity-70 [filter:brightness(0)_invert(1)] hover:opacity-100" />
          </a>
          <a href="https://ng.linkedin.com/in/stephen-olayiwola-3a86211b7" onClick={alertMyLinkedin}>
            <img src="/images/Linkedin (1).png" alt="Linkedin handle" className="social-icon h-5 w-5 opacity-70 [filter:brightness(0)_invert(1)] hover:opacity-100" />
          </a>
        </div>
        {/*<div>
          <a href="#next-section" className="scroll-down">
            <span>Scroll Down</span>
            <span className="scroll-arrow">↓</span>
          </a>
        </div>*/}
      </div>
      {/* Scroll down button */}
      <div className="flex items-center jutify-center md:hidden mt-[70px]">
         <a
            href="#hero_text"
            className="md:hidden flex  items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-xs text-[var(--text-secondary)] backdrop-blur-md transition hover:border-[#6C63FF] hover:text-[#6C63FF] animate-bounce"
          >
            Scroll down
            <span className="text-base">↓</span>
          </a>
      </div>

      <div
        ref={imageRef}
        className="reveal relative flex  w-full items-center justify-center pt-[60px] min-[1025px]:w-1/2 min-[1025px]:pt-0"
      >
        <div className="absolute">
          <img
            src="/images/back (1).png"
            alt="purple background for hero image"
            className="h-[360px] w-[430px] animate-rotate360 max-[1024px]:h-[288px] max-[1024px]:w-[344px]"
          />
        </div>
        <div className="relative z-[2]">
          <img
            src="/images/Stephen_Olayiwola.png"
            alt="Stephen Olayiwola's Profile Picture"
            className="h-[330px] w-[400px] rounded-[20px] max-[1024px]:h-[264px] max-[1024px]:w-[320px]"
          />
        </div>
       
      </div>
    </div>
    

  );
}
