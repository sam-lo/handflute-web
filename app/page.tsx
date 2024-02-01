import heroIvan from "@/public/HeroIvan.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image className="brightness-125" src={heroIvan} alt={"heroIvan"}/>
        <div className="absolute left-8 bottom-8 md:inset-y-8 transition-all duration-1000">
          <div className="backdrop-blur hover:scale-105 transition-all duration-1000 p-4 md:p-8 rounded-2xl">
            <div className="text-4xl font-bold">
              Join our workshop!
            </div>
            <div>
              to start your journey in Handflute
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
