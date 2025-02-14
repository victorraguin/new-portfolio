import React from 'react'
import IconGithub from '../Icons/IconGithub'
import IconYoutube from '../Icons/IconYoutube'
import Image from 'next/image'

interface ModalProps {
  title: string
  description: string
  urlLink: string
  githubLink?: string
  youtubeLink?: string
  imageUrl: string
  logoUrl: string
  technologies: { icon: JSX.Element; name: string }[]
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  urlLink,
  githubLink,
  youtubeLink,
  technologies,
  imageUrl,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-40 flex items-center justify-center dark:bg-black/70 bg-black/30'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modalTitle'
      aria-describedby='modalDesc'
      onClick={() => onClose()}
    >
      <div
        onClick={e => e.stopPropagation()}
        className='relative flex flex-col w-[90%] xl:w-1/2 max-h-[90vh] overflow-auto rounded-xl bg-[#ffe7ce] dark:bg-[#131313] shadow-md p-8'
      >
        <button
          onClick={onClose}
          type='button'
          aria-label='Close modal'
          className='absolute top-2 right-5 text-lg dark:text-main text-black hover:text-main'
        >
          X
        </button>

        <div className='flex flex-col'>
          <div className='pb-2 sm:pb-0 flex flex-col sm:flex-row justify-between items-center'>
            <h2 className='text-xl md:text-2xl font-semibold md:mb-2'>
              #<strong className='text-main btn-shine'>project</strong>
            </h2>

            <div className='flex items-center gap-4 text-lg'>
              {githubLink && (
                <>
                  <a
                    className='flex items-center animate-pulse hover:text-main w-fit'
                    href={githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Open the GitHub repository for ${title}`}
                  >
                    <IconGithub /> <span className='ml-2'>Github</span>
                  </a>
                  <span className='text-main'>-</span>
                </>
              )}
              {youtubeLink && (
                <>
                  <a
                    className='flex items-center hover:text-main w-fit ml-auto animate-pulse'
                    href={youtubeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Watch the ${title} video on YouTube`}
                  >
                    <IconYoutube /> <span className='ml-2 '>Video</span>
                  </a>
                </>
              )}
              {urlLink && (
                <a
                  className='flex items-center gap-2 text-center animate-pulse align-middle transition-all group hover:text-main'
                  href={urlLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit the site of ${title}`}
                >
                  Visit Site
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='w-4 h-4 group-hover:translate-x-1 duration-200 ease-in-out text-main'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className='flex w-full bg-main h-[2px] mt-1'></div>

          <div className='flex flex-col md:flex-row h-full pt-4 space-y-4'>
            <div className='sm:w-3/4 mx-1'>
              <h1 id='modalTitle' className='text-xl text-main mb-2'>
                {title}
              </h1>
              <p id='modalDesc' className='text-base overflow-y-auto'>
                {description}
              </p>
            </div>

            <div className='sm:w-1/2 bg-[#faeee1] dark:bg-[#100f10] h-fit self-center w-full rounded-xl px-4 space-y-4 p-2 sm:ml-auto'>
              <ul className='flex flex-col flex-wrap space-y-2'>
                {technologies.map((tech, index) => (
                  <li
                    key={index}
                    className='flex items-center hover:text-main border-b pb-1 w-fit border-main'
                  >
                    {tech.icon} <span className='ml-2'>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`Project illustration: ${title}`}
              className='hidden sm:flex self-center mt-10 shadow-md shadow-black border-main/50 border rounded-2xl max-h-52 2xl:max-h-none object-cover'
              width={400}
              height={400}
              quality={100}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
