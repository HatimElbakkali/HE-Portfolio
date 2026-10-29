import { motion, useReducedMotion } from "motion/react";
import contactData from "../data/contactData.js";

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, amount: 0.3 };

const NAME = "HATIM ELBAKKALI";

export default function Contact() {
  const reduce = useReducedMotion();

  const dist = reduce ? 0 : 1;

  const stagger = (delay = 0, gap = 0.12) => ({
    hidden: {},
    visible: { transition: { delayChildren: delay, staggerChildren: gap } },
  });

  const fadeUp = {
    hidden: { opacity: reduce ? 1 : 0, y: 40 * dist },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  const maskUp = {
    hidden: { y: reduce ? "0%" : "110%" },
    visible: { y: "0%", transition: { duration: 0.9, ease: EASE } },
  };

  const letter = {
    hidden: { y: reduce ? "0%" : "110%" },
    visible: { y: "0%", transition: { duration: 0.9, ease: EASE } },
  };

  const words = NAME.split(" ");

  return (
    <div id="contact" className="app-container">
      <motion.div
        variants={stagger(0, 0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="overflow-hidden">
          <motion.h1 variants={maskUp} className="text-section font-title">
            /Contact
          </motion.h1>
        </div>

        <motion.div variants={fadeUp} className="flex items-center gap-2 z-10">
          <span className="relative flex h-5 w-5 2xl:h-6 2xl:w-6 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full bg-primary"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={
                reduce
                  ? { opacity: 0.5 }
                  : { scale: [1, 1.8], opacity: [0.5, 0] }
              }
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
            />

            <motion.span
              className="h-2.5 w-2.5 xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 rounded-full bg-primary"
              animate={
                reduce ? { opacity: 1 } : { opacity: [1, 1, 0.4, 1, 0.7, 1] }
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                times: [0, 0.45, 0.5, 0.55, 0.7, 0.75],
              }}
            />
          </span>
          <p className="font-text text-lg xl:text-lg 2xl:text-2xl font-medium">
            Available for internship
          </p>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden pb-1">
              <motion.h1
                variants={maskUp}
                className="font-text font-semibold text-3xl xl:text-5xl 2xl:text-6xl"
              >
                Let's build something
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-1">
              <motion.h1
                variants={maskUp}
                className="font-text font-semibold text-3xl xl:text-5xl 2xl:text-6xl"
              >
                great together.
              </motion.h1>
            </div>
          </div>

          <motion.div
            variants={stagger(0.3, 0.15)}
            className="flex flex-col mt-8 lg:mt-25 2xl:mt-40 items-start gap-2 2xl:gap-8"
          >
            {contactData.map((data) => (
              <motion.div key={data.name} variants={fadeUp}>
                <h3 className="font-text font-semibold text-[24px] 2xl:text-4xl">
                  {data.name}
                </h3>
                <span className="font-text font-light text-xl 2xl:text-4xl">
                  <a href={data.href} className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">{data.value}</a>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.h1
        aria-label={NAME}
        variants={stagger(0, 0.04)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mt-8 font-title max-[380PX]:text-4xl text-5xl xl:text-[155px] 2xl:text-[160px] font-medium"
      >
        {words.map((word, wi) => (
          <span key={wi} aria-hidden="true">
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, ci) => (
                <span
                  key={ci}
                  className="inline-block overflow-hidden align-bottom pb-[0.08em]"
                >
                  <motion.span variants={letter} className="inline-block">
                    {char}
                  </motion.span>
                </span>
              ))}
            </span>
            {wi < words.length - 1 && " "}
          </span>
        ))}
      </motion.h1>
    </div>
  );
}