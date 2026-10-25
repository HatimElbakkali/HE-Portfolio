import linkNav from "../data/linkNav";
import { MoveUpRight} from "lucide-react";
import Bars from './../assets/icons/bars.svg'
function Navbar() {
    return (
        <header className="app-container grid grid-cols-2 xl:grid-cols-2 items-center">
            <span className="text-left font-serif italic tracking-[-2px] text-2xl md:text-3xl 2xl:text-4xl">
                Hatim Elbakkali
            </span>
            <nav className="hidden sm:block sm:flex justify-center items-center gap-5">
                {linkNav.map((link) => (
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
            <div className="flex justify-center items-center size-11.5 rounded-[50%] border-1 border-black justify-self-end">
                <img className="size-7" src={Bars} alt="" />
            </div>
        </header>
    );
}

export default Navbar;
