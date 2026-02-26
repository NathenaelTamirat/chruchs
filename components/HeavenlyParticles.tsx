"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityDelta: number;
  type: "orb" | "star" | "cross";
  rotation: number;
  rotationSpeed: number;
  color: string;
  life: number;
  maxLife: number;
}

const COLORS = [
  "rgba(212, 175, 55,",
  "rgba(255, 223, 100,",
  "rgba(255, 255, 220,",
  "rgba(255, 255, 255,",
  "rgba(240, 200, 80,",
];

function createParticle(canvasW: number, canvasH: number): Particle {
  const type = Math.random() < 0.6 ? "orb" : Math.random() < 0.7 ? "star" : "cross";
  const maxLife = 180 + Math.random() * 240;
  return {
    x: Math.random() * canvasW,
    y: canvasH + 20,
    size: type === "orb" ? 2 + Math.random() * 6 : type === "star" ? 1 + Math.random() * 3 : 4 + Math.random() * 6,
    speedY: 0.3 + Math.random() * 0.7,
    speedX: (Math.random() - 0.5) * 0.4,
    opacity: 0,
    opacityDelta: 0.008 + Math.random() * 0.006,
    type,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    life: 0,
    maxLife,
  };
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  for (let i = 0; i < 4; i++) {
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.moveTo(0, -size * 2.2);
    ctx.lineTo(0, size * 2.2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawCross(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.lineWidth = Math.max(1, size * 0.35);
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(0, size);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-size * 0.6, -size * 0.25);
  ctx.lineTo(size * 0.6, -size * 0.25);
  ctx.stroke();
  ctx.restore();
}

export default function HeavenlyParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    // Reduce particle count on mobile for performance
    const isMobile = w < 768;
    const MAX_PARTICLES = isMobile ? 28 : 55;

    const particles: Particle[] = [];

    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = createParticle(w, h);
      p.y = Math.random() * h;
      p.opacity = Math.random() * 0.5;
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    let animId: number;

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, w, h);

      while (particles.length < MAX_PARTICLES) {
        particles.push(createParticle(w, h));
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;
        p.x += p.speedX;
        p.y -= p.speedY;
        p.rotation += p.rotationSpeed;

        const lifeFrac = p.life / p.maxLife;
        if (lifeFrac < 0.25) {
          p.opacity = Math.min(0.75, p.opacity + p.opacityDelta);
        } else if (lifeFrac > 0.75) {
          p.opacity = Math.max(0, p.opacity - p.opacityDelta * 0.8);
        }

        if (p.life > p.maxLife || p.y < -20 || p.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.opacity;
        ctx.strokeStyle = `${p.color}${p.opacity})`;
        ctx.fillStyle = `${p.color}${p.opacity})`;

        if (p.type === "orb") {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
          grad.addColorStop(0, `${p.color}${p.opacity})`);
          grad.addColorStop(0.5, `${p.color}${p.opacity * 0.5})`);
          grad.addColorStop(1, `${p.color}0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${p.opacity * 0.9})`;
          ctx.fill();
        } else if (p.type === "star") {
          ctx.lineWidth = Math.max(0.5, p.size * 0.25);
          drawStar(ctx, p.x, p.y, p.size, p.rotation);
        } else {
          drawCross(ctx, p.x, p.y, p.size, p.rotation);
        }

        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
      }, 100);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
}
