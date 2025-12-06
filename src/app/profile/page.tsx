"use client";

import { useEffect, useState } from "react";
import { getUserData, saveUserData } from "@/lib/store";
import { appConfig } from "@/lib/config";
import { User, Mail, Calendar, DollarSign, Target, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const [userData, setUserData] = useState(getUserData());
  const [mounted, setMounted] = useState(false);
  const [saved, setSaved] = useState(false);

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

  const handleSave = () => {
    saveUserData(userData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const dailyCost = (userData.cigarettes_per_day / userData.cigarettes_per_pack) * userData.price_per_pack;
  const monthlyCost = dailyCost * 30;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50 pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Perfil</h1>
              <p className="text-sm text-gray-600">Gerir as suas definições</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Utilizador QuitSmokePro</h2>
              <p className="text-sm text-gray-600">
                {userData.isPremium ? "Membro Premium" : "Membro Gratuito"}
              </p>
            </div>
          </div>
        </div>

        {/* Settings Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Definições Pessoais</h3>
          
          <div className="space-y-6">
            {/* Cigarros por dia */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Target className="w-4 h-4" />
                Cigarros por dia
              </label>
              <input
                type="number"
                value={userData.cigarettes_per_day}
                onChange={(e) => setUserData({ ...userData, cigarettes_per_day: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                min="1"
              />
            </div>

            {/* Preço por maço */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <DollarSign className="w-4 h-4" />
                Preço por maço ({userData.currencySymbol})
              </label>
              <input
                type="number"
                step="0.01"
                value={userData.price_per_pack}
                onChange={(e) => setUserData({ ...userData, price_per_pack: parseFloat(e.target.value) || 0 })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                min="0"
              />
            </div>

            {/* Data de início */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4" />
                Data de início
              </label>
              <input
                type="date"
                value={userData.quitDate.split('T')[0]}
                onChange={(e) => setUserData({ ...userData, quitDate: new Date(e.target.value).toISOString() })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Meta de dias */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Target className="w-4 h-4" />
                Meta de dias
              </label>
              <input
                type="number"
                value={userData.progress_goal_days}
                onChange={(e) => setUserData({ ...userData, progress_goal_days: parseInt(e.target.value) || 30 })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                min="1"
              />
              <p className="text-xs text-gray-500 mt-1">Objetivo de dias sem fumar</p>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className={`w-full mt-6 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
              saved 
                ? "bg-green-500" 
                : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:scale-105"
            }`}
          >
            <Save className="w-5 h-5" />
            {saved ? "Guardado com sucesso!" : "Guardar alterações"}
          </button>
        </div>

        {/* Statistics Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Estatísticas Financeiras</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Custo Diário</p>
              <p className="text-2xl font-bold text-gray-900">
                {userData.currencySymbol}{dailyCost.toFixed(2)}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Custo Mensal</p>
              <p className="text-2xl font-bold text-gray-900">
                {userData.currencySymbol}{monthlyCost.toFixed(2)}
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            Baseado em {userData.cigarettes_per_day} cigarros por dia
          </p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <Link href="/" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <Target className="w-6 h-6" />
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
            <Link href="/profile" className="flex flex-col items-center gap-1 text-emerald-600">
              <User className="w-6 h-6" />
              <span className="text-xs font-medium">Perfil</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
