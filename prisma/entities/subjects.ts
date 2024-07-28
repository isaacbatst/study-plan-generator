import { StudyObject } from "../../src/domain/entities-2/StudyObject"
import { Subject, SubjectProps } from "../../src/domain/entities-2/Subject"

const subjectsProps = {
//   1.   INTRODUÇÃO AOS PRINCÍPIOS FUNDAMENTAIS DA COMPUTAÇÃO
//   1.1 A EQUAÇÃO QUE REPRESENTA A ESSÊNCIA DOS COMPUTADORES
//   1.2 O PROCESSO DE EXPLORAÇÃO DO POTENCIAL DOS COMPUTADORES ATRAVÉS DE
//   CÓDIGOS E ALGORITMOS
//   1.3 PRIMEIRO CONTATO COM CÓDIGOS DE COMPUTADORES
//   2.   FUNDAMENTOS DE SOFTWARES DE COMPUTADORES
//   2.1 SOFTWARE: CONCEITOS BÁSICOS
//   2.2 SISTEMAS OPERACIONAIS E FIRMWARE
//   2.3 LINGUAGENS DE PROGRAMAÇÃO
//   3.   FUNDAMENTOS DE HARDWARE
//   3.1 HARDWARE DE COMPUTADOR
//   3.2 UNIDADES DE ARMAZENAMENTO
//   4.   REPRESENTAÇÃO DE IMAGENS EM COMPUTADORES
//   4.1 FUNDAMENTOS SOBRE PIXELS
//   4.2 O ESQUEMA RGB DE REPRESENTAÇÃO DE CORES EM COMPUTADORES
//   5.   NOÇÕES DE PROGRAMAÇÃO: EXEMPLOS COM MANIPULAÇÃO DE IMAGENS
//   DIGITAIS
//   5.1 INSTRUÇÃO PARA MANIPULAÇÃO SIMPLES DE DADOS
//   5.2 ESTRUTURA DE REPETIÇÃO FOR
//   5.3 EXPRESSÕES
//   5.4 ESTRUTURA CONDICIONAL
//  DIGITAIS
//   5.1 INSTRUÇÃO PARA MANIPULAÇÃO SIMPLES DE DADOS
//   5.2 ESTRUTURA DE REPETIÇÃO FOR
//   5.3 EXPRESSÕES
//   5.4 ESTRUTURA CONDICIONAL
//   6.   PENSAMENTO COMPUTACIONAL E APLICAÇÕES NAS ÁREAS DE CONHECIMENTO
//   6.1 PENSAMENTO COMPUTACIONAL E O PROFISSIONAL DO SÉCULO XXI
//   6.2 APLICAÇÕES NA ECONOMIA CRIATIVA, NEGÓCIOS E CIÊNCIAS JURÍDICAS
//   6.3 APLICAÇÕES NA EDUCAÇÃO E ENGENHARIA
  computingThinking: {
    name: 'Pensamento Computacional',
    studyObjects: [
      '1.1 A EQUAÇÃO QUE REPRESENTA A ESSÊNCIA DOS COMPUTADORES',
      '1.2 O PROCESSO DE EXPLORAÇÃO DO POTENCIAL DOS COMPUTADORES ATRAVÉS DE CÓDIGOS E ALGORITMOS',
      '1.3 PRIMEIRO CONTATO COM CÓDIGOS DE COMPUTADORES',
      '2.1 SOFTWARE: CONCEITOS BÁSICOS',
      '2.2 SISTEMAS OPERACIONAIS E FIRMWARE',
      '2.3 LINGUAGENS DE PROGRAMAÇÃO',
      '3.1 HARDWARE DE COMPUTADOR',
      '3.2 UNIDADES DE ARMAZENAMENTO',
      '4.1 FUNDAMENTOS SOBRE PIXELS',
      '4.2 O ESQUEMA RGB DE REPRESENTAÇÃO DE CORES EM COMPUTADORES',
      '5.1 INSTRUÇÃO PARA MANIPULAÇÃO SIMPLES DE DADOS',
      '5.2 ESTRUTURA DE REPETIÇÃO FOR',
      '5.3 EXPRESSÕES',
      '5.4 ESTRUTURA CONDICIONAL',
      '6.1 PENSAMENTO COMPUTACIONAL E O PROFISSIONAL DO SÉCULO XXI',
      '6.2 APLICAÇÕES NA ECONOMIA CRIATIVA, NEGÓCIOS E CIÊNCIAS JURÍDICAS',
      '6.3 APLICAÇÕES NA EDUCAÇÃO E ENGENHARIA',
    ],
  },
  //   1.   O AMBIENTE WEB CLIENTE X SERVIDOR E AS TECNOLOGIAS
  //  1.1 AMBIENTE WEB
  //  1.2 INTERFACE
  //  1.3 TECNOLOGIAS DO LADO CLIENTE
  //  1.4 TECNOLOGIAS DO LADO SERVIDOR
  //  2.   LINGUAGEM DE MARCAÇÃO DE HYPERTEXTO  HTML
  //  2.1 ESTRUTURA DE PÁGINA WEB
  //  2.2 TAGS NA HTML
  //  2.3 TAGS COMPLEMENTARES
  //  2.4 FORMULÁRIO DE PÁGINA WEB
  //  3.   LINGUAGEM DE MARCAÇÃO E ESTILOS  CSS
  //  3.1 FUNDAMENTOS DA CSS
  //  3.2 RECURSOS DA CSS3
  //  3.3 BOX MODEL, PSEUDOCLASSES, PSEUDOELEMENTOS E POSICIONAMENTO
  //  3.4 FRAMEWORKS CSS
  //  4.   LINGUAGEM JAVASCRIPT
  //  4.1 UTILIZAÇÃO DO JAVASCRIPT
  //  4.2 ESTRUTURAS DE DECISÃO E REPETIÇÃO
  //  4.3 VETOR EM JAVASCRIPT
  //  4.4 AJAX E JSON
  //  5.   PROGRAMAÇÃO DE PÁGINAS DINÂMICAS COM PHP
  //  5.1 LINGUAGEM PHP
  //  5.2 ESTRUTURAS DE DECISÃO E REPETIÇÃO EM PHP
  //  5.3 VETORES E FUNÇÕES EM PHP
  //  6.   INTEGRAÇÃO DO PHP COM BANCO DE DADOS
  //  6.1 CLASSE PDO
  // 5.2 ESTRUTURAS DE DECISÃO E REPETIÇÃO EM PHP
  //  5.3 VETORES E FUNÇÕES EM PHP
  //  6.   INTEGRAÇÃO DO PHP COM BANCO DE DADOS
  //  6.1 CLASSE PDO
  //  6.2 MÉTODOS DA CLASSE PDO
  //  6.3 APLICAÇÃO COM HTML E PHP
  webDevelopment: {
    name: 'Desenv. Web em Html5, Css, Javascript e Php',
    studyObjects: [
      '1.1 AMBIENTE WEB',
      '1.2 INTERFACE',
      '1.3 TECNOLOGIAS DO LADO CLIENTE',
      '1.4 TECNOLOGIAS DO LADO SERVIDOR',
      '2.1 ESTRUTURA DE PÁGINA WEB',
      '2.2 TAGS NA HTML',
      '2.3 TAGS COMPLEMENTARES',
      '2.4 FORMULÁRIO DE PÁGINA WEB',
      '3.1 FUNDAMENTOS DA CSS',
      '3.2 RECURSOS DA CSS3',
      '3.3 BOX MODEL, PSEUDOCLASSES, PSEUDOELEMENTOS E POSICIONAMENTO',
      '3.4 FRAMEWORKS CSS',
      '4.1 UTILIZAÇÃO DO JAVASCRIPT',
      '4.2 ESTRUTURAS DE DECISÃO E REPETIÇÃO',
      '4.3 VETOR EM JAVASCRIPT',
      '4.4 AJAX E JSON',
      '5.1 LINGUAGEM PHP',
      '5.2 ESTRUTURAS DE DECISÃO E REPETIÇÃO EM PHP',
      '5.3 VETORES E FUNÇÕES EM PHP',
      '6.1 CLASSE PDO',
      '6.2 MÉTODOS DA CLASSE PDO',
      '6.3 APLICAÇÃO COM HTML E PHP',
    ],
  },
  // 1.   BASE COMPUTACIONAL
  // 1.1 A EVOLUÇÃO HISTÓRICA DOS COMPUTADORES
  // 1.2 OS COMPONENTES DE UM SISTEMA COMPUTACIONAL
  // 1.3 O PAPEL DO SISTEMA OPERACIONAL NOS COMPUTADORES
  // 1.4 A IMPORTÂNCIA DA COMUNICAÇÃO EM REDE COM OS SISTEMAS COMPUTACIONAIS
  // 2.   COMPONENTES DE HARDWARE
  // 2.1 A ESTRUTURA BÁSICA DE UM COMPUTADOR
  // 2.2 OS PRINCÍPIOS BÁSICOS DOS SUBSISTEMAS DE PROCESSAMENTO
  // 2.3 O ESSENCIAL SOBRE O SISTEMA OPERACIONAL
  // 3.   REPRESENTAÇÃO DE DADOS
  // 3.1 AS UNIDADES DE INFORMAÇÃO UTILIZADAS PELOS SISTEMAS DE COMPUTAÇÃO
  // 3.2 OS SISTEMAS DE NUMERAÇÃO A PARTIR DA PRÁTICA DE OPERAÇÕES ARITMÉTICAS
  // 3.3 A CONVERSÃO ENTRE OS SISTEMAS DE NUMERAÇÃO
  // 3.4 AS TABELAS DE REPRESENTAÇÃO DE DADOS
  // 4.   LÓGICA DIGITAL
  // 4.1 AS OPERAÇÕES BÁSICAS DA ÁLGEBRA BOOLEANA
  // 4.2 PORTAS LÓGICAS, OPERAÇÕES LÓGICAS E AS SUAS TABELAS VERDADE
  // 4.3 AS EXPRESSÕES LÓGICAS E DIAGRAMAS LÓGICOS
  // 5.   PROCESSAMENTO EM PARALELO
  // 5.1 AS VANTAGENS DA COMPUTAÇÃO DE ALTO DESEMPENHO
  // 5.2 OS TIPOS DE ORGANIZAÇÕES DE PROCESSADORES PARALELOS
  // 5.3 AS QUESTÕES DE DESEMPENHO DO HARDWARE QUE DIRECIONAM O MOVIMENTO
  // PARA OS COMPUTADORES MULTICORE
  // 6.   ARQUITETURA RISC X CISC
  // 6.1 IDENTIFICAR CARACTERÍSTICAS E PROPRIEDADES DA ARQUITETURA CISC
  // 6.2 IDENTIFICAR CARACTERÍSTICAS E PROPRIEDADES DA ARQUITETURA RISC
  computersArchitecture: {
    name: 'Arquitetura de Computadores',
    studyObjects: [
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
  },
  // 1.   PARADIGMAS DE LINGUAGEM PYTHON
  // 1.1 LINGUAGENS DE PROGRAMAÇÃO
  // 1.2 CRITÉRIOS DE AVALIAÇÃO DE LINGUAGENS DE PROGRAMAÇÃO
  // 1.3 PARADIAGMAS DE LINGUAGEM DE PROGRAMAÇÃO
  // 1.4 MÉTODOS DE IMPLEMENTAÇÃO DAS LINGUAGENS DE PROGRAMAÇÃO
  // 2 PYTHON BÁSICO
  // 2.1 LINGUAGEM PYTHON E SUAS CARACTERÍSTICAS
  // 2.2 VARIÁVEIS EM PYTHON
  // 2.3 TIPOS DE DADOS E EXPRESSÕES EM PYTHON
  // 2.4 ATRIBUIÇÃO, ENTRADA E SAÍDA DE DADOS EM PYTHON
  // 3 PYTHON ESTRUTURADO
  // 3.1 ESTRUTURAS DE DECISÃO E REPETIÇÃO EM PYTHON
  // 3.2 CONCEITOS DE SUBPROGRAMAS EM PYTHON
  // 3.3 BIBLIOTECAS EM PYTHON
  // 3.4 EVENTOS EM PYTHON
  // 4 PYTHON ORIENTADO A OBJETOS
  // 4.1 ORIENTAÇÃO A OBJETOS
  // 4.2 ORIENTAÇÃO A OBJETOS EM PYTHON
  // 4.3 HERANÇA E POLIMORFISMO
  // 4.4 ORIENTAÇÃO A OBJETOS APLICADA A PYTHON E A OUTRAS LINGUAGENS
  // 5 PYTHON EM OUTROS PARADIAGMAS
  // 5.1 LINGUAGEM FUNCIONAL EM PYTHON
  // 5.2 COMPUTAÇÃO CONCORRENTE EM PYTHON
  // 5.3 DESENVOLVIMENTO WEB EM PYTHON
  // 5.4 CIÊNCIA DE DADOS EM PYTHON
  programmingParadigms: {
    name: 'Paradigmas de Ling. de Programação com Python',
    studyObjects: [
      '1.1 LINGUAGENS DE PROGRAMAÇÃO',
      '1.2 CRITÉRIOS DE AVALIAÇÃO DE LINGUAGENS DE PROGRAMAÇÃO',
      '1.3 PARADIAGMAS DE LINGUAGEM DE PROGRAMAÇÃO',
      '1.4 MÉTODOS DE IMPLEMENTAÇÃO DAS LINGUAGENS DE PROGRAMAÇÃO',
      '2.1 LINGUAGEM PYTHON E SUAS CARACTERÍSTICAS',
      '2.2 VARIÁVEIS EM PYTHON',
      '2.3 TIPOS DE DADOS E EXPRESSÕES EM PYTHON',
      '2.4 ATRIBUIÇÃO, ENTRADA E SAÍDA DE DADOS EM PYTHON',
      '3.1 ESTRUTURAS DE DECISÃO E REPETIÇÃO EM PYTHON',
      '3.2 CONCEITOS DE SUBPROGRAMAS EM PYTHON',
      '3.3 BIBLIOTECAS EM PYTHON',
      '3.4 EVENTOS EM PYTHON',
      '4.1 ORIENTAÇÃO A OBJETOS',
      '4.2 ORIENTAÇÃO A OBJETOS EM PYTHON',
      '4.3 HERANÇA E POLIMORFISMO',
      '4.4 ORIENTAÇÃO A OBJETOS APLICADA A PYTHON E A OUTRAS LINGUAGENS',
      '5.1 LINGUAGEM FUNCIONAL EM PYTHON',
      '5.2 COMPUTAÇÃO CONCORRENTE EM PYTHON',
      '5.3 DESENVOLVIMENTO WEB EM PYTHON',
      '5.4 CIÊNCIA DE DADOS EM PYTHON',
    ],
  },
  // 1.   PRINCÍPIOS DA SEGURANÇA E O CICLO DE VIDA DA INFORMAÇÃO
  // 1.1 SEGURANÇA DA INFORMAÇÃO
  // 1.2 SEGURANÇA FÍSICA, LÓGICA E CONTROLE DE ACESSO
  // 2.   AMEAÇAS E VULNERABILIDADES À SEGURANÇA DE INFORMAÇÃO
  // 2.1 TIPOS DE AMEAÇAS E VULNERABILIDADES
  // 2.2 ATAQUES CIBERNÉTICOS
  // 3.   NORMAS DE SEGURANÇA DA INFORMAÇÃO
  // 3.1 FINALIDADES E BENEFÍCIOS DAS NORMAS
  // 3.2 APLICAÇÃO DAS NORMAS
  // 4.   BOAS PRÁTICAS EM SEGURANÇA DA INFORMAÇÃO
  // 4.1 SENHAS, TREINAMENTO E PROTEÇÃO
  // 4.2 CONTROLE DE ACESSO, VÍRUS E BACKUPS
  // 4.3 CRIPTOGRAFIA DE DADOS E CERTIFICADO DIGITAL
  // 5.   GESTÃO DE RISCO
  // 5.1 PRESERVAÇÃO DA CONFIDENCIALIDADE, INTEGRIDADE E DISPONILIDADE (CID)
  // 5.2 ETAPAS DA GESTÃO DE RISCOS
  // 6.   GESTÃO DE CONTINUIDADE DO NEGÓCIO
  // 6.1 PLANO DE CONTINUIDADE DE NEGÓCIOS (PCN)
  // 6.2 ETAPAS DO PCN
  // 6.3 PGCN E BIBLIOTECA ITIL
  securityIntroduction: {
    name: 'Introdução à Segurança da Informação',
    studyObjects: [
      '1.1 SEGURANÇA DA INFORMAÇÃO',
      '1.2 SEGURANÇA FÍSICA, LÓGICA E CONTROLE DE ACESSO',
      '2.1 TIPOS DE AMEAÇAS E VULNERABILIDADES',
      '2.2 ATAQUES CIBERNÉTICOS',
      '3.1 FINALIDADES E BENEFÍCIOS DAS NORMAS',
      '3.2 APLICAÇÃO DAS NORMAS',
      '4.1 SENHAS, TREINAMENTO E PROTEÇÃO',
      '4.2 CONTROLE DE ACESSO, VÍRUS E BACKUPS',
      '4.3 CRIPTOGRAFIA DE DADOS E CERTIFICADO DIGITAL',
      '5.1 PRESERVAÇÃO DA CONFIDENCIALIDADE, INTEGRIDADE E DISPONILIDADE (CID)',
      '5.2 ETAPAS DA GESTÃO DE RISCOS',
      '6.1 PLANO DE CONTINUIDADE DE NEGÓCIOS (PCN)',
      '6.2 ETAPAS DO PCN',
      '6.3 PGCN E BIBLIOTECA ITIL',
    ], 
  },
  // 1.   TEORIA DOS CONJUNTOS E PRINCÍPIOS DE CONTAGEM
  // 1.1 LINGUAGEM DA TEORIA DOS CONJUNTOS
  // 1.2 PRINCÍPIOS DE CONTAGEM
  // 1.3 AGRUPAMENTOS COMBINATÓRIOS
  // 2.   GRÁFICOS E INTERPRETAÇÕES GRÁFICAS
  // 2.1 CONCEITOS DE INTERVALOS
  // 2.2 CARACTERIZAÇÃO DO PLANO CARTESIANO
  // 2.3 DEFINIÇÃO E CARACTERÍSTICAS DA FUNÇÃO
  // 2.4 MÁXIMOS, MÍNIMOS E RAÍZES DE UMA FUNÇÃO
  // 3.   APROFUNDAMENTO DE FUNÇÕES
  // 3.1 DOMÍNIO, IMAGEM E O CONTRADOMÍNIO DE FUNÇÕES
  // 3.2 TIPOS DE FUNÇÕES: INJETORA, SOBREJETORA E BIJETORA
  // 3.3 FUNÇÕES CRESCENTES E DECRESCENTES
  // 3.4 FUNÇÕES PERIÓDICAS
  // 4.   CÁLCULO PROPOSICIONAL
  // 4.1 PROPOSIÇÕES SIMPLES E COMPOSTAS
  // 4.2 TABELAVERDADE DE PROPOSIÇÕES COMPOSTAS
  // 4.3 VALOR LÓGICO DAS PROPOSIÇÕES
  // 4.4 SIGNIFICADO DE IMPLICAÇÃO LÓGICA
  // 5.   CÁLCULO DE PREDICADOS
  // 5.1 CONJUNTO UNIVERSO E O CONJUNTO VERDADE
  // 5.2 QUANTIFICADORES UNIVERSAL E EXISTENCIAL
  // 5.3 VARIÁVEIS LIVRES E LIGADAS E A NEGAÇÃO DE PROPOSIÇÕES COM
  // QUANTIFICADORES
  // 5.4 APLICAÇÕES DO CÁLCULO DE PREDICADOS NA COMPUTAÇÃO
  // 6.   MÉTODOS DE DEMONSTRAÇÃO
  // 6.1 DEMONSTRAÇÕES POR VACUIDADE, TRIVIAL, DIRETA E INDIRETA
  // 6.2 DEMONSTRAÇÕES POR CONTRADIÇÃO E POR REDUÇÃO AO ABSURDO
  // 6.3 TÉCNICAS ENVOLVENDO QUANTIFICADORES
  // 6.4 PRINCÍPIO DA INDUÇÃO
  math: {
    name: 'Matemática e Lógica',
    studyObjects: [
      '1.1 LINGUAGEM DA TEORIA DOS CONJUNTOS',
      '1.2 PRINCÍPIOS DE CONTAGEM',
      '1.3 AGRUPAMENTOS COMBINATÓRIOS',
      '2.1 CONCEITOS DE INTERVALOS',
      '2.2 CARACTERIZAÇÃO DO PLANO CARTESIANO',
      '2.3 DEFINIÇÃO E CARACTERÍSTICAS DA FUNÇÃO',
      '2.4 MÁXIMOS, MÍNIMOS E RAÍZES DE UMA FUNÇÃO',
      '3.1 DOMÍNIO, IMAGEM E O CONTRADOMÍNIO DE FUNÇÕES',
      '3.2 TIPOS DE FUNÇÕES: INJETORA, SOBREJETORA E BIJETORA',
      '3.3 FUNÇÕES CRESCENTES E DECRESCENTES',
      '3.4 FUNÇÕES PERIÓDICAS',
      '4.1 PROPOSIÇÕES SIMPLES E COMPOSTAS',
      '4.2 TABELAVERDADE DE PROPOSIÇÕES COMPOSTAS',
      '4.3 VALOR LÓGICO DAS PROPOSIÇÕES',
      '4.4 SIGNIFICADO DE IMPLICAÇÃO LÓGICA',
      '5.1 CONJUNTO UNIVERSO E O CONJUNTO VERDADE',
      '5.2 QUANTIFICADORES UNIVERSAL E EXISTENCIAL',
      '5.3 VARIÁVEIS LIVRES E LIGADAS E A NEGAÇÃO DE PROPOSIÇÕES COM QUANTIFICADORES',
      '5.4 APLICAÇÕES DO CÁLCULO DE PREDICADOS NA COMPUTAÇÃO',
      '6.1 DEMONSTRAÇÕES POR VACUIDADE, TRIVIAL, DIRETA E INDIRETA',
      '6.2 DEMONSTRAÇÕES POR CONTRADIÇÃO E POR REDUÇÃO AO ABSURDO',
      '6.3 TÉCNICAS ENVOLVENDO QUANTIFICADORES',
      '6.4 PRINCÍPIO DA INDUÇÃO',
    ],
  },
  //   1.   FUNDAMENTOS DE COMPUTAÇÃO EM NUVEM
  //  1.1 COMPUTAÇÃO EM NUVEM
  //  1.2 MODELOS DE COMPUTAÇÃO EM NUVEM
  //  1.3 TECNOLOGIAS HABILITADORAS DA COMPUTAÇÃO EM NUVEM
  //  2.   ARQUITETURA DE COMPUTAÇÃO EM NUVEM
  //  2.1 ARQUITETURA DE INFRAESTRUTURA E COMPUTAÇÃO EM NUVEM
  //  2.2 ADMINISTRAÇÃO DE CAMADAS DE SERVIDORES
  //  2.3 ARQUITETURA DE SOLUÇÃO EM NUVEM
  //  3.   SEGURANÇA EM COMPUTAÇÃO EM NUVEM
  //  3.1 INTRODUÇÃO A SEGURANÇA EM COMPUTAÇÃO EM NUVEM
  //  3.2 ASPECTOS DE SEGURANÇA
  //  3.3 SERVIÇOS EM NUVEM
  //  3.4 ORIENTAÇÕES DA CLOUD SECUTIRY ALLIANCE (CSA)
  //  4.   AMBIENTE DE COMPUTAÇÃO EM NUVEM  AZURE
  //  4.1 OS CONCEITOS DO AZURE: MODELOS E NUVEM
  //  4.2 A ARQUITETURA E OS SERVIÇOS DO AZURE
  //  4.3 GERENCIAMENTO, GOVERNANÇA E MONITORAMENTO DO AZURE
  //  4.4 APLICAÇÕES PRÁTICAS DO AZURE
  //  5.   AMBIENTE DE COMPUTAÇÃO EM NUVEM  AWS
  //  5.1 COMPUTAÇÃO NA AWS
  //  5.2 ARMAZENAMENTO
  //  5.3 REDE E CONECTIVIDADE
  //  5.4 APLICAÇÕES PRÁTICAS COM AWS
  //  6.   AMBIENTE DE COMPUTAÇÃO EM NUVEM  GOOGLE CLOUD
  //  6.1 CONCEITOS DO GOOGLE CLOUD
  //  6.2 INFRAESTRUTURA E APLICATIVOS COM GOOGLE CLOUD
  //  6.3 SEGURANÇA E OPERAÇÕES NO GOOGLE CLOUD
  //  6.4 APLICAÇÕES PRÁTICAS COM O GOOGLE CLOUD
  cloudComputing: {
    name: 'Computação em Nuvem',
    studyObjects: [
      '1.1 COMPUTAÇÃO EM NUVEM',
      '1.2 MODELOS DE COMPUTAÇÃO EM NUVEM',
      '1.3 TECNOLOGIAS HABILITADORAS DA COMPUTAÇÃO EM NUVEM',
      '2.1 ARQUITETURA DE INFRAESTRUTURA E COMPUTAÇÃO EM NUVEM',
      '2.2 ADMINISTRAÇÃO DE CAMADAS DE SERVIDORES',
      '2.3 ARQUITETURA DE SOLUÇÃO EM NUVEM',
      '3.1 INTRODUÇÃO A SEGURANÇA EM COMPUTAÇÃO EM NUVEM',
      '3.2 ASPECTOS DE SEGURANÇA',
      '3.3 SERVIÇOS EM NUVEM',
      '3.4 ORIENTAÇÕES DA CLOUD SECUTIRY ALLIANCE (CSA)',
      '4.1 OS CONCEITOS DO AZURE: MODELOS E NUVEM',
      '4.2 A ARQUITETURA E OS SERVIÇOS DO AZURE',
      '4.3 GERENCIAMENTO, GOVERNANÇA E MONITORAMENTO DO AZURE',
      '4.4 APLICAÇÕES PRÁTICAS DO AZURE',
      '5.1 COMPUTAÇÃO NA AWS',
      '5.2 ARMAZENAMENTO',
      '5.3 REDE E CONECTIVIDADE',
      '5.4 APLICAÇÕES PRÁTICAS COM AWS',
      '6.1 CONCEITOS DO GOOGLE CLOUD',
      '6.2 INFRAESTRUTURA E APLICATIVOS COM GOOGLE CLOUD',
      '6.3 SEGURANÇA E OPERAÇÕES NO GOOGLE CLOUD',
      '6.4 APLICAÇÕES PRÁTICAS COM O GOOGLE CLOUD',
    ],
  },
  // 1 ESTRUTURAS DE DADOS HETEROGÊNEAS
  // 1.1 PONTEIROS
  // 1.2 ESTRUTURA DE DADOS HETEROGENEAS
  // 1.3 STRUCTS
  // 1.4 ESTRUTURAS ANINHADAS, VETORES E TYPEDEF
  // 2 MODULARIZAÇÃO
  // 2.1 PROCEDIMENTOS E FUNÇÕES
  // 2.2 TIPOS DE FUNÇÕES PREDEFINIDAS
  // 2.3 PASSAGEM DE PARÂMETROS POR VALOR E POR REFERÊNCIA
  // 2.4 ESCOPO DE VARIÁVEIS
  // 3 LISTAS, PILHAS, FILAS E DEQUES
  // 3.1 MANIPULAÇÃO DE DADOS NA MEMÓRIA
  // 3.2 MANIPULAÇÃO POR ENCADEAMENTO E POR ESTRUTURAS SEQUENCIAIS
  // 3.3 PILHAS
  // 3.4 FILAS
  // 4 ORDENAÇÃO
  // 4.1 CONCEITOS FUNDAMENTAIS DE ORDENAÇÃO
  // 4.2 ALGORITMOS DE ORDENAÇÃO
  // 5 ARVORES
  // 5.1 CONCEITOS RELATIVOS À ÁRVORES
  // 5.2 ÁRVORES BINÁRIAS
  // 5.3 ÁRVORES DE BUSCA

  dataStructures: {
    name: 'Estrutura de Dados',
    studyObjects: [
      '1.1 PONTEIROS',
      '1.2 ESTRUTURA DE DADOS HETEROGENEAS',
      '1.3 STRUCTS',
      '1.4 ESTRUTURAS ANINHADAS, VETORES E TYPEDEF',
      '2.1 PROCEDIMENTOS E FUNÇÕES',
      '2.2 TIPOS DE FUNÇÕES PREDEFINIDAS',
      '2.3 PASSAGEM DE PARÂMETROS POR VALOR E POR REFERÊNCIA',
      '2.4 ESCOPO DE VARIÁVEIS',
      '3.1 MANIPULAÇÃO DE DADOS NA MEMÓRIA',
      '3.2 MANIPULAÇÃO POR ENCADEAMENTO E POR ESTRUTURAS SEQUENCIAIS',
      '3.3 PILHAS',
      '3.4 FILAS',
      '4.1 CONCEITOS FUNDAMENTAIS DE ORDENAÇÃO',
      '4.2 ALGORITMOS DE ORDENAÇÃO',
      '5.1 CONCEITOS RELATIVOS À ÁRVORES',
      '5.2 ÁRVORES BINÁRIAS',
      '5.3 ÁRVORES DE BUSCA',
    ],
  },
  //   1.   SISTEMA DE BANCO DE DADOS
  //  1.1 HISTÓRICO DOS BANCOS DE DADOS
  //  1.2 SISTEMAS DE BANCO DE DADOS (SBD)
  //  1.3 SISTEMAS DE GERÊNCIA DE BANCO DE DADOS (SGBD)
  //  2.   PROJETO DE BANCO DE DADOS: MODELAGEM CONCEITUAL
  //  2.1 ETAPAS DO PROJETO
  //  2.2 DIAGRAMA DE ENTIDADE E RELACIONAMENTO
  //  2.3 MODELAGEM DE ENTIDADES E RELACIONAMENTOS
  //  2.4 MODELAGEM DE ATRIBUTOS
  //  3.   PROJETO DE BANCO DE DADOS: MODELAGEM LÓGICA E FÍSICA
  //  3.1 MODELO RELACIONAL
  //  3.2 FORMAS NORMAIS
  //  3.3 MAPEAMENTO CONCEITUALLÓGICO
  //  3.4 MODELO NO SGBD
  //  4.   CRIAÇÃO E MANIPULAÇÃO DE OBJETOS NO POSTGRESQL
  //  4.1 POSTGRESQL
  //  4.2 CRIAÇÃO E ALTERAÇÃO DE TABELAS
  //  4.3 MANIPULAÇÃO DE LINHAS NAS TABELAS
  //  4.4 CONTROLE DE TRANSAÇÃO
  // 4.   CRIAÇÃO E MANIPULAÇÃO DE OBJETOS NO POSTGRESQL
  //  4.1 POSTGRESQL
  //  4.2 CRIAÇÃO E ALTERAÇÃO DE TABELAS
  //  4.3 MANIPULAÇÃO DE LINHAS NAS TABELAS
  //  4.4 CONTROLE DE TRANSAÇÃO
  //  5.   CONSULTAS EM UMA TABELA NO POSTGRESQL
  //  5.1 COMANDO SELECT
  //  5.2 CLÁUSULA WHERE
  //  5.3 AGRUPAMENTO DE DADOS
  //  6.   CONSULTA COM VÁRIAS TABELAS NO POSTGRESQL
  //  6.1 JUNÇÕES INTERIOR E EXTERIOR
  //  6.2 SUBCONSULTAS ANINHADAS E CORRELATAS
  //  6.3 OPERADORES DE CONJUNTO
  databases: {
    name: 'Banco de Dados',
    studyObjects: [
      '1.1 HISTÓRICO DOS BANCOS DE DADOS',
      '1.2 SISTEMAS DE BANCO DE DADOS (SBD)',
      '1.3 SISTEMAS DE GERÊNCIA DE BANCO DE DADOS (SGBD)',
      '2.1 ETAPAS DO PROJETO',
      '2.2 DIAGRAMA DE ENTIDADE E RELACIONAMENTO',
      '2.3 MODELAGEM DE ENTIDADES E RELACIONAMENTOS',
      '2.4 MODELAGEM DE ATRIBUTOS',
      '3.1 MODELO RELACIONAL',
      '3.2 FORMAS NORMAIS',
      '3.3 MAPEAMENTO CONCEITUAL-LÓGICO',
      '3.4 MODELO NO SGBD',
      '4.1 POSTGRESQL',
      '4.2 CRIAÇÃO E ALTERAÇÃO DE TABELAS',
      '4.3 MANIPULAÇÃO DE LINHAS NAS TABELAS',
      '4.4 CONTROLE DE TRANSAÇÃO',
      '5.1 COMANDO SELECT',
      '5.2 CLÁUSULA WHERE',
      '5.3 AGRUPAMENTO DE DADOS',
      '6.1 JUNÇÕES INTERIOR E EXTERIOR',
      '6.2 SUBCONSULTAS ANINHADAS E CORRELATAS',
      '6.3 OPERADORES DE CONJUNTO',
    ],
  },
  //   1.   CONCEITOS BÁSICOS DE MODELAGEM DE SISTEMAS
  //   1.1 A IMPORTÂNCIA DOS MODELOS NA EXPOSIÇÃO DE REQUISITOS E SOLUÇÕES
  //   SISTÊMICAS
  //   1.2 OS CONCEITOS E PILARES DE ANÁLISE E PROJETO ORIENTADOS A OBJETOS
  //   1.3 AS VISÕES, A SÍNTESE GERAL E OS DIAGRAMAS DA UML
  //   2.   UML PARA MODELAGEM DO DOMÍNIO
  //   2.1 REQUISITOS FUNCIONAIS DE UM SISTEMA COM USO DE DIAGRAMA DE CASOS DE
  //   USO
  //   2.2 CASOS DE USO POR MEIO DE ESPECIFICAÇÕES TEXTUAIS
  //   2.3 CLASSES E SEUS RELACIONAMENTOS EM UM DOMÍNIO DE APLICAÇÃO COM USO DE
  //   DIAGRAMA DE CLASSES
  //   2.4 DIAGRAMAS DE OBJETOS E DE PACOTES PARA APOIAR A ESPECIFICAÇÃO DE UM
  //   SISTEMA
  //   3.   UTILIZANDO UML PARA PROJETAR O SOFTWARE
  //  DIAGRAMA DE CLASSES
  //   2.4 DIAGRAMAS DE OBJETOS E DE PACOTES PARA APOIAR A ESPECIFICAÇÃO DE UM
  //   SISTEMA
  //   3.   UTILIZANDO UML PARA PROJETAR O SOFTWARE
  //   3.1 OS DIAGRAMAS DE INTERAÇÃO NO PROJETO DE SISTEMA
  //   3.2 O DIAGRAMA DE CLASSES DA ANÁLISE NO PROJETO DE SISTEMA
  //   3.3 OS DIAGRAMAS DE ESTADO E DE ATIVIDADES NO PROJETO DE SISTEMA
  //   3.4 OS DIAGRAMAS DE COMPONENTES E DE IMPLANTAÇÃO
  //   4.   ESTUDO DE CASO DE MODELAGEM DE SISTEMAS EM UML
  //   4.1 DOCUMENTO DE REQUISITOS PARA UM ESTUDO DE CASO DE MODELAGEM DE
  //   SISTEMAS
  //   4.2 MODELO DE CASOS DE USO PARA UM ESTUDO DE CASO DE MODELAGEM DE
  //   SISTEMAS EM UML
  //   4.3 MODELOS DE ANÁLISE PARA UM ESTUDO DE CASO DE MODELAGEM DE SISTEMAS
  //   EM UML
  //   4.4 MODELO DE PROJETO PARA UM ESTUDO DE CASO DE MODELAGEM DE SISTEMAS
  //   EM UML
  //   5.   INTRODUÇÃO A PADRÕES DE PROJETO  DESIGN PATTERNS
  //   5.1 CONCEITOS GERAIS DE PADRÕES DE PROJETO, SEUS ELEMENTOS E SUAS
  //   CARACTERÍSTICAS
  //   5.2 O PROPÓSITO DOS PADRÕES GRASP
  //   5.3 CARACTERÍSTICAS DOS PRINCÍPIOS SOLID
  //   5.4 O PROPÓSITO DOS PRINCIPAIS PADRÕES GOF
  umlSystemsModeling: {
    name: 'Modelagem de Sistemas UML',
    studyObjects: [
      '1.1 A IMPORTÂNCIA DOS MODELOS NA EXPOSIÇÃO DE REQUISITOS E SOLUÇÕES SISTÊMICAS',
      '1.2 OS CONCEITOS E PILARES DE ANÁLISE E PROJETO ORIENTADOS A OBJETOS',
      '1.3 AS VISÕES, A SÍNTESE GERAL E OS DIAGRAMAS DA UML',
      '2.1 REQUISITOS FUNCIONAIS DE UM SISTEMA COM USO DE DIAGRAMA DE CASOS DE USO',
      '2.2 CASOS DE USO POR MEIO DE ESPECIFICAÇÕES TEXTUAIS',
      '2.3 CLASSES E SEUS RELACIONAMENTOS EM UM DOMÍNIO DE APLICAÇÃO COM USO DE DIAGRAMA DE CLASSES',
      '2.4 DIAGRAMAS DE OBJETOS E DE PACOTES PARA APOIAR A ESPECIFICAÇÃO DE UM SISTEMA',
      '3.1 OS DIAGRAMAS DE INTERAÇÃO NO PROJETO DE SISTEMA',
      '3.2 O DIAGRAMA DE CLASSES DA ANÁLISE NO PROJETO DE SISTEMA',
      '3.3 OS DIAGRAMAS DE ESTADO E DE ATIVIDADES NO PROJETO DE SISTEMA',
      '3.4 OS DIAGRAMAS DE COMPONENTES E DE IMPLANTAÇÃO',
      '4.1 DOCUMENTO DE REQUISITOS PARA UM ESTUDO DE CASO DE MODELAGEM DE SISTEMAS',
      '4.2 MODELO DE CASOS DE USO PARA UM ESTUDO DE CASO DE MODELAGEM DE SISTEMAS EM UML',
      '4.3 MODELOS DE ANÁLISE PARA UM ESTUDO DE CASO DE MODELAGEM DE SISTEMAS EM UML',
      '4.4 MODELO DE PROJETO PARA UM ESTUDO DE CASO DE MODELAGEM DE SISTEMAS EM UML',
      '5.1 CONCEITOS GERAIS DE PADRÕES DE PROJETO, SEUS ELEMENTOS E SUAS CARACTERÍSTICAS',
      '5.2 O PROPÓSITO DOS PADRÕES GRASP',
      '5.3 CARACTERÍSTICAS DOS PRINCÍPIOS SOLID',
      '5.4 O PROPÓSITO DOS PRINCIPAIS PADRÕES GOF',
    ],
  },
  dataAnalysis: {
    name: 'Análise de Dados',
    studyObjects: [
      '1.1 FERRAMENTAS DE ANÁLISE EXPLORATÓRIA DE DADOS',
      '1.2 MEDIDAS DE POSIÇÃO OU TENDÊNCIA CENTRAL',
      '1.3 MEDIDAS DE DISPERSÃO OU VARIABILIDADE',
      '2.1 CONCEITOS BÁSICOS DE PROBABILIDADE',
      '2.2 CÁLCULOS PARA RESOLUÇÃO DE PROBLEMAS SIMPLES DE PROBABILIDADE',
      '2.3 PRINCIPAIS REGRAS DA TEORIA DAS PROBABILIDADES',
      '2.4 EVENTOS CONDICIONAIS COM BASE NA RESOLUÇÃO DE PROBLEMAS ASSOCIADOS A ELES',
      '3.1 OS CONCEITOS DE VARIÁVEIS ALEATÓRIAS DISCRETAS UNIDIMENSIONAIS',
      '3.2 AS DISTRIBUIÇÕES DE BERNOULLI E BINOMIAL',
      '3.3 AS DISTRIBUIÇÕES GEOMÉTRICA E HIPERGEOMÉTRICA',
      '3.4 A DISTRIBUIÇÃO DE POISSON',
      '4.1 OS CONCEITOS DE VARIÁVEIS ALEATÓRIAS CONTÍNUAS',
      '4.2 A DISTRIBUIÇÃO UNIFORME',
      '4.3 A DISTRIBUIÇÃO EXPONENCIAL',
      '4.4 A DISTRIBUIÇÃO NORMAL',
      '5.1 ASPECTOS CONCEITUAIS E APLICAÇÕES DE INTERVALOS DE CONFIANÇA',
      '5.2 ASPECTOS CONCEITUAIS E APLICAÇÕES DE TESTES DE HIPÓTESE',
      '6.1 A ÁREA DE ECONOMETRIA E A ABORDAGEM EMPÍRICA PARA PROBLEMAS SOCIOECONÔMICOS',
      '6.2 CONCEITOS BÁSICOS DOS ESTIMADORES DE MÍNIMOS QUADRADOS ORDINÁRIO',
    ],
  },
  structuredProgrammingIntroduction: {
    name: 'Introdução à Programação Estruturada em C',
    studyObjects: [
      '1.1 INTRODUÇÃO AO PENSAMENTO COMPUTACIONAL',
      '1.2 FERRAMENTAS PARA REPRESENTAÇÃO DE SOLUÇÕES',
      '1.3 PSEUDOCÓDIGO',
      '2.1 TIPOS DE DADOS',
      '2.2 OPERADORES',
      '3.1 ATRIBUIÇÃO',
      '3.2 SAÍDA DE DADOS',
      '3.3 ENTRADA DE DADOS',
      '4.1 DECISÃO SIMPLES E COMPOSTA',
      '4.2 DECISÃO ENCADEADA, ANINHADA E MÚLTIPLAS ALTERNATIVAS',
      '5.1 COMANDO FOR',
      '5.2 REPETIÇÃO COM TESTE NO INÍCIO',
      '5.3 REPETIÇÃO COM TESTE NO FINAL',
      '6.1 APLICAÇÃO DE VETOR',
      '6.2 APLICAÇÃO DE MATRIZ',
    ],
  },
  rapidDevelopment: {
    name: 'Desenvolvimento Rápido de Aplicações em Python',
    studyObjects: [
      '1.1 A CONTEXTUALIZAÇÃO, OS CONCEITOS, PRINCÍPIOS, AS FERRAMENTAS E TÉCNICAS DA METODOLOGIA DE DESENVOLVIMENTO RÁPIDO DE SOFTWARE',
      '1.2 AS FASES DA RAD',
      '1.3 QUANDO APLICAR E QUANDO NÃO APLICAR RAD',
      '1.4 O PYTHON E AS FERRAMENTAS (FRAMEWORK)',
      '2.1 MANIPULAÇÃO DE ARQUIVOS',
      '2.2 MANIPULAÇÃO DE STRINGS',
      '2.3 DESCREVER AS EXCEÇÕES NA MANIPULAÇÃO DE ARQUIVOS E OUTRAS OPERAÇÕES',
      '3.1 FRAMEWORKS E BIBLIOTECAS PARA GERENCIAMENTO DE BANCO DE DADOS',
      '3.2 CONEXÃO, ACESSO E CRIAÇÃO DE BANCOS DE DADOS E TABELAS',
      '3.3 INSERÇÃO, REMOÇÃO E ATUALIZAÇÃO DE REGISTROS EM TABELAS',
      '3.4 RECUPERAÇÃO DE REGISTROS EM TABELAS',
      '4.1 PRINCIPAIS FRAMEWORKS E BIBLIOTECAS NECESSÁRIAS PARA A GUI',
      '4.2 ADIÇÃO DE WIDGETS E MONTAGEM DA INTERFACE GRÁFICA',
      '4.3 INTERFACE PARA INCLUSÃO DE DADOS EM UMA TABELA NO BANCO DE DADOS',
      '4.4 INTERFACE PARA LOCALIZAÇÃO, ALTERAÇÃO E EXCLUSÃO DE DADOS EM TABELA',
      '5.1 AS ETAPAS PARA TRATAMENTO DOS REQUISITOS DE UM SISTEMA NA METODOLOGIA DE DESENVOLVIMENTO',
      '5.2 AS MODELAGENS DE NEGÓCIOS E DE DADOS DA RAD',
      '5.3 O DESIGN DE INTERFACE COM O USUÁRIO NA RAD',
      '5.4 APLICAÇÃO RAD IMPLEMENTADA EM PYTHON',
    ],
  },
  computerNetworksFundamentals: {
    name: 'Fundamentos de Redes de Computadores',
    studyObjects: [
      '1.1 HISTÓRICO E EVOLUÇÃO',
      '1.2 CLASSIFICAÇÃO DE REDES',
      '1.3 REDES SEM FIO',
      '2.1 REDES EM CAMADAS',
      '2.2 MODELO OSI',
      '2.3 ARQUITETURA TCP/IP',
      '3.1 ARQUITETURAS DE APLICAÇÕES',
      '3.2 CAMADA DE APLICAÇÃO',
      '3.3 ELEMENTOS DA CAMADA DE TRANSPORTE',
      '3.4 SERVIÇOS DA CAMADA DE TRANSPORTE',
      '4.1 MODELO OSI',
      '4.2 REDE IP',
      '4.3 PROTOCOLOS DE CONTROLE DA INTERNET',
      '4.4 ROTEAMENTO',
      '5.1 CAMADA FÍSICA',
      '5.2 CAMADA DE ENLACE',
      '5.3 SUBCAMADA DE ACESSO AO MEIO',
      '6.1 RISCOS DE SEGURANÇA',
      '6.2 SOFTWARES E EQUIPAMENTOS SEGUROS',
      '6.3 GERENCIAMENTO DE REDES',
    ],
  },
  softwareEngineering: {
    name: 'Engenharia de Software',
    studyObjects: [
      '1.1 CONCEITOS BÁSICOS RELACIONADOS COM O DESENVOLVIMENTO DE SOFTWARE',
      '1.2 ETAPAS ESSENCIAIS DE UM PROCESSO DE DESENVOLVIMENTO DE SOFTWARE',
      '1.3 RELAÇÃO ENTRE PROCESSO DE DESENVOLVIMENTO DE SOFTWARE E GERENCIAMENTO DE PROJETO',
      '1.4 GERENCIAMENTO DE RISCO NO PROJETO DE SOFTWARE',
      '2.1 ENGENHARIA DE REQUISITOS E ANÁLISE DE SISTEMA',
      '2.2 PROJETO DO SISTEMA',
      '2.3 IMPLEMENTAÇÃO E TESTES',
      '2.4 MANUTENÇÃO',
      '3.1 MODELOS DE PROCESSOS PRESCRITIVOS',
      '3.2 O PROCESSO UNIFICADO',
      '3.3 DESENVOLVIMENTO ÁGIL  EXTREME PROGRAMMING (XP)',
      '3.4 DESENVOLVIMENTO ÁGIL  SCRUM E PROCESSO UNIFICADO ÁGIL',
      '4.1 QUALIDADE DE PROCESSO E DE PRODUTO DE SOFTWARE',
      '4.2 PROCESSO DA GARANTIA DE QUALIDADE DE SOFTWARE',
      '4.3 PLANEJAMENTO DA QUALIDADE E O CONTROLE DA QUALIDADE DE SOFTWARE',
      '4.4 MEDIÇÕES E MÉTRICAS DO SOFTWARE',
      '5.1 FUNDAMENTOS DE GERENCIAMENTO DE CONFIGURAÇÕES',
      '5.2 GERENCIAMENTO DE MUDANÇAS, VERSÕES E RELEASES',
      '5.3 CONSTRUÇÃO DE SISTEMAS',
      '5.4 FERRAMENTAS CASE PARA GERENCIAMENTO DE CONFIGURAÇÕES',
    ],
  },
  // const communication = new Subject('communication', 'Comunicação entre Aplicações', [sdSecondPeriod])
  //   communication.addTheme(new SubjectTheme('communication-1', '1', [
  //     new SubjectThemeModule('communication-1-1', '1.1', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-1-2', '1.2', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-1-3', '1.3', 'Comunicação entre Aplicações'),
  //   ]))
  //   communication.addTheme(new SubjectTheme('communication-2', '2', [
  //     new SubjectThemeModule('communication-2-1', '2.1', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-2-2', '2.2', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-2-3', '2.3', 'Comunicação entre Aplicações'),
  //   ]))
  //   communication.addTheme(new SubjectTheme('communication-3', '3', [
  //     new SubjectThemeModule('communication-3-1', '3.1', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-3-2', '3.2', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-3-3', '3.3', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-3-4', '3.4', 'Comunicação entre Aplicações'),
  //   ]))
  //   communication.addTheme(new SubjectTheme('communication-4', '4', [
  //     new SubjectThemeModule('communication-4-1', '4.1', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-4-2', '4.2', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-4-3', '4.3', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-4-4', '4.4', 'Comunicação entre Aplicações'),
  //   ]))
  //   communication.addTheme(new SubjectTheme('communication-5', '5', [
  //     new SubjectThemeModule('communication-5-1', '5.1', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-5-2', '5.2', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-5-3', '5.3', 'Comunicação entre Aplicações'),
  //   ]))
  //   communication.addTheme(new SubjectTheme('communication-6', '6', [
  //     new SubjectThemeModule('communication-6-1', '6.1', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-6-2', '6.2', 'Comunicação entre Aplicações'),
  //     new SubjectThemeModule('communication-6-3', '6.3', 'Comunicação entre Aplicações'),
  //   ]))
  communicationBetweenApplications: {
    name: 'Comunicação entre Aplicações',
    studyObjects: [
      '1.1 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '1.2 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '1.3 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '2.1 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '2.2 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '2.3 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '3.1 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '3.2 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '3.3 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '3.4 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '4.1 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '4.2 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '4.3 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '4.4 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '5.1 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '5.2 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '5.3 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '6.1 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '6.2 COMUNICAÇÃO ENTRE APLICAÇÕES',
      '6.3 COMUNICAÇÃO ENTRE APLICAÇÕES',
    ],
  },
  // usability.addTheme(new SubjectTheme('usability-2', '2', [
  //   new SubjectThemeModule('usability-2-1', '2.1', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-2-2', '2.2', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-2-3', '2.3', 'Engenharia de Usabilidade'),
  // ]))
  // usability.addTheme(new SubjectTheme('usability-3', '3', [
  //   new SubjectThemeModule('usability-3-1', '3.1', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-3-2', '3.2', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-3-3', '3.3', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-3-4', '3.4', 'Engenharia de Usabilidade'),
  // ]))
  // usability.addTheme(new SubjectTheme('usability-4', '4', [
  //   new SubjectThemeModule('usability-4-1', '4.1', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-4-2', '4.2', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-4-3', '4.3', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-4-4', '4.4', 'Engenharia de Usabilidade'),
  // ]))
  // usability.addTheme(new SubjectTheme('usability-5', '5', [
  //   new SubjectThemeModule('usability-5-1', '5.1', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-5-2', '5.2', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-5-3', '5.3', 'Engenharia de Usabilidade'),
  //   new SubjectThemeModule('usability-5-4', '5.4', 'Engenharia de Usabilidade'),
  // ]))
  usabilityEngineering: {
    name: 'Engenharia de Usabilidade',
    studyObjects: [
      '1.1 ENGENHARIA DE USABILIDADE',
      '1.2 ENGENHARIA DE USABILIDADE',
      '1.3 ENGENHARIA DE USABILIDADE',
      '2.1 ENGENHARIA DE USABILIDADE',
      '2.2 ENGENHARIA DE USABILIDADE',
      '2.3 ENGENHARIA DE USABILIDADE',
      '3.1 ENGENHARIA DE USABILIDADE',
      '3.2 ENGENHARIA DE USABILIDADE',
      '3.3 ENGENHARIA DE USABILIDADE',
      '3.4 ENGENHARIA DE USABILIDADE',
      '4.1 ENGENHARIA DE USABILIDADE',
      '4.2 ENGENHARIA DE USABILIDADE',
      '4.3 ENGENHARIA DE USABILIDADE',
      '4.4 ENGENHARIA DE USABILIDADE',
      '5.1 ENGENHARIA DE USABILIDADE',
      '5.2 ENGENHARIA DE USABILIDADE',
      '5.3 ENGENHARIA DE USABILIDADE',
      '5.4 ENGENHARIA DE USABILIDADE',
    ],
  },
  // const agileDevelopementPython = new Subject('agile-developement-python', 'Desenvolvimento Rápido com Python', [cyberSecuritySecondPeriod])
  // agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-1', '1', [
  //   new SubjectThemeModule('agile-developement-python-1-1', '1.1', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-1-2', '1.2', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-1-3', '1.3', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-1-4', '1.4', 'Desenvolvimento Rápido com Python'),
  // ]))
  // agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-2', '2', [
  //   new SubjectThemeModule('agile-developement-python-2-1', '2.1', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-2-2', '2.2', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-2-3', '2.3', 'Desenvolvimento Rápido com Python'),
  // ]))
  // agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-3', '3', [
  //   new SubjectThemeModule('agile-developement-python-3-1', '3.1', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-3-2', '3.2', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-3-3', '3.3', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-3-4', '3.4', 'Desenvolvimento Rápido com Python'),
  // ]))
  // agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-4', '4', [
  //   new SubjectThemeModule('agile-developement-python-4-1', '4.1', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-4-2', '4.2', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-4-3', '4.3', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-4-4', '4.4', 'Desenvolvimento Rápido com Python'),
  // ]))
  // agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-5', '5', [
  //   new SubjectThemeModule('agile-developement-python-5-1', '5.1', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-5-2', '5.2', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-5-3', '5.3', 'Desenvolvimento Rápido com Python'),
  //   new SubjectThemeModule('agile-developement-python-5-4', '5.4', 'Desenvolvimento Rápido com Python'),
  // ]))
  agileDevelopment: {
    name: 'Desenvolvimento Ágil com Python',
    studyObjects: [
      '1.1 DESENVOVIMENTO ÁGIL COM PYTHON',
      '1.2 DESENVOVIMENTO ÁGIL COM PYTHON',
      '1.3 DESENVOVIMENTO ÁGIL COM PYTHON',
      '1.4 DESENVOVIMENTO ÁGIL COM PYTHON',
      '2.1 DESENVOVIMENTO ÁGIL COM PYTHON',
      '2.2 DESENVOVIMENTO ÁGIL COM PYTHON',
      '2.3 DESENVOVIMENTO ÁGIL COM PYTHON',
      '3.1 DESENVOVIMENTO ÁGIL COM PYTHON',
      '3.2 DESENVOVIMENTO ÁGIL COM PYTHON',
      '3.3 DESENVOVIMENTO ÁGIL COM PYTHON',
      '3.4 DESENVOVIMENTO ÁGIL COM PYTHON',
      '4.1 DESENVOVIMENTO ÁGIL COM PYTHON',
      '4.2 DESENVOVIMENTO ÁGIL COM PYTHON',
      '4.3 DESENVOVIMENTO ÁGIL COM PYTHON',
      '4.4 DESENVOVIMENTO ÁGIL COM PYTHON',
      '5.1 DESENVOVIMENTO ÁGIL COM PYTHON',
      '5.2 DESENVOVIMENTO ÁGIL COM PYTHON',
      '5.3 DESENVOVIMENTO ÁGIL COM PYTHON',
      '5.4 DESENVOVIMENTO ÁGIL COM PYTHON',
    ],
  },
  // itServiceManagement.addTheme(new SubjectTheme('it-service-management-1', '1', [
  //   new SubjectThemeModule('it-service-management-1-1', '1.1', 'Gestão de Serviços de TI'),
  // ]))
  // itServiceManagement.addTheme(new SubjectTheme('it-service-management-2', '2', [
  //   new SubjectThemeModule('it-service-management-2-1', '2.1', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-2-2', '2.2', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-2-3', '2.3', 'Gestão de Serviços de TI'),
  // ]))
  // itServiceManagement.addTheme(new SubjectTheme('it-service-management-3', '3', [
  //   new SubjectThemeModule('it-service-management-3-1', '3.1', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-3-2', '3.2', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-3-3', '3.3', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-3-4', '3.4', 'Gestão de Serviços de TI'),
  // ]))
  // itServiceManagement.addTheme(new SubjectTheme('it-service-management-4', '4', [
  //   new SubjectThemeModule('it-service-management-4-1', '4.1', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-4-2', '4.2', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-4-3', '4.3', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-4-4', '4.4', 'Gestão de Serviços de TI'),
  // ]))
  // itServiceManagement.addTheme(new SubjectTheme('it-service-management-5', '5', [
  //   new SubjectThemeModule('it-service-management-5-1', '5.1', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-5-2', '5.2', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-5-3', '5.3', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-5-4', '5.4', 'Gestão de Serviços de TI'),
  // ]))
  // itServiceManagement.addTheme(new SubjectTheme('it-service-management-6', '6', [
  //   new SubjectThemeModule('it-service-management-6-1', '6.1', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-6-2', '6.2', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-6-3', '6.3', 'Gestão de Serviços de TI'),
  //   new SubjectThemeModule('it-service-management-6-4', '6.4', 'Gestão de Serviços de TI'),
  // ]))
  itServiceManagement: {
    name: 'Gerenciamento de Serviços de TI',
    studyObjects: [
      '1.1 GESTÃO DE SERVIÇOS DE TI',
      '2.1 GESTÃO DE SERVIÇOS DE TI',
      '2.2 GESTÃO DE SERVIÇOS DE TI',
      '2.3 GESTÃO DE SERVIÇOS DE TI',
      '3.1 GESTÃO DE SERVIÇOS DE TI',
      '3.2 GESTÃO DE SERVIÇOS DE TI',
      '3.3 GESTÃO DE SERVIÇOS DE TI',
      '3.4 GESTÃO DE SERVIÇOS DE TI',
      '4.1 GESTÃO DE SERVIÇOS DE TI',
      '4.2 GESTÃO DE SERVIÇOS DE TI',
      '4.3 GESTÃO DE SERVIÇOS DE TI',
      '4.4 GESTÃO DE SERVIÇOS DE TI',
      '5.1 GESTÃO DE SERVIÇOS DE TI',
      '5.2 GESTÃO DE SERVIÇOS DE TI',
      '5.3 GESTÃO DE SERVIÇOS DE TI',
      '5.4 GESTÃO DE SERVIÇOS DE TI',
      '6.1 GESTÃO DE SERVIÇOS DE TI',
      '6.2 GESTÃO DE SERVIÇOS DE TI',
      '6.3 GESTÃO DE SERVIÇOS DE TI',
      '6.4 GESTÃO DE SERVIÇOS DE TI',
    ],
  },
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-1', '1', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-1-1', '1.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-2', '2', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-2-1', '2.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-3', '3', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-3-1', '3.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-4', '4', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-4-1', '4.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-5', '5', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-5-1', '5.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-6', '6', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-6-1', '6.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-7', '7', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-7-1', '7.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-8', '8', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-8-1', '8.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-9', '9', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-9-1', '9.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-10', '10', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-10-1', '10.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  // cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-11', '11', [
  //   new SubjectThemeModule('cyber-security-threat-intelligence-11-1', '11.1', 'Inteligência de Ameaças Cibernéticas'),
  // ]))
  cyberSecurityThreatIntelligence: {
    name: 'Inteligência de Ameaças Cibernéticas',
    studyObjects: [
      '1.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '2.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '3.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '4.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '5.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '6.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '7.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '8.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '9.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '10.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
      '11.1 INTELIGÊNCIA DE AMEAÇAS CIBERNÉTICAS',
    ],
  },
  // computerNetworkProtocols.addTheme(new SubjectTheme('computer-network-protocols-1', '1', [
  //   new SubjectThemeModule('computer-network-protocols-1-1', '1.1', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-1-2', '1.2', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-1-3', '1.3', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-1-4', '1.4', 'Protocolos de Redes de Computadores'),
  // ]))
  // computerNetworkProtocols.addTheme(new SubjectTheme('computer-network-protocols-2', '2', [
  //   new SubjectThemeModule('computer-network-protocols-2-1', '2.1', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-2-2', '2.2', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-2-3', '2.3', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-2-4', '2.4', 'Protocolos de Redes de Computadores'),
  // ]))
  // computerNetworkProtocols.addTheme(new SubjectTheme('computer-network-protocols-3', '3', [
  //   new SubjectThemeModule('computer-network-protocols-3-1', '3.1', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-3-2', '3.2', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-3-3', '3.3', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-3-4', '3.4', 'Protocolos de Redes de Computadores'),
  // ]))
  // computerNetworkProtocols.addTheme(new SubjectTheme('computer-network-protocols-4', '4', [
  //   new SubjectThemeModule('computer-network-protocols-4-1', '4.1', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-4-2', '4.2', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-4-3', '4.3', 'Protocolos de Redes de Computadores'),
  //   new SubjectThemeModule('computer-network-protocols-4-4', '4.4', 'Protocolos de Redes de Computadores'),
  // ]))
  computerNetworkProtocols: {
    name: 'Protocolos de Redes de Computadores',
    studyObjects: [
      '1.1 PROTOCOLOS DE REDES DE COMPUTADORES',
      '1.2 PROTOCOLOS DE REDES DE COMPUTADORES',
      '1.3 PROTOCOLOS DE REDES DE COMPUTADORES',
      '1.4 PROTOCOLOS DE REDES DE COMPUTADORES',
      '2.1 PROTOCOLOS DE REDES DE COMPUTADORES',
      '2.2 PROTOCOLOS DE REDES DE COMPUTADORES',
      '2.3 PROTOCOLOS DE REDES DE COMPUTADORES',
      '2.4 PROTOCOLOS DE REDES DE COMPUTADORES',
      '3.1 PROTOCOLOS DE REDES DE COMPUTADORES',
      '3.2 PROTOCOLOS DE REDES DE COMPUTADORES',
      '3.3 PROTOCOLOS DE REDES DE COMPUTADORES',
      '3.4 PROTOCOLOS DE REDES DE COMPUTADORES',
      '4.1 PROTOCOLOS DE REDES DE COMPUTADORES',
      '4.2 PROTOCOLOS DE REDES DE COMPUTADORES',
      '4.3 PROTOCOLOS DE REDES DE COMPUTADORES',
      '4.4 PROTOCOLOS DE REDES DE COMPUTADORES',
    ],
  },
  // softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-1', '1', [
  //   new SubjectThemeModule('software-design-patterns-java-1-1', '1.1', 'Padrões de Projetos de Software Com Java'),
  // ]))
  // // tema 2 (4)
  // softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-2', '2', [
  //   new SubjectThemeModule('software-design-patterns-java-2-1', '2.1', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-2-2', '2.2', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-2-3', '2.3', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-2-4', '2.4', 'Padrões de Projetos de Software Com Java'),
  // ]))
  // // tema 3 (4)
  // softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-3', '3', [
  //   new SubjectThemeModule('software-design-patterns-java-3-1', '3.1', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-3-2', '3.2', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-3-3', '3.3', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-3-4', '3.4', 'Padrões de Projetos de Software Com Java'),
  // ]))
  // // tema 4 (4)
  // softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-4', '4', [
  //   new SubjectThemeModule('software-design-patterns-java-4-1', '4.1', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-4-2', '4.2', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-4-3', '4.3', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-4-4', '4.4', 'Padrões de Projetos de Software Com Java'),
  // ]))
  // // tema 5 (4)
  // softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-5', '5', [
  //   new SubjectThemeModule('software-design-patterns-java-5-1', '5.1', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-5-2', '5.2', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-5-3', '5.3', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-5-4', '5.4', 'Padrões de Projetos de Software Com Java'),
  // ]))
  // // tema 6 (4)
  // softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-6', '6', [
  //   new SubjectThemeModule('software-design-patterns-java-6-1', '6.1', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-6-2', '6.2', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-6-3', '6.3', 'Padrões de Projetos de Software Com Java'),
  //   new SubjectThemeModule('software-design-patterns-java-6-4', '6.4', 'Padrões de Projetos de Software Com Java'),
  // ]))
  softwareDesignPatternsJava: {
    name: 'Padrões de Projetos de Software Com Java',
    studyObjects: [
      '1.1 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '2.1 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '2.2 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '2.3 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '2.4 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '3.1 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '3.2 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '3.3 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '3.4 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '4.1 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '4.2 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '4.3 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '4.4 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '5.1 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '5.2 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '5.3 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '5.4 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '6.1 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '6.2 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '6.3 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
      '6.4 PADRÕES DE PROJETOS DE SOFTWARE COM JAVA',
    ],
  },
  // mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-1', '1', [
  //   new SubjectThemeModule('mobile-programming-android-1-1', '1.1', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-1-2', '1.2', 'Programação para Dispositivos Móveis para Android'),
  // ]))
  // // tema 2 (3)
  // mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-2', '2', [
  //   new SubjectThemeModule('mobile-programming-android-2-1', '2.1', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-2-2', '2.2', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-2-3', '2.3', 'Programação para Dispositivos Móveis para Android'),
  // ]))
  // // tema 3 (4)
  // mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-3', '3', [
  //   new SubjectThemeModule('mobile-programming-android-3-1', '3.1', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-3-2', '3.2', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-3-3', '3.3', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-3-4', '3.4', 'Programação para Dispositivos Móveis para Android'),
  // ]))
  // // tema 4 (4)
  // mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-4', '4', [
  //   new SubjectThemeModule('mobile-programming-android-4-1', '4.1', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-4-2', '4.2', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-4-3', '4.3', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-4-4', '4.4', 'Programação para Dispositivos Móveis para Android'),
  // ]))
  // // tema 5 (3)
  // mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-5', '5', [
  //   new SubjectThemeModule('mobile-programming-android-5-1', '5.1', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-5-2', '5.2', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-5-3', '5.3', 'Programação para Dispositivos Móveis para Android'),
  // ]))
  // // tema 6 (4)
  // mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-6', '6', [
  //   new SubjectThemeModule('mobile-programming-android-6-1', '6.1', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-6-2', '6.2', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-6-3', '6.3', 'Programação para Dispositivos Móveis para Android'),
  //   new SubjectThemeModule('mobile-programming-android-6-4', '6.4', 'Programação para Dispositivos Móveis para Android'),
  // ]))
  mobileProgrammingAndroid: {
    name: 'Programação para Dispositivos Móveis para Android',
    studyObjects: [
      '1.1 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '1.2 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '2.1 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '2.2 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '2.3 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '3.1 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '3.2 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '3.3 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '3.4 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '4.1 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '4.2 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '4.3 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '4.4 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '5.1 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '5.2 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '5.3 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '6.1 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '6.2 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '6.3 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
      '6.4 PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS PARA ANDROID',
    ],
  },
  // bigDataPython.addTheme(new SubjectTheme('big-data-python-1', '1', [
  //   new SubjectThemeModule('big-data-python-1-1', '1.1', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-1-2', '1.2', 'Tópicos de Big Data em Python'),
  // ]))
  // // tema 2 (4)
  // bigDataPython.addTheme(new SubjectTheme('big-data-python-2', '2', [
  //   new SubjectThemeModule('big-data-python-2-1', '2.1', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-2-2', '2.2', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-2-3', '2.3', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-2-4', '2.4', 'Tópicos de Big Data em Python'),
  // ]))
  // // tema 3 (3)
  // bigDataPython.addTheme(new SubjectTheme('big-data-python-3', '3', [
  //   new SubjectThemeModule('big-data-python-3-1', '3.1', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-3-2', '3.2', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-3-3', '3.3', 'Tópicos de Big Data em Python'),
  // ]))
  // // tema 4 (4)
  // bigDataPython.addTheme(new SubjectTheme('big-data-python-4', '4', [
  //   new SubjectThemeModule('big-data-python-4-1', '4.1', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-4-2', '4.2', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-4-3', '4.3', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-4-4', '4.4', 'Tópicos de Big Data em Python'),
  // ]))
  // // tema 5 (4)
  // bigDataPython.addTheme(new SubjectTheme('big-data-python-5', '5', [
  //   new SubjectThemeModule('big-data-python-5-1', '5.1', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-5-2', '5.2', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-5-3', '5.3', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-5-4', '5.4', 'Tópicos de Big Data em Python'),
  // ]))
  // // tema 6 (3)
  // bigDataPython.addTheme(new SubjectTheme('big-data-python-6', '6', [
  //   new SubjectThemeModule('big-data-python-6-1', '6.1', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-6-2', '6.2', 'Tópicos de Big Data em Python'),
  //   new SubjectThemeModule('big-data-python-6-3', '6.3', 'Tópicos de Big Data em Python'),
  // ]))
  bigDataPython: {
    name: 'Tópicos de Big Data em Python',
    studyObjects: [
      '1.1 TÓPICOS DE BIG DATA EM PYTHON',
      '1.2 TÓPICOS DE BIG DATA EM PYTHON',
      '2.1 TÓPICOS DE BIG DATA EM PYTHON',
      '2.2 TÓPICOS DE BIG DATA EM PYTHON',
      '2.3 TÓPICOS DE BIG DATA EM PYTHON',
      '2.4 TÓPICOS DE BIG DATA EM PYTHON',
      '3.1 TÓPICOS DE BIG DATA EM PYTHON',
      '3.2 TÓPICOS DE BIG DATA EM PYTHON',
      '3.3 TÓPICOS DE BIG DATA EM PYTHON',
      '4.1 TÓPICOS DE BIG DATA EM PYTHON',
      '4.2 TÓPICOS DE BIG DATA EM PYTHON',
      '4.3 TÓPICOS DE BIG DATA EM PYTHON',
      '4.4 TÓPICOS DE BIG DATA EM PYTHON',
      '5.1 TÓPICOS DE BIG DATA EM PYTHON',
      '5.2 TÓPICOS DE BIG DATA EM PYTHON',
      '5.3 TÓPICOS DE BIG DATA EM PYTHON',
      '5.4 TÓPICOS DE BIG DATA EM PYTHON',
      '6.1 TÓPICOS DE BIG DATA EM PYTHON',
      '6.2 TÓPICOS DE BIG DATA EM PYTHON',
      '6.3 TÓPICOS DE BIG DATA EM PYTHON',
    ],
  },
  // // Tema 1 (1 modulo)
  // cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-1', '1', [
  //   new SubjectThemeModule('cloud-iot-industry-python-1-1', '1.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  // ]))
  // // tema 2 (3)
  // cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-2', '2', [
  //   new SubjectThemeModule('cloud-iot-industry-python-2-1', '2.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  //   new SubjectThemeModule('cloud-iot-industry-python-2-2', '2.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  //   new SubjectThemeModule('cloud-iot-industry-python-2-3', '2.3', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  // ]))
  // // tema 3 (2)
  // cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-3', '3', [
  //   new SubjectThemeModule('cloud-iot-industry-python-3-1', '3.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  //   new SubjectThemeModule('cloud-iot-industry-python-3-2', '3.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  // ]))
  // // tema 4 (3)
  // cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-4', '4', [
  //   new SubjectThemeModule('cloud-iot-industry-python-4-1', '4.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  //   new SubjectThemeModule('cloud-iot-industry-python-4-2', '4.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  //   new SubjectThemeModule('cloud-iot-industry-python-4-3', '4.3', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  // ]))
  // // tema 5 (4)
  // cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-5', '5', [
  //   new SubjectThemeModule('cloud-iot-industry-python-5-1', '5.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  //   new SubjectThemeModule('cloud-iot-industry-python-5-2', '5.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  //   new SubjectThemeModule('cloud-iot-industry-python-5-3', '5.3', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  //   new SubjectThemeModule('cloud-iot-industry-python-5-4', '5.4', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  // ]))
  // // tema 6 (2)
  // cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-6', '6', [
  //   new SubjectThemeModule('cloud-iot-industry-python-6-1', '6.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  //   new SubjectThemeModule('cloud-iot-industry-python-6-2', '6.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
  // ]))
  cloudIotIndustryPython: {
    name: 'Tópicos de Cloud IoT e Indústria 4.0 em Python',
    studyObjects: [
      '1.1 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '2.1 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '2.2 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '2.3 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '3.1 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '3.2 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '4.1 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '4.2 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '4.3 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '5.1 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '5.2 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '5.3 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '5.4 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '6.1 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
      '6.2 TÓPICOS DE CLOUD IOT E INDÚSTRIA 4.0 EM PYTHON',
    ],
  },
}

const extractNumberingAndName = (studyObject: string) => {
  const [numbering, name] = studyObject.split(' ')
  return { numbering: numbering.split('.').map(Number), name }
}

export const subjects = Object.fromEntries(Object.entries(subjectsProps).map(([key, value]) => {
  const subject = Subject.create({
    name: value.name,
    studyObjects: value.studyObjects.map((so, index) => {
      const studyObject = StudyObject.create({ 
        name: extractNumberingAndName(so).name,
        hours: 2,
        position: index
      });
      if(studyObject.isLeft()) {
        throw new Error(studyObject.getLeft())
      }
      return studyObject.getRight()
    }),
  })
  if(subject.isLeft()) {
    throw new Error(subject.getLeft())
  }
  return [key, subject.getRight()]
})) as Record<keyof typeof subjectsProps, Subject>