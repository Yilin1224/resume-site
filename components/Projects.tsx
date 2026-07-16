import { ArrowUpRight, GitBranch } from "lucide-react";
import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function Projects() {
  return (
    <SectionReveal id="projects" className="scroll-mt-28 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-200/80">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Selected builds.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {resume.projects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-200/30 hover:bg-white/[0.08]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <div className="flex shrink-0 gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub`}
                      className="inline-flex size-9 items-center justify-center rounded-md border border-white/10 text-white/68 transition hover:border-emerald-200/30 hover:text-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
                    >
                      <GitBranch size={16} aria-hidden="true" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live project`}
                      className="inline-flex size-9 items-center justify-center rounded-md border border-white/10 text-white/68 transition hover:border-emerald-200/30 hover:text-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
                    >
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 min-h-20 text-sm leading-7 text-white/68">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-black/18 px-3 py-1 text-xs text-white/68"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
