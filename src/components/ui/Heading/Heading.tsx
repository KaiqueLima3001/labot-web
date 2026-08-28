import "./Heading.css";

import { cn } from "@/utils/cn";

import type { HeadingProps } from "./Heading.types";

import {
  headingAlign,
  headingSizes,
} from "./Heading.styles";

export function Heading({
  children,
  as = "h2",
  size = "3xl",
  align = "left",
  className,
  ...props
}: HeadingProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        "heading",
        headingSizes[size],
        headingAlign[align],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}