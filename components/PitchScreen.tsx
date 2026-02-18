
import React from 'react';

interface PitchScreenProps {
  onContinue: () => void;
}

const PitchScreen: React.FC<PitchScreenProps> = ({ onContinue }) => {
  const videoUrl = "https://otxafqxfpqiffltyjjii.supabase.co/storage/v1/object/public/videos%20sauna/video.mp4";

  return (
    <div className="animate-fadeIn space-y-8 max-w-xl mx-auto">
      <div className="bg-white p-8 rounded-3xl border-4 border-slate-800 cartoon-shadow">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-6 leading-tight text-center">
          ⚡ Veja como seu plano personalizado vai funcionar
        </h2>

        {/* Lista de Benefícios */}
        <div className="space-y-4 mb-8">
          {[
            "Treinos guiados",
            "Plano alimentar calculado",
            "Acompanhamento diário",
            "Resultados visíveis"
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border-2 border-slate-200">
              <span className="text-green-500 text-xl font-black">✔</span>
              <span className="font-bold text-slate-700">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Container do Vídeo HTML5 */}
        <div className="aspect-video w-full bg-slate-900 rounded-2xl border-4 border-slate-800 overflow-hidden mb-8 relative">
           <video 
             className="w-full h-full object-cover"
             controls
             playsInline
             controlsList="nodownload"
             onContextMenu={(e) => e.preventDefault()}
           >
             <source src={videoUrl} type="video/mp4" />
             Seu navegador não suporta a tag de vídeo.
           </video>
        </div>
        
        <p className="text-center text-slate-500 font-bold mb-6 italic">
          “Assista 1 minuto e entenda”
        </p>

        <button 
          onClick={onContinue}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-6 rounded-2xl border-4 border-slate-800 cartoon-shadow-sm transition-all transform hover:scale-105 text-xl"
        >
          👉 CONTINUAR MEU PLANO
        </button>
      </div>
    </div>
  );
};

export default PitchScreen;
