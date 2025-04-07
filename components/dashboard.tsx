import { Clock4, DollarSign, Gavel, Trophy } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="w-full min-h-screen text-white flex flex-col">
      <div className="h-32 w-full flex flex-col justify-center pl-10 space-x-4">
        <div className="font-mono font-bold text-3xl ">Dashboard</div>
        <div className="text-md font-normal text-neutral-400">
          Welcome back to your auction dashboard
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-8">
        <div className="px-6 py-4  border-[1px] border-neutral-700 bg-neutral-900 rounded-lg ">
          <div>total bids placed</div>
          <div className="font-mono font-bold text-2xl pt-3 flex justify-between">
            <div>24</div>
            <Gavel size={20} color="#8a8d91" />
          </div>
        </div>
        <div className=" px-6 py-4 border-[1px] border-neutral-700 bg-neutral-900 rounded-lg ">
          <div>Auctions won</div>
          <div className="font-mono font-bold text-2xl pt-3 flex justify-between">
            <div>7</div>
            <Trophy size={18} color="#f29624" />
          </div>
        </div>
        <div className=" px-6 py-4  border-[1px] border-neutral-700 bg-neutral-900 rounded-lg">
          <div>Active Bids</div>
          <div className="font-mono font-bold text-2xl pt-3 flex justify-between">
            <div>12</div>
            <Clock4 size={18} color="#8a8d91" />
          </div>
        </div>
        <div className=" px-6 py-4  border-[1px] border-neutral-700 bg-neutral-900 rounded-lg">
          <div>Total spent</div>
          <div className="font-mono font-bold text-2xl pt-3 flex items-center justify-between">
            <div>$145.64</div>
            <DollarSign size={18} color="#38d415" />
          </div>
        </div>
      </div>
      <div className="h-[500px] bg-neutral-900 mx-8 my-10 flex flex-col rounded-md pl-10 py-5">
        <div className=" text-2xl font-semibold">Bidding Activity</div>
        <div className="pt-3 text-neutral-400">
          Your bidding trends over the last 30 days
        </div>
      </div>
    </div>
  );
};
