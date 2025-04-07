import { AuthedNav } from "@/components/authedNav";
import { Dashboard } from "@/components/dashboard";

export default function Page() {
  return (
    <div className="w-full flex">
      <AuthedNav />
      <Dashboard />
    </div>
  );
}
