import Image from "next/image";
import aLetter from "../../public/contact-a.png";
import { motion } from "framer-motion";

import { navVariants, slideIn, wordAnimation } from "@/utils/motion";

const About = () => {
  return (
    <section className="h-[100vh] max-w-[1536px] mx-auto p-[25px] mt-[100px] ">
      <div className="flex flex-col justify-between ">
        <div className="w-[120px]">
          <p className="font-raleway text-[20px] text-[#686868] font-[200]">
            contact
          </p>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
        </div>

        <div className="flex justify-between">
          <h2 className="font-raleway text-[96px] font-[800] leading-[70px] flex basis-1/3 mt-5">
            let's talk
          </h2>
          <p className="font-raleway text-[16px] text-[#686868] font-[400] text-justify leading-[19px] flex basis-1/3">
            We would love to hear from you! At Mate Studio, we believe that
            communication is key to the success of any project. Whether you have
            questions about our services or would like to discuss a potential
            project, we are here to help.
            <br />
            <br />
            At Mate Studio, we are committed to delivering exceptional service
            and building lasting relationships with our clients. We look forward
            to hearing from you and helping you achieve your online goals.
          </p>
        </div>
      </div>

      <div className="mt-[50px] grid grid-cols-3 min-h-[70vh] auto-rows-fr">
        <div className="bg-[#E1E1DC] h-[550px] col-span-2 rounded-l-xl">
          <form className="p-[25px] grid grid-rows-3 ">
            <p className="font-raleway text-[64px] leading-[75px]">
              say <br />
              hello!
            </p>

            <div>
              <div className="grid grid-cols-2 gap-[10px]">
                <div className="flex flex-col">
                  <label className="font-raleway">name</label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="placeholder:font-raleway bg-[#E1E1DC] focus:outline-none border-b-[0.5px] border-[#686868] mr-7"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-raleway">email</label>
                  <input
                    type="email"
                    placeholder="your email"
                    className="placeholder:font-raleway bg-[#E1E1DC] focus:outline-none border-b-[0.5px] border-[#686868] mr-7"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <label className="font-raleway">message</label>
                <textarea
                  rows={4}
                  placeholder="start typing here"
                  className="placeholder:font-raleway bg-[#E1E1DC] focus:outline-none border-b-[0.5px] border-[#686868] mr-7"
                />
              </div>
            </div>

            <div className="flex justify-between items-baseline mt-[35px]">
              <p className="font-raleway">matestudio.webdev@gmail.com</p>

              <div className="h-[90px] w-[90px] bg-white p-2 flex items-end">
                <p className="font-raleway">send.</p>
              </div>
            </div>
          </form>
        </div>
        <div>
          <Image src={aLetter} className="h-[550px] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;
