import logo from "@/public/Logo_MainTheme_wText.jpg";
import { MagnifyingGlassIcon,  LanguageIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Fragment } from 'react'
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="divide-y divide-orange-200">
        <div className="p-4 bg-orange-50 flex items-center justify-between">
          <Image className="size-16 mx-4 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-500" src={logo}
                 alt={"logo"}/>
          <div className="flex items-center">
            <MagnifyingGlassIcon className="size-6 fill-yellow-700 stroke-yellow-700 mx-4"/>
            <LanguageIcon className="size-6 fill-yellow-700 stroke-yellow-700 mx-4"/>
            <Bars3Icon className="size-6 fill-yellow-700 stroke-yellow-700 mx-4" />
          </div>
        </div>
        <div
          className="py-2 hidden lg:flex text-xl font-bold text-yellow-700 items-center justify-evenly bg-orange-50">
          <div>
            About Us
          </div>
          <div>
            Our Work
          </div>
          <div>
            Resources
          </div>
          <div>
            Get Involved
          </div>
        </div>
      </div>
    </div>
  )
    ;
}
