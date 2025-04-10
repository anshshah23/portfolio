"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-particles"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"
import { useTheme } from "next-themes"

export function ParticlesBackground() {
  const [isClient, setIsClient] = useState(false)
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  useEffect(() => {
    setIsClient(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  if (!isClient) return null

  return (
    <Particles
      id="tsparticles"
      className="particles-container"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: isDarkTheme ? "#0a0b14" : "#f8fafc",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: isDarkTheme ? "#3b82f6" : "#2563eb",
          },
          links: {
            color: isDarkTheme ? "#3b82f6" : "#2563eb",
            distance: 150,
            enable: true,
            opacity: isDarkTheme ? 0.3 : 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: isDarkTheme ? 0.5 : 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
