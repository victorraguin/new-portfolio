"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Modal/ProjectModal";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types/Project";
import IconNextJs from "../Icons/IconNextjs";
import IconTailwind from "../Icons/IconTailwind";
import IconAwsAmplify from "../Icons/IconAwsamplify";
import IconFramerMotion from "../Icons/IconFramer";
import IconVercel from "../Icons/IconVercel";
import IconSupabase from "../Icons/IconSupabase";
import IconMedusajs from "../Icons/IconMedusaJS";
import IconFigma from "../Icons/IconFigma";

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
      image: "/static/portfolio.png",
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
      image: "/static/skult.png",
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
      image: "",
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
      image: "/static/iagallery.png",
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
      image: "/static/faya.png",
      logo: "/faya-logo.png",
      urlLink: "",
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
      image: "/static/origins.png",
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
  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col md:pt-20 px-6 space-y-6 lg:w-3/4 xl:w-full">
      <h2
        id="projects"
        className="text-xl md:text-2xl font-semibold md:mb-2 lg:w-3/4">
        #<strong className="text-main btn-shine">projects</strong>
        <div className="flex w-3/4 bg-main h-[2px] mt-1"></div>
      </h2>
      <motion.div
        className="flex flex-row flex-wrap justify-around pt-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
        >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.name}
            variants={item}
            className="w-full sm:w-1/2 md:w-1/3 p-2">
            <ProjectCard project={project} openModal={openModal} />
          </motion.div>
        ))}
      </motion.div>
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
      <Link href="#aboutme" className="self-center pt-10">
        <div className="arrow cursor-pointer">
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsSection;
