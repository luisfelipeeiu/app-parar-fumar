// Sistema de traduções multilíngue
// Idiomas suportados: PT-PT, PT-BR, EN, ES, FR, DE, IT

export type Language = "PT-PT" | "PT-BR" | "EN" | "ES" | "FR" | "DE" | "IT";

export interface Translations {
  // Navegação
  t_home: string;
  t_plan: string;
  t_progress: string;
  t_premium: string;
  t_profile: string;
  t_history: string;

  // Dashboard
  t_days_without_smoking: string;
  t_time_since_last_cigarette: string;
  t_money_saved: string;
  t_cigarettes_avoided: string;
  t_health_recovered: string;
  t_open_daily_plan: string;
  t_your_journey: string;
  t_recovered: string;

  // Plano Diário
  t_daily_plan: string;
  t_daily_goals: string;
  t_daily_tips: string;
  t_daily_challenges: string;

  // Goals
  t_goal_1: string;
  t_goal_2: string;
  t_goal_3: string;
  t_goal_4: string;

  // Tips
  t_tip_1: string;
  t_tip_2: string;
  t_tip_3: string;
  t_tip_4: string;

  // Challenges
  t_challenge_1: string;
  t_challenge_2: string;
  t_challenge_3: string;
  t_challenge_4: string;

  // Perfil
  t_profile_title: string;
  t_quit_date: string;
  t_cigarettes_per_day: string;
  t_price_per_pack: string;
  t_last_cigarette: string;
  t_edit_profile: string;
  t_save_profile: string;
  t_cancel: string;

  // Premium
  t_premium_title: string;
  t_premium_description: string;
  t_premium_exercises: string;
  t_premium_advanced_plan: string;
  t_premium_audio: string;
  t_premium_stats: string;
  t_premium_button_unlock: string;
  t_premium_feature_1: string;
  t_premium_feature_2: string;
  t_premium_feature_3: string;
  t_premium_feature_4: string;
  t_premium_feature_5: string;
  t_premium_feature_6: string;

  // Histórico
  t_history_title: string;
  t_success_days: string;
  t_relapse_days: string;
  t_current_streak: string;
  t_best_streak: string;
  t_success: string;
  t_relapse: string;

  // Dias da semana
  t_sun: string;
  t_mon: string;
  t_tue: string;
  t_wed: string;
  t_thu: string;
  t_fri: string;
  t_sat: string;

  // Milestones de saúde
  t_milestone_20min: string;
  t_milestone_8h: string;
  t_milestone_24h: string;
  t_milestone_48h: string;
  t_milestone_72h: string;
  t_milestone_1week: string;
  t_milestone_1month: string;
  t_milestone_3months: string;
  t_milestone_6months: string;
  t_milestone_1year: string;

  t_milestone_20min_desc: string;
  t_milestone_8h_desc: string;
  t_milestone_24h_desc: string;
  t_milestone_48h_desc: string;
  t_milestone_72h_desc: string;
  t_milestone_1week_desc: string;
  t_milestone_1month_desc: string;
  t_milestone_3months_desc: string;
  t_milestone_6months_desc: string;
  t_milestone_1year_desc: string;
}

export const translations: Record<Language, Translations> = {
  "PT-BR": {
    // Navegação
    t_home: "Início",
    t_plan: "Plano Diário",
    t_progress: "Progresso",
    t_premium: "Premium",
    t_profile: "Perfil",
    t_history: "Histórico",

    // Dashboard
    t_days_without_smoking: "Dias sem Fumar",
    t_time_since_last_cigarette: "Tempo desde o último cigarro",
    t_money_saved: "Dinheiro Economizado",
    t_cigarettes_avoided: "Cigarros evitados",
    t_health_recovered: "Saúde recuperada",
    t_open_daily_plan: "Ver Plano Diário",
    t_your_journey: "Sua jornada livre do cigarro",
    t_recovered: "recuperado",

    // Plano Diário
    t_daily_plan: "Plano Diário",
    t_daily_goals: "Metas do Dia",
    t_daily_tips: "Dicas para Hoje",
    t_daily_challenges: "Desafios Diários",

    // Goals
    t_goal_1: "Beba 8 copos de água",
    t_goal_2: "Faça 30 minutos de exercício",
    t_goal_3: "Pratique respiração profunda 3x",
    t_goal_4: "Evite gatilhos conhecidos",

    // Tips
    t_tip_1: "Quando sentir vontade, espere 5 minutos - a vontade passa",
    t_tip_2: "Mantenha as mãos ocupadas com algo",
    t_tip_3: "Mastigue chiclete ou coma frutas",
    t_tip_4: "Lembre-se do motivo pelo qual você parou",

    // Challenges
    t_challenge_1: "Resista à primeira vontade do dia",
    t_challenge_2: "Compartilhe seu progresso com alguém",
    t_challenge_3: "Pratique uma nova atividade relaxante",
    t_challenge_4: "Celebre cada pequena vitória",

    // Perfil
    t_profile_title: "Meu Perfil",
    t_quit_date: "Data que parei",
    t_cigarettes_per_day: "Cigarros por dia (antes)",
    t_price_per_pack: "Preço do maço",
    t_last_cigarette: "Último cigarro",
    t_edit_profile: "Editar Perfil",
    t_save_profile: "Salvar",
    t_cancel: "Cancelar",

    // Premium
    t_premium_title: "Área Premium",
    t_premium_description: "Desbloqueie recursos exclusivos para acelerar sua jornada livre do cigarro",
    t_premium_exercises: "Exercícios de respiração guiados",
    t_premium_advanced_plan: "Plano personalizado avançado",
    t_premium_audio: "Meditações e áudios motivacionais",
    t_premium_stats: "Estatísticas detalhadas de saúde",
    t_premium_button_unlock: "Desbloquear Premium - R$ 29,90/mês",
    t_premium_feature_1: "Exercícios de respiração guiados em vídeo",
    t_premium_feature_2: "Plano personalizado baseado no seu perfil",
    t_premium_feature_3: "Biblioteca de meditações anti-ansiedade",
    t_premium_feature_4: "Gráficos detalhados de recuperação da saúde",
    t_premium_feature_5: "Suporte prioritário 24/7",
    t_premium_feature_6: "Comunidade exclusiva de apoio",

    // Histórico
    t_history_title: "Meu Histórico",
    t_success_days: "Dias de sucesso",
    t_relapse_days: "Recaídas",
    t_current_streak: "Sequência atual",
    t_best_streak: "Melhor sequência",
    t_success: "Sucesso",
    t_relapse: "Recaída",

    // Dias da semana
    t_sun: "Dom",
    t_mon: "Seg",
    t_tue: "Ter",
    t_wed: "Qua",
    t_thu: "Qui",
    t_fri: "Sex",
    t_sat: "Sáb",

    // Milestones
    t_milestone_20min: "20 minutos",
    t_milestone_8h: "8 horas",
    t_milestone_24h: "24 horas",
    t_milestone_48h: "48 horas",
    t_milestone_72h: "72 horas",
    t_milestone_1week: "1 semana",
    t_milestone_1month: "1 mês",
    t_milestone_3months: "3 meses",
    t_milestone_6months: "6 meses",
    t_milestone_1year: "1 ano",

    t_milestone_20min_desc: "Pressão arterial e batimentos cardíacos normalizam",
    t_milestone_8h_desc: "Nível de oxigênio no sangue normaliza",
    t_milestone_24h_desc: "Risco de ataque cardíaco começa a diminuir",
    t_milestone_48h_desc: "Terminações nervosas começam a se regenerar",
    t_milestone_72h_desc: "Pulmões começam a se recuperar",
    t_milestone_1week_desc: "Paladar e olfato melhoram significativamente",
    t_milestone_1month_desc: "Função pulmonar melhora em até 30%",
    t_milestone_3months_desc: "Circulação sanguínea melhora drasticamente",
    t_milestone_6months_desc: "Tosse e falta de ar diminuem",
    t_milestone_1year_desc: "Risco de doença cardíaca cai pela metade",
  },

  "PT-PT": {
    // Navegação
    t_home: "Início",
    t_plan: "Plano Diário",
    t_progress: "Progresso",
    t_premium: "Premium",
    t_profile: "Perfil",
    t_history: "Histórico",

    // Dashboard
    t_days_without_smoking: "Dias sem Fumar",
    t_time_since_last_cigarette: "Tempo desde o último cigarro",
    t_money_saved: "Dinheiro Poupado",
    t_cigarettes_avoided: "Cigarros evitados",
    t_health_recovered: "Saúde recuperada",
    t_open_daily_plan: "Ver Plano Diário",
    t_your_journey: "A tua jornada livre do cigarro",
    t_recovered: "recuperado",

    // Plano Diário
    t_daily_plan: "Plano Diário",
    t_daily_goals: "Metas do Dia",
    t_daily_tips: "Dicas para Hoje",
    t_daily_challenges: "Desafios Diários",

    // Goals
    t_goal_1: "Bebe 8 copos de água",
    t_goal_2: "Faz 30 minutos de exercício",
    t_goal_3: "Pratica respiração profunda 3x",
    t_goal_4: "Evita gatilhos conhecidos",

    // Tips
    t_tip_1: "Quando sentires vontade, espera 5 minutos - a vontade passa",
    t_tip_2: "Mantém as mãos ocupadas com algo",
    t_tip_3: "Mastiga pastilha elástica ou come frutas",
    t_tip_4: "Lembra-te do motivo pelo qual paraste",

    // Challenges
    t_challenge_1: "Resiste à primeira vontade do dia",
    t_challenge_2: "Partilha o teu progresso com alguém",
    t_challenge_3: "Pratica uma nova atividade relaxante",
    t_challenge_4: "Celebra cada pequena vitória",

    // Perfil
    t_profile_title: "O Meu Perfil",
    t_quit_date: "Data em que parei",
    t_cigarettes_per_day: "Cigarros por dia (antes)",
    t_price_per_pack: "Preço do maço",
    t_last_cigarette: "Último cigarro",
    t_edit_profile: "Editar Perfil",
    t_save_profile: "Guardar",
    t_cancel: "Cancelar",

    // Premium
    t_premium_title: "Área Premium",
    t_premium_description: "Desbloqueia recursos exclusivos para acelerar a tua jornada livre do cigarro",
    t_premium_exercises: "Exercícios de respiração guiados",
    t_premium_advanced_plan: "Plano personalizado avançado",
    t_premium_audio: "Meditações e áudios motivacionais",
    t_premium_stats: "Estatísticas detalhadas de saúde",
    t_premium_button_unlock: "Desbloquear Premium - 29,90€/mês",
    t_premium_feature_1: "Exercícios de respiração guiados em vídeo",
    t_premium_feature_2: "Plano personalizado baseado no teu perfil",
    t_premium_feature_3: "Biblioteca de meditações anti-ansiedade",
    t_premium_feature_4: "Gráficos detalhados de recuperação da saúde",
    t_premium_feature_5: "Suporte prioritário 24/7",
    t_premium_feature_6: "Comunidade exclusiva de apoio",

    // Histórico
    t_history_title: "O Meu Histórico",
    t_success_days: "Dias de sucesso",
    t_relapse_days: "Recaídas",
    t_current_streak: "Sequência atual",
    t_best_streak: "Melhor sequência",
    t_success: "Sucesso",
    t_relapse: "Recaída",

    // Dias da semana
    t_sun: "Dom",
    t_mon: "Seg",
    t_tue: "Ter",
    t_wed: "Qua",
    t_thu: "Qui",
    t_fri: "Sex",
    t_sat: "Sáb",

    // Milestones
    t_milestone_20min: "20 minutos",
    t_milestone_8h: "8 horas",
    t_milestone_24h: "24 horas",
    t_milestone_48h: "48 horas",
    t_milestone_72h: "72 horas",
    t_milestone_1week: "1 semana",
    t_milestone_1month: "1 mês",
    t_milestone_3months: "3 meses",
    t_milestone_6months: "6 meses",
    t_milestone_1year: "1 ano",

    t_milestone_20min_desc: "Pressão arterial e batimentos cardíacos normalizam",
    t_milestone_8h_desc: "Nível de oxigénio no sangue normaliza",
    t_milestone_24h_desc: "Risco de ataque cardíaco começa a diminuir",
    t_milestone_48h_desc: "Terminações nervosas começam a regenerar-se",
    t_milestone_72h_desc: "Pulmões começam a recuperar",
    t_milestone_1week_desc: "Paladar e olfato melhoram significativamente",
    t_milestone_1month_desc: "Função pulmonar melhora até 30%",
    t_milestone_3months_desc: "Circulação sanguínea melhora drasticamente",
    t_milestone_6months_desc: "Tosse e falta de ar diminuem",
    t_milestone_1year_desc: "Risco de doença cardíaca cai para metade",
  },

  EN: {
    // Navigation
    t_home: "Home",
    t_plan: "Daily Plan",
    t_progress: "Progress",
    t_premium: "Premium",
    t_profile: "Profile",
    t_history: "History",

    // Dashboard
    t_days_without_smoking: "Days Without Smoking",
    t_time_since_last_cigarette: "Time since last cigarette",
    t_money_saved: "Money Saved",
    t_cigarettes_avoided: "Cigarettes avoided",
    t_health_recovered: "Health recovered",
    t_open_daily_plan: "View Daily Plan",
    t_your_journey: "Your smoke-free journey",
    t_recovered: "recovered",

    // Daily Plan
    t_daily_plan: "Daily Plan",
    t_daily_goals: "Daily Goals",
    t_daily_tips: "Today's Tips",
    t_daily_challenges: "Daily Challenges",

    // Goals
    t_goal_1: "Drink 8 glasses of water",
    t_goal_2: "Exercise for 30 minutes",
    t_goal_3: "Practice deep breathing 3x",
    t_goal_4: "Avoid known triggers",

    // Tips
    t_tip_1: "When you feel the urge, wait 5 minutes - it will pass",
    t_tip_2: "Keep your hands busy with something",
    t_tip_3: "Chew gum or eat fruit",
    t_tip_4: "Remember why you quit",

    // Challenges
    t_challenge_1: "Resist the first craving of the day",
    t_challenge_2: "Share your progress with someone",
    t_challenge_3: "Try a new relaxing activity",
    t_challenge_4: "Celebrate every small victory",

    // Profile
    t_profile_title: "My Profile",
    t_quit_date: "Quit date",
    t_cigarettes_per_day: "Cigarettes per day (before)",
    t_price_per_pack: "Price per pack",
    t_last_cigarette: "Last cigarette",
    t_edit_profile: "Edit Profile",
    t_save_profile: "Save",
    t_cancel: "Cancel",

    // Premium
    t_premium_title: "Premium Area",
    t_premium_description: "Unlock exclusive features to accelerate your smoke-free journey",
    t_premium_exercises: "Guided breathing exercises",
    t_premium_advanced_plan: "Advanced personalized plan",
    t_premium_audio: "Motivational meditations and audios",
    t_premium_stats: "Detailed health statistics",
    t_premium_button_unlock: "Unlock Premium - $29.90/month",
    t_premium_feature_1: "Video-guided breathing exercises",
    t_premium_feature_2: "Personalized plan based on your profile",
    t_premium_feature_3: "Anti-anxiety meditation library",
    t_premium_feature_4: "Detailed health recovery charts",
    t_premium_feature_5: "24/7 priority support",
    t_premium_feature_6: "Exclusive support community",

    // History
    t_history_title: "My History",
    t_success_days: "Success days",
    t_relapse_days: "Relapses",
    t_current_streak: "Current streak",
    t_best_streak: "Best streak",
    t_success: "Success",
    t_relapse: "Relapse",

    // Days of week
    t_sun: "Sun",
    t_mon: "Mon",
    t_tue: "Tue",
    t_wed: "Wed",
    t_thu: "Thu",
    t_fri: "Fri",
    t_sat: "Sat",

    // Milestones
    t_milestone_20min: "20 minutes",
    t_milestone_8h: "8 hours",
    t_milestone_24h: "24 hours",
    t_milestone_48h: "48 hours",
    t_milestone_72h: "72 hours",
    t_milestone_1week: "1 week",
    t_milestone_1month: "1 month",
    t_milestone_3months: "3 months",
    t_milestone_6months: "6 months",
    t_milestone_1year: "1 year",

    t_milestone_20min_desc: "Blood pressure and heart rate normalize",
    t_milestone_8h_desc: "Blood oxygen level normalizes",
    t_milestone_24h_desc: "Heart attack risk begins to decrease",
    t_milestone_48h_desc: "Nerve endings begin to regenerate",
    t_milestone_72h_desc: "Lungs begin to recover",
    t_milestone_1week_desc: "Taste and smell improve significantly",
    t_milestone_1month_desc: "Lung function improves up to 30%",
    t_milestone_3months_desc: "Blood circulation improves drastically",
    t_milestone_6months_desc: "Coughing and shortness of breath decrease",
    t_milestone_1year_desc: "Heart disease risk drops by half",
  },

  ES: {
    // Navegación
    t_home: "Inicio",
    t_plan: "Plan Diario",
    t_progress: "Progreso",
    t_premium: "Premium",
    t_profile: "Perfil",
    t_history: "Historial",

    // Dashboard
    t_days_without_smoking: "Días sin Fumar",
    t_time_since_last_cigarette: "Tiempo desde el último cigarrillo",
    t_money_saved: "Dinero Ahorrado",
    t_cigarettes_avoided: "Cigarrillos evitados",
    t_health_recovered: "Salud recuperada",
    t_open_daily_plan: "Ver Plan Diario",
    t_your_journey: "Tu viaje libre de humo",
    t_recovered: "recuperado",

    // Plan Diario
    t_daily_plan: "Plan Diario",
    t_daily_goals: "Metas del Día",
    t_daily_tips: "Consejos para Hoy",
    t_daily_challenges: "Desafíos Diarios",

    // Goals
    t_goal_1: "Bebe 8 vasos de agua",
    t_goal_2: "Haz 30 minutos de ejercicio",
    t_goal_3: "Practica respiración profunda 3 veces",
    t_goal_4: "Evita desencadenantes conocidos",

    // Tips
    t_tip_1: "Cuando sientas ganas, espera 5 minutos - pasará",
    t_tip_2: "Mantén las manos ocupadas con algo",
    t_tip_3: "Mastica chicle o come frutas",
    t_tip_4: "Recuerda por qué dejaste de fumar",

    // Challenges
    t_challenge_1: "Resiste el primer antojo del día",
    t_challenge_2: "Comparte tu progreso con alguien",
    t_challenge_3: "Practica una nueva actividad relajante",
    t_challenge_4: "Celebra cada pequeña victoria",

    // Perfil
    t_profile_title: "Mi Perfil",
    t_quit_date: "Fecha en que dejé",
    t_cigarettes_per_day: "Cigarrillos por día (antes)",
    t_price_per_pack: "Precio del paquete",
    t_last_cigarette: "Último cigarrillo",
    t_edit_profile: "Editar Perfil",
    t_save_profile: "Guardar",
    t_cancel: "Cancelar",

    // Premium
    t_premium_title: "Área Premium",
    t_premium_description: "Desbloquea funciones exclusivas para acelerar tu viaje libre de humo",
    t_premium_exercises: "Ejercicios de respiración guiados",
    t_premium_advanced_plan: "Plan personalizado avanzado",
    t_premium_audio: "Meditaciones y audios motivacionales",
    t_premium_stats: "Estadísticas detalladas de salud",
    t_premium_button_unlock: "Desbloquear Premium - 29,90€/mes",
    t_premium_feature_1: "Ejercicios de respiración guiados en vídeo",
    t_premium_feature_2: "Plan personalizado basado en tu perfil",
    t_premium_feature_3: "Biblioteca de meditaciones anti-ansiedad",
    t_premium_feature_4: "Gráficos detallados de recuperación de salud",
    t_premium_feature_5: "Soporte prioritario 24/7",
    t_premium_feature_6: "Comunidad exclusiva de apoyo",

    // Historial
    t_history_title: "Mi Historial",
    t_success_days: "Días de éxito",
    t_relapse_days: "Recaídas",
    t_current_streak: "Racha actual",
    t_best_streak: "Mejor racha",
    t_success: "Éxito",
    t_relapse: "Recaída",

    // Días de la semana
    t_sun: "Dom",
    t_mon: "Lun",
    t_tue: "Mar",
    t_wed: "Mié",
    t_thu: "Jue",
    t_fri: "Vie",
    t_sat: "Sáb",

    // Milestones
    t_milestone_20min: "20 minutos",
    t_milestone_8h: "8 horas",
    t_milestone_24h: "24 horas",
    t_milestone_48h: "48 horas",
    t_milestone_72h: "72 horas",
    t_milestone_1week: "1 semana",
    t_milestone_1month: "1 mes",
    t_milestone_3months: "3 meses",
    t_milestone_6months: "6 meses",
    t_milestone_1year: "1 año",

    t_milestone_20min_desc: "La presión arterial y el ritmo cardíaco se normalizan",
    t_milestone_8h_desc: "El nivel de oxígeno en sangre se normaliza",
    t_milestone_24h_desc: "El riesgo de ataque cardíaco comienza a disminuir",
    t_milestone_48h_desc: "Las terminaciones nerviosas comienzan a regenerarse",
    t_milestone_72h_desc: "Los pulmones comienzan a recuperarse",
    t_milestone_1week_desc: "El gusto y el olfato mejoran significativamente",
    t_milestone_1month_desc: "La función pulmonar mejora hasta un 30%",
    t_milestone_3months_desc: "La circulación sanguínea mejora drásticamente",
    t_milestone_6months_desc: "La tos y la falta de aire disminuyen",
    t_milestone_1year_desc: "El riesgo de enfermedad cardíaca se reduce a la mitad",
  },

  FR: {
    // Navigation
    t_home: "Accueil",
    t_plan: "Plan Quotidien",
    t_progress: "Progrès",
    t_premium: "Premium",
    t_profile: "Profil",
    t_history: "Historique",

    // Dashboard
    t_days_without_smoking: "Jours sans Fumer",
    t_time_since_last_cigarette: "Temps depuis la dernière cigarette",
    t_money_saved: "Argent Économisé",
    t_cigarettes_avoided: "Cigarettes évitées",
    t_health_recovered: "Santé récupérée",
    t_open_daily_plan: "Voir le Plan Quotidien",
    t_your_journey: "Votre parcours sans tabac",
    t_recovered: "récupéré",

    // Plan Quotidien
    t_daily_plan: "Plan Quotidien",
    t_daily_goals: "Objectifs du Jour",
    t_daily_tips: "Conseils d'Aujourd'hui",
    t_daily_challenges: "Défis Quotidiens",

    // Goals
    t_goal_1: "Buvez 8 verres d'eau",
    t_goal_2: "Faites 30 minutes d'exercice",
    t_goal_3: "Pratiquez la respiration profonde 3 fois",
    t_goal_4: "Évitez les déclencheurs connus",

    // Tips
    t_tip_1: "Quand vous ressentez l'envie, attendez 5 minutes - ça passera",
    t_tip_2: "Gardez vos mains occupées avec quelque chose",
    t_tip_3: "Mâchez du chewing-gum ou mangez des fruits",
    t_tip_4: "Rappelez-vous pourquoi vous avez arrêté",

    // Challenges
    t_challenge_1: "Résistez à la première envie de la journée",
    t_challenge_2: "Partagez vos progrès avec quelqu'un",
    t_challenge_3: "Essayez une nouvelle activité relaxante",
    t_challenge_4: "Célébrez chaque petite victoire",

    // Profil
    t_profile_title: "Mon Profil",
    t_quit_date: "Date d'arrêt",
    t_cigarettes_per_day: "Cigarettes par jour (avant)",
    t_price_per_pack: "Prix du paquet",
    t_last_cigarette: "Dernière cigarette",
    t_edit_profile: "Modifier le Profil",
    t_save_profile: "Enregistrer",
    t_cancel: "Annuler",

    // Premium
    t_premium_title: "Zone Premium",
    t_premium_description: "Débloquez des fonctionnalités exclusives pour accélérer votre parcours sans tabac",
    t_premium_exercises: "Exercices de respiration guidés",
    t_premium_advanced_plan: "Plan personnalisé avancé",
    t_premium_audio: "Méditations et audios motivants",
    t_premium_stats: "Statistiques de santé détaillées",
    t_premium_button_unlock: "Débloquer Premium - 29,90€/mois",
    t_premium_feature_1: "Exercices de respiration guidés en vidéo",
    t_premium_feature_2: "Plan personnalisé basé sur votre profil",
    t_premium_feature_3: "Bibliothèque de méditations anti-anxiété",
    t_premium_feature_4: "Graphiques détaillés de récupération de la santé",
    t_premium_feature_5: "Support prioritaire 24/7",
    t_premium_feature_6: "Communauté de soutien exclusive",

    // Historique
    t_history_title: "Mon Historique",
    t_success_days: "Jours de succès",
    t_relapse_days: "Rechutes",
    t_current_streak: "Série actuelle",
    t_best_streak: "Meilleure série",
    t_success: "Succès",
    t_relapse: "Rechute",

    // Jours de la semaine
    t_sun: "Dim",
    t_mon: "Lun",
    t_tue: "Mar",
    t_wed: "Mer",
    t_thu: "Jeu",
    t_fri: "Ven",
    t_sat: "Sam",

    // Milestones
    t_milestone_20min: "20 minutes",
    t_milestone_8h: "8 heures",
    t_milestone_24h: "24 heures",
    t_milestone_48h: "48 heures",
    t_milestone_72h: "72 heures",
    t_milestone_1week: "1 semaine",
    t_milestone_1month: "1 mois",
    t_milestone_3months: "3 mois",
    t_milestone_6months: "6 mois",
    t_milestone_1year: "1 an",

    t_milestone_20min_desc: "La pression artérielle et le rythme cardiaque se normalisent",
    t_milestone_8h_desc: "Le niveau d'oxygène dans le sang se normalise",
    t_milestone_24h_desc: "Le risque de crise cardiaque commence à diminuer",
    t_milestone_48h_desc: "Les terminaisons nerveuses commencent à se régénérer",
    t_milestone_72h_desc: "Les poumons commencent à récupérer",
    t_milestone_1week_desc: "Le goût et l'odorat s'améliorent considérablement",
    t_milestone_1month_desc: "La fonction pulmonaire s'améliore jusqu'à 30%",
    t_milestone_3months_desc: "La circulation sanguine s'améliore considérablement",
    t_milestone_6months_desc: "La toux et l'essoufflement diminuent",
    t_milestone_1year_desc: "Le risque de maladie cardiaque diminue de moitié",
  },

  DE: {
    // Navigation
    t_home: "Startseite",
    t_plan: "Tagesplan",
    t_progress: "Fortschritt",
    t_premium: "Premium",
    t_profile: "Profil",
    t_history: "Verlauf",

    // Dashboard
    t_days_without_smoking: "Tage ohne Rauchen",
    t_time_since_last_cigarette: "Zeit seit der letzten Zigarette",
    t_money_saved: "Gespartes Geld",
    t_cigarettes_avoided: "Vermiedene Zigaretten",
    t_health_recovered: "Gesundheit wiederhergestellt",
    t_open_daily_plan: "Tagesplan ansehen",
    t_your_journey: "Ihre rauchfreie Reise",
    t_recovered: "wiederhergestellt",

    // Tagesplan
    t_daily_plan: "Tagesplan",
    t_daily_goals: "Tagesziele",
    t_daily_tips: "Heutige Tipps",
    t_daily_challenges: "Tägliche Herausforderungen",

    // Goals
    t_goal_1: "Trinken Sie 8 Gläser Wasser",
    t_goal_2: "Trainieren Sie 30 Minuten",
    t_goal_3: "Üben Sie 3x tiefes Atmen",
    t_goal_4: "Vermeiden Sie bekannte Auslöser",

    // Tips
    t_tip_1: "Wenn Sie das Verlangen spüren, warten Sie 5 Minuten - es vergeht",
    t_tip_2: "Halten Sie Ihre Hände mit etwas beschäftigt",
    t_tip_3: "Kauen Sie Kaugummi oder essen Sie Obst",
    t_tip_4: "Erinnern Sie sich, warum Sie aufgehört haben",

    // Challenges
    t_challenge_1: "Widerstehen Sie dem ersten Verlangen des Tages",
    t_challenge_2: "Teilen Sie Ihren Fortschritt mit jemandem",
    t_challenge_3: "Probieren Sie eine neue entspannende Aktivität",
    t_challenge_4: "Feiern Sie jeden kleinen Sieg",

    // Profil
    t_profile_title: "Mein Profil",
    t_quit_date: "Aufhördatum",
    t_cigarettes_per_day: "Zigaretten pro Tag (vorher)",
    t_price_per_pack: "Preis pro Packung",
    t_last_cigarette: "Letzte Zigarette",
    t_edit_profile: "Profil bearbeiten",
    t_save_profile: "Speichern",
    t_cancel: "Abbrechen",

    // Premium
    t_premium_title: "Premium-Bereich",
    t_premium_description: "Schalten Sie exklusive Funktionen frei, um Ihre rauchfreie Reise zu beschleunigen",
    t_premium_exercises: "Geführte Atemübungen",
    t_premium_advanced_plan: "Fortgeschrittener personalisierter Plan",
    t_premium_audio: "Motivierende Meditationen und Audios",
    t_premium_stats: "Detaillierte Gesundheitsstatistiken",
    t_premium_button_unlock: "Premium freischalten - 29,90€/Monat",
    t_premium_feature_1: "Videogeführte Atemübungen",
    t_premium_feature_2: "Personalisierter Plan basierend auf Ihrem Profil",
    t_premium_feature_3: "Anti-Angst-Meditationsbibliothek",
    t_premium_feature_4: "Detaillierte Gesundheitswiederherstellungsdiagramme",
    t_premium_feature_5: "24/7 Priority-Support",
    t_premium_feature_6: "Exklusive Support-Community",

    // Verlauf
    t_history_title: "Mein Verlauf",
    t_success_days: "Erfolgstage",
    t_relapse_days: "Rückfälle",
    t_current_streak: "Aktuelle Serie",
    t_best_streak: "Beste Serie",
    t_success: "Erfolg",
    t_relapse: "Rückfall",

    // Wochentage
    t_sun: "So",
    t_mon: "Mo",
    t_tue: "Di",
    t_wed: "Mi",
    t_thu: "Do",
    t_fri: "Fr",
    t_sat: "Sa",

    // Milestones
    t_milestone_20min: "20 Minuten",
    t_milestone_8h: "8 Stunden",
    t_milestone_24h: "24 Stunden",
    t_milestone_48h: "48 Stunden",
    t_milestone_72h: "72 Stunden",
    t_milestone_1week: "1 Woche",
    t_milestone_1month: "1 Monat",
    t_milestone_3months: "3 Monate",
    t_milestone_6months: "6 Monate",
    t_milestone_1year: "1 Jahr",

    t_milestone_20min_desc: "Blutdruck und Herzfrequenz normalisieren sich",
    t_milestone_8h_desc: "Sauerstoffgehalt im Blut normalisiert sich",
    t_milestone_24h_desc: "Herzinfarktrisiko beginnt zu sinken",
    t_milestone_48h_desc: "Nervenenden beginnen sich zu regenerieren",
    t_milestone_72h_desc: "Lungen beginnen sich zu erholen",
    t_milestone_1week_desc: "Geschmack und Geruch verbessern sich erheblich",
    t_milestone_1month_desc: "Lungenfunktion verbessert sich um bis zu 30%",
    t_milestone_3months_desc: "Durchblutung verbessert sich drastisch",
    t_milestone_6months_desc: "Husten und Atemnot nehmen ab",
    t_milestone_1year_desc: "Herzerkrankungsrisiko halbiert sich",
  },

  IT: {
    // Navigazione
    t_home: "Home",
    t_plan: "Piano Giornaliero",
    t_progress: "Progresso",
    t_premium: "Premium",
    t_profile: "Profilo",
    t_history: "Cronologia",

    // Dashboard
    t_days_without_smoking: "Giorni senza Fumare",
    t_time_since_last_cigarette: "Tempo dall'ultima sigaretta",
    t_money_saved: "Denaro Risparmiato",
    t_cigarettes_avoided: "Sigarette evitate",
    t_health_recovered: "Salute recuperata",
    t_open_daily_plan: "Visualizza Piano Giornaliero",
    t_your_journey: "Il tuo viaggio senza fumo",
    t_recovered: "recuperato",

    // Piano Giornaliero
    t_daily_plan: "Piano Giornaliero",
    t_daily_goals: "Obiettivi del Giorno",
    t_daily_tips: "Consigli di Oggi",
    t_daily_challenges: "Sfide Giornaliere",

    // Goals
    t_goal_1: "Bevi 8 bicchieri d'acqua",
    t_goal_2: "Fai 30 minuti di esercizio",
    t_goal_3: "Pratica la respirazione profonda 3 volte",
    t_goal_4: "Evita i fattori scatenanti noti",

    // Tips
    t_tip_1: "Quando senti il desiderio, aspetta 5 minuti - passerà",
    t_tip_2: "Tieni le mani occupate con qualcosa",
    t_tip_3: "Mastica gomma o mangia frutta",
    t_tip_4: "Ricorda perché hai smesso",

    // Challenges
    t_challenge_1: "Resisti al primo desiderio della giornata",
    t_challenge_2: "Condividi i tuoi progressi con qualcuno",
    t_challenge_3: "Prova una nuova attività rilassante",
    t_challenge_4: "Celebra ogni piccola vittoria",

    // Profilo
    t_profile_title: "Il Mio Profilo",
    t_quit_date: "Data in cui ho smesso",
    t_cigarettes_per_day: "Sigarette al giorno (prima)",
    t_price_per_pack: "Prezzo del pacchetto",
    t_last_cigarette: "Ultima sigaretta",
    t_edit_profile: "Modifica Profilo",
    t_save_profile: "Salva",
    t_cancel: "Annulla",

    // Premium
    t_premium_title: "Area Premium",
    t_premium_description: "Sblocca funzionalità esclusive per accelerare il tuo viaggio senza fumo",
    t_premium_exercises: "Esercizi di respirazione guidati",
    t_premium_advanced_plan: "Piano personalizzato avanzato",
    t_premium_audio: "Meditazioni e audio motivazionali",
    t_premium_stats: "Statistiche dettagliate sulla salute",
    t_premium_button_unlock: "Sblocca Premium - 29,90€/mese",
    t_premium_feature_1: "Esercizi di respirazione guidati in video",
    t_premium_feature_2: "Piano personalizzato basato sul tuo profilo",
    t_premium_feature_3: "Biblioteca di meditazioni anti-ansia",
    t_premium_feature_4: "Grafici dettagliati del recupero della salute",
    t_premium_feature_5: "Supporto prioritario 24/7",
    t_premium_feature_6: "Comunità di supporto esclusiva",

    // Cronologia
    t_history_title: "La Mia Cronologia",
    t_success_days: "Giorni di successo",
    t_relapse_days: "Ricadute",
    t_current_streak: "Serie attuale",
    t_best_streak: "Migliore serie",
    t_success: "Successo",
    t_relapse: "Ricaduta",

    // Giorni della settimana
    t_sun: "Dom",
    t_mon: "Lun",
    t_tue: "Mar",
    t_wed: "Mer",
    t_thu: "Gio",
    t_fri: "Ven",
    t_sat: "Sab",

    // Milestones
    t_milestone_20min: "20 minuti",
    t_milestone_8h: "8 ore",
    t_milestone_24h: "24 ore",
    t_milestone_48h: "48 ore",
    t_milestone_72h: "72 ore",
    t_milestone_1week: "1 settimana",
    t_milestone_1month: "1 mese",
    t_milestone_3months: "3 mesi",
    t_milestone_6months: "6 mesi",
    t_milestone_1year: "1 anno",

    t_milestone_20min_desc: "La pressione sanguigna e la frequenza cardiaca si normalizzano",
    t_milestone_8h_desc: "Il livello di ossigeno nel sangue si normalizza",
    t_milestone_24h_desc: "Il rischio di infarto inizia a diminuire",
    t_milestone_48h_desc: "Le terminazioni nervose iniziano a rigenerarsi",
    t_milestone_72h_desc: "I polmoni iniziano a recuperare",
    t_milestone_1week_desc: "Gusto e olfatto migliorano significativamente",
    t_milestone_1month_desc: "La funzione polmonare migliora fino al 30%",
    t_milestone_3months_desc: "La circolazione sanguigna migliora drasticamente",
    t_milestone_6months_desc: "Tosse e mancanza di respiro diminuiscono",
    t_milestone_1year_desc: "Il rischio di malattie cardiache si dimezza",
  },
};

// Função auxiliar para obter traduções
export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations["PT-BR"];
}
