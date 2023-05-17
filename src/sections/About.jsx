import { useState } from "react";
import { about } from "../constants/index";
import AboutCard from "@/components/AboutCard";
import { motion } from "framer-motion";
import { wordAnimation, textAnimation, contentAnimation } from "@/utils/motion";

const About = () => {
  const [active, setActive] = useState("about-1");

  return (
    <section className="h-auto max-w-[1536px] mx-auto p-[25px] mt-[25px] lg:mt-[25px]">
      <div className="flex flex-col justify-between ">
        <div className="w-[120px]">
          <p className="font-raleway text-[20px] text-[#686868] font-[200]">
            our values
          </p>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
        </div>

        <div className="flex flex-col md:flex-row justify-between overflow-hidden">
          <motion.h2
            variants={wordAnimation}
            initial={"initial"}
            whileInView={"animate"}
            className="font-raleway text-[60px] md:text-[96px] font-[800] leading-[70px] flex basis-1/3 mt-5 mb-[20px] lg:mb-[50px]"
          >
            about us
          </motion.h2>
          <motion.p
            variants={textAnimation}
            initial={"initial"}
            whileInView={"animate"}
            className="font-raleway text-[16px] text-[#686868] font-[400] text-justify leading-[19px] flex basis-1/3"
          >
            We are Mate Studio, a digital agency based in San Juan, Argentina
            and London, UK. We are a passionate and dedicated team of web
            developers committed to delivering exceptional digital solutions.
            <br />
            Our team specialize in creating innovative and high-performance
            websites and digital experiences that help businesses thrive in the
            online world.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={contentAnimation}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="mt-[50px] flex lg:flex-row flex-col min-h-[1000px] lg:min-h-[70vh] gap-5"
      >
        {about.map((body, index) => (
          <AboutCard
            key={body.id}
            {...body}
            index={index}
            active={active}
            handleClick={setActive}
            text={body.text}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default About;
