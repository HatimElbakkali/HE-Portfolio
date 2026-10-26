// Data
import { linkNavPC, linkNavMB } from "../data/linkNav";
import socialLinks from "../data/socialLinks";
// icons
import { MoveUpRight } from "lucide-react";
import Bars from "../assets/icons/bars.svg";
import X from "../assets/icons/X.svg";
// hooks
import { useState, useEffect } from "react";
// animation
import { motion, AnimatePresence } from "motion/react";

const EASE = [0.76, 0, 0.24, 1];

const panelVariants = {
  hidden: { y: "-100%" },
  visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
  exit: { y: "-100%", transition: { duration: 0.7, ease: EASE } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.4, staggerChildren: 0.08 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

function Navbar() {
  const [navMobile, setNavMobile] = useState(false);

  // mni l-menu mat7ell, mankhliwch scroll f l-page
  useEffect(() => {
    document.body.style.overflow = navMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navMobile]);

  return (
    <>
      <header className="app-container grid grid-cols-2 lg:grid-cols-3 items-center">
        <span
          className={`relative font-title text-2xl md:text-3xl 2xl:text-4xl z-[60] transition-colors duration-500 ${navMobile ? "text-white" : "text-black"
            }`}
        >
          Hatim Elbakkali
        </span>

        <nav
          className="hidden lg:flex justify-center items-center gap-5"
        >
          {linkNavPC.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="group relative block overflow-hidden font-title text-xl md:text-2xl 2xl:text-3xl leading-tight"
            >
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                {link.label}
              </span>

              <span
                aria-hidden="true"
                className="absolute inset-0 block translate-y-full text-primary transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex justify-end items-center">
          <a
            href="#contact"
            className="group flex justify-center w-40 items-center gap-1 bg-primary text-white rounded-4xl font-title text-3xl 2xl:text-4xl"
          >
            <span className="relative block overflow-hidden leading-[1.2]">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                Contact me
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
              >
                Contact me
              </span>
            </span>

            <MoveUpRight className="size-6 mt-1" />
          </a>
        </div>

        {/* NavToggle */}
        <div className="flex justify-end items-center">
          <motion.button
            type="button"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            onClick={() => setNavMobile((prev) => !prev)}
            className={`absolute z-[60] block lg:hidden flex justify-center items-center size-11.5 rounded-[50%] border transition-colors duration-500 ${navMobile ? "border-white" : "border-black"
              }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={navMobile ? "x" : "bars"}
                src={navMobile ? X : Bars}
                alt=""
                className={navMobile ? "size-5" : "size-7"}
                initial={{ opacity: 0, rotate: navMobile ? -90 : 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: navMobile ? 90 : -90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {navMobile && (
          <motion.div
            key="mobile-menu"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-x-0 top-0 z-50 h-dvh"
          >
            {/* Panel */}
            <div className="relative h-full bg-primary overflow-hidden">
              <motion.nav
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full h-[calc(100%-72px)] flex flex-col justify-center items-center"
              >
                {linkNavMB.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    variants={linkVariants}
                    onClick={() => setNavMobile(false)}
                    className="font-serif text-white font-medium italic tracking-[-2px] text-[4rem] leading-none"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>

              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.6 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="flex justify-center gap-2"
              >
                {socialLinks.map((link) => (
                  <a
                    className="font-text text-white text-lg font-bold"
                    key={link.id}
                    href={link.src}
                  >
                    {link.label}
                  </a>
                ))}
              </motion.nav>
            </div>

            {/* Curved bottom edge (l-9ws) */}
            <svg
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              className="block w-full h-12 -mt-px text-primary"
              fill="currentColor"
            >
              <path d="M0 0 H100 V0 Q50 12 0 0 Z" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;