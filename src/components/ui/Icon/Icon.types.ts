import type { LucideIcon } from "lucide-react";
import type { HTMLAttributes } from "react";

export interface IconProps
  extends HTMLAttributes<HTMLSpanElement> {
  icon: LucideIcon;

  size?: number;

  strokeWidth?: number;
}