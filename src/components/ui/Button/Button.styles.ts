export const buttonVariants = {
  primary:
    "bg-[var(--color-action-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-action-primary-hover)]",

  secondary:
    "bg-[var(--color-action-secondary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-action-secondary-hover)]",

  outline:
    "border border-[var(--color-border-primary)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]",

  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]",
} as const;

export const buttonSizes = {
  sm: "h-9 px-[var(--space-4)] text-[var(--text-sm)]",

  md: "h-11 px-[var(--space-6)] text-[var(--text-base)]",

  lg: "h-14 px-[var(--space-8)] text-[var(--text-lg)]",
} as const;