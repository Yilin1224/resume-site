import { Download } from "lucide-react";
import { resume } from "@/data/resume";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07100f]/70 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Primary navigation"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md border border-emerald-200/20 bg-white/[0.07] text-sm font-semibold text-emerald-100 shadow-lg shadow-emerald-950/30">
            {resume.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </span>
          <span className="hidden text-sm font-medium text-white/90 sm:block">
            {resume.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-white/68 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-emerald-300/25 bg-emerald-300/10 px-3 text-sm font-medium text-emerald-50 shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-300/16 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        >
          <Download size={16} aria-hidden="true" />
          <span>Resume</span>
        </a>
      </nav>
    </header>
  );
}
