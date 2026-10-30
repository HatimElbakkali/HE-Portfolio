import { linkNavPC, linkNavMB } from "../data/linkNav";
import { socialLinksNavMB } from "../data/socialLinks";
import { MoveUpRight } from "lucide-react";
import Bars from "../assets/icons/ui/bars.svg";
import X from "../assets/icons/ui/X.svg";
import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const EASE = [0.76, 0, 0.24, 1];

const panelVariants = {
  hidden: { y: "calc(-100% - 3rem)" },
  visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
  exit: { y: "calc(-100% - 3rem)", transition: { duration: 0.7, ease: EASE } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.25, staggerChildren: 0.06 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const sectionIds = linkNavMB.map((link) => link.href.replace("#", ""));

function computeActiveSection() {
  const doc = document.documentElement;
  const nearBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 4;

  if (nearBottom) return sectionIds[sectionIds.length - 1];

  let current = "";
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
      current = id;
    }
  });
  return current;
}

/* Character-by-character rolling text (Framer Motion).
   The parent must be a motion element with initial="rest", animate="rest"
   and whileHover="hover"; the variants propagate to every character. */
const charDelay = 0.025;

const charTopVariants = {
  rest: (i) => ({
    y: "0%",
    transition: { duration: 0.5, ease: EASE, delay: i * charDelay },
  }),
  hover: (i) => ({
    y: "-100%",
    transition: { duration: 0.5, ease: EASE, delay: i * charDelay },
  }),
};

const charBottomVariants = {
  rest: (i) => ({
    y: "100%",
    transition: { duration: 0.5, ease: EASE, delay: i * charDelay },
  }),
  hover: (i) => ({
    y: "0%",
    transition: { duration: 0.5, ease: EASE, delay: i * charDelay },
  }),
};

function RollingText({ text, hoverClass = "" }) {
  const chars = text.split("");

  return (
    <span className="relative block overflow-hidden leading-[1.2]">
      <span className="sr-only">{text}</span>

      {/* Layer 1: goes up */}
      <span aria-hidden="true" className="flex">
        {chars.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={charTopVariants}
            className="block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      {/* Layer 2: comes from below */}
      <span aria-hidden="true" className="absolute inset-0 flex">
        {chars.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={charBottomVariants}
            className={`block ${hoverClass}`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

function Navbar() {
  const [navMobile, setNavMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [clickedSocial, setClickedSocial] = useState([]);
  useLayoutEffect(() => {
    if (navMobile) document.documentElement.classList.add("menu-open");
  }, [navMobile]);

  useEffect(() => {
    return () => document.documentElement.classList.remove("menu-open");
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > 0);
      setActiveSection(computeActiveSection());
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", update);
    window.addEventListener("load", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", update);
      window.removeEventListener("load", update);
    };
  }, []);

  return (
    <>
      <header
        className={`px-6 md:pt-2 lg:pt-0 lg:px-10 sticky top-0 z-80 h-16 grid grid-cols-2 grid-rows-1 lg:grid-cols-3 items-center transition-[background-color,box-shadow] duration-300 ${
          navMobile
            ? "bg-transparent"
            : scrolled
              ? "bg-white/90 shadow-sm lg:bg-white/80 lg:backdrop-blur-md"
              : "bg-transparent"
        }`}
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
            <motion.a
              key={link.id}
              href={link.href}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="block font-title text-xl md:text-2xl 2xl:text-3xl leading-tight"
            >
              <RollingText text={link.label} hoverClass="text-primary" />
            </motion.a>
          ))}
        </nav>

        <div className="hidden lg:flex justify-end items-center">
          <motion.a
            href="#contact"
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="flex justify-center w-40 items-center gap-1 bg-primary text-white rounded-4xl font-title text-3xl 2xl:text-4xl"
          >
            <RollingText text="Contact me" />
            <MoveUpRight className="size-6 mt-1" />
          </motion.a>
        </div>

        {/* NavToggle */}
        <div className="flex justify-end items-center">
          <motion.button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={navMobile}
            whileTap={{ scale: 0.9 }}
            onClick={() => setNavMobile((prev) => !prev)}
            className={`absolute z-[60] flex lg:hidden justify-center items-center size-11.5 rounded-[50%] border transition-colors duration-500 ${
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
                transition={{ duration: 0.15 }}
              />
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence
        onExitComplete={() =>
          document.documentElement.classList.remove("menu-open")
        }
      >
        {navMobile && (
          <motion.div
            key="mobile-menu"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 z-50 will-change-transform touch-none overscroll-contain"
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

                      {isActive && (
                        <motion.svg
                          key={`line-${id}`}
                          viewBox="0 0 175 10"
                          preserveAspectRatio="none"
                          fill="none"
                          className="nav-wave absolute left-0 top-1/2 -translate-y-1/2 w-full h-3 pointer-events-none overflow-visible"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path
                            d="M2 5 Q 45 0, 88 5 T 173 5"
                            stroke="#003176"
                            strokeWidth="3"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
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
                  transition: { delay: 0.5, duration: 0.6 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="flex justify-center gap-2"
              >
                {socialLinksNavMB.map((link) => (
                  <a
                    className={`font-text text-white text-lg font-bold transition-colors duration-300 ${
                      clickedSocial.includes(link.id) ? "text-secondary!" : ""
                    }`}
                    target="_blank"
                    rel="noreferrer"
                    key={link.id}
                    href={link.src}
                    onClick={() =>
                      setClickedSocial((prev) =>
                        prev.includes(link.id) ? prev : [...prev, link.id]
                      )
                    }
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