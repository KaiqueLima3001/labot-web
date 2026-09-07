export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    label: "Produto",
    href: "#produto",
  },
  {
    label: "Recursos",
    href: "#recursos",
  },
  {
    label: "Integrações",
    href: "#integracoes",
  },
  {
    label: "Cases",
    href: "#cases",
  },
  {
    label: "Preços",
    href: "#precos",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];


export const footerNav = {
  description: "Automatize processos, elimine o trabalho repetitivo e foque no que realmente importa.",
  columns: [
    {
      title: "Produto",
      links: [
        { label: "Recursos", href: "#features" },
        { label: "Integrações", href: "#integrations" },
        { label: "Preços", href: "#pricing" },
        { label: "Changelog", href: "#" },
      ]
    },
    {
      title: "Soluções",
      links: [
        { label: "Para Vendas", href: "#" },
        { label: "Para Marketing", href: "#" },
        { label: "Para RH", href: "#" },
        { label: "Para TI", href: "#" },
      ]
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre nós", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Contato", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "#" },
        { label: "Privacidade", href: "#" },
        { label: "Segurança", href: "#" },
      ]
    }
  ]
};