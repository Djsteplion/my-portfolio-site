import { usePostHog } from '@posthog/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const textRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>();
  const posthog = usePostHog();

  const alertMyLinkedin = () => {
    posthog.capture(
      'My Linkedin link has just been clicked, from the HERO SECTION in my PORTFOLIO WEBSITE',
    );
  };

  const alertMyGithub = () => {
    posthog.capture(
      'My Github Account link has just been clicked, from the HERO SECTION in my PORTFOLIO WEBSITE',
    );
  };

  return (
    <section
      id="about"
      aria-labelledby="hero-title"
      className="relative flex flex-col-reverse items-center justify-between gap-10 px-5 pb-[70px] pt-[230px] text-left min-[1025px]:flex-row min-[1025px]:px-[70px] min-[1025px]:pr-5 min-[1025px]:text-left max-[1024px]:flex-col-reverse max-[1024px]:px-[30px] max-[1024px]:pt-[300px] max-[1024px]:text-center max-[700px]:px-[10px] max-[700px]:pt-[200px] max-[700px]:text-left"
    >
      <div
        ref={textRef}
        className="reveal w-full min-[1025px]:w-1/2 max-[1024px]:mt-[200px] max-[700px]:mt-[170px]"
      >
        <div className="flex flex-row items-center justify-start max-[1024px]:justify-center max-[700px]:justify-start">
          <img
            src="/images/Above title line (1).png"
            alt=""
            aria-hidden="true"
            width={20}
            height={2}
            className="h-0.5 w-5"
          />

          <p
            className="ml-2.5 text-xs font-normal tracking-[3px] text-[var(--text-secondary)]"
            id="hero_text"
          >
            MY NAME IS
          </p>
        </div>

        <div className="mt-5 flex flex-row items-center justify-start max-[1024px]:justify-center max-[700px]:justify-start">
          <h1
            id="hero-title"
            className="font-bold tracking-[-0.02em] text-[var(--text-main)] md:text-[48px] max-[700px]:text-[17px]"
          >
            Stephen
          </h1>

          <span
            aria-hidden="true"
            className="ml-2.5 font-bold tracking-[-0.02em] text-[#6C63FF] md:text-[48px] max-[700px]:text-[17px]"
          >
            Olayiwola
          </span>

          <span className="sr-only"> Olayiwola</span>
        </div>

        <div className="mt-10">
          <p className="text-base leading-[1.8] text-[var(--text-secondary)]">
            A Frontend Engineer with five years of experience in tech
            communities and startups. Proficient in HTML, CSS, Tailwind,
            JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js,
            Dart and Flutter. Experienced in frontend architecture, performance
            optimization, API integration and reusable component systems.
          </p>
        </div>

        <div
          className="mt-[35px] flex flex-row gap-2.5"
          aria-label="Social profiles"
        >
          <a
            href="https://github.com/Djsteplion"
            target="_blank"
            rel="noopener noreferrer"
            onClick={alertMyGithub}
            aria-label="Visit Stephen Olayiwola on GitHub"
            className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6C63FF]"
          >
            <img
              src="/images/Github (1).png"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className="social-icon h-5 w-5 opacity-70 [filter:brightness(0)_invert(1)] hover:opacity-100"
            />
          </a>

          <a
            href="https://ng.linkedin.com/in/stephen-olayiwola-3a86211b7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={alertMyLinkedin}
            aria-label="Visit Stephen Olayiwola on LinkedIn"
            className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6C63FF]"
          >
            <img
              src="/images/Linkedin (1).png"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className="social-icon h-5 w-5 opacity-70 [filter:brightness(0)_invert(1)] hover:opacity-100"
            />
          </a>
        </div>
      </div>

      <div className="mt-[70px] flex items-center justify-center md:hidden">
        <a
          href="#hero_text"
          aria-label="Scroll down to continue reading"
          className="flex animate-bounce items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-xs text-[var(--text-secondary)] backdrop-blur-md transition hover:border-[#6C63FF] hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C63FF]"
        >
          Scroll down
          <span aria-hidden="true" className="text-base">
            ↓
          </span>
        </a>
      </div>

      <div
        ref={imageRef}
        className="reveal relative flex w-full items-center justify-center pt-[60px] min-[1025px]:w-1/2 min-[1025px]:pt-0"
      >
        <div className="absolute" aria-hidden="true">
          <img
            src="/images/back (1).png"
            alt=""
            width={430}
            height={340}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-[360px] w-[430px] animate-rotate360 max-[1024px]:h-[288px] max-[1024px]:w-[344px]"
          />
        </div>

        <div className=" absolute">
          <img
            src="/images/Stephen_Olayiwola.webp"
            alt="Portrait of Stephen Olayiwola"
            width={1184}
            height={864}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="rounded-[20px] h-[330px] w-[400px] rounded-[20px] max-[1024px]:h-[264px] max-[1024px]:w-[320px]"
          />
        </div>
      </div>
    </section>
  );
}