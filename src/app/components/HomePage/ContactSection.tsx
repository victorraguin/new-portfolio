/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import EmailIcon from "../Icons/email.svg";
const ContactSection = () => {
  return (
    <div className="bg-gray-900 text-dark dark:text-white flex flex-col md:pt-20 px-6 space-y-6 lg:w-3/4 xl:w-full pt-10">
      <h2 className="text-xl md:text-2xl font-semibold md:mb-2 lg:w-3/4" id="contact">
        #
        <strong id="aboutme" className="text-pink btn-shine">
          contact
        </strong>
        <div className="flex w-3/4 bg-pink dark:bg-pink h-[2px] mt-1"></div>
      </h2>
      <div className="flex xl:flex-row justify-evenly flex-col space-y-6 xl:space-y-0">
          <p className="pt-5 lg:w-1/2 w-full 2xl:w-1/2 xl:w-1/2 text-gray text-base">
            I am actively seeking a{" "}
            <strong className="underline">long-term</strong>, permanent position. I am
            particularly interested in roles that offer stability and the
            opportunity to develop and advance within the company. Should you
            have any questions or require further information, please do not
            hesitate to contact me.
          </p>
        <div className="self-center border border-gray p-4 shadow-md shadow-black">
          <div className="flex flex-col space-y-2">
            <a
              className="flex flex-row align-middle space-x-4 group w-fit"
              href="mailto:victor.raguin@live.fr"
              target="_blank">
              <Image src={EmailIcon} alt="Email" width={25} height={25} />
              <p className="group-hover:underline">victor.raguin@live.fr</p>
            </a>
            <a
              href="https://github.com/victorraguin"
              className="flex flex-row align-middle space-x-4 group w-fit"
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className=" fill-dark dark:fill-gray hover:fill-pink duration-300 ease-in-out transition">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <p className="group-hover:underline">Github Profile</p>
            </a>
            <a
              href="https://www.linkedin.com/in/victor-raguin/"
              className="flex flex-row align-middle space-x-4 group w-fit"
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className=" fill-dark dark:fill-gray hover:fill-pink duration-300 ease-in-out transition">
                <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
              </svg>
              <p className="group-hover:underline">LinkedIn Profile</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
