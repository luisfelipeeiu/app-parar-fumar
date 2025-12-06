"use client";

import { useEffect, useState } from "react";
import { getUserData } from "@/lib/store";
import { Calendar, TrendingUp, AlertCircle, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function HistoryPage() {
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  // Cálculos
  const quitDate = new Date(userData.quitDate);
  const now = new Date();
  const daysSinceQuit = Math.max(0, Math.floor((now.getTime() - quitDate.getTime()) / (1000 * 60 * 60 * 24)));
  const relapseCount = userData.relapses?.length || 0;
  const successRate = daysSinceQuit > 0 ? ((daysSinceQuit - relapseCount) / daysSinceQuit * 100) : 100;

  // Gerar calendário dos últimos 30 dias
  const generateCalendar = () => {
    const days = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const isRelapse = userData.relapses?.some(r => r.startsWith(dateStr));
      const isBeforeQuit = date < quitDate;
      
      days.push({
        date: date,
        dateStr: dateStr,
        day: date.getDate(),
        isRelapse: isRelapse,
        isBeforeQuit: isBeforeQuit,
        isSuccess: !isRelapse && !isBeforeQuit
      });
    }
    return days;
  };

  const calendar = generateCalendar();

  // Dados para gráfico semanal (últimos 7 dias)
  const weeklyData = calendar.slice(-7).map(day => ({
    day: day.date.toLocaleDateString('pt-PT', { weekday: 'short' }),
    success: day.isSuccess ? 1 : 0
  }));

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
              <h1 className="text-2xl font-bold text-gray-900">Histórico</h1>
              <p className="text-sm text-gray-600">Acompanhe a sua jornada</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Dias de Sucesso</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{daysSinceQuit - relapseCount}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Recaídas</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{relapseCount}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Taxa de Sucesso</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{successRate.toFixed(0)}%</p>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Últimos 30 Dias
          </h3>
          
          <div className="grid grid-cols-7 gap-2">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
              <div key={day} className="text-center text-xs font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
            
            {calendar.map((day, index) => (
              <div
                key={index}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                  day.isBeforeQuit
                    ? 'bg-gray-100 text-gray-400'
                    : day.isRelapse
                    ? 'bg-red-100 text-red-700 border-2 border-red-300'
                    : day.isSuccess
                    ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300'
                    : 'bg-gray-50 text-gray-500'
                }`}
              >
                {day.day}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-100 border-2 border-emerald-300 rounded"></div>
              <span className="text-gray-600">Sucesso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 border-2 border-red-300 rounded"></div>
              <span className="text-gray-600">Recaída</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-100 rounded"></div>
              <span className="text-gray-600">Antes de começar</span>
            </div>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Progresso Semanal
          </h3>
          
          <div className="flex items-end justify-between gap-2 h-48">
            {weeklyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gray-100 rounded-t-lg relative" style={{ height: '100%' }}>
                  <div
                    className={`absolute bottom-0 w-full rounded-t-lg transition-all ${
                      data.success ? 'bg-gradient-to-t from-emerald-500 to-emerald-400' : 'bg-gray-300'
                    }`}
                    style={{ height: data.success ? '100%' : '20%' }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-600">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Message */}
        {daysSinceQuit > 0 && (
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-6 mt-6 border border-emerald-100">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Continue firme!</h4>
                <p className="text-sm text-gray-700">
                  Já são {daysSinceQuit} dias desde que começou. Cada dia é uma vitória!
                  {relapseCount > 0 && " Não desista, as recaídas fazem parte do processo."}
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
            <Link href="/history" className="flex flex-col items-center gap-1 text-emerald-600">
              <Calendar className="w-6 h-6" />
              <span className="text-xs font-medium">Histórico</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <CheckCircle className="w-6 h-6" />
              <span className="text-xs font-medium">Perfil</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
