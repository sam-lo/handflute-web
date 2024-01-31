import logo from "@/public/Logo_MainTheme_wText.jpg"
import Image from "next/image";
export default function Header() {
  return (
    <div className="p-4 bg-orange-50 flex items-center space-x-8">
      <Image className="size-16 mx-4 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-500" src={logo}
             alt={"logo"}/>
      <div className="text-xl font-bold text-yellow-700">
        About Us
      </div>
      <div className="text-xl font-bold text-yellow-700">
        Our Work
      </div>
      <div className="text-xl font-bold text-yellow-700">
        Resources
      </div>
      <div className="text-xl font-bold text-yellow-700">
        Get Involved
      </div>
    </div>
  );
}
