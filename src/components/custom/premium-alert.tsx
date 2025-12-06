"use client";

import { useRouter } from "next/navigation";
import { Lock, Crown } from "lucide-react";
import { appConfig } from "@/lib/config";

interface PremiumAlertProps {
  onUpgrade?: () => void;
}

export function PremiumAlert({ onUpgrade }: PremiumAlertProps) {
  const router = useRouter();
  const cardRadius = `${appConfig.design.card_radius}px`;

  const handleUpgrade = () => {
    if (onUpgrade) {
      onUpgrade();
    } else {
      router.push("/premium");
    }
  };

  return (
    <div
      className="p-4 border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center justify-between gap-4"
      style={{ borderRadius: cardRadius }}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-amber-100 rounded-lg">
          <Lock className="w-5 h-5 text-amber-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">
            {appConfig.premium.premium_title}
          </p>
          <p className="text-xs text-gray-600">
            {appConfig.premium.premium_price}
          </p>
        </div>
      </div>

      <button
        onClick={handleUpgrade}
        className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center gap-2 text-sm whitespace-nowrap"
      >
        <Crown className="w-4 h-4" />
        Upgrade
      </button>
    </div>
  );
}
