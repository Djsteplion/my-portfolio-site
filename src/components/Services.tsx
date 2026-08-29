import { services } from '../data/services';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <article
      ref={ref}
      className="reveal flex h-[300px] w-[300px] flex-col items-center rounded-xl bg-[var(--service-bg)] p-10 text-center shadow-[0px_10px_30px_rgba(0,0,0,0.1)] md:h-[320px] md:w-[360px] max-[1024px]:w-[500px] max-[700px]:mx-[15px] max-[700px]:w-[100%]"
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        width={50}
        height={50}
        loading="lazy"
        decoding="async"
        className="h-[50px] w-[50px]"
      />

      <h3 className="mb-3 mt-3 text-lg font-bold text-[var(--text-main)]">
        {title}
      </h3>

      <p className="text-sm leading-[1.6] text-[var(--service-text)]">
        {description}
      </p>
    </article>
  );
}

export default function Services() {
  const titleRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-[var(--bg-color)] px-[70px] pb-[100px] pt-[160px] text-[var(--text-main)] max-[1024px]:px-5 max-[1024px]:pb-[100px] max-[1024px]:pt-[150px] max-[700px]:mt-[30px] max-[700px]:px-2.5 max-[700px]:pb-10 max-[700px]:pt-[50px]"
    >
      <div
        ref={titleRef}
        className="reveal flex flex-col items-center justify-start pl-0 min-[1025px]:items-start min-[1025px]:pl-[35.4%]"
      >
        <p
          className="flex items-center gap-3 text-xs uppercase tracking-[4px] text-[#999999] before:h-0.5 before:w-5 before:bg-[#999999] before:content-['']"
          aria-hidden="true"
        >
          SERVICES
        </p>

        <h2
          id="services-title"
          className="text-[48px] font-bold tracking-[-0.02em] text-[var(--text-main)] max-[330px]:mt-[5px] max-[330px]:text-[26px]"
        >
          Specialized in
        </h2>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-6 py-20 min-[1025px]:flex-row max-[1024px]:flex-col max-[1024px]:gap-5"
        role="list"
        aria-label="Services offered"
      >
        {services.map((service) => (
          <div key={service.id} role="listitem">
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}