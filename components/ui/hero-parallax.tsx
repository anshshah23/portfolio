"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export const HeroParallax = ({
  children,
  className,
  containerClassName,
  items,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  items: {
    title: string
    thumbnail: string
    link?: string
  }[]
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

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

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 }
  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 500]), springConfig)
  const translateYReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [-40, 0]), springConfig)

  return (
    <div ref={containerRef} className={cn("relative h-[140vh] py-40 overflow-hidden", containerClassName)}>
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
      {!isMobile && (
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateX,
            opacity,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div className="grid grid-cols-3 gap-4 md:gap-10">
            {items.slice(0, Math.ceil(items.length / 2)).map((item, idx) => (
              <ProductCard key={`product-card-${idx}`} item={item} translate={translateYReverse} />
            ))}
          </motion.div>
          <motion.div className="mt-10 grid grid-cols-3 gap-4 md:gap-10">
            {items.slice(Math.ceil(items.length / 2)).map((item, idx) => (
              <ProductCard key={`product-card-${idx}`} item={item} translate={translateY} />
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

const ProductCard = ({
  item,
  translate,
}: {
  item: {
    title: string
    thumbnail: string
    link?: string
  }
  translate: any
}) => {
  return (
    <motion.div
      style={{ y: translate }}
      whilehover={{ scale: 1.05 }}
      className="group relative h-40 w-[20rem] overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-4"
    >
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-center text-xl font-bold text-transparent">
          {item.title}
        </p>
      </div>
      <img
        src={item.thumbnail || "/placeholder.svg"}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-50"
      />
      {item.link && (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20">
          <span className="sr-only">View {item.title}</span>
        </a>
      )}
    </motion.div>
  )
}
