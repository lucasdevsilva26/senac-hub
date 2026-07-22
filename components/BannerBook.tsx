"use client";

import Image from "next/image";
import NumberSelector from "./NumberSelector";
import { useState } from "react";

export default function BannerBook() {
  const [numberSelected, setNumberSelected] = useState(0);

  return (
    <div className="flex flex-col items-center jus">
      <div className="flex flex-col items-center justify-center w-180 aspect-10/7 bg-neutral-200 rounded-4xl">
        <div className="w-97/100 h-97/100 rounded-4xl overflow-hidden relative">
          <Image src={`/senacBanner${numberSelected}.jpg`} alt="" fill></Image>
        </div>
      </div>

      <NumberSelector
        numberSelected={numberSelected}
        setNumberSelected={setNumberSelected}
      />
    </div>
  );
}
