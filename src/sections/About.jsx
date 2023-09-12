import { useState } from "react";
import Image from "next/image";

import { about } from "../constants/index";
import AboutCard from "@/components/AboutCard";
import { motion } from "framer-motion";
import { wordAnimation, textAnimation, contentAnimation } from "@/utils/motion";

const About = () => {
  const [active, setActive] = useState("about-1");

  return (
    <section
      id="about"
      className="h-auto max-w-[1536px] mx-auto p-[25px] mt-[25px] lg:mt-[25px]"
    >
      <div className="flex flex-col justify-between ">
        <div className="w-[120px]">
          <p className="font-raleway text-[20px] text-darkGrey font-[200] border-b border-b-darkGrey border-opacity-50 py-3 w-max">
            our values
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between overflow-hidden">
          <motion.h2
            variants={wordAnimation}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            className="font-raleway text-[60px] md:text-[96px] font-[800] leading-[70px] flex basis-1/3 mt-5 mb-[20px] lg:mb-[50px]"
          >
            about us
          </motion.h2>
          <motion.p
            variants={textAnimation}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            className="font-raleway text-[16px] text-darkGrey font-[400] text-justify leading-[19px] flex basis-1/3"
          >
            We are Mate Studio, a digital agency based in Argentina and the UK.
            We are a passionate and dedicated team of web developers committed
            to delivering exceptional digital solutions.
            <br />
            Our team excels in creating cutting-edge websites and digital
            experiences that empower businesses to thrive in the online world.
          </motion.p>
        </div>
      </div>

      <motion.div
        key="about1"
        variants={contentAnimation}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="hidden mt-[50px] lg:flex lg:flex-row flex-col min-h-[1000px] lg:min-h-[70vh] gap-5"
      >
        {about.map((body, index) => (
          <AboutCard
            {...body}
            key={index}
            open={active === body.id}
            handleClick={setActive}
          />
        ))}
      </motion.div>
      <motion.div
        key="about2"
        variants={contentAnimation}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="mt-[50px] flex lg:hidden flex-col gap-5"
      >
        {about.map((body, index) => (
          <AboutCardMobile {...body} key={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default About;

function AboutCardMobile({ id, open, imgUrl, title, text, handleClick }) {
  return (
    <div className="flex flex-col  rounded-xl  overflow-hidden">
      <Image src={imgUrl} alt={title} className="object-cover" />

      <div className="pt-4 pb-6 px-4 flex-col bg-secondary">
        <h3 className="font-raleway font-semibold text-xl md:text-2xl text-darkGrey">
          {title}
        </h3>
        <hr className="border-darkGrey border-b-0 opacity-50 my-3" />
        <p className="font-raleway text-[14px] mt-4 text-darkGrey text-justify leading-[19px]">
          {text}
        </p>
      </div>
    </div>
  );
}
