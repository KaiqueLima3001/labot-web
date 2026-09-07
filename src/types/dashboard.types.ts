import type { IconName } from "@/lib/icons";

export type DashboardStatus =
  | "completed"
  | "running"
  | "waiting";

export interface DashboardStep {
  title: string;

  icon: IconName;

  status: DashboardStatus;
}

export interface DashboardMetric {
  value: string;

  label: string;
}