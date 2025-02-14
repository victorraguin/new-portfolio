'use client'
import { motion } from 'framer-motion'
import Brand from '../Brand'
import { HeaderNavs } from './constants'
import HeaderLinks from './user-actions/HeaderLinks'
import ThemeSelector from './user-actions/ThemeSelector'

const Header = () => {
  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.header
      className='flex items-center justify-between sm:p-4 self-center sm:self-auto my-4 sm:my-0'
      variants={headerVariants}
      initial='initial'
      animate='animate'
    >
      <Brand />
      <nav>
        <div className='flex items-center flex-row space-x-2 md:space-x-8'>
          {HeaderNavs.map(nav => (
            <HeaderLinks
              value={nav.value}
              href={nav.href}
              id={nav.id}
              key={nav.id}
            />
          ))}
          <ThemeSelector />
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
