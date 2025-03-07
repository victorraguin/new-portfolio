'use client'
import React from 'react'
import { motion } from 'framer-motion'

const SocialsList = () => {
  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <div className='flex flex-row md:flex-col items-center 4xl:float-end 4xl:mr-5 md:fixed md:top-0 md:z-50'>
      <motion.div
        variants={iconVariants}
        initial='hidden'
        animate='visible'
        className='hidden md:flex h-[200px] bg-dark dark:bg-gray w-[1px] '
      ></motion.div>
      <div className='flex flex-row justify-around md:flex-col items-center md:mt-4'>
        <motion.a
          href='https://github.com/victorraguin'
          target='_blank'
          className='mx-4'
          variants={iconVariants}
          initial='hidden'
          aria-label='Open the Github Account Link'
          animate='visible'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            className=' fill-dark dark:fill-gray hover:fill-main ease-in-out transition'
          >
            <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
          </svg>
        </motion.a>
        <motion.a
          href='https://www.linkedin.com/in/victor-raguin/'
          target='_blank'
          className='mx-4 md:mt-4'
          variants={iconVariants}
          initial='hidden'
          aria-label='Open the LinkedIn Profile Link'
          animate='visible'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            className=' fill-dark dark:fill-gray hover:fill-main ease-in-out transition'
          >
            <path d='M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z' />
          </svg>
        </motion.a>
      </div>
    </div>
  )
}

export default SocialsList
