import { GraduationCap, MapPin, UserRound } from "lucide-react";
import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <SectionReveal id="about" className="scroll-mt-28 px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-200/80">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Practical builder, cinematic presentation.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:col-span-2">
            <UserRound className="mb-5 text-emerald-200" size={24} aria-hidden="true" />
            <p className="text-base leading-8 text-white/74">{resume.about}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <MapPin className="mb-4 text-rose-200" size={22} aria-hidden="true" />
            <p className="text-sm text-white/52">Location</p>
            <p className="mt-2 font-medium text-white">{resume.location}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <GraduationCap className="mb-4 text-emerald-200" size={22} aria-hidden="true" />
            <p className="text-sm text-white/52">Education</p>
            <p className="mt-2 font-medium text-white">
              {resume.education[0]?.degree ?? "Education"}
            </p>
            <p className="mt-1 text-sm text-white/58">
              {resume.education[0]?.school}
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
