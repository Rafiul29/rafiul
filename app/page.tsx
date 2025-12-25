import About from "@/components/About";
import { Blogs } from "@/components/Blogs";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { GitHub } from "@/components/GitHub";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Analytics } from "@vercel/analytics/next"
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      {/* <GitHub/> */}
      {/* <Certifications/> */}
      {/* <Blogs/> */}
      <Contact />
      <Analytics />
    </main>
  );
}
