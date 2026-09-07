import type { HTMLAttributes, ReactNode } from "react";

export interface SectionHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: ReactNode;

  title: ReactNode;

  description?: ReactNode;

  align?: "left" | "center";
}