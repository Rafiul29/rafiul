import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HomeSection from "@/components/HomeSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <HomeSection/>
    <AboutSection/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Education/>
    <Contact/>
    </main>
  );
}
