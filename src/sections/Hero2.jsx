import React from "react";
import Image from "next/image";
import letter from "../../public/a-letter.png";
import HeroBan from "../../public/fondo.jpg";
import logo from "../../public/logo-mate.png";

const Hero = () => {
  return (
    <div>
      <Image
        src={HeroBan}
        alt="fondo"
        className="-z-10 w-[100vw] h-[100vh] object-cover saturate-0 contrast-[0.7]"
        priority
        fill
      />

      <section className="h-[100vh] max-w-[1536px] mx-auto flex flex-col content-between">
        <div className="flex flex-row justify-between p-[25px] items-center ">
          <div>
            <Image
              src={letter}
              alt="logo"
              className="object-contain w-[30px] md:w-[50px]"
              priority
            />
          </div>

          <ul className="hidden md:flex justify-between gap-[3px] ">
            <a className="font-raleway bg-[#F4F4EE] py-2 px-5 cursor-pointer border-[#F4F4EE] border-y-4 hover:border-b-[#686868] transition-all duration-200 ease-in-out rounded-sm rounded-l-xl hover:px-10">
              <li className="font-raleway font-[400] text-[#686868]">
                projects
              </li>
            </a>
            <a className="font-raleway bg-[#F4F4EE] py-2 px-5 cursor-pointer border-[#F4F4EE] border-y-4 hover:border-b-[#686868] transition-all duration-200 ease-in-out rounded-sm hover:px-10">
              <li className="font-raleway font-[400] text-[#686868]">
                services
              </li>
            </a>
            <a className="font-raleway bg-[#F4F4EE] py-2 px-5 cursor-pointer border-[#F4F4EE] border-y-4 hover:border-b-[#686868] transition-all duration-200 ease-in-out rounded-sm hover:px-10">
              <li className="font-raleway font-[400] text-[#686868]">
                about us
              </li>
            </a>
            <a className="font-raleway bg-[#F4F4EE] py-2 px-5 cursor-pointer border-[#F4F4EE] border-y-4 hover:border-b-[#686868] transition-all duration-200 ease-in-out rounded-sm rounded-r-xl hover:px-10">
              <li className="font-raleway font-[400] text-[#686868]">
                contact
              </li>
            </a>
          </ul>
        </div>

        <div className="flex justify-center self-center my-auto">
          <Image
            src={logo}
            alt="logo-mate"
            className="relative z-20 w-[70vw] md:w-[40vw] max-w-[600px] "
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
