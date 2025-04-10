'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import {
  CardContainer,
  CardBody,
  CardItem
} from '@/components/ui/3d-card-effect'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

type Project = {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  liveUrl: string
  githubUrl?: string
}

export function Projects () {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState<string>('All')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const projects: Project[] = [
    {
      title: 'NOTENG',
      description:
        'Study material sharing platform with a full-stack React + Django setup.',
      technologies: ['React', 'Django', 'MongoDB', 'Cloudinary'],
      imageUrl: '/noteng.png',
      liveUrl: 'https://noteng.vercel.app/',
      githubUrl: 'https://github.com/anshshah23/noteng'
    },
    {
      title: 'PrepNudge',
      description:
        'AI-powered interview preparation tool with personalized quizzes and progress tracking.',
      technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Tailwind', 'MongoDB', 'WebSockets'],
      imageUrl: '/prepnudge.png',
      liveUrl: 'https://prepnudge.vercel.app/',
      githubUrl: 'https://github.com/anshshah23/prepnudge'
    },
    {
      title: 'CogniVista',
      description:
        'Smart education platform with interactive whiteboard using Canvas API & Fabric.js.',
      technologies: ['Next.js', 'Canvas API', 'Fabric.js', 'Firebase', 'JWT', 'TypeScript'],
      imageUrl: '/cogniVista.png',
      liveUrl: 'https://cognivista.vercel.app/',
      githubUrl: 'https://github.com/anshshah23/cognivista'
    },
    {
      title: 'Nadi Parikshan',
      description:
        'Health assessment tool using Arduino, signal processing, and ML inspired by ancient pulse diagnosis.',
      technologies: ['Arduino', 'Python', 'ML', 'Signal Processing', 'React', 'Flask'],
      imageUrl: '/nadiParikshan.png',
      liveUrl: 'https://nadi-parikshan.vercel.app/',
      githubUrl: 'https://github.com/anshshah23/nadi-parikshan'
    },
    {
      title: 'PhishNetAI',
      description:
        'Phishing detection platform using AI-powered Flask backend with real-time threat analysis.',
      technologies: ['Next.js', 'Python', 'ML', 'React', 'MongoDB','TypeScript', 'Clerk'],
      imageUrl: '/phishnetai.png',
      liveUrl: 'https://phishnetai.vercel.app/',
      githubUrl: 'https://github.com/anshshah23/phishnetai'
    },
    {
      title: 'Personal Portfolio',
      description:
        'A portfolio website designed and developed using React.js, Tailwind CSS, and Framer Motion.',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      imageUrl: '/portfolio1.png',
      liveUrl: 'https://anshshah2303.vercel.app/',
      githubUrl: 'https://github.com/anshshah23/personal-web'
    },
    {
      title: "Personal Portfolio (V2)",
      description:
        'A portfolio website designed and developed using Next.js, Tailwind CSS, and Framer Motion.',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript', 'Three.js'],
      imageUrl: '/portfolio2.png',
      liveUrl: 'https://anshshah230304.vercel.app/',
      githubUrl: 'https://github.com/anshshah23/portfolio-main'
    },
    {
      title: 'Recipe Generator',
      description:
        'Generates random recipes using the Edamam API, enhancing API integration and state management skills.',
      technologies: ['React', 'Tailwind', 'JavaScript', 'GeminiAPI'],
      imageUrl: '/recipeGen.png',
      liveUrl: 'https://recipegeneratorreactapp.onrender.com/',
      githubUrl: 'https://github.com/anshshah23/Recipe-Maker'
    },
    {
      title: 'Weather App',
      description:
        'Provides real-time weather updates using Rapid API’s Visual Crossing Weather.',
      technologies: ['React', 'Tailwind', 'JavaScript'],
      imageUrl: '/weatherApp.png',
      liveUrl: 'https://weather-app-byansh.vercel.app/',
      githubUrl: ''
    },
    {
      title: 'TravelEssence',
      description:
        'A travel website that provides information about various destinations.',
      technologies: ['React', 'MaterialUI', 'JavaScript'],
      imageUrl: '/travelEssence.png',
      liveUrl: 'https://travelessence-byansh.vercel.app/',
      githubUrl: 'https://github.com/anshshah23/project_travel_advisor'
    },
    {
      title: 'AaharAlly',
      description:
        'A food delivery app that connects users with local restaurants.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Clerk'],
      imageUrl: '/AaharAlly.png',
      liveUrl: 'https://aaharally.vercel.app/',
      githubUrl: ''
    },
    {
      title: 'AskCampus',
      description:
        'A platform for students to ask and answer questions, enhancing campus engagement.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Clerk'],
      imageUrl: '/askCampus.png',
      liveUrl: 'https://ask-campus.vercel.app/',
      githubUrl: 'https://github.com/anshshah23/ask-campus'
    },
    {
      title: 'DJS NSS',
      description:
        'A website for the NSS unit of DJSCE, showcasing events and initiatives.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Cloudinary'],
      imageUrl: '/djsnss.png',
      liveUrl: 'https://djsnss.com/',
      githubUrl: 'https://github.com/djsnss/djsnss-web'
    },
    {
      title: 'DJSCE E-Cell',
      description:
        'A website for the E-Cell of DJSCE, showcasing events and initiatives.',
      technologies: ['Next.js', 'Tailwind', 'TypeScript', 'ShadCN', 'AceternityUI'],
      imageUrl: '/ecell.png',
      liveUrl: 'https://djsceecell.com/',
      githubUrl: 'https://github.com/DJSCE-ECELL/MainWebsite'
    }
  ]

  const technologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort()

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(project => project.technologies.includes(filter))

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center'
        >
          <h2 className='mb-4 text-4xl font-bold tracking-tight text-white'>
            <span className='bg-gradient-to-tr from-blue-600 to-sky-400 bg-clip-text text-transparent'>
              Projects
            </span>
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-gray-300'>
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {['All', ...technologies].map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                filter === tech
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map(project => (
            <CardContainer key={project.title} className='w-full h-full'>
              <CardBody className='min-h-[350px] flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/90 to-gray-900/70 p-0 backdrop-blur-sm'>
                <div className='aspect-video w-full overflow-hidden rounded-t-2xl'>
                  <CardItem translateZ={50}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className='relative h-full w-full object-cover'
                    />
                  </CardItem>
                </div>

                <div className='p-6 flex flex-col gap-4 flex-1'>
                  <CardItem translateZ={50}>
                    <h3 className='text-xl font-bold text-white'>
                      {project.title}
                    </h3>
                  </CardItem>

                  <CardItem translateZ={30}>
                    <p className='text-sm text-gray-300 leading-relaxed'>
                      {project.description}
                    </p>
                  </CardItem>

                  <CardItem translateZ={40}>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className='rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardItem>

                  <CardItem translateZ={60} className='flex gap-4 mt-auto pt-2'>
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-1 text-blue-400 transition-colors hover:text-blue-300'
                    >
                      <ExternalLink className='h-4 w-4' />
                      <span>Live Demo</span>
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-gray-400 transition-colors hover:text-white'
                      >
                        <Github className='h-4 w-4' />
                        <span>Code</span>
                      </a>
                    )}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
