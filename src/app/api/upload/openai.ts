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
  
    A lista dos objetos deve conter a numeração e o título de cada objeto de estudo. Os objetos de estudo normalmente ficam na seção "Temas de Aprendizagem". Extraia como objeto de estudo os subtemas, que são os itens numerados dentro dos temas de aprendizagem, incluindo a numeração e o título.

    Importante: O tópico deve ser omitido, ou seja, não deve ser incluído na lista de objetos de estudo. Apenas os subtemas devem ser extraídos.

    Exemplo básico: 
    1. Introdução à Arquitetura de Computadores
    1.1 A Evolução Histórica dos Computadores
    1.2 Os Componentes de um Sistema Computacional
    2. Estrutura Básica de um Computador
    2.1 A Estrutura Básica de um Computador
    2.2 Os Princípios Básicos dos Subsistemas de Processamento

    Não inclua nos objetos de estudo os tópicos principais, apenas os subtemas numerados.

    Não inclua nos objetos de estudo: 1. Introdução à Arquitetura de Computadores, 2. Estrutura Básica de um Computador, etc. Apenas os subtemas devem ser extraídos.

    Apenas inclua os subtemas numerados, como 1.1 A Evolução Histórica dos Computadores, 1.2 Os Componentes de um Sistema Computacional, etc.

    Exemplo de entrada:

    ---
    Nome da Disciplina: Arquitetura de Computadores
    Código da Disciplina: ARQ101
    Carga Horária: 60 horas
    Perfil Docente: Para ministrar a disciplina o docente precisa possuir graduação em...
    Ementa:
    Introdução à Arquitetura de Computadores; Estrutura Básica de um Computador; Sistemas de Numeração e Representação de Dados; Álgebra Booleana e Lógica Digital; Computação de Alto Desempenho; Arquiteturas CISC e RISC.

    Temas de Aprendizagem:
    1. Introdução à Arquitetura de Computadores
    1.1 A Evolução Histórica dos Computadores
    1.2 Os Componentes de um Sistema Computacional
    1.3 O Papel do Sistema Operacional nos Computadores
    1.4 A Importância da Comunicação em Rede com os Sistemas Computacionais
    2. Estrutura Básica de um Computador
    2.1 A Estrutura Básica de um Computador
    2.2 Os Princípios Básicos dos Subsistemas de Processamento
    2.3 O Essencial sobre o Sistema Operacional
    3. Sistemas de Numeração e Representação de Dados
    3.1 As Unidades de Informação Utilizadas pelos Sistemas de Computação
    3.2 Os Sistemas de Numeração a partir da Prática de Operações Aritméticas
    3.3 A Conversão entre os Sistemas de Numeração
    3.4 As Tabelas de Representação de Dados
    4. Álgebra Booleana e Lógica Digital
    4.1 As Operações Básicas da Álgebra Booleana
    4.2 Portas Lógicas, Operações Lógicas e as Suas Tabelas Verdade
    4.3 As Expressões Lógicas e Diagramas Lógicos
    5. Computação de Alto Desempenho
    5.1 As Vantagens da Computação de Alto Desempenho
    5.2 Os Tipos de Organizações de Processadores Paralelos
    5.3 As Questões de Desempenho do Hardware que Direcionam o Movimento para os Computadores Multicore
    6. Arquiteturas CISC e RISC
    6.1 Identificar Características e Propriedades da Arquitetura CISC
    6.2 Identificar Características e Propriedades da Arquitetura RISC
    
    Objetivos de Aprendizagem:
    Ao final da disciplina, o aluno deverá ser capaz de:
    - Identificar os principais componentes de um sistema computacional e suas funções.
    - Compreender a evolução histórica dos computadores e sua importância na sociedade atual.
    - Aplicar os conceitos de sistemas de numeração e representação de dados em problemas práticos.
    - Analisar e projetar circuitos lógicos utilizando álgebra booleana.
    ---    

    Exemplo de saída:
    ---
    {
      "subjectName": "Arquitetura de Computadores",
      "studyObjects": [
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
      ]
    }
    ---

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