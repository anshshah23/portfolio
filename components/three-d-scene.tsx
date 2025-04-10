"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"

// Dynamically import Three.js components with no SSR
const ThreeScene = dynamic(() => import("./three-scene-component"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500 mx-auto"></div>
        <p className="text-sm text-gray-400">Loading 3D Scene...</p>
      </div>
    </div>
  ),
})

export function ThreeDScene() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsMounted(true)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.querySelector(".scene-container")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  if (!isMounted) return null

  return (
    <div
      className="scene-container glass-card mx-auto my-12 w-full max-w-4xl transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {isVisible && <ThreeScene currentTheme={theme} />}
    </div>
  )
}
