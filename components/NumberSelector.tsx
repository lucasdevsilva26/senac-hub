"use client";

import { colorsPresets } from "./LayoutColors";
import React, { Dispatch, useState } from "react";

type props = {
  numberSelected: number;
  setNumberSelected: Dispatch<React.SetStateAction<number>>;
};

export default function NumberSelector({
  numberSelected,
  setNumberSelected,
}: props) {
  const amount = 7;

  const [page, setPage] = useState(0);

  const numbersarra = Array.from({ length: amount }, (_, i) => ({ id: i + 1 }));

  return (
    <div
      className={`flex gap-4 h-10 border-b-2 pb-1 ${colorsPresets.mainBorder}`}
    >
      <button
        className={
          `aspect-square px-3 rounded-full ${colorsPresets.secundaryText} text-xl font-bold duration-250 ` +
          (page - 1 >= 0
            ? `hover:${colorsPresets.secundaryBg} hover:${colorsPresets.textLight} cursor-pointer`
            : "cursor-not-allowed")
        }
        onClick={() => {
          if (page - 1 >= 0) {
            const newPage = Math.max(page - 1, 0);

            setPage(newPage);
            setNumberSelected(0 + newPage * 3);
          }
        }}
      >
        Anterior
      </button>

      {numbersarra.slice(0 + page * 3, 3 + page * 3).map((num) => {
        return (
          <button
            key={num.id}
            className={
              "aspect-square rounded-full text-xl font-bold duration-250 " +
              (num.id - 1 === numberSelected
                ? `${colorsPresets.mainBg} ${colorsPresets.textLight}`
                : `hover:${colorsPresets.secundaryBg} hover:${colorsPresets.textLight} ${colorsPresets.secundaryText} cursor-pointer`)
            }
            onClick={() => setNumberSelected(num.id - 1)}
          >
            {num.id}
          </button>
        );
      })}

      <button
        className={
          `aspect-square px-3 rounded-full ${colorsPresets.secundaryText} text-xl font-bold duration-250 ` +
          (page + 1 < amount / 3
            ? `hover:${colorsPresets.secundaryBg} hover:${colorsPresets.textLight} cursor-pointer`
            : "cursor-not-allowed")
        }
        onClick={() => {
          if (page + 1 < amount / 3) {
            const newPage = Math.min(Math.round(amount / 3), page + 1);

            setPage(newPage);
            setNumberSelected(0 + newPage * 3);
          }
        }}
      >
        Próxima
      </button>
    </div>
  );
}
