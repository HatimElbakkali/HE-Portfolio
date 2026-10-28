import { motion, useReducedMotion } from "motion/react";
import contactData from "../data/contactData.js";
export default function Contact() {
  const reduce = useReducedMotion();
  return (
      <div className="app-container">
        <h1 className="text-section font-title">/Contact</h1>
        {/* Currently studying badge */}
        <div className="flex  items-center gap-2 z-10">
          <span className="relative flex h-5 w-5 2xl:h-6 2xl:w-6 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full bg-primary"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={
                reduce
                  ? { opacity: 0.5 }
                  : { scale: [1, 1.8], opacity: [0.5, 0] }
              }
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
            />

            <motion.span
              className="h-2.5 w-2.5 xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 rounded-full bg-primary"
              animate={
                reduce ? { opacity: 1 } : { opacity: [1, 1, 0.4, 1, 0.7, 1] }
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                times: [0, 0.45, 0.5, 0.55, 0.7, 0.75],
              }}
            />
          </span>
          <p className="font-text text-lg xl:text-lg 2xl:text-2xl font-medium">
            Available for internship
          </p>
        </div>
        <div className="flex grid grid-cols-1 lg:grid-cols-2 mt-6">
          <div>
            {" "}
            <h1 className="font-text font-semibold text-3xl xl:text-5xl 2xl:text-6xl">
              Let's build something
            </h1>
            <h1 className="font-text font-semibold text-3xl xl:text-5xl 2xl:text-6xl">great together.</h1>
          </div>

          <div className="flex flex-col mt-8 lg:mt-25 2xl:mt-40 items-start gap-2 2xl:gap-8">
            {contactData.map((data) => (
              <div>
                <h3 className="font-text font-semibold text-[24px] 2xl:text-4xl">
                  {data.name}
                </h3>
                <span className="font-text font-light text-xl 2xl:text-4xl">
                  {data.value}
                </span>
              </div>
            ))}
          </div>
        </div>
          <h1 className="text-center mt-8 font-title text-5xl xl:text-[155px] 2xl:text-[167px]  font-medium">HATIM ELBAKKALI</h1>
      </div>
  );
}
