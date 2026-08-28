import "./Button.css";
import type { ButtonProps } from "./Button.types";
import { buttonSizes, buttonVariants } from "./Button.styles";
import { cn } from "@/utils/cn";

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
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {leftIcon}

      {loading ? "Carregando..." : children}

      {rightIcon}
    </button>
  );
}