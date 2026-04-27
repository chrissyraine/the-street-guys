import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import WhyCater from "./components/WhyCater";
import Contact from "./components/Contact";
import VFWInfo from "./components/VFWInfo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-black">
      <Hero />
      <About />
      <Menu />
      <WhyCater />
      <Contact />
      <VFWInfo />
      <Footer />
    </main>
  );
}
