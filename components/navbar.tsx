'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Home,
  Code,
  Briefcase,
  Award,
  Users,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  FileText,
  Terminal
} from 'lucide-react'
import Logo from '@/public/anshlogo.png'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar () {
  const [activeSection, setActiveSection] = useState('home')
  const [navOpen, setNavOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach(section => {
        const el = section as HTMLElement
        const top = el.offsetTop
        const height = el.offsetHeight
        const id = el.getAttribute('id') || ''

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id)
        }
      })

      console.log('Active Section:', activeSection)
      
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavOpen(false)
        document.body.style.overflow = ''
      }
    }

    if (navOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.body.style.overflow = ''
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [navOpen])

  const scrollToSection = (sectionId: string) => {
    setNavOpen(false)
    document.body.style.overflow = ''
  
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }
  

  const navigationLinks = [
    { icon: Home, title: 'Home', sectionId: 'home' },
    { icon: Terminal, title: 'Skills', sectionId: 'skills' },
    { icon: Code, title: 'Projects', sectionId: 'projects' },
    { icon: Award, title: 'Achievements', sectionId: 'achievements' },
    { icon: Users, title: 'Activities', sectionId: 'activities' },
    { icon: Briefcase, title: 'Experience', sectionId: 'experience' },
    { icon: Mail, title: 'Contact', sectionId: 'contact' }
  ]

  const socialLinks = [
    { icon: Github, title: 'GitHub', url: 'https://github.com/anshshah23/' },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anshshah23/'
    },
    { icon: FileText, title: 'Resume', url: '#' }
  ]

  return (
    <div className='flex items-center justify-center'>
      <motion.nav
        ref={menuRef}
        className='fixed z-50 mt-2 md:mt-0 top-4 w-[95%] max-w-5xl rounded-full border border-gray-300/15 bg-black/30 px-4 py-2 backdrop-blur-lg'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Desktop Navbar */}
        <div className='hidden md:flex items-center justify-center space-x-1'>
          <span className='flex items-center bg-white p-1 rounded-full'>
            <img src={Logo.src} alt='Logo' className='h-8 w-8 rounded-full' />
          </span>

          {navigationLinks.map(({ icon: Icon, title, sectionId }, index) => (
            <motion.button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`flex items-center rounded-full px-3 py-1.5 text-sm transition-colors ${
                activeSection === sectionId
                  ? 'bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Icon className='mr-1 h-3.5 w-3.5' />
              <span>{title}</span>
            </motion.button>
          ))}

          <div className='ml-2 flex items-center space-x-1'>
            {socialLinks.map(({ icon: Icon, title, url }, index) => (
              <motion.a
                key={title}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-8 w-8 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-white/10 hover:text-white'
                title={title}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + 0.1 * index }}
              >
                <Icon className='h-4 w-4' />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className='flex items-center justify-between md:hidden gap-2'>
          <span className='flex items-center bg-white p-1 rounded-full'>
            <img src={Logo.src} alt='Logo' className='h-5 w-5 rounded-full' />
          </span>
          <div className='text-sm font-semibold text-white'>Ansh Shah</div>

          <motion.button
            onClick={() => setNavOpen(prev => !prev)}
            className='flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white'
          >
            {navOpen ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              className='absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-lg md:hidden max-h-[90vh] overflow-y-auto z-50'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className='p-4'>
                {navigationLinks.map(
                  ({ icon: Icon, title, sectionId }, index) => (
                    <motion.button
                      key={sectionId}
                      onClick={() => scrollToSection(sectionId)}
                      className={`mb-2 flex w-full items-center rounded-full px-4 py-2 text-left text-sm transition-colors ${
                        activeSection === sectionId
                          ? 'bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className='mr-2 h-4 w-4' />
                      {title}
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
