import React from "react";
import Image from "next/image";
import ServiceDesign from "../../public/services-design.jpg";

const Services = () => {
  return (
    <section className="h-[100vh] max-w-[1536px] mx-auto p-[25px] mt-[100px]">
      <div className="flex flex-col justify-between ">
        <div className="w-[120px]">
          <p className="font-raleway text-[20px] text-[#686868] font-[200]">
            what we do?
          </p>
          <hr className="border-[#686868] border-b-0 opacity-50 my-3" />
        </div>

        <div className="flex justify-between">
          <h2 className="font-raleway text-[96px] font-[800] leading-[50px] flex basis-1/3 mt-5">
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

      <div className="grid grid-cols-4 mt-[100px] relative h-[700px]">
        <div className="flex text-right justify-end p-[25px] items-center">
          <ul>
            <li className="font-raleway text-[24px] font-[200] cursor-pointer px-5 py-2 hover:text-[#5850D9] text-[#686868]">
              01 | design
            </li>
            <li className="font-raleway text-[24px] font-[200] cursor-pointer px-5 py-2 hover:text-[#5850D9] text-[#686868]">
              02 | prototyping
            </li>
            <li className="font-raleway text-[24px] font-[200] cursor-pointer px-5 py-2 hover:text-[#5850D9] text-[#686868]">
              03 | development
            </li>
          </ul>
        </div>

        <div className="grid col-span-2 ">
          <Image
            src={ServiceDesign}
            className="h-full object-cover saturate-100"
          />
        </div>

        <div className="flex basis-2/4 flex-col flex-grow p-[25px] justify-between bg-[#686868]">
          <div className="flex justify-center h-full items-center">
            <p className="font-raleway text-[16px] font-[200] text-[#F4F4EE] ">
              We create visually stunning and user-friendly websites that are
              tailored to your brand and target audience. Our designs are
              responsive, ensuring that your website looks great on any device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
