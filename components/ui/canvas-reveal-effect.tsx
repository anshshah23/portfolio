"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const CanvasRevealEffect = ({
  children,
  revealText = "Hover Me",
  revealSize = 80,
  className,
  containerClassName,
  cursorClassName,
  textClassName,
  revealClassName,
}: {
  children: React.ReactNode
  revealText?: string
  revealSize?: number
  className?: string
  containerClassName?: string
  cursorClassName?: string
  textClassName?: string
  revealClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Content that will be revealed */}
      <div className={cn("relative z-10", className)}>{children}</div>

      {/* Reveal effect */}
      {!isMobile && (
        <motion.div
          className={cn(
            "pointer-events-none absolute z-20 flex items-center justify-center rounded-full",
            cursorClassName,
          )}
          animate={{
            x: position.x - revealSize / 2,
            y: position.y - revealSize / 2,
            opacity: isHovering ? 1 : 0,
            width: revealSize,
            height: revealSize,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <div
            className={cn(
              "absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-sky-600 opacity-80",
              revealClassName,
            )}
            style={{
              clipPath: "circle(50%)",
              WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)",
              maskImage: "radial-gradient(circle, black 40%, transparent 70%)",
            }}
          />
          <span className={cn("relative z-10 text-xs font-medium text-white mix-blend-difference", textClassName)}>
            {revealText}
          </span>
        </motion.div>
      )}
    </div>
  )
}
