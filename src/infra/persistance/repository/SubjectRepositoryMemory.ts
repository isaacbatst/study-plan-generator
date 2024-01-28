import { CoursePeriod } from "../../../domain/entities/CoursePeriod"
import Subject from "../../../domain/entities/Subject"
import SubjectTheme from "../../../domain/entities/SubjectTheme"
import SubjectThemeModule from "../../../domain/entities/SubjectThemeModule"

export default class SubjectRepositoryMemory {
  private subjects: Subject[] = []

  constructor(){
    const csFirstPeriod = new CoursePeriod('cs-first-period', '1º Período de Ciência da Computação')
    const csSecondPeriod = new CoursePeriod('cs-second-period', '2º Período de Ciência da Computação')

    const security = new Subject('security', 'Introdução à Segurança da Informação', [csFirstPeriod])
    security.addTheme(new SubjectTheme('security-2', '2', [
      new SubjectThemeModule('security-3-1', '2.1', 'Introdução à Segurança da Informação'),
      new SubjectThemeModule('security-3-2', '2.2', 'Introdução à Segurança da Informação'),
    ])) 
    security.addTheme(new SubjectTheme('security-3', '3', [
      new SubjectThemeModule('security-3-1', '3.1', 'Introdução à Segurança da Informação'),
      new SubjectThemeModule('security-3-2', '3.2', 'Introdução à Segurança da Informação'),
    ])) 
    security.addTheme(new SubjectTheme('security-4', '4', [
      new SubjectThemeModule('security-4-1', '4.1', 'Introdução à Segurança da Informação'),
      new SubjectThemeModule('security-4-2', '4.2', 'Introdução à Segurança da Informação'),
    ]))
    security.addTheme(new SubjectTheme('security-5', '5', [
      new SubjectThemeModule('security-5-1', '5.1', 'Introdução à Segurança da Informação'),
      new SubjectThemeModule('security-5-2', '5.2', 'Introdução à Segurança da Informação'),
      new SubjectThemeModule('security-5-3', '5.3', 'Introdução à Segurança da Informação'),
    ]))
    security.addTheme(new SubjectTheme('security-6', '6', [
      new SubjectThemeModule('security-6-1', '6.1', 'Introdução à Segurança da Informação'),
      new SubjectThemeModule('security-6-2', '6.2', 'Introdução à Segurança da Informação'),
    ]))
    security.addTheme(new SubjectTheme('security-7', '7', [
      new SubjectThemeModule('security-7-1', '7.1', 'Introdução à Segurança da Informação'),
      new SubjectThemeModule('security-7-2', '7.2', 'Introdução à Segurança da Informação'),
      new SubjectThemeModule('security-7-3', '7.3', 'Introdução à Segurança da Informação'),  
    ])) 

    const programmingParadigms = new Subject('programming-paradigms', 'Paradigmas de Programação', [csFirstPeriod])
    programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-1', '1', [
      new SubjectThemeModule('programming-paradigms-1-1', '1.1', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-1-2', '1.2', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-1-3', '1.3', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-1-4', '1.4', 'Paradigmas de Programação'),
    ]))
    programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-2', '2', [
      new SubjectThemeModule('programming-paradigms-2-1', '2.1', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-2-2', '2.2', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-2-3', '2.3', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-2-4', '2.4', 'Paradigmas de Programação'),
    ]))
    programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-3', '3', [
      new SubjectThemeModule('programming-paradigms-3-1', '3.1', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-3-2', '3.2', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-3-3', '3.3', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-3-4', '3.4', 'Paradigmas de Programação'),
    ]))
    programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-4', '4', [
      new SubjectThemeModule('programming-paradigms-4-1', '4.1', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-4-2', '4.2', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-4-3', '4.3', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-4-4', '4.4', 'Paradigmas de Programação'),
    ]))
    programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-5', '5', [
      new SubjectThemeModule('programming-paradigms-5-1', '5.1', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-5-2', '5.2', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-5-3', '5.3', 'Paradigmas de Programação'),
      new SubjectThemeModule('programming-paradigms-5-4', '5.4', 'Paradigmas de Programação'),
    ]))

    const architecture = new Subject('architecture', 'Arquitetura de Computadores', [csFirstPeriod])
    architecture.addTheme(new SubjectTheme('architecture-1', '1', [
      new SubjectThemeModule('architecture-1-1', '1.1', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-1-2', '1.2', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-1-3', '1.3', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-1-4', '1.4', 'Arquitetura de Computadores'),
    ]))
    // add themes 2, 3 4 5 and 6
    architecture.addTheme(new SubjectTheme('architecture-2', '2', [
      new SubjectThemeModule('architecture-2-1', '2.1', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-2-2', '2.2', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-2-3', '2.3', 'Arquitetura de Computadores'),
    ]))
    architecture.addTheme(new SubjectTheme('architecture-3', '3', [
      new SubjectThemeModule('architecture-3-1', '3.1', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-3-2', '3.2', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-3-3', '3.3', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-3-4', '3.4', 'Arquitetura de Computadores'),
    ]))
    architecture.addTheme(new SubjectTheme('architecture-4', '4', [
      new SubjectThemeModule('architecture-4-1', '4.1', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-4-2', '4.2', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-4-3', '4.3', 'Arquitetura de Computadores'),
    ]))
    architecture.addTheme(new SubjectTheme('architecture-5', '5', [
      new SubjectThemeModule('architecture-5-1', '5.1', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-5-2', '5.2', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-5-3', '5.3', 'Arquitetura de Computadores'),
    ]))
    architecture.addTheme(new SubjectTheme('architecture-6', '6', [
      new SubjectThemeModule('architecture-6-1', '6.1', 'Arquitetura de Computadores'),
      new SubjectThemeModule('architecture-6-2', '6.2', 'Arquitetura de Computadores'),
    ]))

    const webDevelopment = new Subject('web-development', 'Desenv. Web em Html5, Css, Javascript e Php', [csFirstPeriod])
    webDevelopment.addTheme(new SubjectTheme('web-development-1', '1', [
      new SubjectThemeModule('web-development-1-1', '1.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-1-2', '1.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-1-3', '1.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-1-4', '1.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
    ]))
    webDevelopment.addTheme(new SubjectTheme('web-development-2', '2', [
      new SubjectThemeModule('web-development-2-1', '2.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-2-2', '2.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-2-3', '2.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-2-4', '2.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
    ]))
    webDevelopment.addTheme(new SubjectTheme('web-development-3', '3', [
      new SubjectThemeModule('web-development-3-1', '3.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-3-2', '3.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-3-3', '3.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-3-4', '3.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
    ]))
    webDevelopment.addTheme(new SubjectTheme('web-development-4', '4', [
      new SubjectThemeModule('web-development-4-1', '4.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-4-2', '4.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-4-3', '4.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-4-4', '4.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
    ]))
    webDevelopment.addTheme(new SubjectTheme('web-development-5', '5', [
      new SubjectThemeModule('web-development-5-1', '5.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-5-2', '5.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-5-3', '5.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-5-4', '5.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
    ]))
    webDevelopment.addTheme(new SubjectTheme('web-development-6', '6', [
      new SubjectThemeModule('web-development-6-1', '6.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-6-2', '6.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-6-3', '6.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
    ]))
    webDevelopment.addTheme(new SubjectTheme('web-development-7', '7', [
      new SubjectThemeModule('web-development-7-1', '7.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-7-2', '7.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
      new SubjectThemeModule('web-development-7-3', '7.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
    ]))

    const computingThinking = new Subject('computing-thinking', 'Pensamento Computacional', [csFirstPeriod])
    computingThinking.addTheme(new SubjectTheme('computing-thinking-1', '1', [
      new SubjectThemeModule('computing-thinking-1-1', '1.1', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-1-2', '1.2', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-1-3', '1.3', 'Pensamento Computacional'),
    ]))
    computingThinking.addTheme(new SubjectTheme('computing-thinking-2', '2', [
      new SubjectThemeModule('computing-thinking-2-1', '2.1', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-2-2', '2.2', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-2-3', '2.3', 'Pensamento Computacional'),
    ]))
    computingThinking.addTheme(new SubjectTheme('computing-thinking-3', '3', [
      new SubjectThemeModule('computing-thinking-3-1', '3.1', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-3-2', '3.2', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-3-3', '3.3', 'Pensamento Computacional'),
    ]))
    computingThinking.addTheme(new SubjectTheme('computing-thinking-4', '4', [
      new SubjectThemeModule('computing-thinking-4-1', '4.1', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-4-2', '4.2', 'Pensamento Computacional'),
    ]))
    computingThinking.addTheme(new SubjectTheme('computing-thinking-5', '5', [
      new SubjectThemeModule('computing-thinking-5-1', '5.1', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-5-2', '5.2', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-5-3', '5.3', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-5-4', '5.4', 'Pensamento Computacional'),
    ]))
    computingThinking.addTheme(new SubjectTheme('computing-thinking-6', '6', [
      new SubjectThemeModule('computing-thinking-6-1', '6.1', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-6-2', '6.2', 'Pensamento Computacional'),
      new SubjectThemeModule('computing-thinking-6-3', '6.3', 'Pensamento Computacional'),
    ]))

    const math = new Subject('matematica', 'Matemática e Lógica', [csSecondPeriod])
    math.addTheme(new SubjectTheme('math-2','2', [
      new SubjectThemeModule('math-2-1', "2.1", 'Matemática e Lógica'),
      new SubjectThemeModule('math-2-2', "2.2", 'Matemática e Lógica'),
      new SubjectThemeModule('math-2-3', "2.3", 'Matemática e Lógica')]))
    math.addTheme(new SubjectTheme('math-3','3', [
      new SubjectThemeModule('math-3-1', "3.1", 'Matemática e Lógica'),
      new SubjectThemeModule('math-3-2', "3.2", 'Matemática e Lógica'),
      new SubjectThemeModule('math-3-3', "3.3", 'Matemática e Lógica'),
      new SubjectThemeModule('math-3-4', "3.4", 'Matemática e Lógica')
    ]))
    math.addTheme(new SubjectTheme('math-4','4', [
      new SubjectThemeModule('math-4-1', "4.1", 'Matemática e Lógica'),
      new SubjectThemeModule('math-4-2', "4.2", 'Matemática e Lógica'),
      new SubjectThemeModule('math-4-3', "4.3", 'Matemática e Lógica'),
      new SubjectThemeModule('math-4-4', "4.4", 'Matemática e Lógica')
    ]))
    math.addTheme(new SubjectTheme('math-5','5', [
      new SubjectThemeModule('math-5-1', "5.1", 'Matemática e Lógica'),
      new SubjectThemeModule('math-5-2', "5.2", 'Matemática e Lógica'),
      new SubjectThemeModule('math-5-3', "5.3", 'Matemática e Lógica'),
      new SubjectThemeModule('math-5-4', "5.4", 'Matemática e Lógica')
    ]))
    math.addTheme(new SubjectTheme('math-6','6', [
      new SubjectThemeModule('math-6-1', "6.1", 'Matemática e Lógica'),
      new SubjectThemeModule('math-6-2', "6.2", 'Matemática e Lógica'),
      new SubjectThemeModule('math-6-3', "6.3", 'Matemática e Lógica'),
      new SubjectThemeModule('math-6-4', "6.4", 'Matemática e Lógica')
    ]))
    math.addTheme(new SubjectTheme('math-7','7', [
      new SubjectThemeModule('math-7-1', "7.1", 'Matemática e Lógica'),
      new SubjectThemeModule('math-7-2', "7.2", 'Matemática e Lógica'),
      new SubjectThemeModule('math-7-3', "7.3", 'Matemática e Lógica'),
      new SubjectThemeModule('math-7-4', "7.4", 'Matemática e Lógica'),
    ]))

    const cloud = new Subject('cloud', 'Computação em Nuvem', [csSecondPeriod])
    cloud.addTheme(new SubjectTheme('cloud-2', '2', [
      new SubjectThemeModule('cloud-2-1', '2.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-2-2', '2.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-2-3', '2.3', 'Computação em Nuvem'),
    ]))
    cloud.addTheme(new SubjectTheme('cloud-3', '3', [
      new SubjectThemeModule('cloud-3-1', '3.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-3-2', '3.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-3-3', '3.3', 'Computação em Nuvem'),

    ]))
    cloud.addTheme(new SubjectTheme('cloud-4', '4', [
      new SubjectThemeModule('cloud-4-1', '4.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-4-2', '4.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-4-3', '4.3', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-4-4', '4.4', 'Computação em Nuvem')
    ]))
    cloud.addTheme(new SubjectTheme('cloud-5', '5', [
      new SubjectThemeModule('cloud-5-1', '5.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-5-2', '5.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-5-3', '5.3', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-5-4', '5.4', 'Computação em Nuvem')
    ]))
    cloud.addTheme(new SubjectTheme('cloud-6', '6', [
      new SubjectThemeModule('cloud-6-1', '6.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-6-2', '6.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-6-3', '6.3', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-6-4', '6.4', 'Computação em Nuvem')
    ]))
    cloud.addTheme(new SubjectTheme('cloud-7', '7', [
      new SubjectThemeModule('cloud-7-1', '7.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-7-2', '7.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-7-3', '7.3', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-7-4', '7.4', 'Computação em Nuvem')
    ]))

    const dataStructure = new Subject('data-structure', 'Estrutura de dados', [csSecondPeriod])
    dataStructure.addTheme(new SubjectTheme('data-structure-1', '1', [
      new SubjectThemeModule('data-structure-1-1', '1.1', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-1-2', '1.2', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-1-3', '1.3', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-1-4', '1.4', 'Estrutura de dados')
    ]))
    dataStructure.addTheme(new SubjectTheme('data-structure-2', '2', [
      new SubjectThemeModule('data-structure-2-1', '2.1', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-2-2', '2.2', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-2-3', '2.3', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-2-4', '2.4', 'Estrutura de dados')
    ]))
    dataStructure.addTheme(new SubjectTheme('data-structure-3', '3', [
      new SubjectThemeModule('data-structure-3-1', '3.1', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-3-2', '3.2', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-3-3', '3.3', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-3-4', '3.4', 'Estrutura de dados')
    ]))
    dataStructure.addTheme(new SubjectTheme('data-structure-4', '4', [
      new SubjectThemeModule('data-structure-4-1', '4.1', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-4-2', '4.2', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-4-3', '4.3', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-4-4', '4.4', 'Estrutura de dados')
    ]))

    const database = new Subject('database', 'Banco de dados', [csSecondPeriod])
    database.addTheme(new SubjectTheme('database-2', '2', [
      new SubjectThemeModule('database-2-1', '2.1', 'Banco de dados'),
      new SubjectThemeModule('database-2-2', '2.2', 'Banco de dados'),
      new SubjectThemeModule('database-2-3', '2.3', 'Banco de dados'),
    ]))
    database.addTheme(new SubjectTheme('database-3', '3', [
      new SubjectThemeModule('database-3-1', '3.1', 'Banco de dados'),
      new SubjectThemeModule('database-3-2', '3.2', 'Banco de dados'),
      new SubjectThemeModule('database-3-3', '3.3', 'Banco de dados'),
      new SubjectThemeModule('database-3-4', '3.4', 'Banco de dados')
    ]))
    database.addTheme(new SubjectTheme('database-4', '4', [
      new SubjectThemeModule('database-4-1', '4.1', 'Banco de dados'),
      new SubjectThemeModule('database-4-2', '4.2', 'Banco de dados'),
      new SubjectThemeModule('database-4-3', '4.3', 'Banco de dados'),
      new SubjectThemeModule('database-4-4', '4.4', 'Banco de dados')
    ]))
    database.addTheme(new SubjectTheme('database-5', '5', [
      new SubjectThemeModule('database-5-1', '5.1', 'Banco de dados'),
      new SubjectThemeModule('database-5-2', '5.2', 'Banco de dados'),
      new SubjectThemeModule('database-5-3', '5.3', 'Banco de dados'),
      new SubjectThemeModule('database-5-4', '5.4', 'Banco de dados')
    ]))
    database.addTheme(new SubjectTheme('database-6', '6', [
      new SubjectThemeModule('database-6-1', '6.1', 'Banco de dados'),
      new SubjectThemeModule('database-6-2', '6.2', 'Banco de dados'),
      new SubjectThemeModule('database-6-3', '6.3', 'Banco de dados'),
      new SubjectThemeModule('database-6-4', '6.4', 'Banco de dados')
    ]))
    database.addTheme(new SubjectTheme('database-7', '7', [
      new SubjectThemeModule('database-7-1', '7.1', 'Banco de dados'),
      new SubjectThemeModule('database-7-2', '7.2', 'Banco de dados'),
      new SubjectThemeModule('database-7-3', '7.3', 'Banco de dados'),
      new SubjectThemeModule('database-7-4', '7.4', 'Banco de dados')
    ]))

    const uml = new Subject('uml', 'Modelagem de Sistemas UML', [csSecondPeriod])
    uml.addTheme(new SubjectTheme('uml-1', '1', [
      new SubjectThemeModule('uml-1-1', '1.1', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-1-2', '1.2', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-1-3', '1.3', 'Modelagem de Sistemas UML'),
    ]))
    uml.addTheme(new SubjectTheme('uml-2', '2', [
      new SubjectThemeModule('uml-2-1', '2.1', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-2-2', '2.2', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-2-3', '2.3', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-2-4', '2.4', 'Modelagem de Sistemas UML')
    ]))
    uml.addTheme(new SubjectTheme('uml-3', '3', [
      new SubjectThemeModule('uml-3-1', '3.1', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-3-2', '3.2', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-3-3', '3.3', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-3-4', '3.4', 'Modelagem de Sistemas UML')
    ]))
    uml.addTheme(new SubjectTheme('uml-4', '4', [
      new SubjectThemeModule('uml-4-1', '4.1', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-4-2', '4.2', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-4-3', '4.3', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-4-4', '4.4', 'Modelagem de Sistemas UML')
    ]))
    uml.addTheme(new SubjectTheme('uml-5', '5', [
      new SubjectThemeModule('uml-5-1', '5.1', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-5-2', '5.2', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-5-3', '5.3', 'Modelagem de Sistemas UML'),
      new SubjectThemeModule('uml-5-4', '5.4', 'Modelagem de Sistemas UML')
    ]))


    this.add(security)
    this.add(programmingParadigms)
    this.add(architecture)
    this.add(webDevelopment)
    this.add(computingThinking)
    this.add(math)
    this.add(cloud)
    this.add(dataStructure)
    this.add(database)
    this.add(uml)
  }

  public async add(subject: Subject): Promise<void> {
    this.subjects.push(subject)
  }

  public async findAll(): Promise<Subject[]> {
    return this.subjects
  }

  public async findAllByIds(ids: string[]): Promise<Subject[]> {
    return this.subjects.filter(subject => ids.includes(subject.getId()))
  }
}