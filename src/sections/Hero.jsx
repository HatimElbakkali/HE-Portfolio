import HatimElbakkali from "../assets/images/HatimElbakkali.png";

export default function Hero() {
    return (
        <section className="relative h-[calc(100vh-80px)] overflow-hidden">
            {/* gradient */}
            <div
                className="absolute inset-x-0 bottom-0 h-[80%] w-full -z-10"
                style={{
                    background:
                        "radial-gradient(ellipse at 70% 80%, #003176 10%, #0BBDE0 35%, transparent 70%)",
                }}
            />

            <div className="app-container flex flex-col items-center mt-12">
                <h1 className="font-title text-6xl">Hi I'm Hatim</h1>
                <h2 className="font-title text-3xl bg-gradient-to-r from-[#0BBDE0] to-[#003176] bg-clip-text text-transparent">
                    Junior Full-Stack Developer
                </h2>
            </div>

            <img
                src={HatimElbakkali}
                alt="Hatim Elbakkali"
                className="grayscale absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] max-w-none sm:w-auto sm:max-w-[700px] h-auto translate-y-[8%]"
            />
        </section>
    );
}