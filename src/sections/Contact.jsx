import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { textAnimation, wordAnimation, contentAnimation } from "@/utils/motion";
import aLetter from "../../public/contact-a.png";

const About = () => {
  return (
    <section
      id="contact"
      className="min-h-[100vh] max-w-[1536px] mx-auto p-[25px] mt-[25px] lg:mt-[25px] "
    >
      <div className="flex flex-col justify-between">
        <div className="w-[120px]">
          <p className="font-raleway text-[20px] text-darkGrey font-[200] border-b border-b-darkGrey border-opacity-50 py-3 w-max">
            contact
          </p>
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
            className="font-raleway text-[16px] text-darkGrey font-[400] text-justify leading-[19px] flex basis-1/3"
          >
            Reach out to us and let's create something incredible together!
            <br />
            <br />
            If you have any questions about our services or want to talk about a
            possible project, feel free to reach out. We would love to hear from
            you!
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={contentAnimation}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        className="grid mt-[50px] grid-cols-1 lg:grid-cols-3 min-h-[70vh] pb-[50px]"
      >
        <div className="bg-secondary h-auto md:h-[600px] col-span-2  rounded-xl lg:rounded-r-none">
          <ContactForm />
        </div>
        <div className="hidden lg:block">
          <Image src={aLetter} className="h-[600px] object-cover" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;

function ContactForm() {
  const [state, handleSubmit] = useForm("mayzjdqg");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="font-raleway text-[60px] font-normal p-[50px] ">
          <span className="text-violet font-normal">Thank you!</span> We'll be
          in touch soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-[25px] flex flex-col">
      <p className="font-raleway text-[52px] md:text-[64px] leading-[64px] md:leading-[75px] row-span-1">
        say <br />
        hello!
      </p>

      <div className="grid row-span-2 md:row-span-1 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] mt-8">
          <div className="flex flex-col">
            <label className="font-raleway">name</label>
            <input
              type="text"
              placeholder="your name"
              name="name"
              className="placeholder:font-raleway bg-secondary focus:outline-none border-b-[0.5px] border-darkGrey mt-[10px] lg:mr-7"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-raleway">email</label>
            <input
              type="email"
              placeholder="your email"
              name="email"
              className="placeholder:font-raleway bg-secondary focus:outline-none border-b-[0.5px] border-darkGrey mt-[10px] lg:mr-7"
            />
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <label className="font-raleway">message</label>
          <textarea
            rows={4}
            name="message"
            placeholder="start typing here"
            className="placeholder:font-raleway bg-secondary focus:outline-none border-b-[0.5px] border-darkGrey mt-[10px] lg:mr-7"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between md:items-baseline mt-16 row-span-1 ">
        <p className="font-raleway">matestudio.webdev@gmail.com</p>

        <button
          type="submit"
          disabled={state.submitting}
          className="h-[90px] w-[90px] rounded-xl bg-principal p-2 flex items-end mt-[25px] md:mt-0 hover:bg-violet hover:text-white transition duration-150 ease-in-out cursor-pointer"
        >
          <p className="font-raleway">send.</p>
        </button>
      </div>
    </form>
  );
}
