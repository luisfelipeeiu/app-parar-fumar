// Configurações globais do aplicativo - todos os textos e cores editáveis

import { Language } from "./translations";

export const appConfig = {
  // Nome do aplicativo
  app_name: "QuitSmokePro",

  // Idioma padrão (editável)
  lang: "PT-PT" as Language,

  // Cores personalizáveis (DESIGN SYSTEM OFICIAL QUITSMOKEPRO)
  colors: {
    color_primary: "#00C36F", // Verde saúde/progresso
    color_secondary: "#004E8A", // Azul confiança/tecnologia
    color_cta: "#32D48E", // Verde ação (CTA)
    color_premium: "#FFD54F", // Ouro premium
    color_background: "#F6F6F6", // Fundo claro
    color_background_dark: "#0A0A0A", // Fundo escuro
    color_danger: "#ef4444",
    color_success: "#00C36F",
  },

  // Configurações de design (totalmente editáveis)
  design: {
    card_radius: "16", // em pixels - mais moderno
    card_shadow: "média", // opções: "leve", "média", "forte", "nenhuma"
    progress_bar_color: "#32D48E",
  },

  // Configurações padrão do usuário
  defaultUser: {
    quitDate: new Date().toISOString(),
    cigarettes_per_day: 20,
    price_per_pack: 12.0,
    cigarettes_per_pack: 20,
    currencySymbol: "€",
    lastCigaretteTime: new Date().toISOString(),
    isPremium: false, // Status premium do usuário
  },

  // Configurações de fórmulas (totalmente editáveis)
  formulas: {
    // Meta de dias para progresso (padrão: 30 dias)
    progress_goal_days: 30,
    
    // Cigarros por maço (usado no cálculo de custo diário)
    cigarettes_per_pack: 20,
  },

  // Configurações Premium (totalmente editáveis)
  premium: {
    premium_title: "QuitSmokePro Premium",
    premium_subtitle: "Acesso total a recursos avançados",
    premium_price: "€4.99/mês",
    premium_benefit_1: "Exercícios anti-ansiedade exclusivos",
    premium_benefit_2: "Plano avançado de 7 dias para parar de fumar",
    premium_benefit_3: "Áudios motivacionais para controlar o vício",
    premium_benefit_4: "Estatísticas avançadas e progresso ilimitado",
    premium_button_unlock: "Desbloquear Premium",
  },

  // Configurações de Notificações (totalmente editáveis)
  notifications: {
    // Notificação diária
    notification_daily_message: "Continue firme! Cada dia conta!",
    notification_daily_time: "09:00",
    
    // Marcos de progresso (milestones)
    notification_milestone_1: "Parabéns pelo primeiro dia sem fumar!",
    notification_milestone_3: "Já são 3 dias! Orgulho!",
    notification_milestone_7: "Uma semana sem fumar!",
    notification_milestone_30: "Você acaba de completar 30 dias!",
  },

  // Configurações de Onboarding (totalmente editáveis)
  onboarding: {
    onboarding_welcome: "Bem-vindo ao QuitSmokePro!",
    onboarding_question_1: "Há quanto tempo você fuma?",
    onboarding_question_2: "Quantos cigarros por dia?",
    onboarding_question_3: "Qual o preço do maço?",
    onboarding_question_4: "Quando deseja começar?",
    onboarding_finish: "Tudo pronto! Vamos começar!",
  },

  // Configurações de Histórico (totalmente editáveis)
  history: {
    t_history_title: "Histórico",
    t_history_subtitle: "Acompanhe sua jornada",
    t_success_day: "Dia sem fumar",
    t_relapse_day: "Recaída",
  },

  // Milestones de saúde (horas)
  healthMilestones: [
    { hours: 0.33 }, // 20 minutos
    { hours: 8 },
    { hours: 24 },
    { hours: 48 },
    { hours: 72 },
    { hours: 168 }, // 1 semana
    { hours: 720 }, // 1 mês
    { hours: 2160 }, // 3 meses
    { hours: 4380 }, // 6 meses
    { hours: 8760 }, // 1 ano
  ],

  // BRAND GUIDE - Guia de Identidade Visual
  brand: {
    // Paleta de Cores Oficial
    palette: {
      primary: {
        name: "Verde Saúde",
        hex: "#00C36F",
        usage: "Elementos principais, progresso, saúde",
      },
      secondary: {
        name: "Azul Confiança",
        hex: "#004E8A",
        usage: "Elementos secundários, tecnologia, confiança",
      },
      cta: {
        name: "Verde Ação",
        hex: "#32D48E",
        usage: "Botões de ação, CTAs, interações",
      },
      premium: {
        name: "Ouro Premium",
        hex: "#FFD54F",
        usage: "Elementos premium, destaque especial",
      },
      backgrounds: {
        light: "#F6F6F6",
        dark: "#0A0A0A",
      },
    },

    // Tipografia Recomendada
    typography: {
      primary: "Geist Sans",
      secondary: "Geist Mono",
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },

    // Regras de Uso do Logo
    logoRules: {
      clearSpace: "Mínimo 20px de espaço ao redor",
      minSize: "32px de altura",
      backgrounds: "Usar em fundos claros ou escuros com contraste adequado",
      variations: "Horizontal (padrão), Vertical (mobile), Ícone (favicon)",
    },

    // Gradientes Oficiais
    gradients: {
      primary: "linear-gradient(135deg, #00C36F 0%, #004E8A 100%)",
      premium: "linear-gradient(135deg, #FFD54F 0%, #FFA726 100%)",
      success: "linear-gradient(135deg, #00C36F 0%, #32D48E 100%)",
    },
  },
};
