import Navbar from "./../components/Navbar";
import Hero from "../sections/Hero";
import Preload from "../sections/Preload"
import About from "../sections/About"

function Home() {
  return (
    <>
      <Preload/>
      <Navbar />
      <main>
        <Hero />
        <About/>
      </main>
    </>
  );
}

export default Home;
