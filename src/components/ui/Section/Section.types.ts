import type { HTMLAttributes, ReactNode } from "react";

export type SectionVariant =
  | "default"
  | "muted"
  | "gradient"
  | "transparent";

export interface SectionProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: SectionVariant;
}