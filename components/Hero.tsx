"use client";

import {
  ArrowUpRight,
  GitBranch,
  Mail,
  MapPin,
  Network,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { resume } from "@/data/resume";

export default function Hero() {
  const [showProfile, setShowProfile] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const availableLinks = [
    resume.links.github && {
      label: "GitHub",
      href: resume.links.github,
      icon: GitBranch,
    },
    resume.links.linkedin && {
      label: "LinkedIn",
      href: resume.links.linkedin,
      icon: Network,
    },
    resume.links.portfolio && {
      label: "Portfolio",
      href: resume.links.portfolio,
      icon: ArrowUpRight,
    },
  ].filter(Boolean);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_78%_16%,rgba(244,114,182,0.13),transparent_26%),linear-gradient(135deg,#030907_0%,#08110f_42%,#11120f_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#050807] to-transparent" />
      <div className="absolute left-1/2 top-28 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-300/12 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-emerald-100 shadow-xl shadow-black/20 backdrop-blur-xl">
            <Sparkles size={16} aria-hidden="true" />
            <span>{resume.title}</span>
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            {resume.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
            {resume.about}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-white/62">
            <MapPin size={17} aria-hidden="true" />
            <span>{resume.location}</span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-emerald-200 px-5 text-sm font-semibold text-[#06100d] shadow-xl shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
            >
              <Mail size={17} aria-hidden="true" />
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.06] px-5 text-sm font-semibold text-white shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-100"
            >
              Download resume
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          {availableLinks.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {availableLinks.map((link) => {
                if (!link) return null;
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex size-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-white/76 transition hover:-translate-y-0.5 hover:border-emerald-200/35 hover:text-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
                    aria-label={link.label}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-300/22 via-white/5 to-rose-300/14 blur-2xl" />
          <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-white/14 bg-white/[0.07] shadow-2xl shadow-black/40 backdrop-blur-2xl">
            {showProfile && (
              <Image
                src="/profile.jpg"
                alt={`${resume.name} portrait`}
                fill
                sizes="(min-width: 1024px) 28rem, 24rem"
                priority
                className="object-cover opacity-90 grayscale-[15%]"
                onError={() => setShowProfile(false)}
              />
            )}
            {!showProfile && (
              <div className="flex h-full flex-col justify-end bg-[linear-gradient(145deg,rgba(16,185,129,0.22),rgba(255,255,255,0.06)_48%,rgba(251,113,133,0.16))] p-7">
                <div className="mb-auto flex size-20 items-center justify-center rounded-md border border-white/15 bg-black/20 text-2xl font-semibold text-white">
                  {resume.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <p className="text-sm uppercase tracking-[0.22em] text-emerald-100/80">
                  Portfolio
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {resume.title}
                </p>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent p-6">
              <p className="text-sm text-white/72">Currently based in</p>
              <p className="mt-1 text-xl font-semibold text-white">
                {resume.location}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
