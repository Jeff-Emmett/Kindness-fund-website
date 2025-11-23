"use client"

import { useEffect, useRef } from "react"

export function StreamCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string

      constructor(w: number, h: number) {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.vx = Math.random() * 2 + 0.5
        this.vy = Math.sin(this.x * 0.01) * 0.5
        this.size = Math.random() * 3 + 1
        const colors = ["#00f3ff", "#ff00ff", "#ccff00"] // Cyan, Magenta, Lime
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(w: number, h: number) {
        this.x += this.vx
        this.y += Math.sin(this.x * 0.005 + Date.now() * 0.001) * 0.5

        if (this.x > w) {
          this.x = 0
          this.y = Math.random() * h
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
      }
    }

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connecting lines for "stream" effect
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.update(canvas.width, canvas.height)
        p.draw(ctx)

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist / 1000})`
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    window.addEventListener("resize", init)
    animate()

    return () => {
      window.removeEventListener("resize", init)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#0a0a0a]" />
}
