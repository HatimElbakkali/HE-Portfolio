import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = "HATIM ELBAKKALI";
const MIN_DURATION = 2500;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const characterVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const lockScroll = () => {
  const root = document.documentElement;
  const scrollbarWidth = window.innerWidth - root.clientWidth;

  root.style.overflow = "hidden";
  root.style.paddingRight = `${scrollbarWidth}px`;
};

const unlockScroll = () => {
  const root = document.documentElement;
  root.style.overflow = "";
  root.style.paddingRight = "";
};

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    lockScroll();
    return unlockScroll;
  }, []);

  useEffect(() => {
    const minTime = new Promise((resolve) => setTimeout(resolve, MIN_DURATION));
    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve, { once: true });
    });

    Promise.all([minTime, pageLoaded]).then(() => setLoading(false));
  }, []);

  const handleExitComplete = () => {
    unlockScroll();
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex touch-none items-center justify-center bg-primary"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center font-title text-5xl md:text-7xl lg:text-9xl 2xl:text-[200px] font-medium text-white sm:text-5xl"
            aria-label={text}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={characterVariants}
                className="inline-block"
                aria-hidden="true"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}