import "./Button.css";

import { cn } from "@/utils/cn";

import type { ButtonProps } from "./Button.types";

import {
  buttonSizes,
  buttonVariants,
} from "./Button.styles";

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "button",
        buttonVariants[variant],
        buttonSizes[size],
        fullWidth && "w-full",
        loading && "button--loading",
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {!loading && leftIcon}

      {loading ? "Carregando..." : children}

      {!loading && rightIcon}
    </button>
  );
}