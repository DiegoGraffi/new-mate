import React from "react";
import Image from "next/image";
import letter from "../../public/a-letter.png";
import HeroBan from "../../public/fondo.jpg";
import logo from "../../public/logo-mate.png";
import { motion } from "framer-motion";

import { navVariants } from "@/utils/motion";

const Hero = () => {
  return (
    <>
      <Image
        src={HeroBan}
        alt="fondo"
        className="absolute -z-10 w-[100vw] h-[100vh] object-cover saturate-0 contrast-[0.7]"
      />

      <section className="h-[100vh] max-w-[1536px] mx-auto flex flex-col content-between">
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-row justify-between p-[25px] items-center "
        >
          <Image
            src={letter}
            height={50}
            width={50}
            alt="logo"
            className="object-contain"
          />

          <ul className="flex justify-between gap-[40px]">
            <a className="font-raleway bg-[#F4F4EE] rounded-full py-3 px-5 hover:bg-black hover:text-[#F4F4EE] cursor-pointer">
              <li className="font-raleway font-[400] text-[#686868]">
                projects
              </li>
            </a>
            <a className="font-raleway bg-[#F4F4EE] rounded-full py-3 px-5 hover:bg-black hover:text-[#F4F4EE] cursor-pointer">
              <li className="font-raleway font-[400] text-[#686868]">
                services
              </li>
            </a>
            <a className="font-raleway bg-[#F4F4EE] rounded-full py-3 px-5 hover:bg-black hover:text-[#F4F4EE] cursor-pointer">
              <li className="font-raleway font-[400] text-[#686868]">
                about us
              </li>
            </a>
            <a className="font-raleway bg-[#F4F4EE] rounded-full py-3 px-5 hover:bg-black hover:text-[#F4F4EE] cursor-pointer">
              <li className="font-raleway font-[400] text-[#686868]">
                contact
              </li>
            </a>
          </ul>
        </motion.div>

        <div className="flex justify-center self-center my-auto">
          <Image
            src={logo}
            alt="logo-mate"
            className="relative z-20 w-[40vw] max-w-[600px] "
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
