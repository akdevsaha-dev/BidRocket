import {
  Gavel,
  Heart,
  LayoutDashboard,
  LogOut,
  Plus,
  User,
} from "lucide-react";
import { Comfortaa } from "next/font/google";
import Link from "next/link";

const comforta = Comfortaa({
  weight: "700",
  subsets: ["latin"],
});
export const AuthedNav = () => {
  const NavItems = [
    {
      logo: <LayoutDashboard size={23} />,
      name: "Dashboard",
      href: "/dashboard",
    },
    { logo: <Gavel size={23} />, name: "Auctions", href: "/auctions" },
    {
      logo: <Plus size={23} />,
      name: "Create Auction",
      href: "/create",
    },
    { logo: <Heart size={23} />, name: "Watchlist", href: "/watchlist" },
    { logo: <User size={23} />, name: "Profile", href: "/profile" },
  ];
  return (
    <div className=" hidden md:w-72 bg-[white]/1 border-r-[1px] border-r-neutral-900 min-h-screen md:grid grid-rows-10 text-white">
      <div
        className={`row-span-1  ${comforta.className}  flex md:text-3xl font-semibold pt-6 pl-6`}
      >
        <span className="text-blue-600">Bid</span>Rocket
      </div>
      <div className="row-span-8 flex flex-col pt-6">
        <div className="space-y-4 ">
          {NavItems.map(({ logo, name, href }) => (
            <Link
              key={name}
              href={href}
              className="flex ml-4 rounded-md w-64 font-semibold items-center pl-6 h-14 hover:bg-[white]/10 gap-x-3"
            >
              {logo}
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="row-span-1 flex items-center pl-6 gap-4 hover:cursor-pointer">
        <LogOut size={23} />
        Logout
      </div>
    </div>
  );
};
