"use client";
import { useEffect } from "react";
import { Navbar } from "../components/navbar";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Pointer } from "@/components/magicui/pointer";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import {  FileText, Globe, Lock,  MedalIcon, ShieldCheck, ShieldCheckIcon, Sparkles, Zap } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { data, GridItem } from "@/lib/data";
import { Comfortaa } from "next/font/google";


const comforta = Comfortaa({
  weight: "700",
  subsets: ["latin"],
});

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
    <div className="relative min-h-screen w-full">
      <Spotlight />
      <Navbar />
      <Pointer />
      <ScrollProgress className="top-20" />
      <div className="w-full h-full flex">

        <div className="w-[55%] ">
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
              className="text-2xl px-4 md:text-[3xl] lg:text-5xl font-bold  text-white w-full leading-relaxed lg:leading-snug text-center "
            >
              Premium Auction Marketplace for      {"  "}
              <Highlight className="relative">
                Exclusive Products
              </Highlight>
              <TypingAnimation className="pt-3">BidRocket is the ultimate destination for premium auctions. Secure, transparent, and efficient – the modern way to buy and sell exclusive products.</TypingAnimation>
            </motion.h1>
          </HeroHighlight>
        </div>
        <div className="w-[45%]">
          
        </div>
      </div>
      <motion.div className="h-[60vh] w-full"
        initial={{ opacity: 0 }} // Start with opacity 0
        whileInView={{ opacity: 1 }} // Animate to opacity 1 when in view
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the div is visible, only once
        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
      >
        <div className="flex justify-between h-full w-full px-24 py-10">
          <CardSpotlight className="h-96 w-96  ">
            <div className="text-white flex flex-col">
              <div className="w-14 h-14 bg-cyan-200  rounded-full z-20 flex items-center justify-center">
                <ShieldCheck color="#0B0033" size={40} />
              </div>
              <div className="z-20 text-xl font-bold py-10">Secure Transactions</div>
              <div className="z-20">
                Every bid and transaction is secured with advanced encryption for maximum protection and transparency.
              </div>
            </div>
          </CardSpotlight>
          <CardSpotlight className="h-96 w-96  ">
            <div className="text-white flex flex-col">
              <div className="w-14 h-14 bg-cyan-200  rounded-full z-20 flex items-center justify-center">
                <FileText color="#0B0033" size={40} />
              </div>
              <div className="z-20 text-xl font-bold py-10">Verified Authenticity</div>
              <div className="z-20">
                All items are carefully verified to ensure authenticity and quality before being listed on our platform.
              </div>
            </div>
          </CardSpotlight>
          <CardSpotlight className="h-96 w-96 ">
            <div className="text-white flex flex-col">
              <div className="w-14 h-14 bg-cyan-200  rounded-full z-20 flex items-center justify-center">
                <Zap color="#0B0033" size={40} />
              </div>
              <div className="z-20 text-xl font-bold py-10">Lightening Fast</div>
              <div className="z-20">
                Our optimized platform provides lightning-fast bidding with real-time updates and minimal lag.              </div>
            </div>
          </CardSpotlight>
        </div>
      </motion.div>
      <div className="h-[1px] bg-gradient-to-r from-transparent-0 via-[#09c8ef] to-transparent-0 ">
      </div>
      <div className="w-full">
        <Timeline data={data} />
      </div>
      <div className="h-[1px] mx-5 bg-gradient-to-r from-transparent-0 via-[#09c8ef] to-transparent-0 ">
      </div>
      <div className=" h-72 w-full flex justify-center text-white ">
        <div className="flex h-full w-[89%] flex-col items-center justify-center border-b-[1px] border-b-neutral-900">
        <div className="px-6 py-1 mb-4 animate-pulse bg-neutral-950 text-cyan-300 font-mono text-xs font-extralight rounded-full">PREMIUM BENIFITS</div>
        <div className="text-4xl font-extrabold" >Why Choose <span className={`${comforta.className}`} >BidRocket</span></div>
        <div  className="w-[60%] text-center text-neutral-300 font-thin text-lg ">Experience luxury auctions reimagined with our cutting-edge platform designed for discerning collectors and sellers.</div>
        </div>

      </div>

      <div className="h-[80vh] w-full items-center justify-center flex ">
        <div className="h-screen w-[83%] px-6 border-x-[1px] border-x-neutral-800 items-center justify-center flex">
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<ShieldCheckIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="Guaranteed Authenticity"
              description="Our rigorous authentication process ensures every luxury item is verified genuine before listing."
            />
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<MedalIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="Premium Selection"
              description="Access to exclusive, rare, and limited-edition luxury items you won't find anywhere else."
            />
            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="Transparent Bidding"
              description="Our advanced bidding system ensures fairness with real-time updates and comprehensive history."
            />
            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Globe className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="Global Reach"
              description="Connect with high-end sellers and collectors from around the world in our exclusive marketplace."
            />
            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
              title="Secure Escrow Service"
              description="Payments are held in secure escrow until you receive and verify your purchased items."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}







