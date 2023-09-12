import Image from "next/image";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row px-[25px] mb-[50px]  justify-center 	">
      <div className="flex flex-row items-center	leading-tight">
        <p className="font-raleway text-[16px] pr-[40px] font-normal text-black">
          follow us on <br /> social media
        </p>
        <div className="flex flex-row gap-4">
          <Link href="https://instagram.com/matestudio_webdesign?igshid=OGQ5ZDc2ODk2ZA==">
            <Image
              src={Instagram}
              alt="Instagram Icon"
              className="h-[25px] w-[25px]  active:bg-violet hover:bg-violet transition-all ease-in-out duration-200"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/mate-studio-a53b0a290/">
            <Image
              src={Linkedin}
              alt="Linkedin Icon"
              className="h-[25px] w-[25px]"
            />
          </Link>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
