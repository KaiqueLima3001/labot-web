import { cn } from "@/utils/cn";
import "./Section.css";
import type { SectionProps } from "./Section.types";
import { sectionVariants } from "./Section.styles";

export function Section({
  children,
  variant = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "section",
        sectionVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}