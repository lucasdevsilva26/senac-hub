"use client";

import React, { Dispatch } from "react";
import { colorsPresets } from "./LayoutColors";

type props = {
  visibility: boolean;
  setVisibility: Dispatch<React.SetStateAction<boolean>>;
};

export default function ViewToggleButton({ visibility, setVisibility }: props) {
  return (
    <button
      className={`w-full h-full cursor-pointer hover:scale-80 duration-250 ${colorsPresets.mainStroke}`}
      onMouseUp={() => setVisibility(!visibility)}
      type="button"
    >
      {visibility ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="inherit"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M3 3l18 18" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="inherit"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  );
}
