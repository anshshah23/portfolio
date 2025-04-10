"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const GlassCard = ({
  children,
  className,
  hoverEffect = true,
  glowEffect = true,
  borderEffect = true,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
}: {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  glowEffect?: boolean
  borderEffect?: boolean
  initial?: any
  animate?: any
  transition?: any
}) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl",
        hoverEffect && "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        glowEffect &&
          "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-br before:from-blue-500/20 before:to-sky-600/20 before:opacity-0 before:blur-xl before:transition-all before:duration-500 hover:before:opacity-100",
        borderEffect &&
          "after:absolute after:inset-0 after:rounded-2xl after:p-px after:bg-gradient-to-br after:from-blue-500/10 after:to-sky-600/10 after:opacity-30 hover:after:opacity-100 after:transition-opacity",
        className,
      )}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
