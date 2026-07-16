import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function Skills() {
  const groups = [
    { title: "Languages & Systems", items: resume.skills.filter((_, i) => i < 3) },
    { title: "Frameworks & Practice", items: resume.skills.filter((_, i) => i >= 3 && i < 6) },
    { title: "Instruments & Analysis", items: resume.skills.filter((_, i) => i >= 6) },
  ].filter((group) => group.items.length);

  return (
    <SectionReveal id="skills" className="px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <header><p className="section-kicker">Section IV · Working Index</p><h2 className="section-title mt-3">Tools,<br/><em className="font-normal text-[#743f43]">methods &</em><br/>instruments.</h2></header>
        <div className="border-t-2 border-[#29251f]">
          {groups.map((group, groupIndex) => (
            <div key={group.title} className="grid border-b border-[#8d7c62] py-6 sm:grid-cols-[12rem_1fr]">
              <p className="small-caps mb-4 text-[#743f43] sm:mb-0">{String(groupIndex + 1).padStart(2,"0")} / {group.title}</p>
              <ol className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
                {group.items.map((skill, index) => <li key={skill} className="border-b border-[#8d7c62]/50 py-2 text-lg"><span className="mr-2 font-sans text-[9px] text-[#6f6557]">{String(index + 1).padStart(2,"0")}</span>{skill}</li>)}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
