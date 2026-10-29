import { Fragment, useEffect, useRef, useState } from "react";
import tickerItems from "../data/tickerItems.js";
import HatimElbakkaliAbout from "../assets/images/HatimElbakkaliAbout.png";
import { socialLinks } from "../data/socialLinks.js";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";

const EASE = [0.76, 0, 0.24, 1];
const IMG_EASE = [0.22, 1, 0.36, 1];
const SPRING = { stiffness: 120, damping: 20 };
const TILT_SPRING = { stiffness: 150, damping: 15 };
const TICKER_COPIES = [0, 1, 2, 3];

const sectionV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35, delayChildren: 0.1 } },
};

const titleV = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const infoV = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageWrap = {
  hidden: { clipPath: "inset(0% 0% 100% 0% round 16px)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0% round 16px)",
    transition: { duration: 1, ease: [0.77, 0, 0.18, 1] },
  },
};

const imageInner = {
  hidden: { scale: 1.2 },
  visible: { scale: 1, transition: { duration: 1.4, ease: IMG_EASE } },
};

const charContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.01 } },
};

const charVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  },
};

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};

const wordVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`;

  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return isMobile;
}

function SplitChars({ text, isMobile }) {
  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {words.map((word, wi) => (
          <Fragment key={wi}>
            {isMobile ? (
              <motion.span
                variants={wordVariant}
                className="inline-block whitespace-nowrap"
              >
                {word}
              </motion.span>
            ) : (
              <span className="inline-block whitespace-nowrap">
                {[...word].map((ch, ci) => (
                  <motion.span
                    key={ci}
                    variants={charVariant}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            )}{" "}
          </Fragment>
        ))}
      </span>
    </>
  );
}

export default function About() {
  const isMobile = useIsMobile();
  const reduce = useReducedMotion();
  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-5%", "5%"],
  );

  const { scrollYProgress: enterProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "center center"],
  });

  const lockedProgress = useMotionValue(0);
  useMotionValueEvent(enterProgress, "change", (v) => {
    if (v > lockedProgress.get()) lockedProgress.set(v);
  });

  const wrapScale = useSpring(
    useTransform(lockedProgress, [0, 1], reduce ? [1, 1] : [0.8, 1]),
    SPRING,
  );
  const wrapRotate = useSpring(
    useTransform(lockedProgress, [0, 1], reduce ? [-2, -2] : [-10, -2]),
    SPRING,
  );

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), TILT_SPRING);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), TILT_SPRING);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <>
      {/* TickBar */}
      <div
        className="relative overflow-hidden bg-secondary py-1 text-white"
        id="about"
      >
        <div className="ticker-track flex w-max animate-[tickerMove_25s_linear_infinite] motion-reduce:animate-none will-change-transform">
          {TICKER_COPIES.map((n) => (
            <div
              key={n}
              className="flex shrink-0 items-center"
              aria-hidden={n > 0}
            >
              {tickerItems.map((item, i) => (
                <div key={`${n}-${i}`} className="flex items-center">
                  <span className="whitespace-nowrap px-3 font-serif font-bold tracking-wider">
                    {item}
                  </span>
                  <span className="text-primary" aria-hidden="true">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <motion.section
        variants={sectionV}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="app-container"
      >
        <motion.h2 variants={titleV} className="font-title text-section">
          /Who Am I
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Photo + socials */}
          <div ref={photoRef}>
            <motion.div style={{ scale: wrapScale, rotate: wrapRotate }}>
              <motion.div
                variants={imageWrap}
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  rotateX: reduce ? 0 : rotateX,
                  rotateY: reduce ? 0 : rotateY,
                  transformPerspective: 1000,
                }}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                whileHover="hover"
              >
                <motion.div variants={imageInner}>
                  <motion.div style={{ y: imgY, scale: reduce ? 1 : 1.12 }}>
                    <motion.img
                      className="w-full cursor-pointer"
                      src={HatimElbakkaliAbout}
                      alt="Portrait of Hatim Elbakkali smiling"
                      loading="lazy"
                      decoding="async"
                      variants={{ hover: { scale: reduce ? 1 : 1.06 } }}
                      transition={{ duration: 0.8, ease: IMG_EASE }}
                    />
                  </motion.div>
                </motion.div>
                {!reduce && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-none group-hover:translate-x-[300%] group-hover:opacity-100 group-hover:transition-transform group-hover:duration-[900ms] group-hover:ease-out"
                  />
                )}
              </motion.div>
              <motion.div
                variants={infoV}
                className="mx-2 mt-2 flex items-center gap-2 md:mx-0"
              >
                {socialLinks.map(({ href, label, Icon, external }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    initial={{ color: "#000" }}
                    whileHover={{ color: "#003176", scale: 1.1, y: -4 }}
                    whileTap={{ color: "#003176", scale: 1.2, y: -4 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Icon className="size-7 xl:size-8" strokeWidth={1.5} />
                  </motion.a>
                ))}

                <div className="ml-auto min-w-0">
                  <p className="text-right font-title text-xl lg:text-3xl">
                    Hatim Elbakkali hhhhhhhh
                  </p>
                  <p className="text-gradient text-right font-title text-xl lg:text-3xl">
                    Junior Full-Stack Developer
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex min-h-80 flex-col items-center justify-center lg:ml-18 lg:h-80">
            <motion.div
              variants={isMobile ? wordContainer : charContainer}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="mx-4 mt-5 font-text text-xl font-light lg:mt-0 xl:text-[22px]"
            >
              <p>
                <SplitChars text="I'm a" isMobile={isMobile} />
                <motion.span
                  variants={fadeVariant}
                  className="text-gradient font-title text-3xl"
                >
                  Junior Full-Stack Developer
                </motion.span>{" "}
                <SplitChars
                  text="and a 2nd-year student Classe d’Excellence at CMC Tanger, passionate about building modern web applications with clean architecture, secure code, high performance, and reliable, scalable solutions."
                  isMobile={isMobile}
                />
              </p>

              <p className="mt-5">
                <SplitChars
                  text="I focus on building high-quality software that is reliable, secure, scalable, and performance-driven, with an emphasis on clean architecture and delivering effective solutions to real-world problems."
                  isMobile={isMobile}
                />
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}