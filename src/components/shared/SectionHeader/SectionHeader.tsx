import "./SectionHeader.css";

import { cn } from "@/utils/cn";

import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

import type { SectionHeaderProps } from "./SectionHeader.types";

import { sectionHeaderVariants } from "./SectionHeader.styles";

export function SectionHeader({
  badge,
  heading,
  description,
  centered = false,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "section-header",
        centered
          ? sectionHeaderVariants.center
          : sectionHeaderVariants.left,
        className
      )}
      {...props}
    >
      {badge && (
        <Badge variant="secondary">
          {badge}
        </Badge>
      )}

      <Heading as="h2" size="4xl">
        {heading}
      </Heading>

      {description && (
        <Text size="lg" variant="secondary">
          {description}
        </Text>
      )}
    </div>
  );
}