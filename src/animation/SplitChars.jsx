import { Fragment, useEffect, useState } from "react";
import { motion } from "motion/react";

/* ---------- Variants ---------- */

// desktop: 7arf b 7arf
export const charContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.01 } },
};

const charVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
};

// mobile: kalma b kalma, opacity bla transform
export const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};

const wordVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

export const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

/* ---------- Hook ---------- */

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${breakpoint}px)`).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

export default function SplitChars({ text }) {
  const isMobile = useIsMobile();
  const words = text.split(" ");

  return words.map((word, wi) => (
    <Fragment key={wi}>
      {isMobile ? (
        <motion.span variants={wordVariant} className="inline-block whitespace-nowrap">
          {word}
        </motion.span>
      ) : (
        <span className="inline-block whitespace-nowrap">
          {word.split("").map((ch, ci) => (
            <motion.span key={ci} variants={charVariant} className="inline-block">
              {ch}
            </motion.span>
          ))}
        </span>
      )}{" "}
    </Fragment>
  ));
}