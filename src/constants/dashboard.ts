import type {
  DashboardMetric,
  DashboardStep,
} from "@/types/dashboard.types";

export const dashboardFlow: DashboardStep[] = [
  {
    title: "Mensagem recebida",
    icon: "message",
    status: "completed",
  },
  {
    title: "IA identifica intenção",
    icon: "bot",
    status: "completed",
  },
  {
    title: "Atualiza CRM",
    icon: "database",
    status: "running",
  },
  {
    title: "Envia confirmação",
    icon: "mail",
    status: "waiting",
  },
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    value: "2.548",
    label: "Execuções hoje",
  },
  {
    value: "4s",
    label: "Tempo médio",
  },
  {
    value: "73%",
    label: "Economia",
  },
];