"use client";

import { useEffect, useState } from "react";
import { getUserData, saveUserData } from "@/lib/store";
import { appConfig } from "@/lib/config";
import { Crown, Check, Sparkles, Shield, ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";

export default function PremiumPage() {
  const [userData, setUserData] = useState(getUserData());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  const handleUnlock = (plan: 'monthly' | 'lifetime') => {
    // Simulação de desbloqueio premium
    saveUserData({ isPremium: true });
    alert(`Premium ${plan === 'monthly' ? 'Mensal' : 'Vitalício'} ativado! (Demo)`);
  };

  const benefits = [
    {
      icon: Zap,
      title: "Exercícios anti-ansiedade",
      description: "Técnicas comprovadas para controlar a vontade de fumar"
    },
    {
      icon: Calendar,
      title: "Plano avançado de 7 dias",
      description: "Roteiro completo para os primeiros dias críticos"
    },
    {
      icon: Sparkles,
      title: "Áudios motivacionais",
      description: "Conteúdo exclusivo para manter-se motivado"
    },
    {
      icon: TrendingUp,
      title: "Estatísticas avançadas",
      description: "Análise detalhada do seu progresso e saúde"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {appConfig.premium.premium_title}
                </h1>
                <p className="text-sm text-gray-600">{appConfig.premium.premium_subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl shadow-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-16 h-16" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-2">Desbloqueie Todo o Potencial</h2>
          <p className="text-center text-yellow-50 text-lg">
            Ferramentas avançadas para garantir o seu sucesso
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Monthly Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:border-orange-300 transition-all">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plano Mensal</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-gray-900">€4.99</span>
                <span className="text-gray-600">/mês</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                Todos os recursos premium
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                Cancele a qualquer momento
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                Atualizações constantes
              </li>
            </ul>

            <button
              onClick={() => handleUnlock('monthly')}
              className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Começar Agora
            </button>
          </div>

          {/* Lifetime Plan */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-6 border-2 border-yellow-400 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
              MELHOR VALOR
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pagamento Único</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-gray-900">€19.99</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Acesso vitalício</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                Todos os recursos premium
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                Acesso para sempre
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                Todas as atualizações futuras
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                Suporte prioritário
              </li>
            </ul>

            <button
              onClick={() => handleUnlock('lifetime')}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Desbloquear Premium
            </button>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Garantia de 7 Dias</h4>
              <p className="text-sm text-gray-600">
                Não está satisfeito? Devolvemos o seu dinheiro, sem perguntas.
              </p>
            </div>
          </div>
        </div>

        {/* Already Premium */}
        {userData.isPremium && (
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-6 mt-6 border border-emerald-200">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-500" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Já é Premium!</h4>
                <p className="text-sm text-gray-700">
                  Aproveite todos os recursos exclusivos disponíveis.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <Link href="/" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs font-medium">Início</span>
            </Link>
            <Link href="/daily" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <Calendar className="w-6 h-6" />
              <span className="text-xs font-medium">Plano</span>
            </Link>
            <Link href="/history" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <Calendar className="w-6 h-6" />
              <span className="text-xs font-medium">Histórico</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <Check className="w-6 h-6" />
              <span className="text-xs font-medium">Perfil</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Imports adicionais necessários
import { Calendar, TrendingUp } from "lucide-react";
