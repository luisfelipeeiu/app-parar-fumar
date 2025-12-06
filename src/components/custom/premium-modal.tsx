"use client";

import { useRouter } from "next/navigation";
import { Crown, X, Check, Sparkles } from "lucide-react";
import { appConfig } from "@/lib/config";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock?: () => void;
}

export function PremiumModal({ isOpen, onClose, onUnlock }: PremiumModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleUnlock = () => {
    if (onUnlock) {
      onUnlock();
    } else {
      // Redirecionar para a página de planos Premium
      router.push("/premium");
    }
  };

  const cardRadius = `${appConfig.design.card_radius}px`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white w-full max-w-md shadow-2xl relative overflow-hidden"
        style={{ borderRadius: cardRadius }}
      >
        {/* Header com gradiente */}
        <div
          className="p-6 text-white relative"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <Crown className="w-8 h-8" />
            <h2 className="text-2xl font-bold">{appConfig.premium.premium_title}</h2>
          </div>
          <p className="text-white/90">{appConfig.premium.premium_subtitle}</p>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-semibold text-gray-900">
              O que vai ganhar:
            </h3>
          </div>

          {[
            appConfig.premium.premium_benefit_1,
            appConfig.premium.premium_benefit_2,
            appConfig.premium.premium_benefit_3,
            appConfig.premium.premium_benefit_4,
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100"
            >
              <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}

          {/* Preço */}
          <div className="text-center py-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-2 border-amber-200">
            <p className="text-sm text-gray-600 mb-1">Apenas</p>
            <p className="text-3xl font-bold text-amber-600">{appConfig.premium.premium_price}</p>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={handleUnlock}
              className="w-full py-4 text-white font-bold text-lg rounded-lg hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              }}
            >
              <Crown className="w-5 h-5" />
              {appConfig.premium.premium_button_unlock}
            </button>

            <button
              onClick={onClose}
              className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Agora não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
