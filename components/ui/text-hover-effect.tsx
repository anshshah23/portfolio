"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const TextHoverEffect = ({
  words,
  className,
  containerClassName,
}: {
  words: string[]
  className?: string
  containerClassName?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("flex flex-wrap items-center justify-center gap-3", containerClassName)}>
      {words.map((word, idx) => (
        <motion.div
          key={word}
          className="relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div
            className={cn(
              "relative z-10 px-4 py-2 text-sm font-medium transition-colors",
              hoveredIndex === idx ? "text-white" : "text-neutral-300",
              className,
            )}
          >
            {word}
          </div>
          {hoveredIndex === idx && !isSmallScreen && (
            <motion.div
              className="absolute inset-0 z-0 rounded-full bg-gradient-to-tr from-violet-600 to-blue-600"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
