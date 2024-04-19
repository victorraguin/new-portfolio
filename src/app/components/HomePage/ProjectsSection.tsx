"use client";
import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal/ProjectModal";
import IconNextJs from "../Icons/IconNextjs";
import IconTailwind from "../Icons/IconTailwind";
import IconAwsAmplify from "../Icons/IconAwsamplify";
import IconFramerMotion from "../Icons/IconFramer";
import IconVercel from "../Icons/IconVercel";
import IconSupabase from "../Icons/IconSupabase";
import IconMedusajs from "../Icons/IconMedusaJS";
import IconFigma from "../Icons/IconFigma";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types/Project";

const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>();

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => {
    setSelectedProject(undefined);
    setModalOpen(false);
  };

  const projectsData: Project[] = [
    {
      name: "My Portfolio",
      description:
        "Hey! Here’s my portfolio, built with Next.js 14 and Tailwind CSS, and deployed on Vercel. I coded everything myself, starting from a design inspired by Figma. I customized the CSS styles, created modals, and tweaked everything to make it cool and functional. Loved having the freedom to do it my way!",
      image: "/portfolio-logo.png",
      logo: "/portfolio-logo.png",
      urlLink: "https://example.com/project1",
      githubLink: "https://github.com/victorraguin/new-portfolio",
      inConstruction: false,
      technologies: [
        { icon: <IconFigma />, name: "Figma" },
        { icon: <IconNextJs />, name: "Next.js 14" },
        { icon: <IconTailwind />, name: "TailwindCSS" },
        { icon: <IconVercel />, name: "Vercel" },
      ],
    },
    {
      name: "SKULT Landing Page",
      description:
        "I worked on the landing page for the SKULT Alpha launch, designed in collaboration with a designer. We used Framer Motion for animations that really made a nice effect! For the tech part, I used NextJS 13, Figma, and Tailwind CSS, and deployed it all on Amplify. Great to work on this project and nail that nice effect!",
      image: "/skult-logo.png",
      logo: "/skult-logo.png",
      urlLink:
        "https://ex-skult-landingpage-ghk873zed-victorraguins-projects.vercel.app",
      githubLink: "https://github.com/victorraguin/ex-skult-landingpage",
      inConstruction: false,
      technologies: [
        { icon: <IconFigma />, name: "Figma" },
        { icon: <IconNextJs />, name: "Next.js 13" },
        { icon: <IconTailwind />, name: "TailwindCSS" },
        { icon: <IconFramerMotion />, name: "Framer Motion" },
        { icon: <IconAwsAmplify />, name: "AWS Amplify/S3" },
      ],
    },
    {
      name: "SKULT Market Place",
      description:
        "I spent a year and a half developing a marketplace for SKULT, which has unfortunately shut down. While the site itself is no longer accessible, the video showcases the extensive work done: real-time data handling, user accounts, money management, marketplace filters, and inventory management. All built using Next JS 13, Tailwind CSS, Figma, Amplify, and S3. A big challenge, but an amazing experience!",
      image: "/skult-logo.png",
      logo: "/skult-logo.png",
      urlLink: "",
      youtubeLink: "https://www.youtube.com/watch?v=pq3lS6wH3Pc&t=1130s",
      githubLink: "",
      inConstruction: false,
      technologies: [
        { icon: <IconFigma />, name: "Figma" },
        { icon: <IconNextJs />, name: "Next.js 13" },
        { icon: <IconTailwind />, name: "TailwindCSS" },
        { icon: <IconAwsAmplify />, name: "AWS Amplify/S3" },
      ],
    },
    {
      name: "IA Image Gallery",
      description:
        "I've set up a website for an AI-generated image gallery, linked to my side project 'FAYA Productions'. I built the backend with Supabase and managed the front-end with Next JS 14 and Tailwind CSS, deployed on Vercel. The plan is to potentially print these images on posters automatically through a supplier. It's both a tech and creative venture!",
      image: "/IAGallery-logo.png",
      logo: "/iagallery-logo.png",
      urlLink:
        "https://ia-image-gallery-2ua7kca94-victorraguins-projects.vercel.app/",
      githubLink: "https://github.com/victorraguin/ia-image-gallery",
      inConstruction: true,
      technologies: [
        { icon: <IconNextJs />, name: "Next.js 14" },
        { icon: <IconTailwind />, name: "TailwindCSS" },
        { icon: <IconSupabase />, name: "Supabase" },
        { icon: <IconVercel />, name: "Vercel" },
      ],
    },
    {
      name: "FAYA Productions Store",
      description:
        "I'm blending my love for reggae music and tech at 'FAYA Productions', a website currently under construction. Using AI to create reggae-inspired designs, I've started a business selling t-shirts and sweatshirts. The backend is powered by Medusa JS, handling product listings and variants, with payments through PayPal. A unique fusion of culture and technology!",
      image: "/faya-logo.png",
      logo: "/faya-logo.png",
      urlLink: "https://example.com/project3",
      githubLink: "",
      inConstruction: true,
      technologies: [
        { icon: <IconNextJs />, name: "Next.js 14" },
        { icon: <IconMedusajs />, name: "Medusa JS" },
        { icon: <IconTailwind />, name: "TailwindCSS" },
        { icon: <IconVercel />, name: "Vercel" },
      ],
    },
    {
      name: "ORIGINS Website",
      description:
        "I worked on a website for a friend involved in the conservation and repair of agricultural lands. The project was never completed, but I designed it on Figma and built it using NextJS 13 and Tailwind CSS, deployed on Vercel. The aim was to create a simple and minimalist site.",
      image: "/origins-logo.png",
      logo: "/origins-logo.png",
      urlLink: "https://elodierg.vercel.app/",
      githubLink: "https://github.com/victorraguin/elodierg",
      inConstruction: false,
      technologies: [
        { icon: <IconFigma />, name: "Figma" },
        { icon: <IconNextJs />, name: "Next.js 13" },
        { icon: <IconTailwind />, name: "TailwindCSS" },
        { icon: <IconVercel />, name: "Vercel" },
      ],
    },
  ];

  return (
    <div className="flex flex-col md:pt-20 px-6 space-y-6 lg:w-3/4 xl:w-full">
      <h2
        id="projects"
        className="text-xl md:text-2xl font-semibold md:mb-2 lg:w-3/4">
        #<strong className="text-main btn-shine">projects</strong>
        <div className="flex w-3/4 bg-main h-[2px] mt-1"></div>
      </h2>
      <div className="flex flex-row flex-wrap justify-around pt-10 w-full">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            openModal={openModal}
          />
        ))}
        {selectedProject && (
          <Modal
            title={selectedProject.name}
            description={selectedProject.description}
            imageUrl={selectedProject.image}
            logoUrl={selectedProject.logo}
            urlLink={selectedProject.urlLink}
            githubLink={selectedProject.githubLink}
            youtubeLink={selectedProject.youtubeLink}
            isOpen={modalOpen}
            onClose={closeModal}
            technologies={selectedProject.technologies}
          />
        )}
      </div>
      <Link href="#aboutme" className="self-center pt-10">
        <div className="arrow cursor-pointer">
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsSection;
