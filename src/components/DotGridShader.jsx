import { useEffect, useRef } from 'react'

// ─── Perlin noise (2D, seeded) ───
const GRAD3 = [
  [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
  [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
  [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],
]

const perm = new Uint8Array(512)
;(function initPerm() {
  const p = new Uint8Array(256)
  for (let i = 0; i < 256; i++) p[i] = i
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255]
})()

function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10) }
function lerp(a, b, t) { return a + t * (b - a) }

function noise2D(x, y) {
  const X = Math.floor(x) & 255
  const Y = Math.floor(y) & 255
  const xf = x - Math.floor(x)
  const yf = y - Math.floor(y)
  const u = fade(xf); const v = fade(yf)

  const aa = perm[perm[X] + Y]
  const ab = perm[perm[X] + Y + 1]
  const ba = perm[perm[X + 1] + Y]
  const bb = perm[perm[X + 1] + Y + 1]

  const g1 = GRAD3[aa % 12]; const g2 = GRAD3[ba % 12]
  const g3 = GRAD3[ab % 12]; const g4 = GRAD3[bb % 12]

  const x1 = lerp(g1[0]*xf + g1[1]*yf, g2[0]*(xf-1) + g2[1]*yf, u)
  const x2 = lerp(g3[0]*xf + g3[1]*(yf-1), g4[0]*(xf-1) + g4[1]*(yf-1), u)
  return lerp(x1, x2, v)
}

// ─── Dot ───
class Dot {
  // x0, y0 = document-space rest position
  // x, y   = viewport-space visual position (what's drawn on canvas)
  constructor(x0, y0, scrollY) {
    this.x0 = x0; this.y0 = y0
    this.x = x0; this.y = y0 - scrollY
    this.vx = 0; this.vy = 0
  }

  update(mx, my, mvx, mvy, scrollY) {
    const SPRING = 0.012
    const DAMP = 0.93
    const MOUSE_RADIUS = 100
    const VEL_THRESHOLD = 0.8
    const MAX_DISP = 12

    // visual rest = document rest shifted by scroll
    const rx = this.x0
    const ry = this.y0 - scrollY

    // spring toward visual rest
    const dx = this.x - rx
    const dy = this.y - ry
    this.vx += -SPRING * dx
    this.vy += -SPRING * dy

    // mouse force — only when mouse is actually moving
    const speed = Math.sqrt(mvx * mvx + mvy * mvy)
    if (speed > VEL_THRESHOLD) {
      const rx_m = this.x - mx
      const ry_m = this.y - my
      const dist = Math.sqrt(rx_m * rx_m + ry_m * ry_m)
      if (dist < MOUSE_RADIUS && dist > 0.01) {
        const falloff = 1 - dist / MOUSE_RADIUS
        const strength = falloff * speed * 0.6
        const nx = rx_m / dist; const ny = ry_m / dist
        this.vx += nx * strength
        this.vy += ny * strength
      }
    }

    this.vx *= DAMP; this.vy *= DAMP
    this.x += this.vx; this.y += this.vy

    // hard clamp displacement from visual rest
    const dxr = this.x - rx
    const dyr = this.y - ry
    const distR = Math.sqrt(dxr * dxr + dyr * dyr)
    if (distR > MAX_DISP) {
      const scale = MAX_DISP / distR
      this.x = rx + dxr * scale
      this.y = ry + dyr * scale
    }
  }
}

// ─── Component ───
const SPACING = 30
const DOT_SIZE = 2
const NOISE_CELL = 200
const MIN_ALPHA = 0.075
const MAX_ALPHA = 0.225

export default function DotGridShader() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let dots = []
    let w = 0, h = 0
    let mx = -9999, my = -9999
    let mvx = 0, mvy = 0
    let lpx = mx, lpy = my
    let raf

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      rebuildDots(window.scrollY)
    }

    function rebuildDots(scrollY) {
      dots = []
      // cover document height + buffer so dots scroll into view
      const docH = Math.max(document.documentElement.scrollHeight, h)
      for (let y = SPACING; y < docH + h; y += SPACING) {
        for (let x = SPACING; x < w; x += SPACING) {
          dots.push(new Dot(x, y, scrollY))
        }
      }
    }

    function draw() {
      const scrollY = window.scrollY
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i]
        d.update(mx, my, mvx, mvy, scrollY)

        // cull off-screen dots
        if (d.y < -DOT_SIZE * 4 || d.y > h + DOT_SIZE * 4) continue

        const n = noise2D(d.x0 / NOISE_CELL, d.y0 / NOISE_CELL)
        const alpha = MIN_ALPHA + (n + 1) * 0.5 * (MAX_ALPHA - MIN_ALPHA)

        ctx.beginPath()
        ctx.arc(d.x, d.y, DOT_SIZE, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(224, 221, 216, ${alpha})`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    function onMouseMove(e) {
      const px = e.clientX, py = e.clientY
      mvx = px - lpx; mvy = py - lpy
      mx = px; my = py
      lpx = px; lpy = py
    }

    function onTouchMove(e) {
      const t = e.touches[0]
      if (!t) return
      const px = t.clientX, py = t.clientY
      mvx = px - lpx; mvy = py - lpy
      mx = px; my = py
      lpx = px; lpy = py
    }

    function onTouchEnd() {
      mx = -9999; my = -9999
      mvx = 0; mvy = 0
    }

    function onMouseLeave() {
      mx = -9999; my = -9999
      mvx = 0; mvy = 0
    }

    resize()
    raf = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ display: 'block' }}
    />
  )
}
