"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  return (
    <motion.section
      className={cn(
        "mx-auto w-full relative rounded-2xl overflow-hidden",
        // light styles
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        containerClassName,
      )}
    >
      <div className="relative h-full  sm:mx-0 sm:rounded-2xl overflow-hidden">
        <motion.div className={cn("h-full px-4 py-20 sm:px-10", className)}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};
