import React from "react";
import { ColorBoxProps } from "@/types";

const ColorBox: React.FC<ColorBoxProps> = ({ title, hex, text }) => {
  // const bgClass = hexToTailwindClass({ color: hex });

  return (
    <div className="h-fit w-full min-w-[100px] pt-8 text-center">
      <div
        className={`flex h-[60px] w-full flex-col items-center justify-center rounded-[8px] py-4`}
        style={{
          backgroundColor: hex,
        }}
      >
        {/* Why className m-0! doesn't work and applying via style it works to remove margin?  */}
        <p style={{ color: text, margin: 0 }} className="text-sm font-semibold">
          {title}
        </p>
        <p style={{ color: text, margin: 0 }} className="text-sm font-normal">
          {hex}
        </p>
      </div>
    </div>
  );
};

export default ColorBox;
