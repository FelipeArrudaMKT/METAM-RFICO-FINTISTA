
import React from 'react';
import { ResultData, PillarType, Modo } from '../types';
import MermaidChart from './MermaidChart';

interface ResultsProps {
  data: ResultData;
  onRestart: () => void;
  onGoToCheckout: () => void;
}

const Results: React.FC<ResultsProps> = ({ data, onRestart, onGoToCheckout }) => {
  const getProgressBar = (score: number, max: number = 9) => {
    const percentage = Math.min((score / max) * 100, 100);
    return (
      <div className="h-4 bg-slate-100 rounded-full border-2 border-slate-800 overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  const getModoColor = (modo: Modo) => {
    switch (modo) {
      case Modo.Turbo: return 'text-green-600';
      case Modo.Ajuste: return 'text-yellow-600';
      case Modo.Reinicio: return 'text-red-600';
      default: return 'text-slate-800';
    }
  };

  const getModoDescription = (modo: Modo) => {
    switch (modo) {
      case Modo.Turbo: return "Uau! Seu motor está voando! Poucos ajustes e você será imparável.";
      case Modo.Ajuste: return "Bom trabalho! Temos alguns parafusos para apertar, mas o caminho está certo.";
      case Modo.Reinicio: return "É hora de uma revisão completa! Mas não se preocupe, a Capitã está aqui para ajudar.";
      default: return "";
    }
  };

  const scoresArray = [
    data.pilarScores[PillarType.Alimentacao],
    data.pilarScores[PillarType.Movimento],
    data.pilarScores[PillarType.SonoEstresse],
    data.pilarScores[PillarType.Consistencia],
  ];

  return (
    <div className="animate-fadeIn space-y-8">
      <div className="bg-white p-8 rounded-3xl border-4 border-slate-800 cartoon-shadow">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-800 underline decoration-blue-500 decoration-8 underline-offset-8">Seu Diagnóstico:</h2>
          <div className={`text-5xl font-black mt-6 ${getModoColor(data.modo)}`}>
            {data.modo}
          </div>
          <p className="text-slate-600 font-bold mt-4 italic">
            {getModoDescription(data.modo)}
          </p>
        </div>

        <div className="space-y-6">
          {/* Fix: Explicitly cast Object.entries to ensure 'score' is typed as 'number' */}
          {(Object.entries(data.pilarScores) as [string, number][]).map(([pilar, score]) => (
            <div key={pilar} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-black text-slate-800 uppercase text-xs tracking-widest">{pilar}</span>
                <span className="font-bold text-slate-500">{score}/9</span>
              </div>
              {getProgressBar(score)}
            </div>
          ))}
        </div>

        <MermaidChart scores={scoresArray} />

        <div className="mt-10 p-6 bg-blue-50 rounded-2xl border-4 border-slate-800 border-dashed">
          <h3 className="text-xl font-black text-slate-800 mb-2">Placar Geral: {data.totalScore}%</h3>
          <p className="text-slate-600 font-bold leading-relaxed">
            Sua jornada começou! O Capitão analisou tudo e preparou o seu <strong>Cartoon Plan</strong> personalizado para os próximos <strong>7 Days</strong>.
          </p>
        </div>
      </div>

      <div className="bg-red-500 p-8 rounded-3xl border-4 border-slate-800 cartoon-shadow text-white">
        <h3 className="text-3xl font-black mb-4">🎁 Seu Próximo Passo</h3>
        <p className="text-red-100 mb-6 text-lg font-medium">
          Para garantir sua transformação, eu recomendo o seu <strong>Kit Start</strong>.
        </p>
        
        <div className="bg-black/10 p-6 rounded-2xl mb-8 border-2 border-white/20">
          <p className="font-bold text-xl mb-4 text-yellow-300">✅ Plan Start: 7 Days - Cartoon Plan</p>
          <ul className="space-y-3 opacity-90 font-bold">
            <li className="flex items-start gap-2">✨ Guia prático de 7 dias</li>
            <li className="flex items-start gap-2">✨ Atividades rápidas e divertidas</li>
            <li className="flex items-start gap-2">✨ Suporte para não desistir</li>
          </ul>
        </div>

        <button 
          onClick={onGoToCheckout}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-black py-6 rounded-2xl border-4 border-slate-800 cartoon-shadow-sm transition-all transform hover:scale-105 text-2xl"
        >
          QUERO MEU PLANO AGORA! 🚀
        </button>
      </div>

      <button 
        onClick={onRestart}
        className="w-full text-slate-400 font-bold hover:text-slate-600 transition-colors py-2"
      >
        Refazer o Quiz ↺
      </button>
    </div>
  );
};

export default Results;
