<template>
  <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none" aria-hidden="true" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)

// Instance-level state (not module-level, so each component instance has its own)
const particles: Particle[] = []
const mouse = { x: -1000, y: -1000 }
let animationId = 0
let onResize: (() => void) | null = null

function initParticles(width: number, height: number) {
  particles.length = 0
  const count = Math.min(Math.floor((width * height) / 12000), 80)
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    })
  }
}

function handleMouseMove(e: MouseEvent) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function resize(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const dpr = window.devicePixelRatio || 1
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  canvas.style.width = `${window.innerWidth}px`
  canvas.style.height = `${window.innerHeight}px`
  ctx.scale(dpr, dpr)
  initParticles(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const maybeCtx = canvas.getContext('2d')
  if (!maybeCtx) return
  const ctx: CanvasRenderingContext2D = maybeCtx

  onResize = () => resize(canvas, ctx)
  onResize()

  window.addEventListener('resize', onResize, { passive: true })
  window.addEventListener('mousemove', handleMouseMove, { passive: true })

  function animate(renderCtx: CanvasRenderingContext2D) {
    const w = window.innerWidth
    const h = window.innerHeight
    renderCtx.clearRect(0, 0, w, h)

    for (const [i, p] of particles.entries()) {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > w) p.vx *= -1
      if (p.y < 0 || p.y > h) p.vy *= -1

      // Mouse interaction - subtle push
      const dx = p.x - mouse.x
      const dy = p.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 150 && dist > 0) {
        const force = (150 - dist) / 150
        p.vx += (dx / dist) * force * 0.02
        p.vy += (dy / dist) * force * 0.02
      }

      // Damping
      p.vx *= 0.999
      p.vy *= 0.999

      // Draw particle
      renderCtx.beginPath()
      renderCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      renderCtx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
      renderCtx.fill()

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        if (!p2) continue
        const connDx = p.x - p2.x
        const connDy = p.y - p2.y
        const connDist = Math.sqrt(connDx * connDx + connDy * connDy)

        if (connDist < 120) {
          renderCtx.beginPath()
          renderCtx.moveTo(p.x, p.y)
          renderCtx.lineTo(p2.x, p2.y)
          renderCtx.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - connDist / 120)})`
          renderCtx.lineWidth = 0.5
          renderCtx.stroke()
        }
      }
    }

    animationId = requestAnimationFrame(() => animate(renderCtx))
  }

  animate(ctx)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  if (onResize) window.removeEventListener('resize', onResize)
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
