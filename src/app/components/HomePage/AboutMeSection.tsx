import React from "react";
import Image from "next/image";
import SocialsList from "../Socials";
import Link from "next/link";

const AboutMeSection = () => {

  return (
    <div>
      <div className="bg-gray-900 text-dark dark:text-white flex flex-col md:pt-20 px-6 space-y-6 lg:w-3/4 xl:w-full mt-[50vh] h-[100vh]">
        <h2 className="text-xl md:text-2xl font-semibold md:mb-2 lg:w-3/4">
          #<strong className="text-pink btn-shine">about-me</strong>
          <div
            id="aboutme"
            className="flex w-3/4 bg-pink dark:bg-pink h-[2px] mt-1"></div>
        </h2>
        <div className="flex flex-row flex-wrap pt-10 justify-around items-center w-full">
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
