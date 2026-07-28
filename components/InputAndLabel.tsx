"use client";

import { useState } from "react";
import { colorsPresets } from "./LayoutColors";
import ViewToggleButton from "./ViewToggleButton";

type props = {
  LabelName: string;
  InputType: string;
  InputPlaceholder: string;
  ToggleView: boolean;
};

export default function InputAndLabel({
  LabelName,
  InputType,
  InputPlaceholder,
  ToggleView,
}: props) {
  const [visibility, setVisibility] = useState(ToggleView ? false : true);

  return (
    <div>
      <label
        htmlFor=""
        className={`font-bold text-3xl ${colorsPresets.textGray}`}
      >
        {LabelName}
      </label>

      <div
        className={`flex items-center px-4 w-full h-15 bg-neutral-300 rounded-full border-b-3 text-2xl ${colorsPresets.secundaryBorder}`}
      >
        <input
          type={visibility ? InputType : "password"}
          placeholder={InputPlaceholder}
          className="outline-none"
        />

        {ToggleView ? (
          <ViewToggleButton
            visibility={visibility}
            setVisibility={setVisibility}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
