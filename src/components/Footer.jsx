import { motion, useReducedMotion } from "motion/react";
import {socialsFooter} from '../data/socialLinks.js'
const EASE = [0.22, 1, 0.36, 1];


export default function Footer() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="app-container flex justify-between items-center mt-8 xl:mt-15"
      >
        <motion.h1 variants={fadeUp} className="font-text text-sm xl:text-lg">
          © 2026. created By Hatim Elbakkali
        </motion.h1>

        <div className="flex gap-2">
          {socialsFooter.map(({ id, label, Icon, href, external }) => (
            <motion.a
              key={id}
              variants={fadeUp}
              href={href}
              aria-label={label}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              whileHover={reduce ? undefined : { y: -4, scale: 1.1 }}
              whileTap={reduce ? undefined : { scale: 0.9 }}
              className="transition-colors duration-300 hover:text-secondary"
            >
              <Icon className="size-6 xl:size-8" strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>
      </motion.div>
      <div className="h-10 w-full" />
    </>
  );
}