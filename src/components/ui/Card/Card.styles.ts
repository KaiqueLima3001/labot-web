export const cardVariants = {
  default: `
    bg-[var(--color-surface-primary)]
    border
    border-[var(--color-border-primary)]
  `,

  outlined: `
    bg-[var(--color-surface-primary)]
    border
    border-[var(--color-border-primary)]
  `,

  elevated: `
    bg-[var(--color-surface-primary)]
    border
    border-[var(--color-border-primary)]
    shadow-[var(--shadow-md)]
  `,
} as const;