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

// ids dyal sections (jaybhom mn href dyal linkNavMB: "#about" -> "about")
const sectionIds = linkNavMB.map((link) => link.href.replace("#", ""));

// 7seb l-section active (b scroll position) - kharij component bach nkhddmoha f ay blasa
function computeActiveSection() {
  const doc = document.documentElement;
  const nearBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 4;

  if (nearBottom) return sectionIds[sectionIds.length - 1];

  let current = "";
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    // 0.4 * height dyal l-ecran: khdam mzyan f PC w mobile
    if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
      current = id;
    }
  });
  return current;
}

function Navbar() {
  const [navMobile, setNavMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // mni7 kat7ell l-menu: mnaa3 scroll dyal body
  useEffect(() => {
    document.body.style.overflow = navMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navMobile]);

  // header background mli scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // detect active section f scroll / resize / hashchange
  useEffect(() => {
    const update = () => setActiveSection(computeActiveSection());

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    window.addEventListener("load", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
      window.removeEventListener("load", update);
    };
  }, []);

  // FIX: 3awed 7seb l-active section mli kat7ell l-menu
  useEffect(() => {
    if (navMobile) setActiveSection(computeActiveSection());
  }, [navMobile]);

  return (
    <>
      <header
        className={`app-container sticky top-0 z-80 h-18 grid grid-cols-2 grid-rows-1 lg:grid-cols-3 items-center transition-all duration-300 ${
          navMobile
            ? "bg-transparent"
            : scrolled
              ? "bg-white/80 backdrop-blur-md shadow-sm"
              : "bg-transparent"
        } `}
      >
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`relative font-title text-2xl md:text-3xl cursor-pointer 2xl:text-4xl z-[60] transition-colors duration-500 ${
            navMobile ? "text-white" : "text-black"
          }`}
        >
          Hatim Elbakkali
        </span>

        <nav className="hidden lg:flex justify-center items-center gap-5">
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
            className={`absolute z-[60] block lg:hidden flex justify-center items-center size-11.5 rounded-[50%] border transition-colors duration-500 ${
              navMobile ? "border-white" : "border-black"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={navMobile ? "x" : "bars"}
                src={navMobile ? X : Bars}
                alt=""
                className={navMobile ? "size-5" : "size-7"}
                initial={{
                  opacity: 0,
                  rotate: navMobile ? -90 : 90,
                  scale: 0.5,
                }}
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
                {linkNavMB.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;

                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      variants={linkVariants}
                      onClick={() => {
                        setActiveSection(id);
                        setNavMobile(false);
                      }}
                      className="relative font-serif text-white font-medium italic tracking-[-2px] text-[4rem] leading-none"
                    >
                      <span
                        className={`block transition-opacity duration-300 ${
                          isActive ? "opacity-50" : "opacity-100"
                        }`}
                      >
                        {link.label}
                      </span>

                      {/* FIX: bla layoutId (kaydir bug f mobile m3a preserveAspectRatio none) */}
                      {isActive && (
                        <motion.svg
                          key={`line-${id}`}
                          viewBox="0 0 175 10"
                          preserveAspectRatio="none"
                          fill="none"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-3 pointer-events-none overflow-visible"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.path
                            d="M2 5 Q 45 0, 88 5 T 173 5"
                            stroke="#003176"
                            strokeWidth="3"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            animate={{
                              d: [
                                "M2 5 Q 45 0, 88 5 T 173 5",
                                "M2 5 Q 45 10, 88 5 T 173 5",
                                "M2 5 Q 45 0, 88 5 T 173 5",
                              ],
                            }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.svg>
                      )}
                    </motion.a>
                  );
                })}
              </motion.nav>

              <motion.nav
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.8, duration: 0.6 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="flex justify-center gap-2"
              >
                {socialLinks.map((link) => (
                  <a
                    className="font-text text-white text-lg font-bold"
                    whileTap={{color: "#003176"}}
                    key={link.id}
                    href={link.src}
                  >
                    {link.label}
                  </a>
                ))}
              </motion.nav>
            </div>

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