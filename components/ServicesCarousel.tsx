"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "motion/react";

export interface ServiceSlide {
  name: string;
  tag: string;
  description: string;
  items: string[];
  visual: React.ReactNode;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function ServicesCarousel({ slides }: { slides: ServiceSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = useMemo(() => slides.length, [slides]);
  const active = useMemo(() => slides[activeIndex], [activeIndex, slides]);

  useEffect(() => {
    function onResize() {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((p) => (p + 1) % count);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [count]);

  const handlePrev = useCallback(() => {
    setActiveIndex((p) => (p - 1 + count) % count);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [count]);

  useEffect(() => {
    autoplayRef.current = setInterval(() => setActiveIndex((p) => (p + 1) % count), 5000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handlePrev, handleNext]);

  function cardStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const stickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + count) % count === index;
    const isRight = (activeIndex + 1) % count === index;

    if (isActive) return {
      zIndex: 3, opacity: 1, pointerEvents: "auto",
      transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
    if (isLeft) return {
      zIndex: 2, opacity: 1, pointerEvents: "auto",
      transform: `translateX(-${gap}px) translateY(-${stickUp}px) scale(0.85) rotateY(15deg)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
    if (isRight) return {
      zIndex: 2, opacity: 1, pointerEvents: "auto",
      transform: `translateX(${gap}px) translateY(-${stickUp}px) scale(0.85) rotateY(-15deg)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
    return { zIndex: 1, opacity: 0, pointerEvents: "none", transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">

        {/* Visual carousel */}
        <div
          ref={containerRef}
          className="relative h-72 w-full md:h-[22rem]"
          style={{ perspective: "1000px" }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.name}
              className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl"
              style={cardStyle(index)}
            >
              {slide.visual}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <span className="mb-4 inline-block self-start rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                {active.tag}
              </span>
              <h3 className="mb-4 text-2xl font-bold text-white">{active.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/55">
                {active.description.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.18, ease: "easeInOut", delay: 0.02 * i }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </p>
              <ul className="space-y-2">
                {active.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/50">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Servicio anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-accent/40 hover:bg-accent hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Servicio siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-accent/40 hover:bg-accent hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="ml-1 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Ir a servicio ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
