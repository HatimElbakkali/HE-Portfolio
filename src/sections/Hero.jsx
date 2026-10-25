import HatimElbakkali from "../assets/images/HatimElbakkali.png";

export default function Hero() {
    return (
        <section className="relative h-[calc(100vh-72px)] overflow-hidden">
            <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 w-[min(1000px,95vw)] h-[min(760px,85vh)] -z-10 pointer-events-none">
                <div className="blob will-change-transform absolute w-[45%] h-[55%] left-[10%] top-[30%] rounded-full bg-[#0047C8] blur-[40px] animate-[drift1_3.5s_ease-in-out_infinite]" />
                <div className="blob will-change-transform absolute w-[40%] h-[50%] left-[52%] top-[5%] rounded-full bg-[#0A6CFF] blur-[40px] animate-[drift2_4s_ease-in-out_infinite]" />
                <div className="blob will-change-transform absolute w-[40%] h-[50%] left-[55%] top-[42%] rounded-full bg-[#003176] blur-[40px] animate-[drift3_4.5s_ease-in-out_infinite]" />
                <div className="blob will-change-transform absolute w-[50%] h-[50%] left-[25%] top-[22%] rounded-full bg-[#0FE8FF] blur-[40px] animate-[drift4_3s_ease-in-out_infinite]" />
            </div>

            <div className="h-70 lg:h-50 xl:h-40 2xl:h-70 flex justify-center items-center">
                <div className="flex flex-col items-center text-center">
                    <h1 className="font-title text-6xl lg:text-8xl 2xl:text-9xl">Hi I'm Hatim</h1>
                    <h2 className="block lg:hidden font-title text-3xl bg-gradient-to-r from-[#0BBDE0] to-[#003176] bg-clip-text text-transparent">
                        Junior Full-Stack Developer
                    </h2>
                </div>
            </div>

            {/* Currently studying badge */}
            <div className="hidden lg:block lg:flex absolute left-10 top-[50%] items-center gap-2 z-10">
                <span className="relative flex h-5 w-5 2xl:h-6 2xl:w-6 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-primary opacity-50" />
                    <span className="xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 rounded-full bg-primary" />
                </span>
                <p className="hidden lg:block font-text text-sm xl:text-lg 2xl:text-2xl font-medium">Currently studying at CMC</p>
            </div>

            {/* Role + description */}
            <div className="hidden lg:block absolute left-10 top-[58%] max-w-[260px] z-10">
                <h3 className="font-title xl:text-2xl 2xl:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Junior Full-Stack Developer
                </h3>
                <p className="hidden lg:block font-text font-light mt-2 text-lg xl:text-2xl xl:leading-6 leading-5 text-black mr-10">
                    Building secure, scalable and high-performance web applications from frontend to backend.
                </p>
            </div>

            <img
                src={HatimElbakkali}
                alt="Hatim Elbakkali"
                className="grayscale absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] max-w-none sm:w-auto xl:max-w-[500px] 2xl:max-w-[850px] md:max-w-[800px] h-auto translate-y-[8%]"
            />
        </section>
    );
}