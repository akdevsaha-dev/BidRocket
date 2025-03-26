import { Comfortaa } from "next/font/google";
import Link from "next/link";

const comforta = Comfortaa({
  weight: "700",
  subsets: ["latin"],
});
export const Navbar = () => {
  return (
    <div className="fixed inset-0 w-full h-20 bg-[black]/20 backdrop-blur-3xl grid grid-cols-12 z-50 text-white">
      <div
        className={`col-span-4 md:col-span-2  ${comforta.className} text-white flex items-center justify-center md:text-3xl font-semibold`}
      >
        <span className="text-blue-600">Bid</span>Rocket
      </div>
      <div className="col-span-8 md:col-span-10 flex justify-end items-center gap-8 pr-12 ">
      <div className="hidden md:flex gap-8">
  {[
    { name: "Home", href: "/" },
    { name: "Auctions", href: "/auctions" },
    { name: "Live bidding", href: "/live-bidding" },
    { name: "How It Works", href: "/how-it-works" },
  ].map(({ name, href }) => (
    <Link key={name} href={href} className="relative group cursor-pointer">
      {name}
      <div className="absolute left-0 w-full h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out bottom-0" />
    </Link>
  ))}
</div>
        <div className="px-10 py-1 shadow-sm shadow-cyan-800 hover:border-b-[1px] border-b-cyan-400 transition duration-300  rounded-full hover:text-neutral-300">
          Join
        </div>
      </div>
    </div>
  );
};
