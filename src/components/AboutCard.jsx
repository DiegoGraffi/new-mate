import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutCard = ({ id, imgUrl, title, text, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover"
      />

      {active !== id ? (
        <div className="absolute z-0 bg-white sm:self-end py-5 lg:bottom-0 w-[100%] h-[30%] flex justify-center items-center ">
          <h3 className="font-raleway font-[400] sm:text-[20px] text-[56px] text-[#686868] lg:rotate-[-90deg] lg:origin-[0,0] ">
            {title}
          </h3>
        </div>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-white sm:h-auto  lg:h-[30%] overflow-hidden">
          <h3 className="font-raleway font-[400] sm:text-[20px] text-[56px] text-[#686868] ">
            {title}
          </h3>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
          <p className="font-raleway text-[14px] mt-[16px] text-[#686868] font-[400] text-justify leading-[19px] pb-10">
            {text}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default AboutCard;
