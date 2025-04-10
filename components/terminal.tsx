"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

type Command = {
  command: string
  output: string[]
}

export function Terminal() {
  const [commands, setCommands] = useState<Command[]>([])
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const allCommands: Command[] = [
    {
      command: "whoami",
      output: ["Ansh Shah - Full-Stack Developer"],
    },
    {
      command: "cat skills.txt",
      output: [
        "Frontend: React, Next.js, TypeScript, Tailwind CSS",
        "Backend: Node.js, Django, Flask, Express",
        "Database: MongoDB, PostgreSQL, MySQL",
        "Other: Git, Docker, AWS, Vercel",
      ],
    },
    {
      command: "ls projects/",
      output: [
        "GemFind/",
        "NOTENG/",
        "PrepNudge/",
        "CogniVista/",
        "PhishNetAI/",
        "And more... (scroll down to see all projects)",
      ],
    },
    {
      command: "contact --info",
      output: [
        "Email: anshshah2303@gmail.com",
        "Phone: +91 8928797765",
        "LinkedIn: linkedin.com/in/anshshah23",
        "GitHub: github.com/anshshah23",
        "Portfolio: anshshah.vercel.app",
      ],
    },
  ]

  useEffect(() => {
    if (currentCommandIndex < allCommands.length) {
      setIsTyping(true)
      const command = allCommands[currentCommandIndex]
      let i = 0

      const typingInterval = setInterval(() => {
        if (i <= command.command.length) {
          setCommands((prev) => {
            const newCommands = [...prev]
            if (!newCommands[currentCommandIndex]) {
              newCommands[currentCommandIndex] = { command: "", output: [] }
            }
            newCommands[currentCommandIndex].command = command.command.substring(0, i)
            return newCommands
          })
          i++
        } else {
          clearInterval(typingInterval)

          // After typing command, display output
          setTimeout(() => {
            setCommands((prev) => {
              const newCommands = [...prev]
              newCommands[currentCommandIndex].output = command.output
              return newCommands
            })
            setIsTyping(false)

            // Move to next command after a delay
            setTimeout(() => {
              setCurrentCommandIndex((prev) => prev + 1)
            }, 1000)
          }, 500)
        }
      }, 100)

      return () => clearInterval(typingInterval)
    }
  }, [currentCommandIndex])

  // Blink cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Auto-scroll to the bottom when new content is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  return (
    <motion.div
      className="mx-auto my-16 w-full max-w-4xl px-4 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <GlassCard className="p-0 overflow-hidden">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <div className="terminal-dot terminal-dot-red"></div>
            <div className="terminal-dot terminal-dot-yellow"></div>
            <div className="terminal-dot terminal-dot-green"></div>
          </div>
          <div className="terminal-title">ansh@portfolio ~ </div>
        </div>

        {/* Terminal Content */}
        <div className="terminal-content" ref={terminalRef}>
          {commands.map((cmd, i) => (
            <div key={i}>
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">{cmd.command}</span>
              </div>
              {cmd.output.map((line, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="terminal-output"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          ))}

          {/* Typing Indicator with Cursor */}
          {currentCommandIndex < allCommands.length && (
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">
                {commands[currentCommandIndex]?.command || ""}
                {isTyping && showCursor && <span className="terminal-cursor">|</span>}
              </span>
            </div>
          )}
        </div>
      </GlassCard>
    </motion.div>
  )
}
