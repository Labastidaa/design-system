import React from "react";
import ColorBox from "./ColorBox";
import { ColorSectionProps } from "@/types";

const ColorSection: React.FC<ColorSectionProps> = ({ colors }) => {
  return (
    <div className="flex h-fit w-full flex-col">
      {colors.map((color) => (
        <ColorBox
          key={color.title}
          title={color.title}
          hex={color.hex}
          text={color.text}
        />
      ))}
    </div>
  );
};

export default ColorSection;
