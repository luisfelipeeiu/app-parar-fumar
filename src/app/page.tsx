"use client";

import { useEffect, useState } from "react";
import { appConfig } from "@/lib/config";
import { getUserData, saveUserData } from "@/lib/store";
import { Calendar, TrendingUp, DollarSign, Clock, Target, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [userData, setUserData] = useState(getUserData());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleUpdate = () => setUserData(getUserData());
    window.addEventListener("userDataUpdated", handleUpdate);
    return () => window.removeEventListener("userDataUpdated", handleUpdate);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">A carregar...</p>
        </div>
      </div>
    );
  }

  // Cálculos
  const quitDate = new Date(userData.quitDate);
  const now = new Date();
  const hoursSinceQuit = Math.max(0, (now.getTime() - quitDate.getTime()) / (1000 * 60 * 60));
  const daysSinceQuit = Math.floor(hoursSinceQuit / 24);
  
  const costPerCigarette = userData.price_per_pack / userData.cigarettes_per_pack;
  const cigarettesAvoided = Math.floor((hoursSinceQuit / 24) * userData.cigarettes_per_day);
  const moneySaved = cigarettesAvoided * costPerCigarette;
  
  const dailyCost = (userData.cigarettes_per_day / userData.cigarettes_per_pack) * userData.price_per_pack;
  
  const progressPercentage = Math.min(100, (daysSinceQuit / userData.progress_goal_days) * 100);

  // Formatação de tempo
  const formatTime = (hours: number) => {
    const days = Math.floor(hours / 24);
    const remainingHours = Math.floor(hours % 24);
    const minutes = Math.floor((hours % 1) * 60);
    
    if (days > 0) return `${days}d ${remainingHours}h`;
    if (remainingHours > 0) return `${remainingHours}h ${minutes}m`;
    return `${minutes}m`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {appConfig.app_name}
              </h1>
            </div>
            {userData.isPremium && (
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-semibold rounded-full">
                Premium
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Progresso</h2>
            <Target className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Dia {daysSinceQuit} de {userData.progress_goal_days}</span>
              <span className="font-semibold text-emerald-600">{progressPercentage.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <p className="text-sm text-gray-500">Continue firme! Cada dia conta!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Tempo sem fumar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Tempo Livre</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{formatTime(hoursSinceQuit)}</p>
            <p className="text-sm text-gray-500">Sem fumar</p>
          </div>

          {/* Cigarros evitados */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Cigarros Evitados</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{cigarettesAvoided}</p>
            <p className="text-sm text-gray-500">Não fumados</p>
          </div>

          {/* Dinheiro poupado */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Poupança</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {userData.currencySymbol}{moneySaved.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Economizados</p>
          </div>
        </div>

        {/* Daily Cost Card */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-6 mb-6 border border-red-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Custo Diário Anterior</h3>
              <p className="text-3xl font-bold text-red-600">
                {userData.currencySymbol}{dailyCost.toFixed(2)}/dia
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {userData.cigarettes_per_day} cigarros por dia
              </p>
            </div>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/daily">
            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Ver Plano Diário
            </button>
          </Link>
          
          {!userData.isPremium && (
            <Link href="/premium">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Desbloquear Premium
              </button>
            </Link>
          )}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <Link href="/" className="flex flex-col items-center gap-1 text-emerald-600">
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs font-medium">Início</span>
            </Link>
            <Link href="/daily" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <Calendar className="w-6 h-6" />
              <span className="text-xs font-medium">Plano</span>
            </Link>
            <Link href="/history" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <Clock className="w-6 h-6" />
              <span className="text-xs font-medium">Histórico</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <Target className="w-6 h-6" />
              <span className="text-xs font-medium">Perfil</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
