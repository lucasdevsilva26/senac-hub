"use client";

import { colorsPresets } from "./LayoutColors";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link
      href={"login"}
      className={`flex items-center justify-center w-2/4 py-4 ${colorsPresets.mainBg} rounded-full ${colorsPresets.textLight} font-bold text-2xl hover:scale-90 duration-250`}
    >
      Entrar
    </Link>
  );
}
