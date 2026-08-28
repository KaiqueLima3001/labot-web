export const analytics = {
  googleAnalyticsId:
    import.meta.env.VITE_GA_ID ?? "",

  enableAnalytics: false,
} as const;