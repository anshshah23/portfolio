'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Spotlight } from './ui/Spotlight'
import Type from './ui/Type'

export function Hero () {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Full-Stack Developer & UI/UX Enthusiast'

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText, fullText])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100) // Small delay ensures section is loaded before attempting to scroll
  }
  
  return (
    <section id='home' className='relative min-h-screen z-50'>
      <div className='relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center'>
        <div className='z-50 absolute top-0 left-0 h-full w-full overflow-hidden'>
          <Spotlight
            className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
            fill='white'
          />
          <Spotlight
            className='h-[80vh] w-[50vw] top-10 left-full'
            fill='sky'
          />
          <Spotlight
            className='left-80 top-28 h-[100vh] w-[50vw]'
            fill='blue'
          />
        </div>
        <motion.h1
          className='mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Hi, I&apos;m
          <span className='bg-gradient-to-tr ml-2 md:ml-4 from-blue-600 to-sky-400 bg-clip-text text-transparent'>
            Ansh Shah
          </span>
        </motion.h1>
        <h2 className='mb-8 flex items-center text-xl font-medium text-gray-300 sm:text-2xl'>
          <Type />
        </h2>
        <motion.p
          className='mb-8 text-lg text-gray-300'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Building innovative web solutions with modern technologies.
          <br />
          Passionate about creating seamless user experiences.
        </motion.p>
        <motion.div
          className='flex flex-col items-center justify-center gap-4 sm:flex-row'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Button
            size='lg'
            className='bg-gradient-to-tr bg-blue-500 to-sky-400 text-white hover:from-blue-700 hover:to-sky-500'
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white'
            onClick={() => {
              setTimeout(() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }, 100)
            }}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer'
        onClick={() => {
          window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
          })
        }}
      >
        <ArrowDown className='h-8 w-8 animate-bounce text-blue-400' />
      </motion.div>
    </section>
  )
}
