/* eslint-disable react/no-unescaped-entities */
import SocialsList from "../Socials";
import Link from "next/link";
import FloatingVictorIcon from "./FloatingVictorIcon";
import Script from "next/script";

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:pt-20 px-6 space-y-6 lg:w-3/4">
        <h1 className="text-3xl md:text-5xl font-bold md:mb-2 lg:w-3/4">
          Victor is a <Script src="/typewriter.js" defer></Script>
          <div>
            <span id="text" className="text-main underline btn-shine"></span>
            <span className="cursor">|</span>
          </div>
        </h1>
        <div className="md:hidden">
          <SocialsList />
        </div>
        <p className="md:mb-2 text-lg justify-left w-full lg:w-3/4">
          I'm a front-end developer passionate about blending{" "}
          <strong className="text-main underline">technology</strong> and{" "}
          <strong className="text-main underline">creativity</strong>. I create{" "}
          <strong className="text-main underline"></strong>responsive,{" "}
          <strong className="text-main underline"></strong>SEO-optimized
          websites that offer{" "}
          <strong className="text-main underline">immersive</strong> and{" "}
          <strong className="text-main underline">
            accessible user experiences
          </strong>
          . My goal is to innovate and captivate!{" "}
        </p>
        <div className="flex flex-row justify-around sm:w-1/2 pt-7">
          <a
            className="w-fit button type1 font-semibold text-lg dark:text-white"
            href={"/CV Raguin Victor.pdf"}
            download={"/CV Raguin Victor.pdf"}>
            Download CV
          </a>
          <a href="mailto:victor.raguin@live.fr" className="w-fit button type1 font-semibold text-lg dark:text-white">
            Contact me!
          </a>
        </div>
      </div>
      <div className="hidden md:inline absolute bottom-[15rem] md:bottom-[7rem] lg:bottom-[12rem] 3xl:bottom-[15rem] 4xl:bottom-[30rem] 4xl:right-[20rem] right-[4rem] md:right-[12rem] lg:right-[9rem] w-1/2 p-6 lg:w-[32%] h-fit pointer-events-none">
        <div className="relative -z-10">
          <FloatingVictorIcon />
        </div>
        <div className="font-semibold flex flex-row justify-center items-center align-middle py-2 px-4 border  border-[#a8efff1a] shadow dark:bg-black bg-[#faeee1] shadow-black dark:shadow-black min-w-max  lg:w-full 3xl:w-[80%] 4xl:w-[60%]">
          <div className="bg-main border border-main w-[15px] h-[15px] mx-4 "></div>
          Currently working on <span className="mx-2 text-main">Portfolio</span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 hidden lg:absolute bottom-28 3xl:bottom-40 5xl:w-1/4 5xl:left-[38%] 5xl:bottom-56 left-[25%] mx-auto shadow shadow-black dark:shadow-black md:flex flex-row items-center justify-center border border-gray dark:border-gray box md:mt-20">
        <span className="text-[3rem] text-main dark:text-main self-start relative -top-6 -right-6 bg-[#faeee1] dark:bg-black">
          “
        </span>
        <div className="flex flex-col w-full justify-center items-center 2xl:w-3/4">
          <p className="text-lg font-semibold dark:font-normal">
            First, solve the problem. Then, write the code.
          </p>
          <span className="text-sm self-end mr-10 text-main">
            — John Johnson
          </span>
        </div>
        <span className="text-[3rem] relative -top-6 right-6 bg-[#faeee1] dark:bg-black text-main dark:text-main">
          “
        </span>
      </div>

      <Link href="#projects" className="self-center pt-10">
        <div className="scroll-downs absolute 3xl:bottom-12 bottom-6 left-[50%] cursor-pointer">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeroSection;
