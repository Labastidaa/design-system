
import type { Meta, StoryObj } from "@storybook/react";
import ColorSection from "./ColorSection";

const meta = {
  title: "Components/ColorSection",
  component: ColorSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    colors: [
      { "title": "50", "hex": "#E6EFF5", "text": "black" },
      { "title": "100", "hex": "#BCCBE1", "text": "black" },
      { "title": "200", "hex": "#8AB2D2", "text": "black" },
      { "title": "300", "hex": "#548EBE", "text": "black" },
      { "title": "400", "hex": "#3379B1", "text": "white" },
      { "title": "500", "hex": "#00579E", "text": "white" },
      { "title": "600", "hex": "#004F90", "text": "white" },
      { "title": "700", "hex": "#003E70", "text": "white" },
      { "title": "800", "hex": "#003057", "text": "white" },
      { "title": "900", "hex": "#002442", "text": "white" },
      { "title": "950", "hex": "#001323", "text": "white" },
      { "title": "1000", "hex": "#000910", "text": "white" }
    ]
  },
} satisfies Meta<typeof ColorSection>;

export default meta;

export const Default: StoryObj<typeof ColorSection> = {};

