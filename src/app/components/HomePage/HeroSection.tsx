/* eslint-disable react/no-unescaped-entities */
import React from "react";
import VictorImg from "@/app/public/Victor.png";
import Image from "next/image";
import SocialsList from "../Socials";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-gray-900 text-dark dark:text-white flex flex-col  md:pt-20 px-6 space-y-6 lg:w-3/4 h-[75vh] lg:h-full">
        <h1 className="text-3xl md:text-5xl font-bold md:mb-2 lg:w-3/4">
          Victor is a{" "}
          <strong className="text-pink btn-shine underline">
            front-end <br className="md:hidden" /> developer
          </strong>
        </h1>
        <div className="md:hidden">
          <SocialsList />
        </div>
        <p className="md:mb-2 text-lg justify-left w-full lg:w-3/4">
          As a front-end developer, I blend technology and creativity to craft
          responsive sites that enchant. Skilled in{" "}
          <strong className="text-pink underline">HTML5</strong>,{" "}
          <strong className="text-pink underline">CSS3</strong>, and{" "}
          <strong className="text-pink underline">JavaScript</strong>, I
          leverage <strong className="text-pink underline">React</strong> and{" "}
          <strong className="text-pink underline">NextJS</strong> for immersive,
          accessible user experiences, while optimizing for{" "}
          <strong className="text-pink underline">SEO</strong>. My goal? To
          innovate and captivate.
        </p>
        <button className="w-fit bg-button border-pink border font-bold py-2 px-4 shadow shadow-gray dark:shadow-black">
          Contact me!
        </button>
      </div>
      <div className="hidden md:inline absolute bottom-[15rem] lg:bottom-[12rem] 3xl:bottom-[15rem] 4xl:bottom-[30rem] 4xl:right-[20rem] right-[4rem] lg:right-[9rem] w-1/2 p-6 lg:w-[32%] h-fit pointer-events-none">
        <div className="relative -z-10">
          <Image
            src={VictorImg}
            alt="Victor"
            className="animate-float 4xl:w-3/4"
          />
        </div>
        <div className="font-semibold flex flex-row justify-center items-center align-middle py-2 px-4 border shadow dark:bg-dark bg-white shadow-gray dark:shadow-black min-w-max lg:w-full 3xl:w-[80%] 4xl:w-[60%]">
          <div className="bg-pink border border-pink w-[15px] h-[15px] mx-4 "></div>
          Currently working on <span className="mx-2 text-pink">Portfolio</span>
        </div>
      </div>
      <div className="dark:text-white text-dark w-full lg:w-1/2 hidden lg:absolute bottom-28 3xl:bottom-40 5xl:w-1/4 5xl:left-[38%] 5xl:bottom-56 left-[25%] mx-auto shadow-md shadow-gray dark:shadow-black md:flex flex-row items-center justify-center border border-dark dark:border-gray">
        <span className="text-[3rem] text-pink dark:text-pink self-start relative -top-6 -right-6 bg-white dark:bg-dark">
          “
        </span>
        <div className="flex flex-col w-full justify-center items-center 2xl:w-3/4 ">
          <p className="text-lg">
            First, solve the problem. Then, write the code.
          </p>
          <span className="text-sm self-end mr-10 text-pink">
            — John Johnson
          </span>
        </div>
        <span className="text-[3rem] relative -top-6 right-6 bg-white dark:bg-dark text-pink dark:text-pink">
          “
        </span>
      </div>
      <Link href="#projects">
      <div className="hidden arrow md:inline absolute bottom-12 left-[50%] cursor-pointer">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="arrow absolute md:hidden bottom-12 left-[50%] cursor-pointer">
        <span></span>
      </div>
      </Link>
    </div>
  );
};

export default HeroSection;
