import {
  PlugZap,
  Workflow,
  Activity,
} from "lucide-react";

export const howItWorks = [
  {
    step: "01",
    icon: PlugZap,
    title: "Conecte seus sistemas",
    description:
      "Integre CRMs, ERPs, APIs e aplicativos em poucos minutos.",
  },
  {
    step: "02",
    icon: Workflow,
    title: "Crie seu fluxo",
    description:
      "Monte automações utilizando um editor visual intuitivo.",
  },
  {
    step: "03",
    icon: Activity,
    title: "Execute e monitore",
    description:
      "Acompanhe cada execução e visualize métricas em tempo real.",
  },
] as const;