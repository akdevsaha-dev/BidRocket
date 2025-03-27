"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Navbar } from "../components/navbar";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Pointer } from "@/components/magicui/pointer";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Cover } from "@/components/ui/cover";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import {  FileText, Globe, Lock,  MedalIcon, ShieldCheck, ShieldCheckIcon, Sparkles, Zap } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { data, GridItem } from "@/lib/data";
import { Comfortaa } from "next/font/google";

const World = dynamic(() => import("../components/ui/globe").then((m) => m.World), {
  ssr: false,
});
const comforta = Comfortaa({
  weight: "700",
  subsets: ["latin"],
});
export default function Home() {

  const globeConfig = {
    pointSize: 3,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
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
          <div className="relative w-full top-22 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-2" // Add small bottom margin to control gap
              >
                <h2 className="text-center px-10 pt-5 text-xl md:text-3xl font-bold text-black dark:text-[white]/50">
                  PLACE BID IN AUCTIONS ALL OVER THE <Cover>WORLD</Cover>
                </h2>
              </motion.div>
              <div className="relative w-full h-[500px] md:h-full z-10">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
              <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent dark:to-black to-white z-40" />
            </div>
          </div>
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







