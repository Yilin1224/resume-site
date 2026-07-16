import Image from "next/image";
import { resume } from "@/data/resume";

export default function Hero() {
  return (
    <section className="grid gap-8 px-5 py-10 sm:px-10 lg:grid-cols-[1.3fr_.7fr] lg:px-16 lg:py-16">
      <div className="lg:pr-10">
        <div className="mb-6 flex items-center gap-3"><span className="h-px flex-1 bg-[#743f43]"/><span className="section-kicker">Lead Story · A Profile</span></div>
        <h1 className="max-w-4xl text-[clamp(3.4rem,8vw,7.5rem)] font-bold leading-[.82] tracking-[-.06em]">
          Thoughtful work,<br/><em className="font-normal text-[#743f43]">carefully made.</em>
        </h1>
        <div className="mt-8 grid gap-6 border-t border-[#8d7c62] pt-6 md:grid-cols-[1fr_auto]">
          <p className="drop-cap max-w-2xl text-lg leading-8">{resume.about}</p>
          <div className="border-l border-[#8d7c62] pl-5 font-sans text-xs leading-6">
            <p className="font-bold uppercase tracking-widest text-[#743f43]">Current Practice</p>
            <p className="mt-2 max-w-52 text-sm font-bold">{resume.title}</p>
            <p className="mt-4 text-[#6f6557]">Based in {resume.location}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 font-sans text-[10px] font-bold uppercase tracking-[.16em]">
          <a href="#projects" className="border border-[#29251f] bg-[#29251f] px-5 py-3 text-[#f5edda] hover:bg-[#743f43]">Examine selected works</a>
          <a href={`mailto:${resume.email}`} className="border border-[#29251f] px-5 py-3 hover:bg-[#d8c7a7]">Write a letter</a>
        </div>
      </div>
      <figure className="mx-auto w-full max-w-md border border-[#594d3d] bg-[#d8c7a7] p-3 shadow-[8px_8px_0_#8d7c62] lg:mt-0">
        <div className="relative aspect-[4/5] overflow-hidden border border-[#594d3d] bg-[#b9a98d]">
          <Image src="/profile.jpg" alt={`${resume.name}, professional portrait`} fill priority sizes="(min-width: 1024px) 29vw, 90vw" className="object-cover grayscale sepia-[.35] contrast-[1.08] mix-blend-multiply" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(41,37,31,.1)_4px)]" />
        </div>
        <figcaption className="flex justify-between gap-4 pt-3 font-sans text-[9px] font-bold uppercase tracking-[.16em]">
          <span>Portrait plate № 01</span><span>{resume.location}</span>
        </figcaption>
      </figure>
    </section>
  );
}
