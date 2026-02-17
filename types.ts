
export enum PillarType {
  Alimentacao = 'Alimentação',
  Movimento = 'Movimento',
  SonoEstresse = 'Sono e Estresse',
  Consistencia = 'Consistência'
}

export interface Option {
  label: string;
  value: number;
  letter: 'A' | 'B' | 'C' | 'D';
}

export interface Question {
  id: number;
  text: string;
  pilar: PillarType;
  options: Option[];
}

export enum Modo {
  Reinicio = 'Modo Reinício',
  Ajuste = 'Modo Ajuste',
  Turbo = 'Modo Turbo Sustentável'
}

export interface ResultData {
  pilarScores: Record<PillarType, number>;
  totalScore: number;
  modo: Modo;
  answers: number[];
}
