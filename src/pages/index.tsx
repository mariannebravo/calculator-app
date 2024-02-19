import { League_Spartan } from "next/font/google";

import Homescreen from "@/components/home";

const league_spartan = League_Spartan({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main className={league_spartan.className}>
      <Homescreen />
    </main>
  );
}
