import type { HTMLAttributes } from "react";

export interface LogoProps
  extends HTMLAttributes<HTMLDivElement> {
  showText?: boolean;

  size?: number;
}