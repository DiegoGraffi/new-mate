import { useState } from "react";
import { services } from "@/constants";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { textAnimation, wordAnimation, contentAnimation } from "@/utils/motion";

const Services = () => {
  const [activo, setActivo] = useState(0);
  const servicioActivo = services[activo];

  return (
    <section className="h-auto max-w-[1536px] mx-auto p-[25px] lg:mt-[px]">
      <div className="flex flex-col justify-between ">
        <div className="w-[120px]">
          <p className="font-raleway text-[20px] text-[#686868] font-[200]">
            what we do?
          </p>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
        </div>

        <div className="flex flex-col md:flex-row justify-between overflow-hidden">
          <motion.h2
            variants={wordAnimation}
            initial={"initial"}
            whileInView={"animate"}
            className="font-raleway text-[60px] mb-5 md:text-[96px] font-[800] leading-[50px] flex basis-1/3 mt-5"
          >
            services
          </motion.h2>
          <motion.p
            variants={textAnimation}
            initial={"initial"}
            whileInView={"animate"}
            className="font-raleway text-[16px] text-[#686868] font-[400] text-justify leading-[19px] flex basis-1/3"
          >
            We offer a comprehensive range of web design and development
            services to help businesses succeed online. Whether you need a new
            website or want to revamp your existing one, we have the expertise
            to deliver results.
          </motion.p>
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          variants={contentAnimation}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          className="grid grid-cols-1 grid-rows-6 lg:grid-cols-4 lg:grid-rows-1 mt-[50px] lg:mt-[100px] relative h-[600px] md:h-[900px] lg:h-[700px]"
        >
          <div className="flex text-center mb-0  lg:mb-0 lg:text-right justify-center lg:justify-end  lg:p-[25px] items-center ">
            <ul className="flex lg:flex-col ">
              <li
                onMouseEnter={() => setActivo(0)}
                onClick={() => setActivo(0)}
                className="font-raleway text-[16px] md:text-[24px] font-[200] cursor-pointer  px-5 md:py-2 hover:font-[400] text-[#686868]"
              >
                design
              </li>
              <li
                onMouseEnter={() => setActivo(1)}
                onClick={() => setActivo(1)}
                className="font-raleway text-[16px] md:text-[24px] font-[200] cursor-pointer  px-5 md:py-2 hover:font-[400] text-[#686868]"
              >
                prototyping
              </li>
              <li
                onMouseEnter={() => setActivo(2)}
                onClick={() => setActivo(2)}
                className="font-raleway text-[16px] md:text-[24px] font-[200] cursor-pointer  px-5 md:py-2 hover:font-[400] text-[#686868]"
              >
                development
              </li>
            </ul>
          </div>

          <div className="grid col-span-1 lg:col-span-2 row-span-2 lg:row-span-1 overflow-hidden relative rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl">
            <motion.div
              key={activo}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "tween", duration: 0.5 }}
              exit={{ x: -100 }}
            >
              <Image
                src={servicioActivo.imgUrl}
                fill
                className="h-full object-cover rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl"
              />
            </motion.div>
          </div>

          <div className="grid row-span-3 p-[25px] justify-between  bg-[#E1E1DC] border-x-[1px] lg:border-y-[1px] md:border-r-[1px] lg:border-l-[0px] rounded-br-xl rounded-bl-xl lg:rounded-bl-none lg:rounded-tr-xl ">
            <motion.div
              key={activo}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              exit={{ scale: 0.8 }}
              className="flex justify-center h-full items-center"
            >
              <p className="font-raleway text-[16px] font-[200] text-[#686868] text-justify ">
                {servicioActivo.text}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Services;
