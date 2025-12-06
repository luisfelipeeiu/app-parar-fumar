"use client";

import { Home, Calendar, TrendingUp, Crown, User } from "lucide-react";
import { Screen } from "@/lib/types";
import { Translations } from "@/lib/translations";
import { appConfig } from "@/lib/config";

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  translations: Translations;
}

export function Navigation({ currentScreen, onNavigate, translations }: NavigationProps) {
  const navItems: { screen: Screen; icon: typeof Home; label: string }[] = [
    { screen: "dashboard", icon: Home, label: translations.t_home },
    { screen: "daily-plan", icon: Calendar, label: translations.t_plan },
    { screen: "history", icon: TrendingUp, label: translations.t_history },
    { screen: "premium", icon: Crown, label: translations.t_premium },
    { screen: "profile", icon: User, label: translations.t_profile },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto px-2 py-2">
        <div className="flex items-center justify-around">
          {navItems.map(({ screen, icon: Icon, label }) => {
            const isActive = currentScreen === screen;
            return (
              <button
                key={screen}
                onClick={() => onNavigate(screen)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
                style={
                  isActive
                    ? { backgroundColor: appConfig.colors.color_primary }
                    : {}
                }
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
