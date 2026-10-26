import { Fragment } from "react";
import { motion } from "motion/react";

export const charContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.01 } },
};

const charVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function SplitChars({ text }) {
  const words = text.split(" ");

  return words.map((word, wi) => (
    <Fragment key={wi}>
      <span className="inline-block whitespace-nowrap">
        {word.split("").map((ch, ci) => (
          <motion.span key={ci} variants={charVariant} className="inline-block">
            {ch}
          </motion.span>
        ))}
      </span>{" "}
    </Fragment>
  ));
}