import {
  CalendarDays,
  DollarSign,
  Gavel,
  Percent,
  Settings,
  Trophy,
} from "lucide-react";

export default function page() {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="h-64 w-[70%] border-[1px] mt-8 text-white border-neutral-800 flex rounded-md justify-center">
        <div className="w-[95%] flex flex-col ">
          <div className=" w-full h-[56%] flex justify-between border-b-[1px] border-b-neutral-800">
            <div className="flex">
              <div className="w-full items-center h-full flex pl-8">
                <div className=" w-28 h-28 bg-neutral-500 rounded-full"></div>
              </div>
              <div className="pl-10 pt-8">
                <div className="font-semibold text-2xl">Akdev Saha</div>
                <div className="font-light text-neutral-200">
                  akdevsaha2003@gmail.com
                </div>
                <div className="flex font-extralight gap-1 text-sm text-neutral-200">
                  <CalendarDays strokeWidth={1} size={20} />
                  Member since March 25
                </div>
              </div>
            </div>
            <div className=" text-black flex items-center ">
              <div className="bg-white px-3 py-2 rounded-md flex items-center font-semibold gap-2 hover:scale-105">
                <Settings size={20} />
                Edit Profile
              </div>
            </div>
          </div>
          <div className="w-full h-[44%] flex justify-between items-center px-20 ">
            <div className="h-20 ">
              <div className="flex gap-1 pb-4">
                <Gavel />
                127
              </div>
              <div>Total Bids</div>
            </div>
            <div className="h-20">
              <div className="flex gap-1 pb-4">
                <Trophy />
                23
              </div>
              <div>Won Auctions</div>
            </div>
            <div className="h-20">
              <div className="flex gap-1 pb-4">
                <Percent />
                23
              </div>
              <div>Success Rate</div>
            </div>
            <div className="h-20">
              <div className="flex gap-1 pb-4">
                <DollarSign />
                3200
              </div>
              <div>Total Spent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
