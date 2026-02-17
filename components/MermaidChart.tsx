
import React, { useEffect, useRef } from 'react';
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

interface MermaidChartProps {
  scores: number[];
}

const MermaidChart: React.FC<MermaidChartProps> = ({ scores }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = async () => {
      if (chartRef.current) {
        chartRef.current.innerHTML = '';
        const id = `mermaid-id-${Math.random().toString(36).substr(2, 9)}`;
        const definition = `
xychart-beta
    title "Seus Pilares da Leveza (0-9)"
    x-axis ["Aliment.","Movim.","Sono","Consist."]
    y-axis "Pontos" 0 --> 9
    bar [${scores.join(',')}]
        `;
        try {
          const { svg } = await mermaid.render(id, definition);
          chartRef.current.innerHTML = svg;
        } catch (e) {
          console.error("Mermaid error:", e);
        }
      }
    };
    render();
  }, [scores]);

  return (
    <div className="bg-white p-4 rounded-2xl border-4 border-slate-800 shadow-inner my-6 flex justify-center overflow-x-auto">
      <div ref={chartRef} className="min-w-[300px]" />
    </div>
  );
};

export default MermaidChart;
