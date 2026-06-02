"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function TextHoverEffect({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      setMaskPosition({
        cx: `${((cursor.x - svgRect.left) / svgRect.width) * 100}%`,
        cy: `${((cursor.y - svgRect.top) / svgRect.height) * 100}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("cursor-pointer select-none uppercase", className)}
    >
      <defs>
        <linearGradient id="lavTextGradient" gradientUnits="userSpaceOnUse">
          {hovered && (
            <>
              <stop offset="0%"   stopColor="#38bdf8" />
              <stop offset="33%"  stopColor="#a78bfa" />
              <stop offset="66%"  stopColor="#0891b2" />
              <stop offset="100%" stopColor="#38bdf8" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="lavRevealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%"   stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="lavTextMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#lavRevealMask)" />
        </mask>
      </defs>

      {/* Outline ghost — shows on hover */}
      <text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        style={{ stroke: "rgba(255,255,255,0.08)", opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}
      >
        {text}
      </text>

      {/* Animated draw-in stroke */}
      <motion.text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        style={{ stroke: "rgba(8,145,178,0.55)" }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Hover gradient reveal */}
      <text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#lavTextGradient)"
        strokeWidth="0.3"
        mask="url(#lavTextMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
}
