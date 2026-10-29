import { Icon } from "@iconify/react";
import { motion, useReducedMotion } from "motion/react";
import { skills } from "../data/skills.js";

/* ---------- Variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const VIEWPORT = { once: true, amount: 0.1 };
const HOVER_SPRING = { type: "spring", stiffness: 300, damping: 18 };

const gradient = (a, b) =>
  `radial-gradient(circle at ${a}, #0BBDE0 0%, transparent 65%),
   radial-gradient(circle at ${b}, #003176 0%, transparent 50%)`;

const BLOB_SIZE =
  "size-48 md:size-72 xl:size-[26rem] blur-[80px] md:blur-[110px] xl:blur-[140px] opacity-80";

const BLOBS = [
  {
    pos: "top-[8%] -right-16",
    drift: { x: [0, -40, 0], y: [0, 30, 0] },
    duration: 14,
    background: gradient("40% 40%", "70% 75%"),
  },
  {
    pos: "top-[38%] -left-20",
    drift: { x: [0, 40, 0], y: [0, -35, 0] },
    duration: 18,
    background: gradient("60% 40%", "30% 75%"),
  },
  {
    pos: "bottom-[8%] -right-16",
    drift: { x: [0, -30, 0], y: [0, -40, 0] },
    duration: 16,
    background: gradient("40% 40%", "70% 75%"),
  },
];

function Blob({ pos, background, drift, duration, reduce }) {
  return (
    <motion.div
      className={`absolute rounded-full transform-gpu will-change-transform ${pos} ${BLOB_SIZE}`}
      style={{ background }}
      animate={reduce ? undefined : drift}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
}

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative isolate overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        {BLOBS.map((blob, i) => (
          <Blob key={i} reduce={reduce} {...blob} />
        ))}
      </div>

      <div className="app-container relative z-10">
        <motion.h2
          className="font-title text-section"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          /Skills
        </motion.h2>

        {skills.map((group) => (
          <div key={group.id}>
            <motion.h3
              className="mt-10 font-title text-3xl xl:text-4xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              {group.category}
            </motion.h3>

            <motion.ul
              className="mx-8 mt-6 flex flex-wrap gap-4 xl:ml-15 xl:gap-15"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              {group.items.map((skill) => (
                <motion.li
                  key={skill.id}
                  variants={item}
                  whileHover={reduce ? undefined : { y: -6, scale: 1.1 }}
                  transition={HOVER_SPRING}
                  className="flex cursor-default flex-col items-center gap-2"
                >
                  {skill.iconType === "iconify" ? (
                    <Icon
                      icon={skill.icon}
                      className="size-14 xl:size-18"
                      aria-hidden="true"
                    />
                  ) : (
                    <img
                      src={skill.icon}
                      alt=""
                      width={72}
                      height={72}
                      loading="lazy"
                      decoding="async"
                      className="size-14 object-contain xl:size-18"
                    />
                  )}

                  <p
                    className={`font-text font-medium xl:text-xl ${
                      skill.id === "mvc" ? "" : "sr-only lg:not-sr-only"
                    }`}
                  >
                    {skill.name}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </section>
  );
}