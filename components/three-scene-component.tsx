"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text } from "@react-three/drei"
import type { Mesh } from "three"

function Model({ position = [0, 0, 0], scale = 1, isDarkTheme = true }) {
  const mesh = useRef<Mesh>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={isDarkTheme ? "#3b82f6" : "#2563eb"}
        emissive={isDarkTheme ? "#1e40af" : "#60a5fa"}
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function FloatingText({ text, position, rotation = [0, 0, 0], color = "#ffffff" }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text position={position} rotation={rotation} fontSize={0.5} color={color} anchorX="center" anchorY="middle">
        {text}
      </Text>
    </Float>
  )
}

export default function ThreeScene({ currentTheme }) {
  const isDarkTheme = currentTheme === "dark"

  const skills = [
    { name: "React", position: [-3, 1, -2] },
    { name: "Next.js", position: [3, 1, -1] },
    { name: "TypeScript", position: [-2, -1, -3] },
    { name: "Node.js", position: [2, -1, -2] },
    { name: "MongoDB", position: [0, 2, -3] },
  ]

  return (
    <Canvas>
      <color attach="background" args={[isDarkTheme ? "#0a0b14" : "#f8fafc"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <Model position={[0, 0, 0]} scale={1.5} isDarkTheme={isDarkTheme} />

      {skills.map((skill, index) => (
        <FloatingText
          key={skill.name}
          text={skill.name}
          position={skill.position}
          color={isDarkTheme ? "#3b82f6" : "#2563eb"}
        />
      ))}

      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset={isDarkTheme ? "night" : "city"} />
    </Canvas>
  )
}
