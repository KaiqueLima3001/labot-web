import type { HTMLAttributes, ReactNode } from "react";

export type TextElement =
  | "p"
  | "span"
  | "small"
  | "label";

export type TextSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl";

export type TextVariant =
  | "primary"
  | "secondary"
  | "muted"
  | "inverse";

export type TextAlign =
  | "left"
  | "center"
  | "right";

export interface TextProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  as?: TextElement;

  size?: TextSize;

  variant?: TextVariant;

  align?: TextAlign;
}