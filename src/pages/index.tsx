import Hero2 from "../sections/Hero2";
import Projects from "../sections/Projects";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Head from "next/head";
import Footer from "@/sections/Footer";

import va from "@vercel/analytics";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.source) {
      va.track(router.query.source as string);
    }
  }, []);
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
        <Footer />
      </div>
    </>
  );
}
