import type { HTMLAttributes, ReactNode } from "react";

export interface SectionHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  badge?: ReactNode;

  heading: ReactNode;

  description?: ReactNode;

  centered?: boolean;
}