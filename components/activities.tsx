"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, ExternalLink } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

type Activity = {
  title: string
  description: string
  url: string
}

export function Activities() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = document.getElementById("activities")
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const activities: Activity[] = [
    {
      title: "DJS NSS",
      description: "Active member of National Service Scheme, organizing social service activities.",
      url: "https://djsnss.com",
    },
    {
      title: "DJS E-Cell",
      description: "Part of the Entrepreneurship Cell, fostering innovation and startup culture.",
      url: "https://djsceecell.com",
    },
    {
      title: "DJS Unicode",
      description: "Member of the coding club, participating in hackathons and coding competitions.",
      url: "https://www.djunicode.in/",
    },
  ]

  return (
    <section id="activities" className="py-20 text-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Co-Curricular Activities
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Organizations and communities I'm involved with
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <GlassCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="p-6 bg-card text-card-foreground"
            >
              <motion.div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 text-indigo-500"
                whilehover={{ rotate: 5, scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <Users className="h-6 w-6" />
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{activity.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{activity.description}</p>
              {activity.url && (
                <motion.a
                href={activity.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${activity.title} website`}
                className="flex items-center gap-1 text-primary hover:text-primary-foreground transition-colors"
                whilehover={{ scale: 1.05, x: 2 }}
              >
                <ExternalLink className="h-4 w-4" />
                <span>Visit Website</span>
              </motion.a>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
