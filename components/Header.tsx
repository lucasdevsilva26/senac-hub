"use client";

import { colorsPresets } from "./LayoutColors";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className={`flex items-center w-full px-10 h-26 ${colorsPresets.bg1} border-b-4 ${colorsPresets.mainBorder}`}
    >
      <div className="flex h-8/10 aspect-7/2 relative">
        <Image src={"/senacLogo.png"} alt="aa" fill></Image>
      </div>
    </header>
  );
}
