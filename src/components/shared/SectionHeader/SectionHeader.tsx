import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";

import type { SectionHeaderProps } from "./SectionHeader.types";

import "./SectionHeader.css";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow && (
        <Badge>
          {eyebrow}
        </Badge>
      )}

      <Heading
        as="h2"
        size="4xl"
      >
        {title}
      </Heading>

      {description && (
        <Text
          size="lg"
          variant="secondary"
        >
          {description}
        </Text>
      )}
    </div>
  );
}