"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface StickyScrollStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: React.ReactNode;
  duration?: number; // en milisegundos
}

// Hook para detectar mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export const StickyScroll = ({
  content,
  contentClassName,
  defaultDuration = 7500,
}: {
  content: StickyScrollStep[];
  contentClassName?: string;
  defaultDuration?: number;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const steps = content.length;
  const isMobile = useIsMobile();

  // Barra de progreso y cambio de paso
  useEffect(() => {
    setProgress(0); // Reinicia la barra al cambiar de contenido
    if (timerRef.current) clearInterval(timerRef.current);
    const duration = content[activeCard].duration || defaultDuration;
    const interval = 20;
    let elapsed = 0;
    timerRef.current = setInterval(() => {
      elapsed += interval;
      setProgress(Math.min((elapsed / duration) * 100, 100));
      if (elapsed >= duration) {
        clearInterval(timerRef.current!);
        setTimeout(() => {
          setActiveCard((prev) => (prev + 1) % steps);
        }, 100); // Pequeño delay para que la barra llegue visualmente al 100%
      }
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard, steps]);

  // Selección manual de paso
  const handleStepClick = (idx: number) => {
    setActiveCard(idx);
  };

  return (
    <div className="relative flex flex-col lg:flex-row max-w-6xl w-full justify-center items-center space-y-8 lg:space-y-0 lg:space-x-10 overflow-y-auto rounded-md p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Stepper vertical SOLO en desktop */}
      <div className="hidden lg:flex flex-col items-center mb-6 lg:mb-0 mr-0 lg:mr-8 w-full lg:w-auto justify-center">
        {content.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center mb-0 lg:mb-4 mr-4 lg:mr-0 last:mb-0">
            <Button
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all",
                idx === activeCard
                  ? "border-blue-500 bg-blue-100 text-blue-500 dark:bg-transparent"
                  : "border-neutral-300 bg-white dark:bg-transparent text-neutral-400"
              )}
              onClick={() => handleStepClick(idx)}
              aria-label={`Paso ${idx + 1}`}
            >
              {item.icon}
            </Button>
            {/* Barra de progreso vertical */}
            {idx < content.length - 1 && (
              <div className="w-1 h-10 bg-neutral-200 dark:bg-neutral-700 relative overflow-hidden">
                {idx === activeCard && (
                  <motion.div
                    className="absolute left-0 top-0 w-full bg-gradient-to-b border-2 border-blue-500"
                    style={{ height: `${progress}%`, transition: "height 0.2s linear" }}
                    initial={{ height: 0 }}
                    animate={{ height: `${progress}%` }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Contenido de los pasos */}
      <div className="flex flex-col justify-center max-w-xl w-full px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={isMobile ? { x: 300, opacity: 0 } : { opacity: 0, y: 20 }}
            animate={isMobile ? { x: 0, opacity: 1 } : { opacity: 1, y: 0 }}
            exit={isMobile ? { x: -300, opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Barra de progreso horizontal SOLO en mobile, ahora DENTRO del contenido */}
            <div className="flex lg:hidden w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-4 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r border-2 border-blue-500 bg-blue-500"
                style={{ width: `${progress}%`, transition: "width 0.2s linear" }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
              {content[activeCard].title}
            </h2>
            <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-300 mb-4">{content[activeCard].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Imagen asociada con fade o slide */}
      <div
        className={cn(
          "relative w-full h-56 sm:h-72 md:h-80 lg:sticky lg:top-10 lg:h-96 lg:w-[32rem] overflow-hidden rounded-2xl bg-white dark:bg-transparent flex items-center justify-center shadow-xl mt-6 lg:mt-0",
          contentClassName
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={isMobile ? { x: 300, opacity: 0 } : { opacity: 0, y: 20 }}
            animate={isMobile ? { x: 0, opacity: 1 } : { opacity: 1, y: 0 }}
            exit={isMobile ? { x: -300, opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            {content[activeCard].image}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
