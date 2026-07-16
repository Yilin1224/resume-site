import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050807] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="px-4 py-8 text-center text-sm text-white/42 sm:px-6">
        Built with Next.js, TypeScript, Tailwind CSS, Motion, and Lucide.
      </footer>
    </div>
  );
}
