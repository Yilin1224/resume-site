import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function Experience() {
  return (
    <SectionReveal id="experience" className="px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="ornament small-caps mb-10"><span>✦</span></div>
      <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
        <header>
          <p className="section-kicker">Section II · Appointments</p>
          <h2 className="section-title mt-3">Professional<br/><em className="font-normal text-[#743f43]">Chronicle</em></h2>
          <p className="mt-5 max-w-sm leading-7 text-[#6f6557]">A dated record of roles, responsibilities, and practical contributions.</p>
        </header>
        <div className="border-t-2 border-[#29251f]">
          {resume.experience.map((item, index) => (
            <article key={`${item.company}-${item.role}`} className="grid gap-5 border-b border-[#8d7c62] py-7 md:grid-cols-[7rem_1fr]">
              <div><p className="small-caps text-[#743f43]">Record № {String(index + 1).padStart(2,"0")}</p><p className="mt-2 text-sm italic">{item.period}</p></div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-3xl font-bold leading-none">{item.role}</h3><p className="small-caps text-[#6d6a48]">{item.location}</p></div>
                <p className="mt-2 text-xl italic text-[#743f43]">{item.company}</p>
                <ul className="mt-5 grid gap-3 text-[15px] leading-7 md:grid-cols-2">
                  {item.bullets.map((bullet) => <li key={bullet} className="border-l border-[#8d7c62] pl-4">{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
