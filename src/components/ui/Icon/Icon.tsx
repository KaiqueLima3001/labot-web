import "./Icon.css";

import { cn } from "@/utils/cn";

import type { IconProps } from "./Icon.types";

export function Icon({
  icon: LucideIcon,
  size = 20,
  strokeWidth = 2,
  className,
  ...props
}: IconProps) {
  return (
    <span
      className={cn("icon", className)}
      {...props}
    >
      <LucideIcon
        size={size}
        strokeWidth={strokeWidth}
      />
    </span>
  );
}