import { BriefcaseBusiness } from "lucide-react";
import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function Experience() {
  return (
    <SectionReveal id="experience" className="scroll-mt-28 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-200/80">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Work that compounds.
            </h2>
          </div>
          <BriefcaseBusiness className="hidden text-white/28 sm:block" size={34} aria-hidden="true" />
        </div>

        <div className="relative grid gap-6 before:absolute before:left-4 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-emerald-200/60 before:via-white/16 before:to-transparent md:before:left-1/2">
          {resume.experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className={`relative grid gap-4 pl-12 md:grid-cols-2 md:pl-0 ${
                index % 2 === 1 ? "md:[&>*]:col-start-2" : ""
              }`}
            >
              <span className="absolute left-[0.55rem] top-5 size-3 rounded-full bg-emerald-200 shadow-[0_0_0_7px_rgba(16,185,129,0.12)] md:left-1/2 md:-translate-x-1/2" />
              <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-emerald-200/25 hover:bg-white/[0.075]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-emerald-100/82">{item.company}</p>
                  </div>
                  <p className="text-sm text-white/52">{item.period}</p>
                </div>
                <p className="mt-2 text-sm text-white/52">{item.location}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-white/70">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-emerald-200/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
