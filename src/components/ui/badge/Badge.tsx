import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { ReactNode } from "react";

const badge = cva("badge", {
  variants: {
    variant: {
      blue: [
        "bg-primary-50 text-neutral-80",
        "hover:text-neutral-100",
        "hover:bg-primary-60",
      ],
      blue_gray: [
        "bg-secondary-50",
        "text-neutral-80",
        "hover:text-neutral-100",
        "hover:bg-secondary-60",
      ],
      red: ["text-neutral-80 hover:text-white", "bg-red-50", "hover:bg-red-60"],
      green: [
        "text-neutral-80 hover:text-white",
        "bg-green-50",
        "hover:bg-red-60",
      ],
      yellow: [
        "text-neutral-80 hover:text-white",
        "bg-yellow-50",
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
      black: ["bg-neutral-0", "hover:text-white", "text-neutral-80"],
      disabled: ["bg-disabled", "text-disabled-foreground", "cursor-default"],
      icon: ["border-2"],
    },
    size: {
      small: ["text-sm", "h-24"],
      medium: ["text-base", "h-32"],
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "small",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badge> {
  // class-variance-authority
  variant?:
    | "blue"
    | "blue_gray"
    | "red"
    | "green"
    | "yellow"
    | "outline"
    | "ghost"
    | "white"
    | "black";
  size?: "small" | "medium";
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  const btnClass = classNames(
    badge({ variant, size }),
    className,
    "flex w-fit items-center rounded-lg font-semi px-24 transition-all",
  );

  return (
    <div className={btnClass} {...props}>
      {children}
    </div>
  );
};

export default Badge;
