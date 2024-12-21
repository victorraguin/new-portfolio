'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../Modal/ProjectModal'
import ProjectCard from './ProjectCard'
import { Project } from '../../types/Project'
import IconNextJs from '../Icons/IconNextjs'
import IconTailwind from '../Icons/IconTailwind'
import IconAwsAmplify from '../Icons/IconAwsamplify'
import IconFramerMotion from '../Icons/IconFramer'
import IconVercel from '../Icons/IconVercel'
import IconSupabase from '../Icons/IconSupabase'
import IconMedusajs from '../Icons/IconMedusaJS'
import IconFigma from '../Icons/IconFigma'
import IconViteJS from '../Icons/IconViteJS'

const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project>()

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProject(undefined)
    setModalOpen(false)
  }

  const projectsData: Project[] = [
    {
      name: 'The GOLD DAO Website',
      description:
        'The GOLD DAO Website is a sophisticated platform built with Next.js and styled using TailwindCSS. This project focuses on enabling users to securely own and trade physical gold with the convenience of digital assets. Combining blockchain technology with traditional gold ownership, the website offers unmatched transparency, security, and simplicity. Explore the future of gold trading with Gold DAO.',
      image: '/static/gold-dao.png',
      logo: '/gold-dao-logo.webp',
      urlLink: 'https://www.gold-dao.org/',
      githubLink:
        'https://github.com/GoldDAO/gldt-swap/tree/develop/client/gld_landing_page',
      inConstruction: false,
      technologies: [
        { icon: <IconNextJs />, name: 'Next.js' },
        { icon: <IconTailwind />, name: 'TailwindCSS' }
      ]
    },
    {
      name: 'ORIGYN Dashboard',
      description:
        'The ORIGYN Dashboard is an advanced platform that allows users to explore and interact trustlessly with web3 dApps, DAOs, NFTs, DeFi, and more. I enhanced the existing dashboard by adding interactive charts, dynamic tables, tooltips, and additional pages. Additionally, I resolved various bugs to improve user experience and functionality. Built with a focus on scalability and usability, this dashboard provides seamless interaction with the decentralized ecosystem.',
      image: '/static/ogy-dashboard.png',
      logo: '/ogy_logo.svg',
      urlLink: 'https://dashboard.origyn.com/',
      githubLink: 'https://github.com/ORIGYN-SA/origyn-sns',
      inConstruction: false,
      technologies: [
        { icon: <IconViteJS />, name: 'ViteJS' },
        { icon: <IconTailwind />, name: 'TailwindCSS' }
      ]
    },
    {
      name: 'ORIGYN DApps',
      description:
        'The ORIGYN DApps platform enables users to explore all collections by ORIGYN, buy and sell NFTs, manage their portfolios, and participate in DAOs. I contributed to enhancing the functionality by adding features like interactive charts, tables, and tooltips, while also ensuring seamless navigation and interaction. This project was built using ViteJS and styled with TailwindCSS, offering a robust and responsive interface for decentralized application users.',
      image: '/static/dapps.png',
      logo: '/ogy_logo.svg',
      urlLink: 'https://jmq3d-xaaaa-aaaao-qjwfq-cai.icp0.io/',
      githubLink: 'https://github.com/ORIGYN-SA/DApps/tree/refactor_to_astro',
      inConstruction: false,
      technologies: [
        { icon: <IconViteJS />, name: 'ViteJS' },
        { icon: <IconTailwind />, name: 'TailwindCSS' },
        { icon: <IconVercel />, name: 'Vercel' }
      ]
    },
    {
      name: 'UGESSAP',
      description:
        'UGESSAP is a dynamic project dedicated to health and well-being, featuring a responsive website built with ViteJS and styled with TailwindCSS. The application is powered by a Supabase database for efficient data management and hosted seamlessly on Vercel. The project highlights three core services: a health center, childcare medical support, and event medical coverage, offering accessible solutions for everyday care and large gatherings alike.',
      image: '/static/ugessap.png',
      logo: '/ugessap-logo.png',
      urlLink: 'https://ugessap-victorraguins-projects.vercel.app/',
      githubLink: 'https://github.com/victorraguin/ugessap',
      inConstruction: false,
      technologies: [
        { icon: <IconViteJS />, name: 'ViteJS' },
        { icon: <IconTailwind />, name: 'TailwindCSS' },
        { icon: <IconSupabase />, name: 'Supabase' },
        { icon: <IconVercel />, name: 'Vercel' }
      ]
    },
    {
      name: 'My Portfolio',
      description:
        'Hey! Here’s my portfolio, built with Next.js 14 and Tailwind CSS, and deployed on Vercel. I coded everything myself, starting from a design inspired by Figma. I customized the CSS styles, created modals, and tweaked everything to make it cool and functional. Loved having the freedom to do it my way!',
      image: '/static/portfolio.png',
      logo: '/portfolio-logo.png',
      urlLink: 'https://example.com/project1',
      githubLink: 'https://github.com/victorraguin/new-portfolio',
      inConstruction: false,
      technologies: [
        { icon: <IconFigma />, name: 'Figma' },
        { icon: <IconNextJs />, name: 'Next.js 14' },
        { icon: <IconTailwind />, name: 'TailwindCSS' },
        { icon: <IconVercel />, name: 'Vercel' }
      ]
    },
    {
      name: 'SKULT Landing Page',
      description:
        'I worked on the landing page for the SKULT Alpha launch, designed in collaboration with a designer. We used Framer Motion for animations that really made a nice effect! For the tech part, I used NextJS 13, Figma, and Tailwind CSS, and deployed it all on Amplify. Great to work on this project and nail that nice effect!',
      image: '/static/skult.png',
      logo: '/skult-logo.png',
      urlLink:
        'https://ex-skult-landingpage-ghk873zed-victorraguins-projects.vercel.app',
      githubLink: 'https://github.com/victorraguin/ex-skult-landingpage',
      inConstruction: false,
      technologies: [
        { icon: <IconFigma />, name: 'Figma' },
        { icon: <IconNextJs />, name: 'Next.js 13' },
        { icon: <IconTailwind />, name: 'TailwindCSS' },
        { icon: <IconFramerMotion />, name: 'Framer Motion' },
        { icon: <IconAwsAmplify />, name: 'AWS Amplify/S3' }
      ]
    },
    {
      name: 'SKULT Market Place',
      description:
        'I spent a year and a half developing a marketplace for SKULT, which has unfortunately shut down. While the site itself is no longer accessible, the video showcases the extensive work done: real-time data handling, user accounts, money management, marketplace filters, and inventory management. All built using Next JS 13, Tailwind CSS, Figma, Amplify, and S3. A big challenge, but an amazing experience!',
      image: '',
      logo: '/skult-logo.png',
      urlLink: '',
      youtubeLink: 'https://www.youtube.com/watch?v=pq3lS6wH3Pc&t=1130s',
      githubLink: '',
      inConstruction: false,
      technologies: [
        { icon: <IconFigma />, name: 'Figma' },
        { icon: <IconNextJs />, name: 'Next.js 13' },
        { icon: <IconTailwind />, name: 'TailwindCSS' },
        { icon: <IconAwsAmplify />, name: 'AWS Amplify/S3' }
      ]
    },
    {
      name: 'IA Image Gallery',
      description:
        "I've set up a website for an AI-generated image gallery, linked to my side project 'FAYA Productions'. I built the backend with Supabase and managed the front-end with Next JS 14 and Tailwind CSS, deployed on Vercel. The plan is to potentially print these images on posters automatically through a supplier. It's both a tech and creative venture!",
      image: '/static/iagallery.png',
      logo: '/iagallery-logo.png',
      urlLink:
        'https://ia-image-gallery-2ua7kca94-victorraguins-projects.vercel.app/',
      githubLink: 'https://github.com/victorraguin/ia-image-gallery',
      inConstruction: true,
      technologies: [
        { icon: <IconNextJs />, name: 'Next.js 14' },
        { icon: <IconTailwind />, name: 'TailwindCSS' },
        { icon: <IconSupabase />, name: 'Supabase' },
        { icon: <IconVercel />, name: 'Vercel' }
      ]
    },
    {
      name: 'ORIGINS Website',
      description:
        'I worked on a website for a friend involved in the conservation and repair of agricultural lands. The project was never completed, but I designed it on Figma and built it using NextJS 13 and Tailwind CSS, deployed on Vercel. The aim was to create a simple and minimalist site.',
      image: '/static/origins.png',
      logo: '/origins-logo.png',
      urlLink: 'https://elodierg.vercel.app/',
      githubLink: 'https://github.com/victorraguin/elodierg',
      inConstruction: false,
      technologies: [
        { icon: <IconFigma />, name: 'Figma' },
        { icon: <IconNextJs />, name: 'Next.js 13' },
        { icon: <IconTailwind />, name: 'TailwindCSS' },
        { icon: <IconVercel />, name: 'Vercel' }
      ]
    }
  ]

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className='flex flex-col md:pt-20 px-6 space-y-6 lg:w-3/4 xl:w-full'>
      <h2
        id='projects'
        className='text-xl md:text-2xl font-semibold md:mb-2 lg:w-3/4'
      >
        #<strong className='text-main btn-shine'>projects</strong>
        <div className='flex w-3/4 bg-main h-[2px] mt-1'></div>
      </h2>
      <div className='flex flex-row flex-wrap justify-around pt-10 w-full'>
        {projectsData.map((project, index) => (
          <motion.div
            key={project.name}
            variants={item}
            className='w-full sm:w-1/2 md:w-1/4 3xl:w-1/3 p-2'
          >
            <ProjectCard project={project} openModal={openModal} />
          </motion.div>
        ))}
      </div>
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
      <Link href='#aboutme' className='self-center pt-10'>
        <div className='arrow cursor-pointer'>
          <span></span>
        </div>
      </Link>
    </div>
  )
}

export default ProjectsSection
