import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

import {
  Bot,
  Database,
  Mail,
  MessageCircle,
  Clock3,
  CheckCircle2,
  CircleDashed,
  ArrowRight,
  Play,
  ShieldCheck,
  Workflow,
  Zap,
  BarChart3,
  Users,
  Star,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  PlugZap,
  Rocket,
  ChartColumnIncreasing,
// Github,
// Linkedin,
} from "lucide-react";

// Importações super estáveis do FontAwesome para marcas
import { FaSlack, FaGoogle, FaDiscord, FaWhatsapp, FaSalesforce } from "react-icons/fa";
// Notion não existe no FontAwesome, mas o SiNotion funcionou no seu teste
import { SiNotion } from "react-icons/si";

export type AppIcon = LucideIcon | IconType;

export const icons = {
  message: MessageCircle,

  bot: Bot,

  database: Database,

  mail: Mail,

  clock: Clock3,

  success: CheckCircle2,

  waiting: CircleDashed,

  arrowRight: ArrowRight,

  play: Play,

  shield: ShieldCheck,

  workflow: Workflow,

  automation: Zap,

  analytics: BarChart3,

  chart: ChartColumnIncreasing,

  integrations: PlugZap,

  rocket: Rocket,

  users: Users,

  star: Star,

  menu: Menu,

  close: X,

  chevronDown: ChevronDown,

  chevronRight: ChevronRight,

// github: Github,

// linkedin: Linkedin,

  slack: FaSlack,
  google: FaGoogle,
  discord: FaDiscord,
  notion: SiNotion,
  whatsapp: FaWhatsapp,
  salesforce: FaSalesforce,
} satisfies Record<string, AppIcon>;

export type IconName = keyof typeof icons;