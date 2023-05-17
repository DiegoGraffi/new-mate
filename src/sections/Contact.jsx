import Image from "next/image";
import aLetter from "../../public/contact-a.png";
import { motion } from "framer-motion";
import { textAnimation, wordAnimation, contentAnimation } from "@/utils/motion";

const About = () => {
  return (
    <section
      id="contact"
      className="h-[100vh] max-w-[1536px] mx-auto p-[25px] mt-[25px] lg:mt-[25px] "
    >
      <div className="flex flex-col justify-between ">
        <div className="w-[120px]">
          <p className="font-raleway text-[20px] text-[#686868] font-[200]">
            contact
          </p>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
        </div>

        <div className="flex flex-col md:flex-row justify-between overflow-hidden">
          <motion.h2
            variants={wordAnimation}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            className="font-raleway text-[60px] md:text-[96px] font-[800] leading-[70px] flex basis-1/3 mt-5 mb-[20px] lg:mb-[50px]"
          >
            let's talk
          </motion.h2>
          <motion.p
            variants={textAnimation}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            className="font-raleway text-[16px] text-[#686868] font-[400] text-justify leading-[19px] flex basis-1/3"
          >
            We would love to hear from you! At Mate Studio, we believe that
            communication is key to the success of any project. Whether you have
            questions about our services or would like to discuss a potential
            project, we are here to help.
            <br />
            <br />
            At Mate Studio, we are committed to delivering exceptional service
            and building lasting relationships with our clients. We look forward
            to hearing from you and helping you achieve your online goals.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={contentAnimation}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="mt-[50px]  grid grid-cols-1 lg:grid-cols-3 min-h-[70vh] pb-[50px]"
      >
        <div className="bg-[#E1E1DC] h-auto md:h-[600px] col-span-2 rounded-xl lg:rounded-r-none">
          <form className="p-[25px] grid grid-rows-4 md:grid-rows-3">
            <p className="font-raleway text-[52px] md:text-[64px] leading-[64px] md:leading-[75px] row-span-1">
              say <br />
              hello!
            </p>

            <div className="grid row-span-2 md:row-span-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                <div className="flex flex-col">
                  <label className="font-raleway">name</label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="placeholder:font-raleway bg-[#E1E1DC] focus:outline-none border-b-[0.5px] border-[#686868] mt-[10px] lg:mr-7"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-raleway">email</label>
                  <input
                    type="email"
                    placeholder="your email"
                    className="placeholder:font-raleway bg-[#E1E1DC] focus:outline-none border-b-[0.5px] border-[#686868] mt-[10px] lg:mr-7"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <label className="font-raleway">message</label>
                <textarea
                  rows={4}
                  placeholder="start typing here"
                  className="placeholder:font-raleway bg-[#E1E1DC] focus:outline-none border-b-[0.5px] border-[#686868] mt-[10px] lg:mr-7"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between md:items-baseline mt-[35px] row-span-1">
              <p className="font-raleway">matestudio.webdev@gmail.com</p>

              <div className="h-[90px] w-[90px] rounded-xl bg-white p-2 flex items-end mt-[25px] md:mt-0 hover:bg-black hover:text-white transition duration-150 ease-in-out cursor-pointer">
                <p className="font-raleway">send.</p>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden lg:block">
          <Image src={aLetter} className="h-[600px] object-cover" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
