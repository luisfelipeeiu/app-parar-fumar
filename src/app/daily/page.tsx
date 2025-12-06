"use client";

import { useEffect, useState } from "react";
import { getUserData } from "@/lib/store";
import { Calendar, CheckCircle, ArrowLeft, Target, Heart, Brain, Dumbbell } from "lucide-react";
import Link from "next/link";

interface DailyTask {
  id: number;
  title: string;
  description: string;
  icon: any;
  completed: boolean;
}

export default function DailyPage() {
  const [userData, setUserData] = useState(getUserData());
  const [mounted, setMounted] = useState(false);
  const [tasks, setTasks] = useState<DailyTask[]>([
    {
      id: 1,
      title: "Beba 2 litros de água",
      description: "Mantenha-se hidratado para eliminar toxinas",
      icon: Heart,
      completed: false
    },
    {
      id: 2,
      title: "Respire fundo 5 vezes",
      description: "Exercício de respiração para controlar ansiedade",
      icon: Brain,
      completed: false
    },
    {
      id: 3,
      title: "Caminhe 15 minutos",
      description: "Atividade física ajuda a reduzir o desejo de fumar",
      icon: Dumbbell,
      completed: false
    },
    {
      id: 4,
      title: "Evite gatilhos",
      description: "Identifique e evite situações que provocam vontade de fumar",
      icon: Target,
      completed: false
    }
  ]);

  useEffect(() => {
    setMounted(true);
    
    // Carregar tarefas do localStorage
    const savedTasks = localStorage.getItem('daily_tasks');
    const savedDate = localStorage.getItem('daily_tasks_date');
    const today = new Date().toDateString();
    
    if (savedTasks && savedDate === today) {
      setTasks(JSON.parse(savedTasks));
    } else {
      // Reset tasks para novo dia
      localStorage.setItem('daily_tasks_date', today);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  const toggleTask = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('daily_tasks', JSON.stringify(updatedTasks));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;

  // Cálculo de dias
  const quitDate = new Date(userData.quitDate);
  const now = new Date();
  const daysSinceQuit = Math.max(0, Math.floor((now.getTime() - quitDate.getTime()) / (1000 * 60 * 60 * 24)));

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
              <h1 className="text-2xl font-bold text-gray-900">Plano Diário</h1>
              <p className="text-sm text-gray-600">Dia {daysSinceQuit + 1} da sua jornada</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Progresso de Hoje</h2>
            <span className="text-2xl font-bold text-emerald-600">
              {completedCount}/{tasks.length}
            </span>
          </div>
          
          <div className="mb-3">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-600">
            {completedCount === tasks.length 
              ? "🎉 Parabéns! Completou todas as tarefas de hoje!"
              : `Faltam ${tasks.length - completedCount} tarefa${tasks.length - completedCount > 1 ? 's' : ''} para completar o dia`
            }
          </p>
        </div>

        {/* Daily Tasks */}
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Tarefas de Hoje
          </h3>
          
          {tasks.map((task) => {
            const Icon = task.icon;
            return (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`bg-white rounded-2xl shadow-lg p-6 border-2 cursor-pointer transition-all hover:shadow-xl ${
                  task.completed 
                    ? 'border-emerald-300 bg-emerald-50' 
                    : 'border-gray-100 hover:border-emerald-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    task.completed 
                      ? 'bg-emerald-500' 
                      : 'bg-gray-100'
                  }`}>
                    {task.completed ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <Icon className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-bold mb-1 ${
                      task.completed ? 'text-emerald-700 line-through' : 'text-gray-900'
                    }`}>
                      {task.title}
                    </h4>
                    <p className={`text-sm ${
                      task.completed ? 'text-emerald-600' : 'text-gray-600'
                    }`}>
                      {task.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Dica do Dia</h4>
              <p className="text-sm text-gray-700">
                Cada tarefa completada é um passo importante na sua jornada. 
                Mantenha o foco e lembre-se: você é mais forte do que imagina!
              </p>
            </div>
          </div>
        </div>

        {/* Premium Upsell */}
        {!userData.isPremium && (
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-6 mt-6 border border-yellow-200">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">🌟 Desbloqueie Mais Tarefas</h4>
              <p className="text-sm text-gray-700 mb-4">
                Com o Premium, tenha acesso a planos personalizados de 7 dias e exercícios avançados
              </p>
              <Link href="/premium">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Ver Premium
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <Link href="/" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
              <Target className="w-6 h-6" />
              <span className="text-xs font-medium">Início</span>
            </Link>
            <Link href="/daily" className="flex flex-col items-center gap-1 text-emerald-600">
              <Calendar className="w-6 h-6" />
              <span className="text-xs font-medium">Plano</span>
            </Link>
            <Link href="/history" className="flex flex-col items-center gap-1 text-gray-500 hover:text-emerald-600">
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
