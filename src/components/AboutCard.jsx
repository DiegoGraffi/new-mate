import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutCard = ({ id, open, imgUrl, title, text, index, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        open ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] rounded-xl transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer min-h-max overflow-hidden`}
      onClick={() => handleClick(id)}
    >
      {!open ? (
        <div>
          <div>
            <div className="w-full h-full bg-secondary absolute z-40 left-0 top-0 opacity-20"></div>
            <Image
              src={imgUrl}
              alt={title}
              fill
              className="object-cover saturate-0"
            />
          </div>

          <div className="absolute z-50 bg-secondary self-end py-8 left-0 lg:bottom-0 w-[100%] h-[40%] flex justify-center items-center rounded-b-xl">
            <h3 className="font-raleway font-[600] text-[16px] md:text-[24px] text-darkGrey lg:rotate-[-90deg] lg:origin-[0,0] ">
              {title}
            </h3>
          </div>
        </div>
      ) : (
        <div>
          <Image src={imgUrl} alt={title} fill className="object-cover" />
          <div className="absolute bottom-0 py-8 px-8 justify-start w-full flex-col bg-secondary min-h-max lg:h-[40%] lg:overflow-hidden rounded-b-xl transition-all ease-in-out left-0">
            <h3 className="font-raleway font-[600] text-[20px] md:text-[24px] text-darkGrey">
              {title}
            </h3>
            <hr className="border-darkGrey border-b-0 opacity-50 my-3" />
            <p className="font-raleway text-[14px] mt-[16px] text-darkGrey font-[400] text-justify leading-[19px] pb-10">
              {text}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AboutCard;
