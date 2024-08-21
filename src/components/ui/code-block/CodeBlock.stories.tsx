import type { Meta, StoryObj } from "@storybook/react";
import CodeBlock from "./CodeBlock";

const meta = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: `
    // Insert code sample
    import React from 'react'

    const function: React.FC<functionProps> = 
    () => (console.log("Ni hao"));

    const [state, setState] = useState(value)
    `,
  },
};
