import Image from "next/image";

const About = () => {
  return (
    <section className="h-[100vh] max-w-[1536px] mx-auto p-[25px] mt-[100px]">
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

      <div className="mt-[50px] grid grid-cols-3 min-h-[70vh] gap-5">
        <div className="bg-[#686868] h-[600px]"></div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
