import Preload from "../sections/Preload"
import Navbar from "./../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx"
import Skills from "../sections/Skills.jsx";
import Projects from "../sections/Projects.jsx";
import Contact from "../sections/Contact.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Preload />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section className=" bg-contact" id="Contact">
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  );
}
export default Home;
