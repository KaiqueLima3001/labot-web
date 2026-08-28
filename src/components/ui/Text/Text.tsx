import "./Text.css";

import { cn } from "@/utils/cn";

import {
  textAlign,
  textSizes,
  textVariants,
} from "./Text.styles";

import type { TextProps } from "./Text.types";

export function Text({
  children,
  as = "p",
  size = "base",
  variant = "secondary",
  align = "left",
  className,
  ...props
}: TextProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "text",
        textSizes[size],
        textVariants[variant],
        textAlign[align],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}