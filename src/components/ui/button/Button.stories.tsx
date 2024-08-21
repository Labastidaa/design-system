import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { HeartIcon } from "@radix-ui/react-icons";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "primary",
    size: "medium",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
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

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "disabled",
  },
};

export const Icon: Story = {
  args: {
    children: <HeartIcon />,
    variant: "icon",
  },
};
