import React from "react";
import Image from "next/image";
import { Project } from "../../types/Project";
import IconGithub from "../Icons/IconGithub";
import IconYoutube from "../Icons/IconYoutube";
import IconLinkExternal from "../Icons/IconLinkExternal";

type ProjectCardProps = {
  project: Project;
  openModal: (project: Project) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, openModal }) => {
  return (
    <div className="relative flex bg-clip-border dark:bg-black w-full max-w-xs xl:max-w-[23rem] 3xl:max-w-lg rounded-xl flex-row border dark:border-[#a8efff2c] border-black shadow dark:shadow-white/20 shadow-dark/20 duration-200 ease-in-out dark:text-white hover:shadow hover:shadow-main mx-1 my-3 group p-3">
      <div className="relative w-2/6 shrink-0">
        <Image
          src={project.image}
          alt="Project image"
          priority
          className="w-full h-full group-hover:scale-110 duration-200 ease-in-out object-contain"
          fill
        />
      </div>
      <div className="flex flex-col w-full">
        <h6 className="block text-base antialiased text-main font-semibold group-hover:text-main/80">
          {project.name}
        </h6>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed truncate ... max-w-40">
          {project.description}
        </p>
        <button
          onClick={() => openModal(project)}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:text-main/80 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none group"
          type="button">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            className="w-4 h-4 group-hover:translate-x-1 duration-200 ease-in-out text-main">
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-around">
        {project.githubLink && (
          <a
            className="flex items-center hover:text-main w-fit ml-auto"
            href={project.githubLink}
            target="_blank">
            <IconGithub />
          </a>
        )}
        {project.youtubeLink && (
          <a
            className="flex items-center hover:text-main w-fit ml-auto"
            href={project.youtubeLink}
            target="_blank">
            <IconYoutube />
          </a>
        )}
        {project.urlLink && (
          <a
            className="flex items-center hover:text-main w-fit ml-auto"
            href={project.urlLink}
            target="_blank">
            <IconLinkExternal />
          </a>
        )}
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
