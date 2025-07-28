import openai from 'openai';
import {zodTextFormat} from 'openai/helpers/zod'
import z from 'zod';

const client = new openai.OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const parseSubjectFromPDFText = async (text: string) => {
  const response = await client.responses.parse({
    model: 'gpt-4.1-nano',
    instructions: `Extraia os nome da matéria e a lista de assuntos (objetos de estudo) do plano de ensino.
    Exemplo de objeto de estudo: 
    [
      '1.1 A EVOLUÇÃO HISTÓRICA DOS COMPUTADORES',
      '1.2 OS COMPONENTES DE UM SISTEMA COMPUTACIONAL',
      '1.3 O PAPEL DO SISTEMA OPERACIONAL NOS COMPUTADORES',
      '1.4 A IMPORTÂNCIA DA COMUNICAÇÃO EM REDE COM OS SISTEMAS COMPUTACIONAIS',
      '2.1 A ESTRUTURA BÁSICA DE UM COMPUTADOR',
      '2.2 OS PRINCÍPIOS BÁSICOS DOS SUBSISTEMAS DE PROCESSAMENTO',
      '2.3 O ESSENCIAL SOBRE O SISTEMA OPERACIONAL',
      '3.1 AS UNIDADES DE INFORMAÇÃO UTILIZADAS PELOS SISTEMAS DE COMPUTAÇÃO',
      '3.2 OS SISTEMAS DE NUMERAÇÃO A PARTIR DA PRÁTICA DE OPERAÇÕES ARITMÉTICAS',
      '3.3 A CONVERSÃO ENTRE OS SISTEMAS DE NUMERAÇÃO',
      '3.4 AS TABELAS DE REPRESENTAÇÃO DE DADOS',
      '4.1 AS OPERAÇÕES BÁSICAS DA ÁLGEBRA BOOLEANA',
      '4.2 PORTAS LÓGICAS, OPERAÇÕES LÓGICAS E AS SUAS TABELAS VERDADE',
      '4.3 AS EXPRESSÕES LÓGICAS E DIAGRAMAS LÓGICOS',
      '5.1 AS VANTAGENS DA COMPUTAÇÃO DE ALTO DESEMPENHO',
      '5.2 OS TIPOS DE ORGANIZAÇÕES DE PROCESSADORES PARALELOS',
      '5.3 AS QUESTÕES DE DESEMPENHO DO HARDWARE QUE DIRECIONAM O MOVIMENTO PARA OS COMPUTADORES MULTICORE',
      '6.1 IDENTIFICAR CARACTERÍSTICAS E PROPRIEDADES DA ARQUITETURA CISC',
      '6.2 IDENTIFICAR CARACTERÍSTICAS E PROPRIEDADES DA ARQUITETURA RISC',
    ],
    `,
    input: text,
    text: {
      format: zodTextFormat(z.object({
        subjectName: z.string(),
        studyObjects: z.array(z.string()),
      }), "subject"),
    }
  });

  return response.output_parsed;
}