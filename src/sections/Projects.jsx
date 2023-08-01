import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, AnimatePresence } from "@/constants";
import {
  wordAnimation,
  textAnimation,
  contentAnimation,
  sectionName,
} from "@/utils/motion";
import Carousel from "nuka-carousel";
import { ArrowLeftIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";

const Projects = () => {
  const [activo, setActivo] = useState(0);
  const proyectoActivo = projects[activo];

  return (
    <section
      id="projects"
      className="h-auto md:max-w-[1536px] mx-auto p-[25px] md:mt-[10px] lg:mt-[30px]"
    >
      <div className="flex flex-col justify-between overflow-hidden ">
        <motion.div
          variants={sectionName}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          className="w-[100px]"
        >
          <p className="font-raleway text-[20px] text-darkGrey font-[200]">
            our work
          </p>
          <hr className="border-darkGrey border-b-0 opacity-50 my-3" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between overflow-hidden">
          <motion.h2
            variants={wordAnimation}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            className="font-raleway text-[60px] mb-8 md:text-[96px] font-[800] md:leading-[50px] flex md:basis-1/3 md:mt-5"
          >
            projects
          </motion.h2>
          <motion.p
            variants={textAnimation}
            initial={"initial"}
            viewport={{ once: true }}
            whileInView={"animate"}
            className="font-raleway text-[16px] text-darkGrey font-[400] text-justify leading-[19px] flex basis-1/3"
          >
            Take a look at our latest work in UI/UX design and development.
          </motion.p>
        </div>
      </div>

      <div className="hidden md:block">
        <ProjectsDesktop />
      </div>
      <div className=" md:hidden">
        <ProjectsMobile />
      </div>
    </section>
  );
};

export default Projects;

function ProjectsDesktop() {
  return (
    <Carousel
      renderCenterLeftControls={(control) => (
        <button
          onClick={control.previousSlide}
          className="w-[45px] h-[45px] bg-white rounded flex justify-center items-center active:bg-gray-300 m-2 shadow-lg"
        >
          <ArrowLeftIcon />
        </button>
      )}
      renderCenterRightControls={(control) => (
        <button
          onClick={control.nextSlide}
          className="w-[45px] h-[45px] rounded flex justify-center items-center  active:bg-gray-300 m-2 bg-white shadow-lg"
        >
          <ArrowRightIcon />
        </button>
      )}
    >
      {projects.map((project) => (
        <div className="flex flex-col lg:flex-row gap-0 mt-[50px] relative lg:h-[600px] rounded-xl">
          <div className="flex relative aspect-[3/2]">
            <Image
              src={project.imgUrl}
              fill
              className="object-cover rounded-tr-xl lg:rounded-tr-none rounded-tl-xl lg:rounded-tl-xl lg:rounded-bl-xl"
            />
          </div>

          <div className="flex flex-col  p-[25px] justify-between bg-secondary rounded-br-xl rounded-bl-xl lg:rounded-bl-none lg:rounded-r-xl">
            <div className="flex flex-col gap-5">
              <span className="font-raleway text-[30px] md:text-[40px] text-darkGrey font-[200]">
                {project.title}
              </span>
              <hr className="border-darkGrey" />
              <p className="font-raleway text-[16px] font-[400] text-darkGrey text-justify mt-5">
                {project.text}
              </p>
            </div>

            <a target="_blank" href={project.link} className="flex justify-end">
              <div className="flex justify-start items-end w-[60px] md:w-[100px] h-[60px] md:h-[100px] mt-[40px] bg-principal text-darkGrey font-raleway font-normal text-[18px] py-2 px-4 rounded-lg hover:bg-violet hover:text-principal hover:text-principaltransition-all duration-150 ease-in-out cursor-pointer">
                visit
              </div>
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

function ProjectsMobile() {
  return (
    <>
      {projects.map((project) => (
        <div className="flex flex-col lg:flex-row gap-0 mt-[50px] relative lg:h-[600px] rounded-xl">
          <div className="flex basis-[60%] relative aspect-video md:aspect-auto">
            <Image
              src={project.imgUrl}
              className="object-cover rounded-tr-xl lg:rounded-tr-none rounded-tl-xl lg:rounded-tl-xl lg:rounded-bl-xl"
            />
          </div>

          <div className="flex basis-[40%] flex-col  p-[25px] justify-between bg-secondary rounded-br-xl rounded-bl-xl lg:rounded-bl-none lg:rounded-r-xl">
            <div className="flex flex-col gap-5">
              <span className="font-raleway text-[30px] md:text-[40px] text-darkGrey font-[200]">
                {project.title}
              </span>
              <hr className="border-darkGrey" />
              <p className="font-raleway text-[16px] font-[400] text-darkGrey text-justify mt-5">
                {project.text}
              </p>
            </div>

            <a target="_blank" href={project.link} className="flex justify-end">
              <div className="flex justify-start items-end w-[60px] md:w-[100px] h-[60px] md:h-[100px] mt-[40px] bg-principal text-darkGrey font-raleway font-normal text-[18px] py-2 px-4 rounded-lg hover:bg-violet hover:text-principal hover:text-principaltransition-all duration-150 ease-in-out cursor-pointer">
                visit
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
