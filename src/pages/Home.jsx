// import Preload from "../sections/Preload"
import Navbar from "./../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx"
import Skills from "../sections/Skills.jsx";

function Home() {
  return (
    <>
      {/* <Preload/> */}
      <Navbar />
      <main>
        <Hero />
        <About/>
        <Skills/>
      </main>
    </>
  );
}

export default Home;
