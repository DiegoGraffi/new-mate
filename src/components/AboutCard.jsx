import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutCard = ({ id, imgUrl, title, text, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] rounded-xl transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer min-h-max overflow-hidden`}
      onClick={() => handleClick(id)}
    >
      <Image src={imgUrl} alt={title} fill className="object-cover" />

      {active !== id ? (
        <div className="absolute z-0 bg-white self-end py-8 lg:bottom-0 w-[100%] h-[40%] flex justify-center items-center rounded-b-xl">
          <h3 className="font-raleway font-[400] text-[16px] md:text-[24px] text-darkGrey lg:rotate-[-90deg] lg:origin-[0,0] ">
            {title}
          </h3>
        </div>
      ) : (
        <div className="absolute bottom-0 py-8 px-8 justify-start w-full flex-col bg-violet min-h-max lg:h-[40%] lg:overflow-hidden rounded-b-xl transition-all ease-in-out">
          <h3 className="font-raleway font-[600] text-[20px] md:text-[24px] text-principal ">
            {title}
          </h3>
          <hr className="border-principal border-b-0 opacity-50 my-3" />
          <p className="font-raleway text-[14px] mt-[16px] text-principal font-[400] text-justify leading-[19px] pb-10">
            {text}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default AboutCard;
