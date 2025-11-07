import { useEffect, useRef, memo } from "react";
import { ANIMATION_CONFIG } from "../../lib/constants";

export const AnimatedLines = memo(function AnimatedLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size with device pixel ratio support
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);

    // Configuration for many small tech lines
    const lines = [
      { y: 0.15, segments: 8, offset: 0 },
      { y: 0.18, segments: 5, offset: 100 },
      { y: 0.21, segments: 7, offset: 220 },
      { y: 0.24, segments: 9, offset: 40 },
      { y: 0.27, segments: 6, offset: 180 },
      { y: 0.3, segments: 8, offset: 120 },
      { y: 0.33, segments: 7, offset: 200 },
      { y: 0.36, segments: 5, offset: 90 },
      { y: 0.39, segments: 9, offset: 160 },
      { y: 0.42, segments: 6, offset: 50 },
      { y: 0.45, segments: 8, offset: 140 },
      { y: 0.48, segments: 7, offset: 70 },
      { y: 0.51, segments: 5, offset: 190 },
      { y: 0.54, segments: 9, offset: 30 },
      { y: 0.57, segments: 6, offset: 110 },
      { y: 0.6, segments: 8, offset: 150 },
      { y: 0.63, segments: 7, offset: 80 },
      { y: 0.66, segments: 5, offset: 210 },
      { y: 0.69, segments: 9, offset: 130 },
      { y: 0.72, segments: 6, offset: 60 },
    ];

    // Draw a single tech line with moving glow
    const drawTechLine = (
      yPosition: number,
      segments: number,
      maxWidth: number,
      convergeTo?: number
    ) => {
      // Guard against invalid values
      if (!canvas.width || !canvas.height || maxWidth <= 0 || segments <= 0)
        return;

      const y = canvas.height * yPosition;
      const segmentWidth = maxWidth / segments;

      // If convergeTo is provided, angle the line toward center
      const centerX = convergeTo ?? maxWidth / 2;

      for (let i = 0; i < segments; i += 2) {
        const x1 = i * segmentWidth;
        const x2 = (i + 1) * segmentWidth;

        if (x2 > maxWidth) break;

        // Calculate y-offset for convergence effect
        let y1 = y;
        let y2 = y;

        if (convergeTo !== undefined) {
          const distFromCenter = Math.abs(x1 + segmentWidth / 2 - centerX);
          const convergeFactor = distFromCenter / (maxWidth / 2);
          const yOffset = convergeFactor * 20; // Subtle convergence

          // Ensure values are finite
          if (isFinite(yOffset)) {
            y1 = y + yOffset;
            y2 = y + yOffset;
          }
        }

        // Guard against non-finite values
        if (!isFinite(x1) || !isFinite(x2) || !isFinite(y1) || !isFinite(y2))
          continue;

        // Base line (extremely subtle)
        ctx.save();
        ctx.strokeStyle = "rgba(26, 157, 143, 0.05)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
      }
    };

    // Draw the glow effect on segments
    const drawGlowEffect = (
      yPosition: number,
      segments: number,
      maxWidth: number,
      glowPosition: number
    ) => {
      const y = canvas.height * yPosition;
      const segmentWidth = maxWidth / segments;

      for (let i = 0; i < segments; i += 2) {
        const x1 = i * segmentWidth;
        const x2 = (i + 1) * segmentWidth;

        if (x2 > maxWidth) break;

        const distanceToGlow = Math.abs(glowPosition - (x1 + x2) / 2);

        if (
          distanceToGlow < 80 &&
          isFinite(glowPosition) &&
          isFinite(distanceToGlow)
        ) {
          const glowIntensity = 1 - distanceToGlow / 80;

          // Subtle glow layers
          for (let j = 0; j < 2; j++) {
            const blurSize = 8 + j * 6;
            const opacity = (glowIntensity * 0.25) / (j + 1);

            ctx.save();
            ctx.shadowBlur = blurSize;
            ctx.shadowColor = `rgba(26, 157, 143, ${opacity})`;
            ctx.strokeStyle = `rgba(26, 157, 143, ${opacity})`;
            ctx.lineWidth = 0.8 - j * 0.2;
            ctx.beginPath();

            // Draw glow segment
            const glowStart = Math.max(x1, glowPosition - 30);
            const glowEnd = Math.min(x2, glowPosition + 30);

            if (
              glowStart < glowEnd &&
              isFinite(glowStart) &&
              isFinite(glowEnd)
            ) {
              ctx.moveTo(glowStart, y);
              ctx.lineTo(glowEnd, y);
              ctx.stroke();
            }
            ctx.restore();
          }

          // Draw center point
          if (isFinite(glowPosition) && isFinite(y)) {
            ctx.save();
            const gradient = ctx.createRadialGradient(
              glowPosition,
              y,
              0,
              glowPosition,
              y,
              15
            );
            gradient.addColorStop(
              0,
              `rgba(255, 255, 255, ${glowIntensity * 0.3})`
            );
            gradient.addColorStop(
              0.4,
              `rgba(26, 157, 143, ${glowIntensity * 0.2})`
            );
            gradient.addColorStop(1, "rgba(26, 157, 143, 0)");

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(glowPosition, y, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      }
    };

    // Animation loop
    let time = 0;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Limit to ~30fps
      if (deltaTime < 33 && deltaTime > 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += ANIMATION_CONFIG.lines.speed;

      const maxWidth = canvas.width * 0.7;

      if (maxWidth > 0) {
        lines.forEach((line) => {
          // Draw base line
          drawTechLine(line.y, line.segments, maxWidth, canvas.width / 2);

          // Calculate glow position
          const glowPosition =
            ((time * 100 + line.offset) % (maxWidth * 2)) - maxWidth / 2;

          // Draw glow effect
          if (isFinite(glowPosition)) {
            drawGlowEffect(line.y, line.segments, maxWidth, glowPosition);
          }
        });
      }

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
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
});
