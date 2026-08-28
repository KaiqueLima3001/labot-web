import type { InputHTMLAttributes, ReactNode } from "react";

export type InputVariant =
  | "default"
  | "error"
  | "success";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  helperText?: string;

  errorMessage?: string;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  variant?: InputVariant;
}