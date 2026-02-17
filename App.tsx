
import React, { useState, useMemo } from 'react';
import { QUESTIONS } from './questions';
import { ResultData, Modo, PillarType } from './types';
import Results from './components/Results';

// ADICIONE SEU LINK DE CHECKOUT AQUI
const CHECKOUT_LINK = 'https://pay.hotmart.com/SEU_LINK_AQUI';

const App: React.FC = () => {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'calculating' | 'results'>('welcome');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStart = () => setStep('quiz');

  const handleAnswer = (val: number) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setStep('calculating');
      setTimeout(() => setStep('results'), 2000);
    }
  };

  const handleGoToCheckout = () => {
    // Redireciona diretamente para o link externo de checkout.
    window.location.href = CHECKOUT_LINK;
  };

  const resultData: ResultData | null = useMemo(() => {
    if (step !== 'results') return null;
    const pilarScores: Record<PillarType, number> = {
      [PillarType.Alimentacao]: 0,
      [PillarType.Movimento]: 0,
      [PillarType.SonoEstresse]: 0,
      [PillarType.Consistencia]: 0,
    };
    answers.forEach((v, i) => {
      pilarScores[QUESTIONS[i].pilar] += v;
    });
    const total = answers.reduce((a, b) => a + b, 0);
    const score = Math.round((total / 36) * 100);
    let modo = Modo.Reinicio;
    if (score >= 70) modo = Modo.Turbo;
    else if (score >= 40) modo = Modo.Ajuste;
    return { pilarScores, totalScore: score, modo, answers };
  }, [step, answers]);

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-20">
      {step === 'welcome' && (
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="relative inline-block animate-float">
            <div className="w-40 h-40 bg-yellow-400 rounded-full border-8 border-slate-800 flex items-center justify-center text-7xl cartoon-shadow">
              🦸‍♀️
            </div>
            <div className="absolute -top-4 -right-4 bg-pink-600 text-white font-black px-4 py-2 rounded-xl border-4 border-slate-800 transform rotate-12">
              SEJAM BEM-VINDOS!
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-800 leading-tight">
              Olá! <br/><span className="text-blue-600">Vamos melhorar sua saúde?</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-sm mx-auto font-bold">
              Sua saúde é o seu maior tesouro! Vamos descobrir como está o motor do seu metabolismo? 🔋
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border-4 border-slate-800 cartoon-shadow">
            <p className="text-2xl font-black text-slate-800 mb-8">Quer fazer o quiz agora?</p>
            <div className="flex flex-col gap-4">
              <button 
                onClick={handleStart}
                className="bg-green-500 hover:bg-green-400 text-white font-black py-5 rounded-2xl border-4 border-slate-800 cartoon-shadow-sm transition-all transform hover:scale-105 text-xl"
              >
                SIM, VAMOS AGORA! 🚀
              </button>
              <button className="text-slate-400 font-bold hover:text-slate-600 transition-colors">
                Agora não...
              </button>
            </div>
            <p className="mt-6 text-sm text-slate-400 italic font-medium">Leva apenas 2 a 3 minutos!</p>
          </div>
        </div>
      )}

      {step === 'quiz' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-black text-blue-600 uppercase tracking-tighter">
                {QUESTIONS[currentIdx].pilar}
              </span>
              <span className="text-sm font-bold text-slate-400">
                {currentIdx + 1} / {QUESTIONS.length}
              </span>
            </div>
            <div className="h-6 bg-white rounded-full border-4 border-slate-800 overflow-hidden">
              <div 
                className="h-full bg-blue-500 progress-bar-inner"
                style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border-4 border-slate-800 cartoon-shadow">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-10 leading-tight">
              {QUESTIONS[currentIdx].text}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {QUESTIONS[currentIdx].options.map((opt) => (
                <button
                  key={opt.letter}
                  onClick={() => handleAnswer(opt.value)}
                  className="flex items-center text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all group relative overflow-hidden active:scale-95"
                >
                  <span className="w-12 h-12 flex-shrink-0 bg-slate-100 rounded-xl border-4 border-slate-800 flex items-center justify-center font-black text-slate-800 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {opt.letter}
                  </span>
                  <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 'calculating' && (
        <div className="text-center py-20 space-y-8">
          <div className="w-32 h-32 bg-blue-600 rounded-full border-8 border-slate-800 mx-auto flex items-center justify-center animate-spin">
            <span className="text-white text-5xl">⚡</span>
          </div>
          <h2 className="text-3xl font-black text-slate-800">Calibrando seu motor...</h2>
          <p className="text-slate-500 italic">"Quase pronto! A bateria está carregando o diagnóstico."</p>
        </div>
      )}

      {step === 'results' && resultData && (
        <Results 
          data={resultData} 
          onRestart={() => { setStep('welcome'); setCurrentIdx(0); setAnswers([]); }} 
          onGoToCheckout={handleGoToCheckout}
        />
      )}
    </div>
  );
};

export default App;
