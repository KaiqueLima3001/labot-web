import type { HTMLAttributes, ReactNode } from "react";

export type HeadingElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type HeadingSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

export type HeadingAlign =
  | "left"
  | "center"
  | "right";

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;

  as?: HeadingElement;

  size?: HeadingSize;

  align?: HeadingAlign;
}