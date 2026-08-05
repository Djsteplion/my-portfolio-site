export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-color)] py-10 text-center">
      <hr className="mx-[70px] mt-10 max-w-[1100px] border-0 border-t border-[#333] max-[1024px]:mx-5" />
      <div>
        <p className="mt-[30px] text-sm tracking-[1px] text-[#999999]">&copy; {year} — Stephen Olayiwola.</p>
        <div className="mt-2.5 flex justify-center gap-5">
          <a href="https://github.com/Djsteplion">
            <img src="/images/Github (1).png" alt="Github" className="w-5 transition-transform duration-300 hover:-translate-y-[3px]" />
          </a>
          <a href="https://x.com/djsteplion">
            <img src="/images/Twitter (1).png" alt="Twitter" className="w-5 transition-transform duration-300 hover:-translate-y-[3px]" />
          </a>
          <a href="https://ng.linkedin.com/in/stephen-olayiwola-3a86211b7">
            <img src="/images/Linkedin (1).png" alt="Linkedin" className="w-5 transition-transform duration-300 hover:-translate-y-[3px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
