import "./Card.css";

import { cn } from "@/utils/cn";

import type { CardProps } from "./Card.types";

import { cardVariants } from "./Card.styles";

export function Card({
  children,
  variant = "default",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "card",
        cardVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}