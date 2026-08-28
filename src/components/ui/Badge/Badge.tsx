import "./Badge.css";

import { cn } from "@/utils/cn";

import { badgeVariants } from "./Badge.styles";

import type { BadgeProps } from "./Badge.types";

export function Badge({
  children,
  variant = "primary",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "badge",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}