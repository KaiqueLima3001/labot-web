import "./Input.css";

import { cn } from "@/utils/cn";

import { inputVariants } from "./Input.styles";

import type { InputProps } from "./Input.types";

export function Input({
  label,
  helperText,
  errorMessage,
  leftIcon,
  rightIcon,
  variant = "default",
  className,
  id,
  ...props
}: InputProps) {
  return (
    <div className="input-wrapper">
      {label && (
        <label
          htmlFor={id}
          className="input-label"
        >
          {label}
        </label>
      )}

      <div
        className={cn(
          "input-container",
          inputVariants[variant]
        )}
      >
        {leftIcon}

        <input
          id={id}
          className={cn("input", className)}
          {...props}
        />

        {rightIcon}
      </div>

      {errorMessage ? (
        <span
          className="input-error"
          role="alert"
        >
          {errorMessage}
        </span>
      ) : (
        helperText && (
          <span className="input-helper">
            {helperText}
          </span>
        )
      )}
    </div>
  );
}