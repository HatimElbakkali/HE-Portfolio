// Data
import { linkNavPC, linkNavMB } from "../data/linkNav";
import socialLinks from "../data/socialLinks";
// icons
import { MoveUpRight } from "lucide-react";
import Bars from "../assets/icons/bars.svg";
import X from "../assets/icons/X.svg";
// hooks
import { useState } from "react";

function Navbar() {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <>
      <header className="app-container grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 items-center">
        <span
          className={`font-title text-2xl md:text-3xl 2xl:text-4xl z-10 ${
            navMobile ? "text-white" : "text-black"
          }`}
        >
          Hatim Elbakkali
        </span>
        <nav className="hidden sm:block sm:flex justify-center items-center gap-5">
          {linkNavPC.map((link) => (
            <a
              className="font-title text-xl md:text-2xl 2xl:text-3xl"
              key={link.id}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block lg:flex justify-end items-center">
          <a
            href="#contact"
            className="flex justify-center w-40 items-center gap-1 bg-primary text-white rounded-4xl font-title text-3xl  2xl:text-4xl"
          >
            Contact me
            <MoveUpRight className="size-6 mt-1" />
          </a>
        </div>

        {/* NavToggle */}
        <div
          onClick={() => setNavMobile((prev) => !prev)}
          className={`absolute z-11 block lg:hidden flex justify-center items-center size-11.5 rounded-[50%] border-1 ${navMobile ? "border-white" : " border-black"} justify-self-end`}
        >
          {navMobile ? (
            <img className="size-5" src={X} alt="" />
          ) : (
            <img className="size-7" src={Bars} alt="" />
          )}
        </div>
      </header>

      {/* NavToggle bg */}
      {navMobile && (
        <div className="fixed inset-0 z-1 bg-primary">
          <nav className="w-full h-[calc(100%-72px)] flex flex-col justify-center items-center">
            {linkNavMB.map((link) => (
              <a
                className="font-serif text-white font-medium italic tracking-[-2px] text-[4rem] leading-none "
                key={link.id}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <nav className="flex justify-center gap-2">
            {socialLinks.map((link) => (
              <a
                className="font-text text-lg font-bold"
                key={link.id}
                href={link.src}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="bg-secondary circle-gradient top-25 left-80"></div>
          <div className="bg-secondary circle-gradient bottom-45 -left-15 "></div>
        </div>
      )}
    </>
  );
}

export default Navbar;
