import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/Header/NavBar/NavBar";
import About from "@/components/About/About";
import MyProjects from "@/components/MyProjects/MyProjects";
import Contact from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex  flex-col min-h-screen bg-foreground ">
      <NavBar />

      <div className="flex flex-col  container mx-auto px-12 py-4">
        <HeroSection />
        <About />
        <MyProjects />
        <Contact />
      </div>

      <Footer/>
    </div>
  );
}
