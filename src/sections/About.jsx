import tickerItems from "../data/tickerItems.js";
import HatimElbakkaliAbout from "../assets/images/HatimElbakkaliAbout.webp";
import { motion } from "motion/react";
import SplitChars, {
  charContainer,
  wordContainer,
  fadeVariant,
  useIsMobile,
} from "../animation/SplitChars.jsx";

import { Linkedin, GitHub, Instagram, Mail } from "react-feather";
export default function About() {
  const isMobile = useIsMobile();
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
        viewport={{ once: true, amount: 0.0005 }} className="app-container">
        <motion.h1 variants={titleV} className="font-title text-section">
          /Who Am I
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="-rotate-2">
            <motion.img variants={photoV} className="rounded-2xl" src={HatimElbakkaliAbout} alt="" loading="lazy" />
            <motion.div variants={infoV} className="flex gap-2 mt-2 mx-2 md:mx-0">
              <motion.a
                href="https://www.linkedin.com/in/hatimelbakkali/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ color: "black" }}
                whileHover={{ color: "#003176" }}
                whileTap={{ color: "#003176", scale: 1.2 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Linkedin className="size-7 xl:size-8" />
              </motion.a>

              <motion.a
                href="https://github.com/HatimElbakkali/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ color: "black" }}
                whileHover={{ color: "#003176" }}
                whileTap={{ color: "#003176" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <GitHub className="size-7 xl:size-8" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/hatim._.elbakkali/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ color: "black" }}
                whileHover={{ color: "#003176" }}
                whileTap={{ color: "#003176" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Instagram className="size-7 xl:size-8" />
              </motion.a>

              <motion.a
                href="mailto:hatim.elbakkali.dev@gmail.com"
                initial={{ color: "black" }}
                whileHover={{ color: "#003176" }}
                whileTap={{ color: "#003176" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Mail className="size-7 xl:size-8" />
              </motion.a>
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
          <div className="flex flex-col items-center justify-center lg:ml-18 min-h-80 lg:h-80">
            <motion.div
              variants={isMobile ? wordContainer : charContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="font-text font-light text-xl xl:text-[22px] mt-8 lg:mt-0 mx-4"
            >
              <p className="">
                <SplitChars text="I'm a" />
                <motion.span
                  variants={fadeVariant}
                  className="font-title text-gradient text-3xl"
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
