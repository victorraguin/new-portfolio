'use client'
import { useEffect, useState } from 'react'

const ThemeSelector: React.FC = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme === 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement

    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      return false
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      return true
    }
  }

  return (
    <>
      <button
        type='button'
        aria-label='Toggle color mode to dark'
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
          toggleTheme()
        }}
        className={` ${theme === 'dark' ? 'hidden' : 'flex'} items-center`}
      >
        <svg
          className='flex-shrink-0 size-4 hover:text-main dark:hover:text-main'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
        </svg>
      </button>
      <button
        type='button'
        aria-label='Toggle color mode to light'
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
          toggleTheme()
        }}
        className={` ${theme === 'dark' ? 'flex' : 'hidden'} items-center `}
      >
        <svg
          className='flex-shrink-0 size-4 hover:text-main dark:hover:text-main'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='4' />
          <path d='M12 8a2 2 0 1 0 4 4' />
          <path d='M12 2v2' />
          <path d='M12 20v2' />
          <path d='m4.93 4.93 1.41 1.41' />
          <path d='m17.66 17.66 1.41 1.41' />
          <path d='M2 12h2' />
          <path d='M20 12h2' />
          <path d='m6.34 17.66-1.41 1.41' />
          <path d='m19.07 4.93-1.41 1.41' />
        </svg>
      </button>
    </>
  )
}

export default ThemeSelector
