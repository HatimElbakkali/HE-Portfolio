import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { projects } from "../data/projects";
import ArrowTopRight from "../assets/icons/ui/ArrowRightTop.svg";

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const card = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const imageWrap = {
  hidden: { clipPath: "inset(0% 0% 100% 0% round 16px)" },
  show: {
    clipPath: "inset(0% 0% 0% 0% round 16px)",
    transition: { duration: 1, ease: [0.77, 0, 0.18, 1] },
  },
};

const imageInner = {
  hidden: { scale: 1.2 },
  show: { scale: 1, transition: { duration: 1.4, ease: EASE } },
};

const tagsWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const tag = {
  hidden: { opacity: 0, y: 14, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

function Blob({ className, background, drift, duration, reduce, parallax, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : parallax);
  return (
    <motion.div className={`absolute ${className}`} style={{ y }}>
      <motion.div
        className="size-full rounded-full will-change-transform"
        style={{ background }}
        animate={reduce ? undefined : drift}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

function ProjectCard({ project, reduce }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);
  const cardY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? [0, 0, 0] : [24, 0, -12]
  );

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 });

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
    <motion.div ref={ref} style={{ y: cardY }} className="w-full max-w-[350px] xl:max-w-[750px] mx-auto">
      <article className="w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
        <motion.a
          variants={imageWrap}
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title}`}
          className="group relative block overflow-hidden rounded-2xl"
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
            <motion.div style={{ y: imgY, scale: 1 }}>
              <motion.img
                className="w-full aspect-[5/4] xl:aspect-[7/5.5] object-cover"
                src={project.image}
                alt={`${project.title} mockup`}
                loading="lazy"
                variants={{ hover: { scale: reduce ? 1 : 1.06 } }}
                transition={{ duration: 0.8, ease: EASE }}
              />
            </motion.div>
          </motion.div>

          {!reduce && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full opacity-0 transition-none group-hover:translate-x-[300%] group-hover:opacity-100 group-hover:transition-transform group-hover:duration-[900ms] group-hover:ease-out"
            />
          )}
        </motion.a>
        </motion.div>

        <motion.div
          className="mt-3 flex items-start justify-between gap-3"
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="min-w-0">
            <motion.h2
              variants={fadeUp}
              className="font-title text-[32px] xl:text-[42px] leading-tight"
            >
              {project.title}
            </motion.h2>

            <motion.div variants={tagsWrap} className="mt-2 flex flex-nowrap gap-2">
              {project.tags.map((t) => (
                <motion.p
                  key={t}
                  variants={tag}
                  whileHover={reduce ? undefined : { y: -2 }}
                  className="font-text whitespace-nowrap text-[11.5px] md:text-sm xl:text-[15px] py-1 px-2.5 border rounded-full"
                >
                  {t}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex shrink-0 items-center gap-2 pt-2 xl:pt-3"
          >
            <motion.a
              className="font-text whitespace-nowrap max-[390px]:text-[12px] text-[12px] xl:text-[15px] py-1 px-2.5 border rounded-full"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              {"</>"} Github
            </motion.a>

            <motion.a
              className="flex justify-center items-center max-[390px]:size-7 size-7 border rounded-full"
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              variants={{
                rest: { rotate: 0, backgroundColor: "rgba(0,0,0,0)" },
                hover: { rotate: reduce ? 0 : 45, backgroundColor: reduce ? "rgba(0,0,0,0)" : "" },
              }}
              initial="rest"
              whileHover="hover"
              whileTap={reduce ? undefined : { scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <motion.img
                className="max-[390px]:size-3 size-3.5 xl:size-4"
                src={ArrowTopRight}
                alt=""
                variants={{
                  rest: { filter: "invert(0)" },
                  hover: { filter: reduce ? "invert(0)" : "invert(0)" },
                }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </article>
    </motion.div>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const blobSize =
    "size-48 md:size-72 xl:size-[26rem] blur-[80px] md:blur-[110px] xl:blur-[140px] opacity-80";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-x-clip">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Blob
          reduce={reduce}
          scrollYProgress={scrollYProgress}
          parallax={[-120, 160]}
          className={`top-[22%] -left-20 ${blobSize}`}
          drift={{ x: [0, 40, 0], y: [0, -30, 0] }}
          duration={16}
          background={`
            radial-gradient(circle at 60% 40%, #0BBDE0 0%, transparent 65%),
            radial-gradient(circle at 30% 75%, #003176 0%, transparent 50%)`}
        />
        <Blob
          reduce={reduce}
          scrollYProgress={scrollYProgress}
          parallax={[160, -120]}
          className={`top-[28%] -right-20 ${blobSize}`}
          drift={{ x: [0, -40, 0], y: [0, 35, 0] }}
          duration={18}
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
          viewport={{ once: true, amount: 0.05 }}
        >
          /Projects
        </motion.h1>

        <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}