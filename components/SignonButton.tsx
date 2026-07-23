"use client";

import { colorsPresets } from "./LayoutColors";
import Link from "next/link";

export default function SignonButton() {
  return (
    <Link
      href={"/signon"}
      className={`flex items-center justify-center w-2/4 py-4 ${colorsPresets.secundaryBg} rounded-full ${colorsPresets.textLight} font-bold text-2xl hover:scale-90 duration-250`}
    >
      Cadastrar-se
    </Link>
  );
}
