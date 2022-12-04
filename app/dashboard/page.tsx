import Link from "next/link";

export default function ClientDashboard() {
  return (
    <div className="relative overflow-hidden mt-24">
      <h1 className="">ClientDashboard</h1>
      <Link href={"/products/funds-provider"}>Funds</Link>
    </div>
  );
}
