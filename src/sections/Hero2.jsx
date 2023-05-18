import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import letter from "../../public/a-letter.png";
import letterB from "../../public/a-letter-black.png";
import HeroBan from "../../public/fondo.jpg";
import logo from "../../public/logo-mate.png";
import { MenuIcon, X, XIcon } from "lucide-react";

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
            className="object-contain w-[30px] md:w-[50px]"
            priority
          />

          <MenuIcon
            className="md:hidden text-[#F4F4EE]"
            size={25}
            onClick={toggleMenu}
          />

          {/* Navegación Desktop */}
          <ul className="hidden md:flex justify-between gap-[3px] ">
            <Link
              href="#projects"
              scroll={false}
              className="font-raleway bg-[#F4F4EE] py-2 px-5 cursor-pointer border-[#F4F4EE] border-y-4 hover:border-b-[#686868] transition-all duration-200 ease-in-out rounded-sm rounded-l-xl hover:px-10"
            >
              <li className="font-raleway font-[400] text-[#686868]">
                projects
              </li>
            </Link>
            <Link
              href="#services"
              scroll={false}
              className="font-raleway bg-[#F4F4EE] py-2 px-5 cursor-pointer border-[#F4F4EE] border-y-4 hover:border-b-[#686868] transition-all duration-200 ease-in-out rounded-sm hover:px-10"
            >
              <li className="font-raleway font-[400] text-[#686868]">
                services
              </li>
            </Link>
            <Link
              href="#about"
              scroll={false}
              className="font-raleway bg-[#F4F4EE] py-2 px-5 cursor-pointer border-[#F4F4EE] border-y-4 hover:border-b-[#686868] transition-all duration-200 ease-in-out rounded-sm hover:px-10"
            >
              <li className="font-raleway font-[400] text-[#686868]">
                about us
              </li>
            </Link>
            <Link
              href="#contact"
              scroll={false}
              className="font-raleway bg-[#F4F4EE] py-2 px-5 cursor-pointer border-[#F4F4EE] border-y-4 hover:border-b-[#686868] transition-all duration-200 ease-in-out rounded-sm rounded-r-xl hover:px-10"
            >
              <li className="font-raleway font-[400] text-[#686868]">
                contact
              </li>
            </Link>
          </ul>
        </nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.ul
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", bounce: 0 }}
              exit={{ y: -300 }}
              className="bg-[#F4F4EE] md:hidden w-[100vw] flex flex-col gap-[10px] pb-[10px]  absolute"
            >
              <div className="flex flex-row justify-between p-[25px] items-center h-[84px]">
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
              <Link
                href="#projects"
                scroll={false}
                className="flex justify-center"
              >
                <li className="font-raleway font-[400] text-[#686868]">
                  projects
                </li>
              </Link>
              <Link
                href="#services"
                scroll={false}
                className="flex justify-center"
              >
                <li className="font-raleway font-[400] text-[#686868]">
                  services
                </li>
              </Link>
              <Link
                href="#about"
                scroll={false}
                className="flex justify-center"
              >
                <li className="font-raleway font-[400] text-[#686868]">
                  about us
                </li>
              </Link>
              <Link
                href="#contact"
                scroll={false}
                className="flex justify-center"
              >
                <li className="font-raleway font-[400] text-[#686868]">
                  contact
                </li>
              </Link>
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
