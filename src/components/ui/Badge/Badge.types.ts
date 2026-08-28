import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "outline";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?: BadgeVariant;
}