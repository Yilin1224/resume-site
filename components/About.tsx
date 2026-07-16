import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function About() {
  const education = resume.education[0];
  return (
    <SectionReveal id="about" className="border-y-4 border-double border-[#594d3d] bg-[#d8c7a7]/55 px-5 py-12 sm:px-10 lg:px-16">
      <div className="grid gap-8 lg:grid-cols-[auto_1fr_1fr]">
        <p className="vertical-label section-kicker">Section I · Profile</p>
        <div>
          <p className="section-kicker">Editorial Introduction</p>
          <h2 className="section-title mt-3">A considered<br/><em className="font-normal">point of view.</em></h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2"><p className="text-lg leading-8">{resume.about}</p></div>
          <div className="border-t border-[#8d7c62] pt-4">
            <p className="small-caps text-[#743f43]">Place of Work</p><p className="mt-2 text-xl">{resume.location}</p>
          </div>
          <div className="border-t border-[#8d7c62] pt-4">
            <p className="small-caps text-[#743f43]">Education</p><p className="mt-2 text-xl">{education?.degree}</p><p className="mt-1 text-sm text-[#6f6557]">{education?.school} · {education?.period}</p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
