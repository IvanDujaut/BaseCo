import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "@/shared/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  animationSpeed?: "fast" | "normal" | "slow" | "delayed";
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  animationSpeed = "normal",
  className,
  ...props
}: RippleProps) {
  // Mapeo de velocidades a clases CSS
  const animationClass = {
    fast: "animate-ripple-fast",
    normal: "animate-ripple",
    slow: "animate-ripple-slow",
    delayed: "animate-ripple-delayed",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;

        return (
          <div
            key={i}
            className={cn(
              "absolute rounded-full border bg-white/75 shadow-xl",
              animationClass[animationSpeed]
            )}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                borderWidth: "1px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";


