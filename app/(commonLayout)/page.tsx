import About from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ClientComponentWrapper } from "@/components/ClientComponentWrapper";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <ClientComponentWrapper component="GitHub" />
      <ClientComponentWrapper component="Certifications" />
      {/* <ClientComponentWrapper component="Blogs" /> */}
      <Contact />
    </main>
  );
}
