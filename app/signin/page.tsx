"use client";
import { Cover } from "@/components/ui/cover";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import React from "react";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
} from "@tabler/icons-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

const World = dynamic(
    () => import("@/components/ui/globe").then((m) => m.World),
    {
        ssr: false,
    }
);

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

export default function signin() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="h-screen w-full flex ">
            <div className="h-screen w-[45%] border-r-[1px] border-r-neutral-900">
                <div className="relative w-full top-5 bg-white dark:bg-black">
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
            <div className="w-[55%] h-screen">
                <div className="shadow-input h-[80vh] mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
                    <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                        Welcome to Aceternity
                    </h2>
                    <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                        Login to aceternity if you can because we don&apos;t have a login
                        flow yet
                    </p>

                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                            <LabelInputContainer>
                                <Label htmlFor="firstname" className="text-white">
                                    First name
                                </Label>
                                <Input id="firstname" placeholder="Tyler" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Durden" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                placeholder="projectmayhem@fc.com"
                                type="email"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="••••••••" type="password" />
                        </LabelInputContainer>
                        <button
                            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                        >
                            Sign up &rarr;
                            <BottomGradient />
                        </button>
                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
                        <div className="flex flex-col space-y-4">
                            <button
                                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                                type="submit"
                            >
                                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                    GitHub
                                </span>
                                <BottomGradient />
                            </button>
                            <button
                                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                                type="submit"
                            >
                                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                    Google
                                </span>
                                <BottomGradient />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
