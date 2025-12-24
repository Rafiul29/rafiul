import AboutSection from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { GitHub } from "@/components/GitHub";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <GitHub/>
      {/* <Certifications/> */}
      <Contact/>
    </main>
  );
}
