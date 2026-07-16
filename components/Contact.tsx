import { GitBranch, Mail, MapPin, Network } from "lucide-react";
import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const links = [
    resume.links.github && {
      label: "GitHub",
      href: resume.links.github,
      icon: GitBranch,
    },
    resume.links.linkedin && {
      label: "LinkedIn",
      href: resume.links.linkedin,
      icon: Network,
    },
  ].filter(Boolean);

  return (
    <SectionReveal id="contact" className="scroll-mt-28 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-200/80">
              Contact
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s build something clear, useful, and memorable.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              I&apos;m open to thoughtful roles, collaborations, and projects where
              software meets good product judgment.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <a
              href={`mailto:${resume.email}`}
              className="inline-flex min-h-12 items-center gap-3 rounded-md border border-emerald-200/20 bg-emerald-200/10 px-4 text-sm font-medium text-emerald-50 transition hover:-translate-y-0.5 hover:bg-emerald-200/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
            >
              <Mail size={18} aria-hidden="true" />
              <span>{resume.email}</span>
            </a>
            <div className="inline-flex min-h-12 items-center gap-3 rounded-md border border-white/10 bg-black/14 px-4 text-sm text-white/68">
              <MapPin size={18} aria-hidden="true" />
              <span>{resume.location}</span>
            </div>
            {links.map((link) => {
              if (!link) return null;
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center gap-3 rounded-md border border-white/10 bg-black/14 px-4 text-sm text-white/72 transition hover:-translate-y-0.5 hover:border-emerald-200/25 hover:text-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
