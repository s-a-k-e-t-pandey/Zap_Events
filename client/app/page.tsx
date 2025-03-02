import { Appbar } from "@/componets/Appbar";
import { Hero } from "@/componets/Hero";
import { HeroVideo } from "@/componets/HeroVideo";
import { Footer } from "@/componets/Footer";


export default function Home() {
  return (
      <main className="">
        <Hero/>
        <div className="pt-4">
          <HeroVideo/>
        </div>
        <Footer></Footer>
      </main>
  );
}

// flex flex-col gap-8 row-start-2 items-center sm:items-start
// grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16