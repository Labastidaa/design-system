import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default badge",
    variant: "outline",
    size: "small",
  },
};

export const Blue: Story = {
  args: {
    children: "Blue badge",
    variant: "blue",
  },
};

export const BlueGray: Story = {
  args: {
    children: "Secondary",
    variant: "blue_gray",
  },
};

export const Red: Story = {
  args: {
    children: "Red badge",
    variant: "red",
  },
};
export const Green: Story = {
  args: {
    children: "Green badge",
    variant: "green",
  },
};
export const Yellow: Story = {
  args: {
    children: "Yellow badge",
    variant: "yellow",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};
export const White: Story = {
  args: {
    children: "White",
    variant: "white",
  },
};

export const Black: Story = {
  args: {
    children: "Black",
    variant: "black",
  },
};
