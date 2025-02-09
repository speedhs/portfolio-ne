"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.01
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      for (let i = 0; i < 3; i++) {
        const radius = 100 + Math.sin(time + i) * 50
        const x = centerX + Math.cos(time * 0.5 + i) * 100
        const y = centerY + Math.sin(time * 0.5 + i) * 100

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 - i * 0.02})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ filter: "blur(40px)" }} />
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 translate-y-4 animate-fade-in">
          Harsh Srivastava
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto opacity-0 translate-y-4 animate-fade-in animation-delay-200">
          Software Engineer specializing in building exceptional digital experiences
        </p>
        <div className="opacity-0 translate-y-4 animate-fade-in animation-delay-400">
          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

