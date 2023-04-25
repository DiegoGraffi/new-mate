import { useState } from "react";
import Image from "next/image";
import { about } from "../constants/index";
import AboutCard from "@/components/AboutCard";
import creatives from "../../public/about-creatives.png";
import learners from "../../public/about-learners.png";
import communicators from "../../public/about-communicators.png";

const About = () => {
  const [active, setActive] = useState("about-1");

  return (
    <section className="h-[100vh] max-w-[1536px] mx-auto p-[25px] mt-[100px]">
      <div className="flex flex-col justify-between ">
        <div className="w-[120px]">
          <p className="font-raleway text-[20px] text-[#686868] font-[200]">
            our values
          </p>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
        </div>

        <div className="flex justify-between">
          <h2 className="font-raleway text-[96px] font-[800] leading-[70px] flex basis-1/3 mt-5">
            about us
          </h2>
          <p className="font-raleway text-[16px] text-[#686868] font-[400] text-justify leading-[19px] flex basis-1/3">
            At Mate Studio, we are more than just a web design and development
            company, we are a team of passionate professionals who are dedicated
            to delivering exceptional service and creating lasting relationships
            with our clients. Our values are the foundation of everything we do,
            and we strive to live up to them every day.
          </p>
        </div>
      </div>

      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {about.map((body, index) => (
          <AboutCard
            key={body.id}
            {...body}
            index={index}
            active={active}
            handleClick={setActive}
            text={body.text}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
