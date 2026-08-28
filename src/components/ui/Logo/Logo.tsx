import "./Logo.css";

import { Bot } from "lucide-react";

import { cn } from "@/utils/cn";

import type { LogoProps } from "./Logo.types";

export function Logo({
  showText = true,
  size = 42,
  className,
  ...props
}: LogoProps) {
  return (
    <div
      className={cn("logo", className)}
      {...props}
    >
      <div
        className="logo__symbol"
        style={{
          width: size,
          height: size,
        }}
      >
        <Bot size={22} />
      </div>

      {showText && (
        <div className="logo__text">
          <span className="logo__title">
            Labot
          </span>

          <span className="logo__subtitle">
            Intelligent Automation
          </span>
        </div>
      )}
    </div>
  );
}