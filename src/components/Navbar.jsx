import { linkNavPC, linkNavMB } from "../data/linkNav";
import socialLinks from "./../data/socialLinks";
import { MoveUpRight } from "lucide-react";
import Bars from "./../assets/icons/bars.svg";
import X from './../assets/icons/X.svg'
import { useState } from "react";
function Navbar() {
    const [navMobile, setNavMobile] = useState(false);
    return (
        <>
            <header className="app-container grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 items-center">
                <span
                    className={`absolute z-10 text-left font-serif italic tracking-[-2px] text-2xl md:text-3xl 2xl:text-4xl ${navMobile ? "text-white" : "text-black"
                        }`}
                >
                    Hatim Elbakkali
                </span>
                <nav className="hidden sm:block sm:flex justify-center items-center gap-5">
                    {linkNavPC.map((link) => (
                        <a
                            className="font-serif italic tracking-[-2px] text-xl md:text-2xl 2xl:text-3xl"
                            key={link.id}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="hidden sm:block sm:flex justify-end items-center">
                    <a
                        href="#contact"
                        className="flex justify-center w-30 items-center gap-1 bg-[#0BBDE0] text-white rounded-4xl font-serif text-3xl  2xl:text-4xl italic tracking-[-2px]"
                    >
                        Contact
                        <MoveUpRight className="size-6 mt-1" />
                    </a>
                </div>
                {/* NavToggle */}
                <div
                    onClick={() => setNavMobile((prev) => !prev)}
                    className={`absolute z-11 block lg:hidden flex justify-center items-center size-11.5 rounded-[50%] border-1 ${navMobile ? "border-white" : " border-black"} justify-self-end`}
                >
                    {navMobile ? <img className="size-5" src={X} alt="" /> : <img className="size-7" src={Bars} alt="" />}
                </div>
            </header>
            {/* NavToggle bg */}
            {navMobile && (
                <div className="fixed inset-0 z-1 bg-[#0BBDE0]">
                    <nav className=" w-full h-150 flex flex-col justify-center items-center">
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
                        {" "}
                        {socialLinks.map((link) => (
                            <a
                                className="font-sans text-white text-lg tracking-[-1px] font-bold"
                                key={link.id}
                                href={link.src}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="bg-[#003176] absolute w-40 h-40 rounded-full top-15 left-70 blur-2xl"></div>
                    <div className="bg-[#003176] absolute w-40 h-40 rounded-full bottom-28 -left-15 blur-2xl"></div>
                </div>
            )}
        </>
    );
}

export default Navbar;
