// import Preload from "../sections/Preload"
import Navbar from "./../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About"
// import Skills from "../sections/Skills";

function Home() {
  return (
    <>
      {/* <Preload/> */}
      <Navbar />
      <main>
        <Hero />
        <About/>
        {/* <Skills/> */}
      </main>
    </>
  );
}

export default Home;
