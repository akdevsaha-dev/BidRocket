"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [stars, setStars] = useState<Array<{ top: number; left: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 200 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <>
      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 -z-40 bg-black/40 backdrop-blur-sm" />

      {/* Floating Stars */}
      <div className="absolute inset-0 -z-30">
        {stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-40"
            style={{ top: `${star.top}%`, left: `${star.left}%` }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </>
  );
};
