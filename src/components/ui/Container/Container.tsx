import type { ContainerProps } from "./Container.types";
import { containerSizes } from "./Container.styles";
import { cn } from "@/utils/cn";
import "./Container.css";

export function Container({
  children,
  className,
  size = "xl",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "container",
        containerSizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}