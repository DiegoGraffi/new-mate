import Hero2 from "../sections/Hero2";
import Projects from "../sections/Projects";
import Image from "next/image";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mate Studio</title>
        <meta name="description" content="Mate Studio - Web & Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero2 />
        <Projects />
        <Services />
        <About />
        <Contact />
      </div>
    </>
  );
}
