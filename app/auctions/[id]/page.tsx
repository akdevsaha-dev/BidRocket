"use client";
import { AuthedNav } from "@/components/authedNav";
import { useState } from "react";

const tabs = ["Details", "Description", "Bid Histor"];
export default function DetailedAuction() {
  const {loading, auction}
  const [activeTab, setActiveTab] = useState("Details");
  return (
    <div className="h-screen w-full flex">
      <AuthedNav />
      <div className="w-full h-screen flex text-white">
        <div className="bg-black w-[65%]">
          <div className="pt-7">First edition the great gatsby</div>
          <div className="bg-green-300 h-96 mt-15 mx-10 justify-center"></div>
          <div className="h-12 w-[450px] bg-neutral-700 ml-10 mt-7 rounded-lg"></div>
        </div>
        <div className=" w-[35%]">
          <div className="h-96 mx-10 mt-28 bg-neutral-900 border border-neutral-800 rounded-md px-6 py-6">
            <div>Current Bid</div>
            <div>$$$ AMOUNT</div>
            <div>6 bids placed</div>
            <div className="text-red-800">auction ended</div>
            <div className="mt-4 w-full h-[1px] bg-gradient-to-r from-transparent-0 via-cyan-400 to-transparent"></div>
            <div>Your Bid (USD)</div>
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
}
