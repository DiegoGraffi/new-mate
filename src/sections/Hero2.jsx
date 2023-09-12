import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import letter from "../../public/a-letter.png";
import letterB from "../../public/a-letter-black.png";
import aViolet from "../../public/a-violet.svg";
import HeroBan from "../../public/fondo.jpg";
import logo from "../../public/logo-mate.png";
import { MenuIcon, XIcon } from "lucide-react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

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
        <nav className="flex flex-row justify-between p-[25px] items-center h-[84px]">
          <Image
            src={letter}
            alt="logo"
            className="object-contain w-[30px] md:w-[50px] md:hidden"
            priority
          />

          <MenuIcon
            className="md:hidden text-[#F4F4EE]"
            size={25}
            onClick={toggleMenu}
          />

          {/* Navegación Desktop */}

          <ul className="hidden md:flex justify-center items-center gap-[3rem] w-full bg-principal rounded-md ">
            <Link
              href="#projects"
              scroll={false}
              className="font-raleway py-2 px-5 cursor-pointer "
            >
              <li className="font-raleway font-[400] text-darkGrey hover:text-violet transition-all duration-200 ease-in-out ">
                projects
              </li>
            </Link>
            <Link
              href="#services"
              scroll={false}
              className="font-raleway py-2 px-5 cursor-pointer "
            >
              <li className="font-raleway font-[400] text-darkGrey hover:text-violet transition-all duration-200 ease-in-out ">
                services
              </li>
            </Link>
            <Image
              src={aViolet}
              alt="logo"
              className="object-contain w-[30px] md:w-[50px] hidden md:flex scale-125 "
              priority
            />
            <Link
              href="#about"
              scroll={false}
              className="font-raleway py-2 px-5 cursor-pointer "
            >
              <li className="font-raleway font-[400] text-darkGrey hover:text-violet transition-all duration-200 ease-in-out ">
                about us
              </li>
            </Link>
            <Link
              href="#contact"
              scroll={false}
              className="font-raleway py-2 px-5 cursor-pointer "
            >
              <li className="font-raleway font-[400] text-darkGrey hover:text-violet transition-all duration-200 ease-in-out ">
                contact
              </li>
            </Link>
          </ul>
        </nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.ul
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", bounce: 0 }}
              exit={{ x: 500 }}
              className="fixed z-50 bg-[#F4F4EE] md:hidden w-[100vw] flex flex-col gap-[10px] pb-[10px] h-[100vh]"
              onClick={toggleMenu}
            >
              <div className="flex flex-row p-[25px] w-full items-center justify-between h-[84px] absolute">
                <Image
                  src={letterB}
                  alt="logo"
                  className="object-contain w-[30px] md:w-[50px]"
                  priority
                />
                <XIcon
                  className="md:hidden text-[#000000] right-0"
                  size={25}
                  onClick={toggleMenu}
                />
              </div>
              <div className="flex flex-col gap-16 h-[100%] items-center justify-center">
                <Link
                  href="#projects"
                  scroll={false}
                  className="flex justify-center"
                >
                  <li className="font-raleway font-[200] text-[#686868] text-[1.5rem]">
                    projects
                  </li>
                </Link>
                <Link
                  href="#services"
                  scroll={false}
                  className="flex justify-center"
                >
                  <li className="font-raleway font-[200] text-[#686868] text-[1.5rem]">
                    services
                  </li>
                </Link>
                <Link
                  href="#about"
                  scroll={false}
                  className="flex justify-center"
                >
                  <li className="font-raleway font-[200] text-[#686868] text-[1.5rem]">
                    about us
                  </li>
                </Link>
                <Link
                  href="#contact"
                  scroll={false}
                  className="flex justify-center"
                >
                  <li className="font-raleway font-[200] text-[#686868] text-[1.5rem]">
                    contact
                  </li>
                </Link>
              </div>
            </motion.ul>
          ) : null}
        </AnimatePresence>

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
