"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  MotionStyle,
  HTMLMotionProps,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Define props type
interface PointerProps extends Omit<HTMLMotionProps<"div">, "style"> {
  style?: MotionStyle; // or React.CSSProperties if you don't need Motion-specific style props
}

export function Pointer({
  style,
  ...props
}: PointerProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply a spring animation for smooth, wavy feel
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const parentElement = containerRef.current.parentElement;
      if (parentElement) {
        parentElement.style.cursor = "none";

        const handleMouseMove = (e: MouseEvent) => {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsActive(true);
        const handleMouseLeave = () => setIsActive(false);

        parentElement.addEventListener("mousemove", handleMouseMove);
        parentElement.addEventListener("mouseenter", handleMouseEnter);
        parentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          parentElement.style.cursor = "";
          parentElement.removeEventListener("mousemove", handleMouseMove);
          parentElement.removeEventListener("mouseenter", handleMouseEnter);
          parentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [mouseX, mouseY]);

  return (
    <>
      <div ref={containerRef} />
      {isActive && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            top: smoothY,
            left: smoothX,
            ...style,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        >
          {/* White Outlined Circle */}
          <motion.div
            className="absolute w-12 h-12 border-2 border-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
           
          />
        </motion.div>
      )}
    </>
  );
}