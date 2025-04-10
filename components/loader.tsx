"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function Loader() {
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted || !loading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black dark:bg-black text-white transition-opacity duration-700 ease-in-out">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 animate-ping rounded-full border-4 border-purple-500 opacity-75"></div>
        <div className="absolute inset-2 rounded-full border-4 border-purple-400"></div>
        <div className="absolute inset-6 flex items-center justify-center rounded-full bg-purple-600 font-bold text-2xl">AS</div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          Ansh Shah
        </h2>
        <p className="text-sm text-gray-300">Loading Portfolio...</p>
      </div>
    </div>
  )
}
