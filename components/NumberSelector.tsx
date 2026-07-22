"use client";

import React, { Dispatch, SetStateAction, useState } from "react";

type props = {
  numberSelected: number;
  setNumberSelected: Dispatch<React.SetStateAction<number>>;
};

export default function NumberSelector({
  numberSelected,
  setNumberSelected,
}: props) {
  const amount = 6;

  const [page, setPage] = useState(0);

  const numbersarra = Array.from({ length: amount }, (_, i) => ({ id: i + 1 }));

  return (
    <div className="flex gap-4 h-10 border-b-2 pb-1 border-orange-400">
      <button
        className=" aspect-square px-3 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white text-xl font-bold cursor-pointer duration-250"
        onClick={() => {
          const newPage = Math.max(page - 1, 0);
          setPage(newPage);
          setNumberSelected(0 + newPage * 3);
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
                ? "bg-orange-400 text-white"
                : "text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer")
            }
            onClick={() => setNumberSelected(num.id - 1)}
          >
            {num.id}
          </button>
        );
      })}

      <button
        className="aspect-square px-3 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white text-xl font-bold cursor-pointer duration-250"
        onClick={() => {
          const newPage = Math.min(Math.round(amount / 3) - 1, page + 1);
          setPage(newPage);
          setNumberSelected(0 + newPage * 3);
        }}
      >
        Próxima
      </button>
    </div>
  );
}
