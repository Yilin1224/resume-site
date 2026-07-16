import { Code2 } from "lucide-react";
import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function Skills() {
  return (
    <SectionReveal id="skills" className="scroll-mt-28 px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-200/80">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Tools for turning ideas into shipped work.
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white/62">
            <Code2 size={16} aria-hidden="true" />
            <span>{resume.skills.length} core skills</span>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-wrap gap-3">
            {resume.skills.map((skill, index) => (
              <span
                key={skill}
                className="skill-float rounded-md border border-emerald-100/14 bg-emerald-100/[0.075] px-4 py-2 text-sm font-medium text-emerald-50 shadow-lg shadow-black/10"
                style={{ animationDelay: `${(index % 6) * 0.18}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
