
import React from 'react';

const CoachHeader: React.FC = () => {
  return (
    <div className="text-center mb-8 relative">
      <div className="inline-block relative">
        <div className="w-32 h-32 bg-yellow-400 rounded-full border-4 border-slate-800 flex items-center justify-center text-6xl shadow-xl animate-bounce">
          🦸‍♀️
        </div>
        <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-slate-800">
          CAPITÃ LEVEZA
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4 leading-tight">
        Sejam bem-vindos! <br/>
        <span className="text-blue-600">Vamos melhorar sua saúde?</span>
      </h1>
      <p className="text-slate-600 mt-2 max-w-md mx-auto text-lg">
        Olá! Sua saúde é o seu maior tesouro! Eu sou a Capitã Leveza e vou te ajudar a ajustar seu motor hoje! 🔋✨
      </p>
    </div>
  );
};

export default CoachHeader;
