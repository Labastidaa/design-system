
import type { Meta, StoryObj } from "@storybook/react";
import ColorBox from "./ColorBox";

const meta = {
  title: "Components/ColorBox",
  component: ColorBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Colorbox",
    hex: "#00579E",
    text: "white"
  },
} satisfies Meta<typeof ColorBox>;

export default meta;
type Story = StoryObj<typeof ColorBox>;

export const Default: Story = {}


