"use client";

import { Logo } from "@/components/custom/logo";
import { appConfig } from "@/lib/config";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao App</span>
          </button>
          
          <div className="mb-6">
            <Logo variant="horizontal" size="lg" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Política de Privacidade
          </h1>
          <p className="text-gray-600">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Introdução */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introdução
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong>QuitSmokePro</strong> ("nós", "nosso" ou "aplicativo") está comprometido em proteger sua privacidade. 
              Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais 
              quando você usa nosso aplicativo.
            </p>
          </section>

          {/* Coleta de Dados */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Coleta de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O QuitSmokePro coleta e armazena as seguintes informações <strong>localmente no seu dispositivo</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Data em que você parou de fumar</li>
              <li>Quantidade de cigarros fumados por dia (antes de parar)</li>
              <li>Preço do maço de cigarros</li>
              <li>Histórico de progresso diário</li>
              <li>Preferências de idioma e configurações do aplicativo</li>
              <li>Status de assinatura Premium (se aplicável)</li>
            </ul>
          </section>

          {/* Uso de Dados */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Uso de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Usamos seus dados exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Calcular estatísticas sobre seu progresso (dias sem fumar, dinheiro economizado, etc.)</li>
              <li>Exibir seu histórico pessoal de evolução</li>
              <li>Personalizar sua experiência no aplicativo</li>
              <li>Fornecer recursos Premium (se você for assinante)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Importante:</strong> Todos os seus dados são armazenados <strong>localmente no seu dispositivo</strong>. 
              Não enviamos, compartilhamos ou armazenamos suas informações em servidores externos.
            </p>
          </section>

          {/* Armazenamento Local */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Armazenamento Local
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O QuitSmokePro utiliza o <strong>localStorage</strong> do navegador para armazenar seus dados. 
              Isso significa que:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
              <li>Seus dados permanecem no seu dispositivo</li>
              <li>Você tem controle total sobre suas informações</li>
              <li>Nenhum dado é enviado para servidores externos</li>
              <li>Se você limpar os dados do navegador, suas informações serão apagadas</li>
            </ul>
          </section>

          {/* Compartilhamento de Dados */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Compartilhamento de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Não compartilhamos seus dados com terceiros.</strong> O QuitSmokePro não vende, aluga ou 
              compartilha suas informações pessoais com empresas, organizações ou indivíduos externos.
            </p>
          </section>

          {/* Rastreamento e Análise */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Rastreamento e Análise
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O QuitSmokePro <strong>não utiliza ferramentas de rastreamento, análise ou publicidade de terceiros</strong>. 
              Não coletamos dados de uso, localização ou comportamento para fins de marketing ou análise.
            </p>
          </section>

          {/* Segurança */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Segurança
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de segurança para proteger seus dados locais. No entanto, como seus dados são 
              armazenados localmente no seu dispositivo, recomendamos que você:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
              <li>Mantenha seu dispositivo protegido com senha/PIN</li>
              <li>Não compartilhe seu dispositivo com pessoas não autorizadas</li>
              <li>Mantenha seu sistema operacional e navegador atualizados</li>
            </ul>
          </section>

          {/* Direitos do Usuário */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Seus Direitos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você tem total controle sobre seus dados:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Acesso:</strong> Você pode visualizar todos os seus dados a qualquer momento no aplicativo</li>
              <li><strong>Edição:</strong> Você pode editar suas informações na seção "Perfil"</li>
              <li><strong>Exclusão:</strong> Você pode excluir todos os seus dados limpando o cache/dados do navegador</li>
              <li><strong>Portabilidade:</strong> Como os dados são locais, você tem controle total sobre eles</li>
            </ul>
          </section>

          {/* Menores de Idade */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Menores de Idade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              O QuitSmokePro é destinado a usuários maiores de 18 anos. Não coletamos intencionalmente informações 
              de menores de idade. Se você é pai/mãe ou responsável e acredita que seu filho forneceu informações 
              pessoais, entre em contato conosco.
            </p>
          </section>

          {/* Alterações na Política */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Alterações nesta Política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer 
              alterações publicando a nova política nesta página e atualizando a data de "Última atualização" no topo.
            </p>
          </section>

          {/* Contato */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@quitsmokepro.app<br />
                <strong>Website:</strong> www.quitsmokepro.app
              </p>
            </div>
          </section>

          {/* Conformidade LGPD/GDPR */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Conformidade Legal
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidade está em conformidade com:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
              <li><strong>LGPD</strong> (Lei Geral de Proteção de Dados - Brasil)</li>
              <li><strong>GDPR</strong> (General Data Protection Regulation - União Europeia)</li>
              <li><strong>CCPA</strong> (California Consumer Privacy Act - EUA)</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} QuitSmokePro. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido com ❤️ para ajudar você a ter uma vida mais saudável.
          </p>
        </div>
      </div>
    </main>
  );
}
