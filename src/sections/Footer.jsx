import { TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row px-[25px] mb-[50px] justify-center">
      <div className="flex flex-col md:flex-row items-center	leading-tight">
        <p className="font-raleway text-[16px] md:pr-[40px] font-normal text-darkGrey text-center md:text-left mb-[1rem] md:mb-0">
          follow us on <br /> social media
        </p>
        <div className="flex flex-row gap-4">
          <Link href="https://instagram.com/matestudio_webdesign?igshid=OGQ5ZDc2ODk2ZA==">
            <TbBrandInstagram className="text-darkGrey hover:text-violet w-[25px] h-[25px] transition-all ease-in-out duration-200 hover:scale-125" />
          </Link>
          <Link href="https://www.linkedin.com/in/mate-studio-a53b0a290/">
            <TbBrandLinkedin className="text-darkGrey hover:text-violet w-[25px] h-[25px] transition-all ease-in-out duration-200 hover:scale-125" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
