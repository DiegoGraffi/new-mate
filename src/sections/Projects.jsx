import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import Figma from "../tech-logos/figma.png";
import Sanity from "../tech-logos/sanity.png";
import Nextjs from "../tech-logos/nextjs.png";
import React from "../tech-logos/react.png";
import Tailwind from "../tech-logos/tailwind.png";
import Motion from "../tech-logos/motion.png";

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

      <div className="hidden md:hidden lg:block">
        <ProjectsDesktop />
      </div>
      <div className=" lg:hidden">
        <ProjectsMobile />
      </div>
    </section>
  );
};

export default Projects;

function ProjectsDesktop() {
  return (
    <Carousel
      className="mt-12 rounded-xl"
      wrapAround
      // autoplay
      renderBottomCenterControls={null}
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
        <div className="flex relative min-h-[600px] rounded-xl">
          <div className="flex relative flex-1">
            <Image src={project.imgUrl} fill className="object-cover" />
          </div>

          <div className="flex flex-col flex-1 p-[25px] justify-between bg-secondary">
            <div className="flex flex-col gap-5 pr-9">
              <span className="font-raleway text-[30px] md:text-[40px] text-darkGrey font-[200]">
                {project.title}
              </span>
              <hr className="border-darkGrey" />
              {project.text.split("\n").map((text, i) => (
                <p
                  key={i}
                  className="font-raleway text-[16px] font-[400] text-darkGrey text-justify my-2"
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="flex flex-row justify-between items-end">
              <div className="flex items-center ">
                <p className="mr-4 text-darkGrey text-[16px] font-200">
                  Built with
                </p>
                <div className="flex flex-row lg:gap-4">
                  {project.technologies.next && (
                    <Link href="https://nextjs.org/docs" target="_blank">
                      <Image src={Nextjs} className="h-9 w-9" />
                    </Link>
                  )}
                  {project.technologies.react && (
                    <Link href="https://react.dev/learn" target="_blank">
                      <Image src={React} className="h-9 w-9" />{" "}
                    </Link>
                  )}
                  {project.technologies.tailwind && (
                    <Link href="https://tailwindcss.com/" target="_blank">
                      <Image src={Tailwind} className="h-9 w-9" />
                    </Link>
                  )}
                  {project.technologies.sanity && (
                    <Link href="https://www.sanity.io/" target="_blank">
                      {" "}
                      <Image src={Sanity} className="h-9 w-9" />
                    </Link>
                  )}
                  {project.technologies.figma && (
                    <Link href="https://www.figma.com/" target="_blank">
                      {" "}
                      <Image src={Figma} className="h-9 w-9" />
                    </Link>
                  )}
                  {project.technologies.framerMotion && (
                    <Link href="https://www.framer.com/motion/" target="_blank">
                      {" "}
                      <Image src={Motion} className="h-9 w-9" />
                    </Link>
                  )}
                </div>
              </div>
              <a target="_blank" href={project.link} className="flex self-end">
                <div className="flex justify-start items-end w-[60px] md:w-[100px] h-[60px] md:h-[100px] mt-[40px] bg-principal text-darkGrey font-raleway font-normal text-[18px] py-2 px-4 rounded-lg hover:bg-violet hover:text-principal transition-all duration-150 ease-in-out cursor-pointer">
                  visit
                </div>
              </a>
            </div>
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
              {project.text.split("\n").map((text, i) => (
                <p
                  key={i}
                  className="font-raleway text-[16px] font-[400] text-darkGrey text-justify mt-5"
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="flex flex-row justify-between items-end">
              <div className="flex items-center flex-col md:flex-row">
                <p className="mb-3 md:mr-3 md:mb-0 text-darkGrey text-[16px] font-200">
                  Built with
                </p>
                <div className="flex flex-row gap-2 md:gap-3">
                  {project.technologies.next && (
                    <Link href="https://nextjs.org/docs" target="_blank">
                      <Image src={Nextjs} className="h-6 w-6 md:h-7 md:w-7" />
                    </Link>
                  )}
                  {project.technologies.react && (
                    <Link href="https://react.dev/learn" target="_blank">
                      <Image src={React} className="h-6 w-6 md:h-7 md:w-7" />{" "}
                    </Link>
                  )}
                  {project.technologies.tailwind && (
                    <Link href="https://tailwindcss.com/" target="_blank">
                      <Image src={Tailwind} className="h-6 w-6 md:h-7 md:w-7" />
                    </Link>
                  )}
                  {project.technologies.sanity && (
                    <Link href="https://www.sanity.io/" target="_blank">
                      <Image src={Sanity} className="h-6 w-6 md:h-7 md:w-7" />
                    </Link>
                  )}
                  {project.technologies.figma && (
                    <Link href="https://www.figma.com/" target="_blank">
                      <Image src={Figma} className="h-6 w-6 md:h-7 md:w-7" />
                    </Link>
                  )}
                  {project.technologies.framerMotion && (
                    <Link href="https://www.framer.com/motion/" target="_blank">
                      <Image src={Motion} className="h-6 w-6 md:h-7 md:w-7" />
                    </Link>
                  )}
                </div>
              </div>
              <a target="_blank" href={project.link} className="flex self-end">
                <div className="flex justify-start items-end w-[60px] md:w-[100px] h-[60px] md:h-[100px] mt-[40px] bg-principal text-darkGrey font-raleway font-normal text-[16px] py-2 px-4 rounded-lg hover:bg-violet hover:text-principal hover:text-principaltransition-all duration-150 ease-in-out cursor-pointer">
                  visit
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
