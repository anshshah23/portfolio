"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card-effect"

type Achievement = {
  title: string
  description: string
  url?: string
}

export function Achievements() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("achievements")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const achievements: Achievement[] = [
    {
      title: "NeoTravels",
      description: "Award-winning travel platform project showcasing UI/UX and development skills.",
      url: "https://neo-travels.vercel.app/",
    },
    {
      title: "International CanSat Competition",
      description: "As a part of DJS Arya, I was a part of the team that got 2nd Place in India in the International CanSat Competition.",
    }
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Recognition and accomplishments throughout my journey
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/90 to-gray-900/70 p-6 backdrop-blur-sm">
                <CardItem
                  translateZ={40}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 text-indigo-500"
                >
                  <Award className="h-6 w-6" />
                </CardItem>
                <CardItem translateZ={50} className="mb-2">
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                </CardItem>
                <CardItem translateZ={30} className="mb-4">
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </CardItem>
                {achievement.url && (
                  <CardItem translateZ={60}>
                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-indigo-400 transition-colors hover:text-indigo-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </a>
                  </CardItem>
                )}
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
