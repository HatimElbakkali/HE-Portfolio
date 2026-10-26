import tickerItems from "../data/tickerItems.js";
import HatimElbakkaliAbout from "../assets/images/HatimElbakkaliAbout.png";
import { motion } from "motion/react";
import SplitChars, { charContainer, fadeVariant } from "../animation/SplitChars.jsx";

import { Linkedin, GitHub, Instagram, Mail } from "react-feather";
export default function About() {
  const EASE = [0.76, 0, 0.24, 1];

  const section = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.35, delayChildren: 0.1 },
    },
  };

  const titleV = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  const photoV = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: EASE } },
  };

  const infoV = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  return (
    <>
      {/* TickBar */}
      <div className="relative overflow-hidden bg-secondary py-1 text-white" id="about">
        <div className="flex w-max animate-[tickerMove_25s_linear_infinite] will-change-transform ticker-track">
          {[0, 1, 2, 3].map((n) => (
            <div key={n} className="flex shrink-0 items-center" aria-hidden={n > 0}>
              {tickerItems.map((item) => (
                <div key={item + n} className="flex items-center">
                  <span className="font-serif font-bold tracking-wider whitespace-nowrap px-3">
                    {item}
                  </span>
                  <span className="text-primary">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <motion.section variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }} className="app-container">
        <motion.h1 variants={titleV} className="font-title text-center text-4xl my-10 xl:text-4xl 2xl:text-6xl lg:my-15">
          /Who Am I
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="-rotate-2">
            <motion.img variants={photoV} className="rounded-2xl" src={HatimElbakkaliAbout} alt="" loading="lazy" />
            <motion.div variants={infoV} className="flex gap-2 xl:mt-2 mx-2 md:mx-0">
              {" "}
              <Linkedin className="xl:size-8 size-14" />
              <GitHub className="xl:size-8 size-14" />
              <Instagram className="xl:size-8 size-14" />
              <Mail className="xl:size-8 size-14" />
              <div className="w-150">
                <p className="text-right font-title text-xl lg:text-3xl">
                  Hatim Elbakkali
                </p>
                <p className="text-right font-title text-xl lg:text-3xl text-gradient">
                  Junior Full-Stack Developer
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center lg:ml-18 h-80">
            <motion.div
              variants={charContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="font-text font-light text-xl xl:text-[22px] mt-10 lg:mt-0 mx-4"
            >
              <p>
                <SplitChars text="I'm a" />
                <motion.span
                  variants={fadeVariant}
                  className="font-title text-gradient text-2xl"
                >
                  Junior Full-Stack Developer
                </motion.span>{" "}
                <SplitChars text="and a 2nd-year student Classe d’Excellence at CMC Tanger, passionate about building modern web applications with clean architecture, secure code, high performance, and reliable, scalable solutions." />
              </p>

              <p className="mt-5">
                <SplitChars text="I focus on building high-quality software that is reliable, secure, scalable, and performance-driven, with an emphasis on clean architecture and delivering effective solutions to real-world problems." />
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
