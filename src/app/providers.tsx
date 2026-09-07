import React from 'react';
import { ThemeProvider } from '../Providers/ThemeProvider/ThemeProvider';
// Futuramente, você importará aqui o AuthProvider, AnalyticsProvider, etc.

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};