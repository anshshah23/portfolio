'use client'

import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/skills'
import { Achievements } from '@/components/achievements'
import { Activities } from '@/components/activities'
import { Contact } from '@/components/contact'
import { Terminal } from '@/components/terminal'
import Approach from '@/components/Approach'
import { Footer } from '@/components/Footer'

export default function Home () {
  return (
    <div>
      <Hero />
      <Terminal />
      <Skills />
      <Projects />
      <Approach />
      <Achievements />
      <Activities />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
