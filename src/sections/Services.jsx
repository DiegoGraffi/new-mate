import { useState } from "react";
import { services } from "@/constants";
import Image from "next/image";
import ServiceDesign from "../../public/services-design.jpg";

const Services = () => {
  const [activo, setActivo] = useState("design");
  return (
    <section className="h-auto max-w-[1536px] mx-auto p-[25px] lg:mt-[100px]">
      <div className="flex flex-col justify-between ">
        <div className="w-[120px]">
          <p className="font-raleway text-[20px] text-[#686868] font-[200]">
            what we do?
          </p>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="font-raleway text-[60px] mb-5 md:text-[96px] font-[800] leading-[50px] flex basis-1/3 mt-5">
            services
          </h2>
          <p className="font-raleway text-[16px] text-[#686868] font-[400] text-justify leading-[19px] flex basis-1/3">
            We offer a comprehensive range of web design and development
            services to help businesses succeed online. Whether you need a new
            website or want to revamp your existing one, we have the expertise
            to deliver results.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 mt-[50px] lg:mt-[100px] relative h-[900px] lg:h-[700px]">
        <div className="flex text-center mb-[50px] lg:mb-0 lg:text-right justify-center lg:justify-end p-[25px] items-center">
          <ul>
            <li className="font-raleway text-[24px] font-[200] cursor-pointer px-5 py-2 hover:font-[400] text-[#686868]">
              design
            </li>
            <li className="font-raleway text-[24px] font-[200] cursor-pointer px-5 py-2 hover:font-[400] text-[#686868]">
              prototyping
            </li>
            <li className="font-raleway text-[24px] font-[200] cursor-pointer px-5 py-2 hover:font-[400] text-[#686868]">
              development
            </li>
          </ul>
        </div>

        <div className="grid col-span-1 lg:col-span-2 row-span-2 lg:row-span-1 overflow-hidden">
          <Image
            src={ServiceDesign}
            className="h-full object-cover  rounded-l-xl"
          />
        </div>

        <div className="flex basis-2/4 flex-col flex-grow p-[25px] justify-between bg-[#E1E1DC] rounded-r-xl">
          <div className="flex justify-center h-full items-center">
            <p className="font-raleway text-[16px] font-[200] text-[#686868] text-justify ">
              We offer a comprehensive range of web design and development
              services to help businesses succeed online. Whether you need a new
              website or want to revamp your existing one, we have the expertise
              to deliver results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
