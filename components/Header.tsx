"use client";

import Link from "next/link";
import { colorsPresets } from "./LayoutColors";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className={`flex items-center w-full px-10 h-26 ${colorsPresets.bg1} border-b-4 ${colorsPresets.mainBorder}`}
    >
      <Link href={"/"} className="flex h-8/10 aspect-7/2 relative">
        <Image src={"/senacLogo.png"} alt="aa" fill></Image>
      </Link>

      <section className="flex flex-col gap-1 w-28 h-90/100 p-1 aspect-14/10 bg-yellow-400 text-black">
        <div className="flex h-max p-1 font-bold bg-white text-xs leading-none">
          <span>Melhores Empresas Para Trabalhar&trade;</span>
        </div>

        <div className="flex items-baseline-last justify-between pr-2">
          <div className="flex w-13 p-1 bg-red-500 text-white leading-none text-[.58rem]">
            <span>Great Place To Work.</span>
          </div>

          <span className="w-10 leading-none text-[.5rem] text-white text-right font-bold">
            BRASIL. 2026
          </span>
        </div>
      </section>

      <section></section>
    </header>
  );
}
