"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  id,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
