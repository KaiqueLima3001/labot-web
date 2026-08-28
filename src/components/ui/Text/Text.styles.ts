export const textSizes = {
  xs: "text-[var(--text-xs)]",
  sm: "text-[var(--text-sm)]",
  base: "text-[var(--text-base)]",
  lg: "text-[var(--text-lg)]",
  xl: "text-[var(--text-xl)]",
} as const;

export const textVariants = {
  primary: "text-[var(--color-text-primary)]",

  secondary: "text-[var(--color-text-secondary)]",

  muted: "text-[var(--color-text-muted)]",

  inverse: "text-[var(--color-text-inverse)]",
} as const;

export const textAlign = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;