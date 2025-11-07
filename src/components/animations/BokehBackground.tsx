import { useEffect, useRef, memo } from "react";
import { ANIMATION_CONFIG } from "../../lib/constants";

interface BokehDot {
  x: number;
  y: number;
  size: number;
  opacity: number;
  flickerSpeed: number;
  flickerOffset: number;
  moveSpeed: number;
  angle: number;
  depth: number;
  blur: number;
  color: "green" | "gray" | "blue";
}

export const BokehBackground = memo(function BokehBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const dotsRef = useRef<BokehDot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size with device pixel ratio support
    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any previous scaling
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);

    // Create floating particles only once
    if (dotsRef.current.length === 0) {
      const dots: BokehDot[] = [];

      // Small particles
      for (let i = 0; i < ANIMATION_CONFIG.bokeh.smallDots; i++) {
        const depth = Math.random();
        const baseSize = Math.random() * 2 + 1.5;
        const size = baseSize * (0.7 + depth * 0.3);
        const rand = Math.random();
        let color: "green" | "gray" | "blue" = "gray";
        if (rand > 0.85) color = "green";
        else if (rand > 0.75) color = "blue";

        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          opacity: 0.08 + Math.random() * 0.06,
          flickerSpeed: Math.random() * 0.005 + 0.003,
          flickerOffset: Math.random() * Math.PI * 2,
          moveSpeed: Math.random() * 0.2 + 0.1,
          angle: Math.random() * Math.PI * 2,
          depth,
          blur: 0,
          color,
        });
      }

      // Larger green particles
      for (let i = 0; i < ANIMATION_CONFIG.bokeh.largeDots; i++) {
        const depth = Math.random() * 0.5 + 0.5;
        const baseSize = Math.random() * 4 + 5;

        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: baseSize,
          opacity: 0.12 + Math.random() * 0.08,
          flickerSpeed: Math.random() * 0.005 + 0.002,
          flickerOffset: Math.random() * Math.PI * 2,
          moveSpeed: Math.random() * 0.16 + 0.08,
          angle: Math.random() * Math.PI * 2,
          depth,
          blur: 0,
          color: "green",
        });
      }

      // Blue particles
      for (let i = 0; i < ANIMATION_CONFIG.bokeh.blueDots; i++) {
        const depth = Math.random() * 0.5 + 0.5;
        const baseSize = Math.random() * 4 + 5;

        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: baseSize,
          opacity: 0.12 + Math.random() * 0.08,
          flickerSpeed: Math.random() * 0.005 + 0.002,
          flickerOffset: Math.random() * Math.PI * 2,
          moveSpeed: Math.random() * 1 + 0.36,
          angle: Math.random() * Math.PI * 2,
          depth,
          blur: 0,
          color: "blue",
        });
      }

      // Sort by depth for proper layering
      dots.sort((a, b) => a.depth - b.depth);
      dotsRef.current = dots;
    }

    // Animation loop
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      dotsRef.current.forEach((dot) => {
        // Subtle flicker
        const flicker =
          Math.sin(time * dot.flickerSpeed * 100 + dot.flickerOffset) * 0.1 +
          0.9;

        // Move particles
        dot.x += Math.cos(dot.angle) * dot.moveSpeed;
        dot.y += Math.sin(dot.angle) * dot.moveSpeed;

        // Wrap around edges smoothly
        if (dot.x < -dot.size) dot.x = canvas.width + dot.size;
        if (dot.x > canvas.width + dot.size) dot.x = -dot.size;
        if (dot.y < -dot.size) dot.y = canvas.height + dot.size;
        if (dot.y > canvas.height + dot.size) dot.y = -dot.size;

        // Slight direction changes
        dot.angle += (Math.random() - 0.5) * 0.008;

        // Draw particles
        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.size * 2
        );

        const finalOpacity = dot.opacity * flicker;

        if (dot.color === "green") {
          gradient.addColorStop(0, `rgba(26, 157, 143, ${finalOpacity})`);
          gradient.addColorStop(
            0.5,
            `rgba(26, 157, 143, ${finalOpacity * 0.5})`
          );
          gradient.addColorStop(1, "rgba(26, 157, 143, 0)");
        } else if (dot.color === "blue") {
          gradient.addColorStop(0, `rgba(30, 58, 95, ${finalOpacity})`);
          gradient.addColorStop(0.5, `rgba(30, 58, 95, ${finalOpacity * 0.5})`);
          gradient.addColorStop(1, "rgba(30, 58, 95, 0)");
        } else {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${finalOpacity})`);
          gradient.addColorStop(
            0.5,
            `rgba(255, 255, 255, ${finalOpacity * 0.5})`
          );
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 1, mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
});
