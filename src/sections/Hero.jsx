import HatimElbakkali from "../assets/images/HatimElbakkali.webp";
import { motion, useReducedMotion } from "framer-motion";

const BLOBS = [
  { color: "bg-[#0047C8]", pos: "w-[45%] h-[55%] left-[10%] top-[30%]", anim: "animate-[drift1_9s_ease-in-out_infinite]" },
  { color: "bg-[#0A6CFF]", pos: "w-[40%] h-[50%] left-[52%] top-[5%]", anim: "animate-[drift2_11s_ease-in-out_infinite]" },
  { color: "bg-[#003176]", pos: "w-[40%] h-[50%] left-[55%] top-[42%]", anim: "animate-[drift3_10s_ease-in-out_infinite]" },
  { color: "bg-[#0FE8FF]", pos: "w-[50%] h-[50%] left-[25%] top-[22%]", anim: "animate-[drift4_8s_ease-in-out_infinite]" },
];

function PulseDot({ reduce }) {
  return (
    <span className="relative flex h-5 w-5 2xl:h-6 2xl:w-6 items-center justify-center" aria-hidden="true">
      <motion.span
        className="absolute inset-0 rounded-full bg-primary"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={reduce ? { opacity: 0.5 } : { scale: [1, 1.8], opacity: [0.5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="h-2.5 w-2.5 xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 rounded-full bg-primary"
        animate={reduce ? { opacity: 1 } : { opacity: [1, 1, 0.4, 1, 0.7, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 0.7, 0.75] }}
      />
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex flex-col md:block h-[calc(100svh-64px)] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 w-[min(1000px,95vw)] h-[min(860px,85svh)] -z-10 pointer-events-none"
      >
        {BLOBS.map(({ color, pos, anim }, i) => (
          <div
            key={i}
            className={`blob absolute rounded-full blur-[24px] md:blur-[40px] transform-gpu will-change-transform motion-reduce:animate-none ${color} ${pos} ${anim}`}
          />
        ))}
      </div>

      {/* container dyal l-title */}
      <div className="relative z-20 shrink-0 flex items-center justify-center px-4 pt-6 pb-2 md:px-0 md:pb-0 md:pt-0 md:h-[34%] md:translate-y-[35%]">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-title leading-[1.1] text-[clamp(3.5rem,13vw,4.5rem)] md:text-[min(8rem,17svh,11vw)] flex flex-wrap justify-center gap-x-[0.3em] md:gap-x-[min(30svh,16vw)]">
            <span>Hi I'm</span>
            <span>Hatim</span>
          </h1>
          <p className="lg:hidden font-title text-[clamp(1.75rem,6vw,2.25rem)] md:text-4xl text-gradient">
            Junior Full-Stack Developer
          </p>
        </div>
      </div>

      {/* Desktop side info */}
      <div className="hidden lg:flex absolute left-10 top-[50%] items-center gap-2 z-30">
        <PulseDot reduce={reduce} />
        <p className="font-text text-[min(2rem,3svh)] font-medium">Currently studying at CMC</p>
      </div>

      <div className="hidden lg:block absolute left-10 top-[58%] max-w-[260px] z-30">
        <p className="font-title text-[min(1.875rem,4svh)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Junior Full-Stack Developer
        </p>
        <p className="font-text font-light mt-2 mr-10 text-[min(2rem,3.75svh)] leading-[1]">
          Building secure, scalable and high-performance web applications from frontend to backend.
        </p>
      </div>

      <div className="relative z-0 flex-1 min-h-0 md:contents">
        <img
          src={HatimElbakkali}
          alt="Portrait of Hatim Elbakkali"
          width={950}
          height={1100}
          fetchPriority="high"
          decoding="async"
          className="
  grayscale absolute bottom-0 left-1/2 -translate-x-1/2 max-w-none
  h-full w-auto object-contain object-bottom
  md:h-[88%]
"
        />
      </div>
    </section>
  );
}