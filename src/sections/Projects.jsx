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
    <section id="projects" className="relative overflow-hidden app-container">
      {/* Gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* left*/}
        <Blob
          reduce={reduce}
          className={`top-[22%] -left-20 ${blobSize}`}
          drift={{ x: [0, 40, 0], y: [0, -30, 0] }}
          duration={16}
          background={`
            radial-gradient(circle at 60% 40%, #0BBDE0 0%, transparent 65%),
            radial-gradient(circle at 30% 75%, #003176 0%, transparent 50%)`}
        />
        {/* Right */}
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
      <div className="flex items-center gap-4 grid grid-cols-1 xl:grid-cols-2">
        {projects.map((project) => (
          <>
            <div>
              <img
                className="rounded-4xl w-[350px] h-[280px] xl:w-[750px] xl:h-[450px] object-cover"
                src={project.image}
                alt=""
              />
              <div className="grid grid-cols-2 items-center">
                <h1 className="font-title text-[32px] xl:text-[42px]">{project.title}</h1>
                <div className="flex items-center justify-center gap-2 ml-10 xl:ml-43">
                  <a
                    className="font-text text-[10px] xl:text-[15px] py-1 px-2 border-1 rounded-2xl xl:w-21 w-16"
                    href={project.github}
                  >
                    {"</>"} Github
                  </a>
                  <a className="flex justify-center items-center size-6 xl:size-8 border-1 rounded-[50%]" href={project.live}>
                    <img className="size-3 xl:size-4" src={ArrowTopRight} alt="" />
                  </a>
                </div>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <p className="font-text text-[10px] xl:text-[15px] py-1 px-2 border-1 rounded-2xl">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </>
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
