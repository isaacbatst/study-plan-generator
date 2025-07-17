import { randomUUID } from 'crypto';

export const courses = {
  computerScience: {
    id: randomUUID(),
    name: 'Ciência da Computação',
  },
  systemsAnalysis: {
    id: randomUUID(),
    name: 'Análise e Desenvolvimento de Sistemas',
  },
  cybersecurity: {
    id: randomUUID(),
    name: 'Cybersecurity',
  }
}