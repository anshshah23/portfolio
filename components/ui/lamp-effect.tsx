"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const LampEffect = ({
  children,
  className,
  containerClassName,
  size = "medium",
  spotlight = true,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  size?: "small" | "medium" | "large"
  spotlight?: boolean
}) => {
  const sizeMap = {
    small: "h-[20rem] w-[20rem]",
    medium: "h-[30rem] w-[30rem]",
    large: "h-[40rem] w-[40rem]",
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <div className="relative z-10">{children}</div>
      {spotlight && (
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="absolute inset-auto right-1/2 top-0 z-0 h-56 w-[30rem] -translate-y-[10%] translate-x-1/2 bg-gradient-to-tr from-violet-600 to-blue-600 opacity-50 blur-[80px]"
        />
      )}
      <div
        className={cn(
          "absolute left-1/2 top-0 z-0 -translate-x-1/2 -translate-y-[10%] transform-gpu overflow-hidden rounded-full bg-gradient-to-tr from-violet-600 to-blue-600 opacity-50 blur-[80px]",
          sizeMap[size],
          className,
        )}
      />
    </div>
  )
}
