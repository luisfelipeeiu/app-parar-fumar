"use client";

import { useState } from "react";
import { appConfig } from "@/lib/config";
import { Bell, Clock, Award, Edit2, Check, X } from "lucide-react";

interface NotificationsSettingsProps {
  onClose: () => void;
}

export function NotificationsSettings({ onClose }: NotificationsSettingsProps) {
  const [config, setConfig] = useState({
    notification_daily_message: appConfig.notifications.notification_daily_message,
    notification_daily_time: appConfig.notifications.notification_daily_time,
    notification_milestone_1: appConfig.notifications.notification_milestone_1,
    notification_milestone_3: appConfig.notifications.notification_milestone_3,
    notification_milestone_7: appConfig.notifications.notification_milestone_7,
    notification_milestone_30: appConfig.notifications.notification_milestone_30,
  });

  const [editingField, setEditingField] = useState<string | null>(null);

  const handleSave = () => {
    // Atualiza as configurações globais
    appConfig.notifications.notification_daily_message = config.notification_daily_message;
    appConfig.notifications.notification_daily_time = config.notification_daily_time;
    appConfig.notifications.notification_milestone_1 = config.notification_milestone_1;
    appConfig.notifications.notification_milestone_3 = config.notification_milestone_3;
    appConfig.notifications.notification_milestone_7 = config.notification_milestone_7;
    appConfig.notifications.notification_milestone_30 = config.notification_milestone_30;
    
    onClose();
  };

  const cardRadius = `${appConfig.design.card_radius}px`;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{ borderRadius: cardRadius }}
      >
        {/* Header */}
        <div
          className="sticky top-0 p-6 text-white z-10"
          style={{
            background: `linear-gradient(135deg, ${appConfig.colors.color_primary} 0%, ${appConfig.colors.color_secondary} 100%)`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Configurações de Notificações</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-white/90 mt-2">
            Personalize suas mensagens e horários de notificação
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Notificação Diária */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Notificação Diária
              </h3>
            </div>

            {/* Mensagem Diária */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Mensagem Diária
                </label>
                <button
                  onClick={() =>
                    setEditingField(
                      editingField === "daily_message" ? null : "daily_message"
                    )
                  }
                  className="p-1 hover:bg-blue-100 rounded transition-colors"
                >
                  {editingField === "daily_message" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Edit2 className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              </div>
              {editingField === "daily_message" ? (
                <textarea
                  value={config.notification_daily_message}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      notification_daily_message: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={2}
                />
              ) : (
                <p className="text-gray-700">{config.notification_daily_message}</p>
              )}
            </div>

            {/* Horário Diário */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Horário da Notificação
                </label>
                <button
                  onClick={() =>
                    setEditingField(
                      editingField === "daily_time" ? null : "daily_time"
                    )
                  }
                  className="p-1 hover:bg-blue-100 rounded transition-colors"
                >
                  {editingField === "daily_time" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Edit2 className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              </div>
              {editingField === "daily_time" ? (
                <input
                  type="time"
                  value={config.notification_daily_time}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      notification_daily_time: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-700 font-mono text-lg">
                  {config.notification_daily_time}
                </p>
              )}
            </div>
          </div>

          {/* Marcos de Progresso */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Marcos de Progresso
              </h3>
            </div>

            {/* Milestone 1 dia */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  🏆 1 Dia sem Fumar
                </label>
                <button
                  onClick={() =>
                    setEditingField(
                      editingField === "milestone_1" ? null : "milestone_1"
                    )
                  }
                  className="p-1 hover:bg-purple-100 rounded transition-colors"
                >
                  {editingField === "milestone_1" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Edit2 className="w-4 h-4 text-purple-600" />
                  )}
                </button>
              </div>
              {editingField === "milestone_1" ? (
                <textarea
                  value={config.notification_milestone_1}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      notification_milestone_1: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={2}
                />
              ) : (
                <p className="text-gray-700">{config.notification_milestone_1}</p>
              )}
            </div>

            {/* Milestone 3 dias */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  🏆 3 Dias sem Fumar
                </label>
                <button
                  onClick={() =>
                    setEditingField(
                      editingField === "milestone_3" ? null : "milestone_3"
                    )
                  }
                  className="p-1 hover:bg-purple-100 rounded transition-colors"
                >
                  {editingField === "milestone_3" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Edit2 className="w-4 h-4 text-purple-600" />
                  )}
                </button>
              </div>
              {editingField === "milestone_3" ? (
                <textarea
                  value={config.notification_milestone_3}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      notification_milestone_3: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={2}
                />
              ) : (
                <p className="text-gray-700">{config.notification_milestone_3}</p>
              )}
            </div>

            {/* Milestone 7 dias */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  🏆 7 Dias sem Fumar (1 Semana)
                </label>
                <button
                  onClick={() =>
                    setEditingField(
                      editingField === "milestone_7" ? null : "milestone_7"
                    )
                  }
                  className="p-1 hover:bg-purple-100 rounded transition-colors"
                >
                  {editingField === "milestone_7" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Edit2 className="w-4 h-4 text-purple-600" />
                  )}
                </button>
              </div>
              {editingField === "milestone_7" ? (
                <textarea
                  value={config.notification_milestone_7}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      notification_milestone_7: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={2}
                />
              ) : (
                <p className="text-gray-700">{config.notification_milestone_7}</p>
              )}
            </div>

            {/* Milestone 30 dias */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  🏆 30 Dias sem Fumar (1 Mês)
                </label>
                <button
                  onClick={() =>
                    setEditingField(
                      editingField === "milestone_30" ? null : "milestone_30"
                    )
                  }
                  className="p-1 hover:bg-purple-100 rounded transition-colors"
                >
                  {editingField === "milestone_30" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Edit2 className="w-4 h-4 text-purple-600" />
                  )}
                </button>
              </div>
              {editingField === "milestone_30" ? (
                <textarea
                  value={config.notification_milestone_30}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      notification_milestone_30: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={2}
                />
              ) : (
                <p className="text-gray-700">{config.notification_milestone_30}</p>
              )}
            </div>
          </div>

          {/* Informações */}
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              💡 <strong>Dica:</strong> As notificações serão exibidas automaticamente
              quando você atingir cada marco de progresso. Personalize as mensagens
              para torná-las mais motivadoras!
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSave}
              className="flex-1 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all"
              style={{ backgroundColor: appConfig.colors.color_primary }}
            >
              Salvar Configurações
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
