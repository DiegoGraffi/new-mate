import { useState } from "react";
import Image from "next/image";
import work1 from "../../public/work1.png";
import { motion } from "framer-motion";
import { projects, AnimatePresence } from "@/constants";
import {
  wordAnimation,
  textAnimation,
  contentAnimation,
  sectionName,
} from "@/utils/motion";

const Projects = () => {
  const [activo, setActivo] = useState(0);
  const proyectoActivo = projects[activo];

  return (
    <section className="h-auto md:max-w-[1536px] mx-auto p-[25px] mt-[10px] lg:mt-[30px]">
      <div className="flex flex-col justify-between overflow-hidden ">
        <motion.div
          variants={sectionName}
          initial={"initial"}
          whileInView={"animate"}
          className="w-[100px]"
        >
          <p className="font-raleway text-[20px] text-[#686868] font-[200]">
            our work
          </p>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between overflow-hidden">
          <motion.h2
            variants={wordAnimation}
            initial={"initial"}
            whileInView={"animate"}
            className="font-raleway text-[60px] mb-5 md:text-[96px] font-[800] md:leading-[50px] flex md:basis-1/3 md:mt-5"
          >
            projects
          </motion.h2>
          <motion.p
            variants={textAnimation}
            initial={"initial"}
            whileInView={"animate"}
            className="font-raleway text-[16px] text-[#686868] font-[400] text-justify leading-[19px] flex basis-1/3"
          >
            Here you can explore some of the amazing web design and development
            projects we have completed for our clients.
            <br />
            <br />
            We take pride in our ability to craft beautiful and functional
            websites that are tailored to our clients' unique needs. Our team of
            experienced designers and developers work together to create custom
            solutions that help businesses stand out in the digital world.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={contentAnimation}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-0 mt-[50px] relative"
      >
        <div className="flex max-h-[700px] ">
          <Image
            src={proyectoActivo.imgUrl}
            fill
            className="object-cover saturate-100 rounded-tr-xl lg:rounded-tr-none rounded-tl-xl lg:rounded-tl-xl lg:rounded-bl-xl"
          />
        </div>

        <div className="flex basis-2/4 flex-col flex-grow p-[25px] justify-between bg-[#E1E1DC] rounded-br-xl rounded-bl-xl lg:rounded-bl-none lg:rounded-r-xl">
          <div className="flex flex-col gap-5">
            <span className="font-raleway text-[40px] text-[#686868] font-[200]">
              {proyectoActivo.title}
            </span>
            <hr className="border-[#686868]" />
            <p className="font-raleway text-[16px] font-[200] text-[#686868] text-justify mt-5">
              {proyectoActivo.text}
            </p>
          </div>

          <div className="text-[16px] text-[#686868] font-[200] text-justify leading-[19px] mt-[30px] flex justify-between">
            <span className="font-raleway">dec.05.21</span>
            <span className="font-raleway">03</span>
          </div>
        </div>
      </motion.div>

      <ul className="flex justify-between w-[100%]">
        <li
          onMouseEnter={() => setActivo(0)}
          onClick={() => setActivo(0)}
          className="font-raleway text-[16px] md:text-[24px] font-[200] cursor-pointer  px-5 md:py-2 hover:font-[400] text-[#686868]"
        >
          01
        </li>
        <li
          onMouseEnter={() => setActivo(1)}
          onClick={() => setActivo(1)}
          className="font-raleway text-[16px] md:text-[24px] font-[200] cursor-pointer  px-5 md:py-2 hover:font-[400] text-[#686868]"
        >
          02
        </li>
        <li
          onMouseEnter={() => setActivo(2)}
          onClick={() => setActivo(2)}
          className="font-raleway text-[16px] md:text-[24px] font-[200] cursor-pointer  px-5 md:py-2 hover:font-[400] text-[#686868]"
        >
          03
        </li>
        <li
          onMouseEnter={() => setActivo(3)}
          onClick={() => setActivo(3)}
          className="font-raleway text-[16px] md:text-[24px] font-[200] cursor-pointer  px-5 md:py-2 hover:font-[400] text-[#686868]"
        >
          04
        </li>
      </ul>
    </section>
  );
};

export default Projects;
