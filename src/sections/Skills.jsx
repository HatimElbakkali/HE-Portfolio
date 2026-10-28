import { Icon } from "@iconify/react";
import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../data/skills.js";

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

function Blob({ className, background, drift, duration, reduce }) {
  return (
    <motion.div
      className={`absolute rounded-full will-change-transform ${className}`}
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
  const blobSize =
    "size-48 md:size-72 xl:size-[26rem] blur-[80px] md:blur-[110px] xl:blur-[140px] opacity-80";

  return (
    <section id="skills" className="relative overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <Blob
          reduce={reduce}
          className={`top-[8%] -right-16 ${blobSize}`}
          drift={{ x: [0, -40, 0], y: [0, 30, 0] }}
          duration={14}
          background={`
            radial-gradient(circle at 40% 40%, #0BBDE0 0%, transparent 65%),
            radial-gradient(circle at 70% 75%, #003176 0%, transparent 50%)`}
        />
        <Blob
          reduce={reduce}
          className={`top-[38%] -left-20 ${blobSize}`}
          drift={{ x: [0, 40, 0], y: [0, -35, 0] }}
          duration={18}
          background={`
            radial-gradient(circle at 60% 40%, #0BBDE0 0%, transparent 65%),
            radial-gradient(circle at 30% 75%, #003176 0%, transparent 50%)`}
        />
        <Blob
          reduce={reduce}
          className={`bottom-[8%] -right-16 ${blobSize}`}
          drift={{ x: [0, -30, 0], y: [0, -40, 0] }}
          duration={16}
          background={`
            radial-gradient(circle at 40% 40%, #0BBDE0 0%, transparent 65%),
            radial-gradient(circle at 70% 75%, #003176 0%, transparent 50%)`}
        />
      </div>

      <div className="app-container relative z-10">
        <motion.h1
          className="font-title text-section"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.001 }}
        >
          /Skills
        </motion.h1>

        {skills.map((group) => (
          <div key={group.id}>
            <motion.h2
              className="font-title text-3xl xl:text-4xl mt-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.001 }}
            >
              {group.category}
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-4 xl:gap-15 mt-6 mx-8 xl:ml-15"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.001 }}
            >
              {group.items.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={item}
                  whileHover={reduce ? undefined : { y: -6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex flex-col items-center gap-2 cursor-default"
                >
                  {skill.iconType === "iconify" ? (
                    <Icon icon={skill.icon} className="size-14 xl:size-18" />
                  ) : (
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="object-contain size-14 xl:size-18"
                    />
                  )}

                  <p className="hidden lg:block font-text font-medium xl:text-xl">
                    {skill.name}
                  </p>

                  {skill.id === "mvc" && (
                    <p className="block lg:hidden font-text font-medium xl:text-xl">
                      {skill.name}
                    </p>
                  )}

                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}