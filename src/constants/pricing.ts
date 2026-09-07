export const pricingConstants = {
  title: "Preços simples e transparentes",
  description: "Escolha o plano ideal para o tamanho da sua operação. Sem taxas ocultas, cancele quando quiser.",
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Ideal para pequenas equipes iniciando a jornada de automação.',
      price: 'R$ 297',
      period: '/mês',
      features: [
        'Até 5.000 execuções mensais',
        'Fluxos de automação ilimitados',
        'Suporte via e-mail',
        'Histórico de 7 dias',
      ],
      buttonText: 'Começar grátis',
      isPopular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Para empresas que precisam escalar suas operações com segurança.',
      price: 'R$ 797',
      period: '/mês',
      features: [
        'Até 50.000 execuções mensais',
        'Integrações Premium (SAP, Salesforce)',
        'Suporte prioritário via WhatsApp',
        'Histórico de 30 dias',
        'Webhooks personalizados',
      ],
      isPopular: true,
      buttonText: 'Assinar Pro'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Infraestrutura dedicada e controle total para grandes corporações.',
      price: 'Sob consulta',
      period: '',
      features: [
        'Execuções ilimitadas',
        'SLA de 99.9% garantido',
        'Gerente de Sucesso Dedicado',
        'Histórico ilimitado',
        'Deploy em nuvem privada (VPC)',
      ],
      buttonText: 'Falar com vendas',
      isPopular: false
    },
  ]
};