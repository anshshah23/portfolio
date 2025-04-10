'use client'

import { useEffect, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { GlassCard } from '@/components/ui/glass-card'
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'

const iconMap: Record<
  string,
  () => Promise<{
    default: React.ComponentType<{ className?: string; color?: string }>
  }>
> = {
  React: () => import('react-icons/fa').then(mod => ({ default: mod.FaReact })),
  'Next.js': () =>
    import('react-icons/si').then(mod => ({ default: mod.SiNextdotjs })),
  TypeScript: () =>
    import('react-icons/si').then(mod => ({ default: mod.SiTypescript })),
  JavaScript: () =>
    import('react-icons/si').then(mod => ({ default: mod.SiJavascript })),
  HTML5: () => import('react-icons/si').then(mod => ({ default: mod.SiHtml5 })),
  CSS3: () => import('react-icons/si').then(mod => ({ default: mod.SiCss3 })),
  'Tailwind CSS': () =>
    import('react-icons/si').then(mod => ({ default: mod.SiTailwindcss })),
  'Node.js': () =>
    import('react-icons/fa').then(mod => ({ default: mod.FaNodeJs })),
  Express: () =>
    import('react-icons/si').then(mod => ({ default: mod.SiExpress })),
  Django: () =>
    import('react-icons/si').then(mod => ({ default: mod.SiDjango })),
  Flask: () => import('react-icons/si').then(mod => ({ default: mod.SiFlask })),
  MongoDB: () =>
    import('react-icons/si').then(mod => ({ default: mod.SiMongodb })),
  PostgreSQL: () =>
    import('react-icons/si').then(mod => ({ default: mod.SiPostgresql })),
  MySQL: () => import('react-icons/si').then(mod => ({ default: mod.SiMysql })),
  Docker: () =>
    import('react-icons/fa').then(mod => ({ default: mod.FaDocker })),
  Kubernetes: () =>
    import('react-icons/si').then(mod => ({ default: mod.SiKubernetes })),
  AWS: () => import('react-icons/fa').then(mod => ({ default: mod.FaAws })),
  Git: () => import('react-icons/fa').then(mod => ({ default: mod.FaGit })),
  GitHub: () =>
    import('react-icons/fa').then(mod => ({ default: mod.FaGithub })),
  'React Native': () =>
    import('react-icons/fa').then(mod => ({ default: mod.FaReact })),
  Figma: () => import('react-icons/fa').then(mod => ({ default: mod.FaFigma })),
  'VS Code': () =>
    import('react-icons/fa').then(mod => ({ default: mod.FaCode })),
  Postman: () =>
    import('react-icons/si').then(mod => ({ default: mod.SiPostman }))
}

type Skill = {
  name: string
  category: string
}

export function Skills () {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'DevOps',
    'Mobile',
    'Design',
    'Tools'
  ]

  const skills: Skill[] = Object.keys(iconMap).map(key => {
    const category =
      key === 'React Native'
        ? 'Mobile'
        : key === 'Figma' || key === 'Canva'
        ? 'Design'
        : ['VS Code', 'Postman'].includes(key)
        ? 'Tools'
        : ['MongoDB', 'PostgreSQL', 'MySQL'].includes(key)
        ? 'Database'
        : ['Docker', 'Kubernetes', 'AWS', 'Git', 'GitHub'].includes(key)
        ? 'DevOps'
        : ['Node.js', 'Express', 'Django', 'Flask'].includes(key)
        ? 'Backend'
        : 'Frontend'
    return { name: key, category }
  })

  const filteredSkills =
    selectedCategory && selectedCategory !== 'All'
      ? skills.filter(skill => skill.category === selectedCategory)
      : skills

  return (
    <section id='skills' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center'
        >
          <h2 className='mb-4 text-4xl font-bold tracking-tight text-white'>
            <span className='bg-gradient-to-tr from-blue-600 to-sky-400 bg-clip-text text-transparent'>
              Skills & Technologies
            </span>
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-gray-300'>
            Technologies I've worked with and am proficient in
          </p>
        </motion.div>

        <div className='flex justify-center gap-4 mb-6 flex-grow flex-wrap'>
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-semibold rounded-lg ${
                selectedCategory === category
                  ? 'bg-sky-500 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {filteredSkills.map((skill, index) => {
            const LazyIcon = lazy(iconMap[skill.name])
            return (
              <GlassCard
                key={skill.name}
                className='flex flex-col items-center justify-center p-4 text-center max-w-[150px]'
              >
                <Suspense
                  fallback={
                    <div className='h-10 w-10 animate-pulse bg-gray-600 place-self-end rounded-full' />
                  }
                >
                  <LazyIcon className='h-10 w-10' color='currentColor' />
                </Suspense>
                {/* <h3 className='text-sm font-medium text-white'>{skill.name}</h3> */}
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
