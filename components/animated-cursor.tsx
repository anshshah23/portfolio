"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface AnimatedCursorProps {
  children: React.ReactNode
}

export function AnimatedCursor({ children }: AnimatedCursorProps) {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative">
      {children}
      {showCursor && <span className="absolute -right-4 inline-block h-8 w-2 bg-green-500"></span>}
    </span>
  )
}
