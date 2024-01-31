import heroIvan from "@/public/HeroIvan.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Image className="brightness-125" src={heroIvan} alt={"heroIvan"}/>
      </div>
    </div>
  );
}
