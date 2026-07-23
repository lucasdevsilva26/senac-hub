"use client";

import { colorsPresets } from "./LayoutColors";

export default function Footer() {
  return (
    <footer
      className={`flex items-center justify-center w-full h-12 ${colorsPresets.bg3} text-xl`}
    >
      <span>Copyright © 2025. Todos os direitos reservados.</span>
    </footer>
  );
}
