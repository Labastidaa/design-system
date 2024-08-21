import React, { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";

const button = cva("button", {
  variants: {
    variant: {
      primary: [
        "bg-primary-50 text-neutral-80",
        "hover:text-neutral-100",
        "hover:bg-primary-60",
      ],
      secondary: [
        "bg-secondary-50",
        "text-neutral-80",
        "hover:text-neutral-100",
        "hover:bg-secondary-60",
      ],
      destructive: [
        "text-neutral-80 hover:text-white",
        "bg-red-50",
        "hover:bg-red-60",
      ],
      outline: [
        "bg-transparent",
        "text-neutral-80 hover:text-white",
        "border-2 border-border_color",
      ],
      ghost: ["bg-transparent", "hover:text-white", "text-neutral-80"],
      white: [
        "bg-neutral-92 hover:bg-neutral-100",
        "text-neutral-30 hover:text-black",
      ],
      black: ["bg-neutral-black", "hover:text-white", "text-neutral-80"],
      disabled: ["bg-disabled", "text-disabled-foreground", "cursor-default"],
      icon: ["border-2"],
    },
    size: {
      small: ["text-sm", "h-32"],
      medium: ["text-base", "h-40"],
      large: ["text-base h-48"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    // class-variance-authority
    VariantProps<typeof button> {
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "white"
    | "black"
    | "disabled"
    | "icon";
  size?: "small" | "medium" | "large";
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  const btnClass = classNames(
    button({ variant, size }),
    className,
    "flex w-fit items-center rounded-[8px] px-24 transition-all",
  );

  return (
    <>
      <button className={btnClass} {...props} type="button">
        {children}
      </button>
    </>
  );
};
