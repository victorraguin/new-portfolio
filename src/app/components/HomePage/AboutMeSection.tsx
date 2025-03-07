/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import VictorFullImg from '@/public/victorraguin.jpg'
import { motion } from 'framer-motion'

const AboutMeSection = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.4
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
    <div className='flex flex-col md:pt-20 px-6 space-y-6 lg:w-3/4 xl:w-full pt-10'>
      <h2 className='text-xl md:text-2xl font-semibold md:mb-2 lg:w-3/4'>
        #
        <strong id='aboutme' className='text-main btn-shine'>
          about-me
        </strong>
        <div className='flex w-3/4 bg-main h-[2px] mt-1'></div>
      </h2>
      <motion.div
        className='flex xl:flex-row flex-col-reverse justify-evenly'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <div className='flex flex-col pt-5 xl:pt-10 w-full 2xl:w-1/2 xl:w-3/4 space-y-2'>
          <strong className='text-xl text-main underline w-fit'>
            Hello, I'm Victor!
          </strong>
          <motion.p className='pt-5' variants={item}>
            I'm a front-end developer based in Chaumes-en-Retz (close to
            Nantes), France.
          </motion.p>
          <strong className='text-main text-lg  underline w-fit pt-8 pb-2'>
            Web Professional Experience
          </strong>
          <strong className='text-main underline w-fit'>
            Freelancing <i>(2023/2025)</i>
          </strong>
          <ul className='list-disc pl-5'>
            <motion.li variants={item}>
              Development of the internet presence of several customers{' '}
              <strong className='text-main italic w-fit text-sm'>
                (websites, logo, brand, social networks, t-shirt printing,
                organization of events, web tools, etc.)
              </strong>
            </motion.li>
          </ul>
          <strong className='text-main underline w-fit pt-2'>
            SKULT <i>(2022/2023)</i>
          </strong>
          <ul className='list-disc pl-5'>
            <motion.li variants={item}>
              <strong className='text-main  w-fit'>Main</strong> front-end
              developer, enhancing my expertise in various modern web
              technologies{' '}
              <strong className='text-main italic w-fit text-sm'>
                (React JS, NextJS, Tailwind CSS, GraphQL, REST APIs).
              </strong>
            </motion.li>
            <motion.li variants={item}>
              Fostered{' '}
              <strong className='text-main  w-fit'>collaboration</strong> with
              backend developers and design teams to ensure seamless project
              execution.
            </motion.li>
            <motion.li variants={item}>
              Demonstrated{' '}
              <strong className='text-main  w-fit'>
                strong team communication and organization skills
              </strong>
              .
            </motion.li>
          </ul>
          <strong className='text-main underline w-fit text-lg pt-4'>
            Personal Projects
          </strong>
          <ul className='list-disc pl-5'>
            <motion.li variants={item}>
              Launched Faya Productions, an online clothing store leveraging
              generative AI <i>(2023/2024)</i>.
            </motion.li>
            <motion.li variants={item}>
              Managed communication and organization of concerts for my music
              group, Legal Dub Impakt <i>(2023/2024)</i>.
            </motion.li>
            <motion.li variants={item}>
              Organizer of crypto and blockchain meet-ups <i>(2018/2019)</i>.
            </motion.li>
            <motion.li variants={item}>
              Developed a cryptocurrency blog and a cryptocurrency airdrop
              website <i>(2018/2019)</i>.
            </motion.li>
          </ul>
          <strong className='pt-8 text-main underline w-fit text-lg'>
            Academic Background
          </strong>
          <motion.p className='pt-2' variants={item}>
            {' '}
            I completed an formation at{' '}
            <strong className='text-main'>O'Clock School</strong>, graduating
            with a{' '}
            <strong className='text-main'>
              Bac+2 (equivalent to an associate degree)
            </strong>{' '}
            in full-stack javascript developer, with a specialisation in React
            JS.
            <i>(2021/2022)</i>
          </motion.p>
        </div>
        <div className='md:w-1/4 w-[60%] self-center'>
          <Image
            src={VictorFullImg}
            alt='Victor'
            className='rounded-2xl shadow-md hidden xl:block'
          />
          <Image
            src={VictorFullImg}
            alt='Victor'
            className='p-1 rounded-xl  xl:hidden md:w-40 bg-cover object-cover'
          />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMeSection
