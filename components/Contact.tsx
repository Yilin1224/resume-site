import { resume } from "@/data/resume";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const links = [{ label: "LinkedIn", href: resume.links.linkedin }, { label: "GitHub", href: resume.links.github }].filter(({ href }) => href);
  return (
    <SectionReveal id="contact" className="bg-[#743f43] px-5 py-14 text-[#f5edda] sm:px-10 lg:px-16 lg:py-20">
      <div className="border-y-4 border-double border-[#d8c7a7] py-10">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div><p className="small-caps text-[#d8c7a7]">Section V · Correspondence</p><h2 className="mt-4 max-w-4xl text-[clamp(3.2rem,7vw,7rem)] font-bold leading-[.85] tracking-[-.05em]">Let us begin<br/><em className="font-normal">a conversation.</em></h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#eadfc9]">For thoughtful roles, collaborations, and work requiring care and sound judgment, correspondence is warmly invited.</p></div>
          <address className="flex flex-col justify-end not-italic">
            <p className="small-caps text-[#d8c7a7]">Direct inquiries to</p>
            <a href={`mailto:${resume.email}`} className="mt-3 break-all text-2xl underline decoration-[#d8c7a7] hover:text-white sm:text-3xl">{resume.email}</a>
            <p className="mt-8 border-t border-[#d8c7a7]/60 pt-4 text-sm">{resume.name}<br/>{resume.title}<br/>{resume.location}</p>
            <div className="mt-6 flex gap-5 font-sans text-[10px] font-bold uppercase tracking-widest">{links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="underline hover:text-white">{link.label} ↗</a>)}</div>
          </address>
        </div>
      </div>
      <footer className="flex flex-col gap-2 pt-6 font-sans text-[9px] font-bold uppercase tracking-[.18em] text-[#d8c7a7] sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} {resume.name} · All particulars current</span><span>Typeset in Georgia · Printed on the web</span></footer>
    </SectionReveal>
  );
}
