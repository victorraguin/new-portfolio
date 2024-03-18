/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import VictorFullImg from "../../public/victorraguin.jpg";
const AboutMeSection = () => {
  return (
    <div className="flex flex-col md:pt-20 px-6 space-y-6 lg:w-3/4 xl:w-full pt-10">
      <h2 className="text-xl md:text-2xl font-semibold md:mb-2 lg:w-3/4">
        #
        <strong id="aboutme" className="text-main btn-shine">
          about-me
        </strong>
        <div className="flex w-3/4 bg-main h-[2px] mt-1"></div>
      </h2>
      <div className="flex xl:flex-row flex-col-reverse justify-evenly">
        <div className="flex flex-col pt-5 xl:pt-10 w-full 2xl:w-1/2 xl:w-3/4">
          <strong className="text-xl text-main underline w-fit">
            Hello, I'm Victor!
          </strong>
          <p className="pt-5">
            I'm a front-end developer based in Nantes, France. I can develop
            responsive websites from scratch and raise them into modern
            user-fiendly web experiences.
          </p>
          <strong className="text-main text-lg  underline w-fit pt-8 pb-2">
            Professional Experience
          </strong>
          <strong className="text-main underline w-fit">
            SKULT <i>(2022/2023)</i>
          </strong>
          <ul className="list-disc pl-5">
            <li>
              Main front-end developer for 1.5 years, enhancing my expertise in
              various modern web technologies.
            </li>
            <li>
              Developed proficiency in React JS, NextJS, server-side data
              handling, Tailwind CSS, GraphQL, and REST APIs.
            </li>
            <li>
              Focused on delivering responsive and modern web experiences.
            </li>
            <li>
              Fostered collaboration with backend developers and design teams to
              ensure seamless project execution.
            </li>
            <li>
              Demonstrated strong team communication and organization skills.
            </li>
          </ul>
          <strong className="text-main underline w-fit text-lg pt-4">
            Personal Projects
          </strong>
          <ul className="list-disc pl-5">
            <li>
              Launched Faya Productions, an online clothing store leveraging
              generative AI <i>(2023/2024)</i>.
            </li>
            <li>
              Managed communication and organization of concerts for my music
              group, Legal Dub Impakt <i>(2023/2024)</i>.
            </li>
            <li>
              Developed a cryptocurrency blog and a cryptocurrency airdrop
              website as a personal project <i>(2018/2019)</i>.
            </li>
          </ul>
          <strong className="pt-8 text-main underline w-fit text-lg">
            Academic Background
          </strong>
          <p className="pt-2">
            {" "}
            I completed an formation at{" "}
            <strong className="text-main">O'Clock School</strong>, graduating
            with a{" "}
            <strong className="text-main">
              Bac+2 (equivalent to an associate degree)
            </strong>{" "}
            in full-stack javascript developer, with a specialisation in React
            JS. This period was pivotal in solidifying my web development
            foundations, preparing me for the technical challenges of my career.{" "}
            <i>(2021/2022)</i>
          </p>
        </div>
        <div className="w-1/4 self-center">
          <Image
            src={VictorFullImg}
            alt="Victor"
            className="rounded-2xl shadow-md hidden xl:block"
          />
          <Image
            src={VictorFullImg}
            alt="Victor"
            className="p-1 rounded-full ring-2 ring-main  xl:hidden h-20 md:h-40 w-40 bg-cover object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
