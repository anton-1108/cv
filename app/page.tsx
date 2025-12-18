import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="lg:ml-80">
        <Hero />
        <About />
      </main>
    </div>
  );
}
