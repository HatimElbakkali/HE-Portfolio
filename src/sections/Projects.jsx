import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";

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
        <section
            id="projects"
            className="relative isolate overflow-hidden app-container py-20"
        >
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
            {projects.map((project) =>{
                <img src={project.image} alt="" />
                
            })}

        </section>
    );
}