
import { Question, PillarType } from './types';

export const QUESTIONS: Question[] = [
  // PILAR 1 — Alimentação (Q1–Q3)
  {
    id: 1,
    text: "Como é seu café da manhã na maioria dos dias?",
    pilar: PillarType.Alimentacao,
    options: [
      { letter: 'A', label: "Pulo ou é só café puro", value: 0 },
      { letter: 'B', label: "Algo rápido (pão/biscoito)", value: 1 },
      { letter: 'C', label: "Inclui proteína (ovo/iogurte) + fruta", value: 2 },
      { letter: 'D', label: "Proteína + fruta + fibra (aveia/pão integral)", value: 3 },
    ]
  },
  {
    id: 2,
    text: "Bebidas durante o dia:",
    pilar: PillarType.Alimentacao,
    options: [
      { letter: 'A', label: "Refrigerante/suco adoçado quase sempre", value: 0 },
      { letter: 'B', label: "Às vezes tomo água", value: 1 },
      { letter: 'C', label: "Bebo água com frequência", value: 2 },
      { letter: 'D', label: "Água é 'minha melhor amiga' (quase sempre)", value: 3 },
    ]
  },
  {
    id: 3,
    text: "Quando bate fome fora de hora:",
    pilar: PillarType.Alimentacao,
    options: [
      { letter: 'A', label: "Vou no doce/salgadinho", value: 0 },
      { letter: 'B', label: "Belisco qualquer coisa", value: 1 },
      { letter: 'C', label: "Tento algo mais 'de verdade' (fruta/lanche)", value: 2 },
      { letter: 'D', label: "Tenho um lanche planejado (proteína/fibra)", value: 3 },
    ]
  },
  // PILAR 2 — Movimento (Q4–Q6)
  {
    id: 4,
    text: "Quantos dias na semana você se mexe de propósito?",
    pilar: PillarType.Movimento,
    options: [
      { letter: 'A', label: "0", value: 0 },
      { letter: 'B', label: "1–2", value: 1 },
      { letter: 'C', label: "3–4", value: 2 },
      { letter: 'D', label: "5+", value: 3 },
    ]
  },
  {
    id: 5,
    text: "Seu 'dia normal' é:",
    pilar: PillarType.Movimento,
    options: [
      { letter: 'A', label: "Quase todo sentado", value: 0 },
      { letter: 'B', label: "Pouco ativo", value: 1 },
      { letter: 'C', label: "Caminho/escadas às vezes", value: 2 },
      { letter: 'D', label: "Ando bastante e faço pausas ativas", value: 3 },
    ]
  },
  {
    id: 6,
    text: "Treino/atividade que você MAIS toparia manter:",
    pilar: PillarType.Movimento,
    options: [
      { letter: 'A', label: "Nada, não consigo", value: 0 },
      { letter: 'B', label: "10 min de caminhada", value: 1 },
      { letter: 'C', label: "20–30 min (caminhada/dança)", value: 2 },
      { letter: 'D', label: "30+ min + força leve (agachamento, elástico)", value: 3 },
    ]
  },
  // PILAR 3 — Sono e Estresse (Q7–Q9)
  {
    id: 7,
    text: "Sua noite de sono geralmente é:",
    pilar: PillarType.SonoEstresse,
    options: [
      { letter: 'A', label: "< 5h ou muito ruim", value: 0 },
      { letter: 'B', label: "5–6h, irregular", value: 1 },
      { letter: 'C', label: "7h ok", value: 2 },
      { letter: 'D', label: "7–9h bem consistente", value: 3 },
    ]
  },
  {
    id: 8,
    text: "Quando estou estressado(a), eu:",
    pilar: PillarType.SonoEstresse,
    options: [
      { letter: 'A', label: "Desisto e desconto na comida", value: 0 },
      { letter: 'B', label: "Fico no automático", value: 1 },
      { letter: 'C', label: "Tento respirar/pausar", value: 2 },
      { letter: 'D', label: "Tenho uma rotina (respiração, caminhada, journaling)", value: 3 },
    ]
  },
  {
    id: 9,
    text: "Telas antes de dormir:",
    pilar: PillarType.SonoEstresse,
    options: [
      { letter: 'A', label: "Até pegar no sono", value: 0 },
      { letter: 'B', label: "Quase sempre", value: 1 },
      { letter: 'C', label: "Às vezes consigo reduzir", value: 2 },
      { letter: 'D', label: "Desligo 30–60 min antes", value: 3 },
    ]
  },
  // PILAR 4 — Consistência (Q10–Q12)
  {
    id: 10,
    text: "Você consegue manter um hábito por 7 dias?",
    pilar: PillarType.Consistencia,
    options: [
      { letter: 'A', label: "Quase nunca", value: 0 },
      { letter: 'B', label: "Às vezes", value: 1 },
      { letter: 'C', label: "Na maioria das vezes", value: 2 },
      { letter: 'D', label: "Sim, se for simples", value: 3 },
    ]
  },
  {
    id: 11,
    text: "Seu maior desafio hoje é:",
    pilar: PillarType.Consistencia,
    options: [
      { letter: 'A', label: "Falta de energia/ânimo", value: 0 },
      { letter: 'B', label: "Falta de tempo", value: 1 },
      { letter: 'C', label: "Falta de plano claro", value: 2 },
      { letter: 'D', label: "Falta de acompanhamento/organização", value: 3 },
    ]
  },
  {
    id: 12,
    text: "Se eu te dar um plano de 15 min/dia, você:",
    pilar: PillarType.Consistencia,
    options: [
      { letter: 'A', label: "Não faço", value: 0 },
      { letter: 'B', label: "Tento 2 dias", value: 1 },
      { letter: 'C', label: "Faço 4–5 dias", value: 2 },
      { letter: 'D', label: "Faço 7 dias", value: 3 },
    ]
  }
];
