import { DollarSign, Gavel } from "lucide-react";
import Link from "next/link";

interface allAuctionsProps {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  bidCount: number;
}
export const AuctionCard = ({
  id,
  title,
  description,
  currentBid,
  bidCount,
}: allAuctionsProps) => {
  return (
    <Link href={`/auctions/${id}`} className=" items-center text-black">
      <div className="h-96 w-72 bg-gray-300 rounded-md flex flex-col p-4 gap-2 shadow-md shadow-gray-600">
        <div className="h-40 w-full bg-gray-400 rounded-sm" />
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-gray-700">{description}</div>
        <div className="w-full flex justify-between pt-4">
          <div className="flex gap-2">
            <Gavel />
            <div className="font-semibold">{bidCount}</div>
          </div>
          <div className="flex">
            <DollarSign color="red" />
            <div className="font-bold">{currentBid}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
