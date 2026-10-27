import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import ArrowTopRight from "../assets/icons/ArrowRightTop.svg";

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

export default function Projects() {
  const reduce = useReducedMotion();
  const blobSize =
    "size-48 md:size-72 xl:size-[26rem] blur-[80px] md:blur-[110px] xl:blur-[140px] opacity-80";

  return (
    <section id="projects" className="relative overflow-x-clip app-container">
      {/* Gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Blob
          reduce={reduce}
          className={`top-[22%] -left-20 ${blobSize}`}
          drift={{ x: [0, 40, 0], y: [0, -30, 0] }}
          duration={16}
          background={`
            radial-gradient(circle at 60% 40%, #0BBDE0 0%, transparent 65%),
            radial-gradient(circle at 30% 75%, #003176 0%, transparent 50%)`}
        />
        <Blob
          reduce={reduce}
          className={`top-[28%] -right-20 ${blobSize}`}
          drift={{ x: [0, -40, 0], y: [0, 35, 0] }}
          duration={18}
          background={`
            radial-gradient(circle at 40% 40%, #0BBDE0 0%, transparent 65%),
            radial-gradient(circle at 70% 75%, #003176 0%, transparent 50%)`}
        />
      </div>

      <motion.h1
        className="font-title text-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        /Projects
      </motion.h1>

      <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full max-w-[350px] xl:max-w-[750px] mx-auto"
          >
            <img
              className="w-full aspect-[5/4] xl:aspect-[5/3] rounded-2xl object-cover"
              src={project.image}
              alt={`${project.title} mockup`}
              loading="lazy"
            />

            <div className="mt-3 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="font-title text-[32px] xl:text-[42px] leading-tight">
                  {project.title}
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <p
                      key={tag}
                      className="font-text whitespace-nowrap text-[12px] md:text-sm xl:text-[15px] py-1 px-2.5 border rounded-full"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 pt-2 xl:pt-3">
                <a
                  className="font-text whitespace-nowrap max-[390px]:text-[10px] text-[13px] xl:text-[15px] py-1 px-2.5 border rounded-full"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {"</>"} Github
                </a>
                <a
                  className="flex justify-center items-center max-[390px]:size-6 size-8 xl:size-8 border rounded-full"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <img className="max-[390px]:size-3 size-3.5 xl:size-4" src={ArrowTopRight} alt="" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}