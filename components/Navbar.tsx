import { resume } from "@/data/resume";

const navItems = [
  ["I", "Profile", "#about"], ["II", "Chronicle", "#experience"],
  ["III", "Selected Works", "#projects"], ["IV", "Index", "#skills"],
  ["V", "Correspondence", "#contact"],
];

export default function Navbar() {
  return (
    <header id="home" className="px-5 pt-5 sm:px-10 lg:px-16">
      <div className="flex items-center justify-between border-y border-[#594d3d] py-2 font-sans text-[9px] font-bold uppercase tracking-[.2em] sm:text-[10px]">
        <span>Portfolio Gazette · Vol. I</span>
        <span className="hidden sm:block">{resume.location} · Open Edition</span>
        <a className="text-[#743f43] hover:underline" href="/resume.pdf">Résumé · PDF</a>
      </div>
      <div className="border-b-4 border-double border-[#594d3d] py-5 text-center sm:py-7">
        <a href="#home" aria-label="Back to top">
          <p className="small-caps mb-2 text-[#743f43]">The Professional Record of</p>
          <p className="text-[clamp(3.1rem,10vw,8rem)] font-bold leading-[.75] tracking-[-.065em]">{resume.name}</p>
        </a>
      </div>
      <nav aria-label="Primary navigation" className="grid grid-cols-2 border-b border-[#594d3d] font-sans text-[10px] font-bold uppercase tracking-[.12em] sm:grid-cols-5">
        {navItems.map(([number, label, href]) => (
          <a key={href} href={href} className="border-[#8d7c62] px-3 py-3 text-center transition hover:bg-[#743f43] hover:text-[#f5edda] sm:border-r sm:last:border-r-0">
            <span className="mr-2 text-[#743f43]">{number}.</span>{label}
          </a>
        ))}
      </nav>
    </header>
  );
}
