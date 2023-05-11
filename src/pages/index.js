import Hero2 from "../sections/Hero2";
import Projects from "../sections/Projects";
import Image from "next/image";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div>
      <Hero2 />
      <Projects />
      <Services />
      <About />
      {/* <Contact /> */}
    </div>
  );
}
