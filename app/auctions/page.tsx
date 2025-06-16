"use client";

import { AuthedNav } from "@/components/authedNav";
import { AuctionCard } from "@/components/ui/card-auction";
import { useAuctions } from "../hooks";

export default function page() {
  const { loading, auctions } = useAuctions();

  if (loading) {
    return (
      <div className="text-white flex items-center justify-center">
        {" "}
        LOADINGGGGG....
      </div>
    );
  }
  return (
    <div className="w-full flex">
      <AuthedNav />
      <div className="min-h-screen w-full flex flex-wrap bg-neutral-950 gap-4 px-[40px] py-[20px]">
        {auctions.map((auction) => (
          <AuctionCard
            key={auction.id}
            id={auction.id}
            title={auction.title}
            description={auction.description}
            currentBid={auction.currentBid}
            bidCount={auction._count.bids}
          />
        ))}
      </div>
    </div>
  );
}
