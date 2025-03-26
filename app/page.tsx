"use client";

import { useEffect } from "react";
import { Navbar } from "../components/navbar";
import { motion } from 'motion/react';
import Lenis from "@studio-freight/lenis";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Pointer } from "@/components/magicui/pointer";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypingAnimation } from "@/components/magicui/typing-animation";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.3,
      easing: (t) => t,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative h-[500px] ">
      <Spotlight/>
      <Navbar />
      <ScrollProgress className="top-20" />
      <div className="w-full absolute top-20 ">
      <Pointer/>
      <HeroHighlight>
        
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Premium Auction Marketplace for {""}
        <Highlight  className="relative">
        Exclusive Products
        </Highlight>
        <TypingAnimation className="pt-3">AuctionEdge is the ultimate destination for premium auctions. Secure, transparent, and efficient – the modern way to buy and sell exclusive products.</TypingAnimation>;
      </motion.h1>
    </HeroHighlight>
      </div>
      <div className="h-[500%] w-full">
        hi 
      </div>
      
    </div>
  );
}
