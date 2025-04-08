import { AuthedNav } from "@/components/authedNav";
import { Createauction } from "@/components/Create-auction";

export default function Page() {
  return (
    <div className="w-full flex">
      <AuthedNav />

      <Createauction />
    </div>
  );
}
