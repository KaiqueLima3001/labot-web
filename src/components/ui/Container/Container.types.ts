import type { ReactNode } from "react";

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}