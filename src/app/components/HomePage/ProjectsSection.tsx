import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Project 1",
      description: "Project 1 description",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/project1",
    },
    {
      name: "Project 2",
      description: "Project 2 description",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/project2",
    },
    {
      name: "Project 3",
      description: "Project 3 description",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/project3",
    },
  ];

  return (
    <div>
      <div className="bg-gray-900 text-dark dark:text-white flex flex-col md:pt-20 px-6 space-y-6 lg:w-3/4 xl:w-full mt-[21vh] lg:mt-[51vh] 4xl:mt-[70vh] h-[100vh]">
        <h2
          id="projects"
          className="text-xl md:text-2xl font-semibold md:mb-2 lg:w-3/4">
          #<strong className="text-pink btn-shine">projects</strong>
          <div className="flex w-3/4 bg-pink dark:bg-pink h-[2px] mt-1"></div>
        </h2>
        <div className="flex flex-row flex-wrap pt-10 justify-around items-center w-full">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-gray w-[300px] m-2 shadow-lg shadow-black hover:-translate-y-2 duration-300 ease-in-out transition">
              <Image
                src="https://via.placeholder.com/150"
                alt={project.name}
                className="border border-gray w-full"
                width={300}
                height={150}
              />
              <div className="flex flex-col space-y-4 my-4">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="flex flex-col my-4 mx-auto">
                <Link
                  href={project.link}
                  className="w-fit bg-button mx-auto border-pink border font-bold py-2 px-4 shadow shadow-gray dark:shadow-black">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
