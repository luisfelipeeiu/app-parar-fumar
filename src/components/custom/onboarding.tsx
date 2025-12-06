"use client";

import { useState } from "react";
import { appConfig } from "@/lib/config";
import { OnboardingData } from "@/lib/types";
import { ChevronRight, Sparkles, Calendar, Cigarette, DollarSign, Clock } from "lucide-react";

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    smokingYears: 0,
    cigarettesPerDay: 20,
    pricePerPack: 12.0,
    startDate: new Date().toISOString().split("T")[0],
  });

  const cardRadius = `${appConfig.design.card_radius}px`;
  const shadowClass = "shadow-2xl";

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(onboardingData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return true; // Welcome screen
      case 1:
        return onboardingData.smokingYears > 0;
      case 2:
        return onboardingData.cigarettesPerDay > 0;
      case 3:
        return onboardingData.pricePerPack > 0;
      case 4:
        return onboardingData.startDate !== "";
      case 5:
        return true; // Finish screen
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        // Welcome Screen
        return (
          <div className="text-center space-y-6">
            <div
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${appConfig.colors.color_primary} 0%, ${appConfig.colors.color_secondary} 100%)`,
              }}
            >
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {appConfig.onboarding.onboarding_welcome}
              </h1>
              <p className="text-gray-600 text-lg">
                Vamos configurar seu perfil para começar sua jornada livre do cigarro
              </p>
            </div>
          </div>
        );

      case 1:
        // Question 1: Há quanto tempo você fuma?
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: appConfig.colors.color_primary }}
              >
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {appConfig.onboarding.onboarding_question_1}
              </h2>
              <p className="text-gray-600">Isso nos ajuda a personalizar sua experiência</p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Anos fumando
              </label>
              <input
                type="number"
                min="0"
                value={onboardingData.smokingYears || ""}
                onChange={(e) =>
                  setOnboardingData({
                    ...onboardingData,
                    smokingYears: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-6 py-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
              <div className="grid grid-cols-4 gap-2">
                {[1, 5, 10, 15].map((years) => (
                  <button
                    key={years}
                    onClick={() =>
                      setOnboardingData({ ...onboardingData, smokingYears: years })
                    }
                    className="py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    {years} {years === 1 ? "ano" : "anos"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        // Question 2: Quantos cigarros por dia?
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: appConfig.colors.color_danger }}
              >
                <Cigarette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {appConfig.onboarding.onboarding_question_2}
              </h2>
              <p className="text-gray-600">Em média, quantos cigarros você fuma diariamente?</p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Cigarros por dia
              </label>
              <input
                type="number"
                min="1"
                value={onboardingData.cigarettesPerDay || ""}
                onChange={(e) =>
                  setOnboardingData({
                    ...onboardingData,
                    cigarettesPerDay: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-6 py-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="20"
              />
              <div className="grid grid-cols-4 gap-2">
                {[10, 20, 30, 40].map((cigs) => (
                  <button
                    key={cigs}
                    onClick={() =>
                      setOnboardingData({ ...onboardingData, cigarettesPerDay: cigs })
                    }
                    className="py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    {cigs}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        // Question 3: Qual o preço do maço?
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: appConfig.colors.color_success }}
              >
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {appConfig.onboarding.onboarding_question_3}
              </h2>
              <p className="text-gray-600">Isso nos ajuda a calcular quanto você vai economizar</p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Preço do maço (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.50"
                value={onboardingData.pricePerPack || ""}
                onChange={(e) =>
                  setOnboardingData({
                    ...onboardingData,
                    pricePerPack: parseFloat(e.target.value) || 0,
                  })
                }
                className="w-full px-6 py-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="12.00"
              />
              <div className="grid grid-cols-4 gap-2">
                {[8, 10, 12, 15].map((price) => (
                  <button
                    key={price}
                    onClick={() =>
                      setOnboardingData({ ...onboardingData, pricePerPack: price })
                    }
                    className="py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    R$ {price}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        // Question 4: Quando deseja começar?
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: appConfig.colors.color_secondary }}
              >
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {appConfig.onboarding.onboarding_question_4}
              </h2>
              <p className="text-gray-600">Escolha a data do seu último cigarro</p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Data de início
              </label>
              <input
                type="date"
                value={onboardingData.startDate}
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) =>
                  setOnboardingData({
                    ...onboardingData,
                    startDate: e.target.value,
                  })
                }
                className="w-full px-6 py-4 text-lg font-semibold text-center border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() =>
                    setOnboardingData({
                      ...onboardingData,
                      startDate: new Date().toISOString().split("T")[0],
                    })
                  }
                  className="py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                >
                  Hoje
                </button>
                <button
                  onClick={() => {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    setOnboardingData({
                      ...onboardingData,
                      startDate: yesterday.toISOString().split("T")[0],
                    });
                  }}
                  className="py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                >
                  Ontem
                </button>
              </div>
            </div>
          </div>
        );

      case 5:
        // Finish Screen
        return (
          <div className="text-center space-y-6">
            <div
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center animate-pulse"
              style={{
                background: `linear-gradient(135deg, ${appConfig.colors.color_success} 0%, ${appConfig.colors.color_secondary} 100%)`,
              }}
            >
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {appConfig.onboarding.onboarding_finish}
              </h1>
              <p className="text-gray-600 text-lg">
                Seu perfil está configurado e você está pronto para começar sua jornada
              </p>
            </div>

            {/* Resumo dos dados */}
            <div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 border border-blue-200 space-y-3"
              style={{ borderRadius: cardRadius }}
            >
              <h3 className="font-semibold text-gray-900 mb-3">Resumo do seu perfil:</h3>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Anos fumando:</span>
                <span className="font-bold text-gray-900">{onboardingData.smokingYears} anos</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Cigarros por dia:</span>
                <span className="font-bold text-gray-900">{onboardingData.cigarettesPerDay}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Preço do maço:</span>
                <span className="font-bold text-gray-900">R$ {onboardingData.pricePerPack.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Data de início:</span>
                <span className="font-bold text-gray-900">
                  {new Date(onboardingData.startDate).toLocaleDateString("pt-BR")}
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2">
          <div
            className="h-2 transition-all duration-300"
            style={{
              width: `${((currentStep + 1) / 6) * 100}%`,
              backgroundColor: appConfig.colors.color_primary,
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div
              className={`bg-white ${shadowClass} p-8 border border-gray-100`}
              style={{ borderRadius: cardRadius }}
            >
              {renderStep()}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="p-6 bg-white border-t border-gray-200">
          <div className="max-w-md mx-auto flex gap-3">
            {currentStep > 0 && currentStep < 5 && (
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
              >
                Voltar
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex-1 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ backgroundColor: appConfig.colors.color_primary }}
            >
              {currentStep === 5 ? "Começar" : "Continuar"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="pb-4 flex justify-center gap-2">
          {[0, 1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full transition-all ${
                step === currentStep
                  ? "w-8"
                  : ""
              }`}
              style={{
                backgroundColor:
                  step <= currentStep
                    ? appConfig.colors.color_primary
                    : "#e5e7eb",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
