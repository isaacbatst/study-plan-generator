import { Subject } from "../../../src/domain/entities/Subject";
import { fromPropsToSubject, SubjectSeedProps } from "../utils";
import { coursePeriods } from "./course-periods";
import { courses } from "./courses";
const subjectsProps: Record<string, SubjectSeedProps> = {
  quantitativeMethods: {
    name: "Métodos Quantitativos",
    studyObjects: [
      "1.1 CONCEITOS GERAIS DE PESQUISA OPERACIONAL E SUA IMPORTÂNCIA NO PROCESSO DE TOMADA DE DECISÃO",
      "1.2 AS PRINCIPAIS CARACTERÍSTICAS E PROPRIEDADES DE UM MODELO DE PROGRAMAÇÃO LINEAR",
      "1.3 O MÉTODO GRÁFICO PARA A SOLUÇÃO DE PROBLEMAS DE PROGRAMAÇÃO LINEAR",
      "2.1 A TÉCNICA DE MODELAGEM EM PROBLEMAS CLÁSSICOS DE PROGRAMAÇÃO LINEAR",
      "2.2 A TÉCNICA DE MODELAGEM NOS PROBLEMAS DE TRANSPORTE E TRANSBORDO",
      "2.3 A TÉCNICA DE MODELAGEM EM PROBLEMAS DE ALOCAÇÃO",
      "3.1 APLICAR A DUALIDADE PARA SOLUÇÃO DE PROBLEMAS DE PROGRAMAÇÃO LINEAR",
      "3.2 AVALIAR A SENSIBILIDADE DA SOLUÇÃO OBTIDA PARA PROBLEMAS DE PROGRAMAÇÃO LINEAR EM RELAÇÃO À INCERTEZA OU ERROS DE ESTIMATIVA QUANTO AOS COEFICIENTES DO MODELO",
      "4.1 EMPREGAR O MÉTODO SIMPLEX PARA A SOLUÇÃO DE PROBLEMAS DE PROGRAMAÇÃO LINEAR",
      "4.2 APLICAR O SOLVER PARA SOLUÇÃO DE PROBLEMAS DE PROGRAMAÇÃO LINEAR",
    ],
    periods: [coursePeriods.get(courses.computerScience)![3]],
  },
  calculus: {
    name: "Cálculo Diferencial e Integral",
    studyObjects: [
      "1.1 LIMITE DE UMA FUNÇÃO REAL",
      "1.2 CÁLCULO DO LIMITE DE UMA FUNÇÃO REAL",
      "1.3 CONTINUIDADE DA FUNÇÃO E ASSÍNTOTAS",
      "2.1 DERIVADA DE UMA FUNÇÃO REAL",
      "2.2 CÁLCULO DE DERIVADA",
      "2.3 REGRA DA CADEIA",
      "2.4 DERIVADA DE ORDENS SUPERIORES",
      "3.1 RETA TANGENTE E NORMAL",
      "3.2 TAXAS DE VARIAÇÃO",
      "3.3 DERIVADA NO ESTUDO DE FUNÇÕES",
      "3.4 PROBLEMAS DE OTIMIZAÇÃO",
      "4.1 INTEGRAL DE UMA FUNÇÃO REAL",
      "4.2 INTEGRAÇÃO POR SUBSTITUIÇÃO",
      "4.3 INTEGRAÇÃO POR PARTES",
      "4.4 INTEGRAÇÃO POR FRAÇÕES PARCIAIS",
      "5.1 ARCOS DE CURVA",
      "5.2 CÁLCULO DE ÁREAS",
      "5.3 CÁLCULO DE VOLUMES",
    ],
    periods: [coursePeriods.get(courses.computerScience)![3]],
  },
  operationalSystems: {
    name: "Sistemas Operacionais",
    studyObjects: [
      "1.1 EVOLUÇÃO DOS SISTEMAS OPERACIONAIS",
      "1.2 TIPOS DE SISTEMAS OPERACIONAIS",
      "1.3 ESTRUTURA DO SISTEMA OPERACIONAL",
      "1.4 LINUX BÁSICO",
      "2.1 CONCEITOS DE PROCESSO",
      "2.2 PROGRAMAS CONCORRENTES",
      "2.3 COMUNICAÇÃO ENTRE PROCESSOS",
      "2.4 ESCALONAMENTO",
      "3.1 CONCEITOS E GESTÃO DE MEMÓRIA",
      "3.2 POLÍTICAS DE ALOCAÇÃO DE MEMÓRIA",
      "3.3 MEMÓRIA VIRTUAL",
      "3.4 LINUX E MEMÓRIA",
      "4.1 IMPLEMENTAÇÃO",
      "4.2 CONCEITOS",
      "4.3 FERRAMENTAS PARA ARQUIVOS DO LINUX",
      "4.4 EDITORES DE ARQUIVOS LINUX",
      "5.1 FERRAMENTA CRON",
      "5.2 SCRIPTS PARA AUTOMATIZAÇÃO DE TAREFAS",
      "5.3 VARIÁVEIS DE AMBIENTE E ESTRUTURA DE DECISÃO EM SCRIPTS",
      "5.4 ESTRUTURA DE REPETIÇÃO EM SCRIPTS",
    ],
    periods: [coursePeriods.get(courses.computerScience)![3]],
  },
  basicSoftwareProgrammingC: {
    name: "Programação de Software Básico em C",
    studyObjects: [
      "1.1 Linguagem C na programação de sistemas",
      "1.2 Bibliotecas para datas, horários e gráficos",
      "1.3 API OpenGL",
      "1.4 Eventos de teclado e mouse",
      "2.1 Entrada e saída pelo console",
      "2.2 Padronização do C",
      "2.3 Entrada e saída por arquivos",
      "3.1 Porta serial e portas de microcontroladores",
      "3.2 Controle de dispositivos e aquisição de dados com microcontroladores",
      "3.3 Sockets e cliente/servidor TCP e UDP",
      "3.4 Cliente/servidor HTTP e cliente MQTT para IoT",
      "4.1 Criação de processos com fork",
      "4.2 Funções para threads básicos",
      "4.3 Sincronização de threads",
    ],
    periods: [coursePeriods.get(courses.computerScience)![3]],
  },
  computerNetworkProtocols: {
    name: "Protocolos de Redes de Computadores",
    studyObjects: [
      "1.1 OS PROTOCOLOS DE APLICAÇÃO HTTP, FTP E TELNET",
      "1.2 OS PRINCIPAIS PROTOCOLOS DE APLICAÇÃO RELACIONADOS AO SERVIÇO DE CORREIO ELETRÔNICO",
      "1.3 OS PROTOCOLOS DE APLICAÇÃO DNS, DHCP E SNMP",
      "1.4 FERRAMENTAS E TÉCNICAS PARA MONITORAR O FUNCIONAMENTO DOS PROTOCOLOS ESTUDADOS, COM INTERPRETAÇÃO DOS RESULTADOS",
      "2.1 OS SERVIÇOS OFERECIDOS PELA CAMADA DE TRANSPORTE",
      "2.2 A TRANSFERÊNCIA DE DADOS FIM A FIM",
      "2.3 OS PROTOCOLOS DE TRANSPORTE DA INTERNET",
      "2.4 PROTOCOLOS DA CAMADA DE TRANSPORTE",
      "3.1 AS CARACTERÍSTICAS DO PAYLOAD E DO ENDEREÇAMENTO IPV4",
      "3.2 O ENDEREÇAMENTO DE REDES E SUB­REDES IPV4",
      "3.3 AS SOLUÇÕES TEMPORÁRIAS PARA SANAR O ESGOTAMENTO DO ENDEREÇAMENTO IPV4",
      "3.4 FERRAMENTAS DE ANÁLISE E TROUBLESHOOTING DO IPV4 E SEUS PROTOCOLOS AUXILIARES",
      "4.1 AS CARACTERÍSTICAS DO PAYLOAD E ENDEREÇAMENTO IPV6",
      "4.2 O ENDEREÇAMENTO DE REDES E SUB­REDES IPV6",
      "4.3 AS SOLUÇÕES DE INTEGRAÇÃO ENTRE O IPV4 E O IPV6",
      "4.4 AS FUNCIONALIDADES DO PROTOCOLO ICMPV6",
    ],
    periods: [coursePeriods.get(courses.computerScience)![3]],
  },
};

export const subjects = Object.fromEntries(
  Object.entries(subjectsProps).map(([key, subjectProps]) => {
    const subject = fromPropsToSubject(subjectProps);
    return [key, subject];
  })
);
