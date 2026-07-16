import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function Projects() {
  return (
    <SectionReveal id="projects" className="border-y-4 border-double border-[#594d3d] bg-[#f5edda]/60 px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
      <header className="grid gap-4 border-b-2 border-[#29251f] pb-7 md:grid-cols-[1fr_auto] md:items-end">
        <div><p className="section-kicker">Section III · The Work Catalogue</p><h2 className="section-title mt-3">Selected Works</h2></div>
        <p className="max-w-xs text-sm italic leading-6 text-[#6f6557]">A concise register of digital projects, their purpose, and the instruments used in their making.</p>
      </header>
      <div className="grid lg:grid-cols-2">
        {resume.projects.map((project, index) => (
          <article key={project.name} className="group relative border-b border-[#8d7c62] py-8 lg:odd:border-r lg:odd:pr-10 lg:even:pl-10">
            <div className="flex items-start justify-between gap-4"><p className="small-caps text-[#743f43]">Catalogue № {String(index + 1).padStart(3,"0")}</p><span className="text-2xl text-[#6d6a48]">✦</span></div>
            <h3 className="mt-8 text-4xl font-bold leading-none transition group-hover:text-[#743f43]">{project.name}</h3>
            <p className="mt-5 max-w-xl text-base leading-7">{project.description}</p>
            <div className="mt-7 border-y border-[#8d7c62] py-3"><p className="small-caps text-[#6f6557]">Materials & methods</p><p className="mt-2 text-sm italic">{project.tech.join(" · ")}</p></div>
            {(project.link || project.github) && <div className="mt-5 flex gap-5 font-sans text-[10px] font-bold uppercase tracking-widest">{project.link && <a className="underline hover:text-[#743f43]" href={project.link}>View project ↗</a>}{project.github && <a className="underline hover:text-[#743f43]" href={project.github}>Source record ↗</a>}</div>}
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
