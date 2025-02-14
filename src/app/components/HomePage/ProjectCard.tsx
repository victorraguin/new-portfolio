import React from 'react'
import Image from 'next/image'
import { Project } from '../../types/Project'
import IconGithub from '../Icons/IconGithub'
import IconYoutube from '../Icons/IconYoutube'
import IconLinkExternal from '../Icons/IconLinkExternal'

type ProjectCardProps = {
  project: Project
  openModal: (project: Project) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, openModal }) => {
  return (
    <div
      onClick={() => openModal(project)}
      className='flex flex-col bg-clip-border dark:bg-black w-full max-w-xs xl:max-w-[23rem] 3xl:max-w-lg rounded-xl border-black shadow  shadow-dark/40 duration-200 ease-in-out dark:text-white hover:shadow border border-main/20 hover:border-main mx-1 my-3 group p-4'
    >
      {/* Image Section */}
      <div className='relative w-full h-28 mb-4'>
        <Image
          src={project.logo}
          alt={`${project.name} logo`}
          priority
          className='w-full h-full object-contain rounded-t-xl group-hover:scale-105 duration-200 ease-in-out'
          fill
        />
      </div>

      {/* Content Section */}
      <div className='flex flex-col items-center text-center'>
        <h2 className='text-lg font-semibold text-main group-hover:text-main/80 mb-2'>
          {project.name}
        </h2>
        <p className='text-sm text-gray-500 dark:text-gray-400 mb-4 truncate ... max-w-[90%]'>
          {project.description}
        </p>
        <button
          onClick={() => openModal(project)}
          className='flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-dark bg-[#ffb400]  rounded-lg hover:bg-main/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main/70'
          type='button'
          aria-label={`Learn more about ${project.name}`}
        >
          Learn More
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
            ></path>
          </svg>
        </button>
      </div>

      {/* Icons Section */}
      <div className='flex items-center justify-center gap-4 mt-4'>
        {project.githubLink && (
          <a
            className='flex items-center text-gray-500 hover:text-main'
            href={project.githubLink}
            onClick={event => event.stopPropagation()}
            aria-label={`View ${project.name} source on GitHub`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconGithub />
          </a>
        )}
        {project.youtubeLink && (
          <a
            className='flex items-center text-gray-500 hover:text-main'
            href={project.youtubeLink}
            onClick={event => event.stopPropagation()}
            target='_blank'
            aria-label={`View ${project.name} demo on YouTube`}
            rel='noopener noreferrer'
          >
            <IconYoutube />
          </a>
        )}
        {project.urlLink && (
          <a
            className='flex items-center text-gray-500 hover:text-main'
            href={project.urlLink}
            onClick={event => event.stopPropagation()}
            aria-label={`View ${project.name} live demo`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconLinkExternal />
          </a>
        )}
      </div>
    </div>
  )
}

export default React.memo(ProjectCard)
