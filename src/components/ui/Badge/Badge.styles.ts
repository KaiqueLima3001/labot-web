export const badgeVariants = {
  primary: `
    bg-[var(--color-action-primary)]
    text-[var(--color-text-inverse)]
  `,

  secondary: `
    bg-[var(--color-action-secondary)]
    text-[var(--color-text-inverse)]
  `,

  success: `
    bg-[var(--color-success)]
    text-[var(--color-text-inverse)]
  `,

  warning: `
    bg-[var(--color-warning)]
    text-[var(--color-text-inverse)]
  `,

  danger: `
    bg-[var(--color-danger)]
    text-[var(--color-text-inverse)]
  `,

  outline: `
    bg-transparent
    border
    border-[var(--color-border-primary)]
    text-[var(--color-text-primary)]
  `,
} as const;