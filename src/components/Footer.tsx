export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--bg-color)] py-10 text-center"
      aria-label="Site footer"
    >
      <hr
        className="mx-[70px] mt-10 max-w-[1100px] border-0 border-t border-[#333] max-[1024px]:mx-5"
        aria-hidden="true"
      />

      <div>
        <p className="mt-[30px] text-sm tracking-[1px] text-[#999999]">
          <span aria-hidden="true">&copy; </span>
          <span className="sr-only">Copyright </span>
          {year} — Stephen Olayiwola.
        </p>

        <nav aria-label="Social media links">
          <ul className="mt-2.5 flex justify-center gap-5">
            <li>
              <a
                href="https://github.com/Djsteplion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stephen Olayiwola on GitHub (opens in a new tab)"
                className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6C63FF]"
              >
                <img
                  src="/images/Github (1).png"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  className="w-5 transition-transform duration-300 hover:-translate-y-[3px]"
                />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/djsteplion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stephen Olayiwola on X (opens in a new tab)"
                className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6C63FF]"
              >
                <img
                  src="/images/Twitter (1).png"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  className="w-5 transition-transform duration-300 hover:-translate-y-[3px]"
                />
              </a>
            </li>

            <li>
              <a
                href="https://ng.linkedin.com/in/stephen-olayiwola-3a86211b7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stephen Olayiwola on LinkedIn (opens in a new tab)"
                className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6C63FF]"
              >
                <img
                  src="/images/Linkedin (1).png"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  className="w-5 transition-transform duration-300 hover:-translate-y-[3px]"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}