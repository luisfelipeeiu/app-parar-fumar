// Sistema de estado global simplificado para QuitSmokePro
"use client";

import React from "react";
import { appConfig } from "./config";

export interface UserData {
  quitDate: string;
  cigarettes_per_day: number;
  price_per_pack: number;
  cigarettes_per_pack: number;
  currencySymbol: string;
  lastCigaretteTime: string;
  isPremium: boolean;
  progress_goal_days: number;
  relapses: string[]; // Array de datas de recaídas
}

const STORAGE_KEY = "quitsmokepro_user_data";

// Função para obter dados do usuário
export function getUserData(): UserData {
  if (typeof window === "undefined") {
    return {
      ...appConfig.defaultUser,
      progress_goal_days: appConfig.formulas.progress_goal_days,
      relapses: [],
    };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
  }

  return {
    ...appConfig.defaultUser,
    progress_goal_days: appConfig.formulas.progress_goal_days,
    relapses: [],
  };
}

// Função para salvar dados do usuário
export function saveUserData(data: Partial<UserData>): void {
  if (typeof window === "undefined") return;

  try {
    const current = getUserData();
    const updated = { ...current, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
    // Disparar evento customizado para atualizar componentes
    window.dispatchEvent(new Event("userDataUpdated"));
  } catch (error) {
    console.error("Erro ao salvar dados:", error);
  }
}

// Hook para usar dados do usuário com atualização automática
export function useUserData() {
  if (typeof window === "undefined") {
    return getUserData();
  }

  const [data, setData] = React.useState<UserData>(getUserData());

  React.useEffect(() => {
    const handleUpdate = () => {
      setData(getUserData());
    };

    window.addEventListener("userDataUpdated", handleUpdate);
    return () => window.removeEventListener("userDataUpdated", handleUpdate);
  }, []);

  return data;
}
