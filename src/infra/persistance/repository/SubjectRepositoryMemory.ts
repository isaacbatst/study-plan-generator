// import Course from "../../../domain/entities/Course"
// import { CoursePeriod } from "../../../domain/entities/CoursePeriod"
// import Subject from "../../../domain/entities/Subject"
// import SubjectTheme from "../../../domain/entities/SubjectTheme"
// import SubjectThemeModule from "../../../domain/entities/SubjectThemeModule"

// export default class SubjectRepositoryMemory {
//   private subjects: Subject[] = []

//   constructor(){
//     const computerScience = new Course('computer-science', 'Ciência da Computação')
//     const systemsDevelopmentAndAnalysis = new Course('systems-development-and-analysis', 'Análise e Desenvolvimento de Sistemas')
//     const cyberSecurity = new Course('cyber-security', 'Cybersegurança')

//     const csFirstPeriod = new CoursePeriod('cs-first-period', '1º Período de Ciência da Computação', computerScience.getId())
//     const csSecondPeriod = new CoursePeriod('cs-second-period', '2º Período de Ciência da Computação', computerScience.getId())

//     const sdSecondPeriod = new CoursePeriod('sd-first-period', '2º Período de Análise e Desenvolvimento de Sistemas', systemsDevelopmentAndAnalysis.getId())

//     const cyberSecurityFirstPeriod = new CoursePeriod('cyber-security-first-period', '1º Período de Cybersegurança', cyberSecurity.getId())
//     const cyberSecuritySecondPeriod = new CoursePeriod('cyber-security-second-period', '2º Período de Cybersegurança', cyberSecurity.getId())

//     const networkFundamentals = new Subject('network-fundamentals', 'Fundamentos de Redes de Computadores', [cyberSecurityFirstPeriod])
//     networkFundamentals.addTheme(new SubjectTheme('network-fundamentals-1', '1', [
//       new SubjectThemeModule('network-fundamentals-1-1', '1.1', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-1-2', '1.2', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-1-3', '1.3', 'Fundamentos de Redes de Computadores'),
//     ]))
//     networkFundamentals.addTheme(new SubjectTheme('network-fundamentals-2', '2', [
//       new SubjectThemeModule('network-fundamentals-2-1', '2.1', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-2-2', '2.2', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-2-3', '2.3', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-2-4', '2.4', 'Fundamentos de Redes de Computadores'),
//     ]))
//     networkFundamentals.addTheme(new SubjectTheme('network-fundamentals-3', '3', [
//       new SubjectThemeModule('network-fundamentals-3-1', '3.1', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-3-2', '3.2', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-3-3', '3.3', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-3-4', '3.4', 'Fundamentos de Redes de Computadores'),
//     ]))
//     networkFundamentals.addTheme(new SubjectTheme('network-fundamentals-4', '4', [
//       new SubjectThemeModule('network-fundamentals-4-1', '4.1', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-4-2', '4.2', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-4-3', '4.3', 'Fundamentos de Redes de Computadores'),
//     ]))
//     networkFundamentals.addTheme(new SubjectTheme('network-fundamentals-5', '5', [
//       new SubjectThemeModule('network-fundamentals-5-1', '5.1', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-5-2', '5.2', 'Fundamentos de Redes de Computadores'),
//       new SubjectThemeModule('network-fundamentals-5-3', '5.3', 'Fundamentos de Redes de Computadores'),
//     ]))

//     const securityIntroduction = new Subject('security', 'Introdução à Segurança da Informação', [csFirstPeriod, cyberSecurityFirstPeriod])
//     securityIntroduction.addTheme(new SubjectTheme('security-2', '2', [
//       new SubjectThemeModule('security-3-1', '2.1', 'Introdução à Segurança da Informação'),
//       new SubjectThemeModule('security-3-2', '2.2', 'Introdução à Segurança da Informação'),
//     ]))
//     securityIntroduction.addTheme(new SubjectTheme('security-3', '3', [
//       new SubjectThemeModule('security-3-1', '3.1', 'Introdução à Segurança da Informação'),
//       new SubjectThemeModule('security-3-2', '3.2', 'Introdução à Segurança da Informação'),
//     ]))
//     securityIntroduction.addTheme(new SubjectTheme('security-4', '4', [
//       new SubjectThemeModule('security-4-1', '4.1', 'Introdução à Segurança da Informação'),
//       new SubjectThemeModule('security-4-2', '4.2', 'Introdução à Segurança da Informação'),
//     ]))
//     securityIntroduction.addTheme(new SubjectTheme('security-5', '5', [
//       new SubjectThemeModule('security-5-1', '5.1', 'Introdução à Segurança da Informação'),
//       new SubjectThemeModule('security-5-2', '5.2', 'Introdução à Segurança da Informação'),
//       new SubjectThemeModule('security-5-3', '5.3', 'Introdução à Segurança da Informação'),
//     ]))
//     securityIntroduction.addTheme(new SubjectTheme('security-6', '6', [
//       new SubjectThemeModule('security-6-1', '6.1', 'Introdução à Segurança da Informação'),
//       new SubjectThemeModule('security-6-2', '6.2', 'Introdução à Segurança da Informação'),
//     ]))
//     securityIntroduction.addTheme(new SubjectTheme('security-7', '7', [
//       new SubjectThemeModule('security-7-1', '7.1', 'Introdução à Segurança da Informação'),
//       new SubjectThemeModule('security-7-2', '7.2', 'Introdução à Segurança da Informação'),
//       new SubjectThemeModule('security-7-3', '7.3', 'Introdução à Segurança da Informação'),
//     ]))

//     const programmingParadigms = new Subject('programming-paradigms', 'Paradigmas de Ling. de Programação com Python', [csFirstPeriod, cyberSecurityFirstPeriod])
//     programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-1', '1', [
//       new SubjectThemeModule('programming-paradigms-1-1', '1.1', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-1-2', '1.2', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-1-3', '1.3', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-1-4', '1.4', 'Paradigmas de Ling. de Programação com Python'),
//     ]))
//     programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-2', '2', [
//       new SubjectThemeModule('programming-paradigms-2-1', '2.1', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-2-2', '2.2', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-2-3', '2.3', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-2-4', '2.4', 'Paradigmas de Ling. de Programação com Python'),
//     ]))
//     programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-3', '3', [
//       new SubjectThemeModule('programming-paradigms-3-1', '3.1', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-3-2', '3.2', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-3-3', '3.3', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-3-4', '3.4', 'Paradigmas de Ling. de Programação com Python'),
//     ]))
//     programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-4', '4', [
//       new SubjectThemeModule('programming-paradigms-4-1', '4.1', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-4-2', '4.2', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-4-3', '4.3', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-4-4', '4.4', 'Paradigmas de Ling. de Programação com Python'),
//     ]))
//     programmingParadigms.addTheme(new SubjectTheme('programming-paradigms-5', '5', [
//       new SubjectThemeModule('programming-paradigms-5-1', '5.1', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-5-2', '5.2', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-5-3', '5.3', 'Paradigmas de Ling. de Programação com Python'),
//       new SubjectThemeModule('programming-paradigms-5-4', '5.4', 'Paradigmas de Ling. de Programação com Python'),
//     ]))

//     const architecture = new Subject('architecture', 'Arquitetura de Computadores', [csFirstPeriod, cyberSecurityFirstPeriod])
//     architecture.addTheme(new SubjectTheme('architecture-1', '1', [
//       new SubjectThemeModule('architecture-1-1', '1.1', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-1-2', '1.2', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-1-3', '1.3', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-1-4', '1.4', 'Arquitetura de Computadores'),
//     ]))
//     // add themes 2, 3 4 5 and 6
//     architecture.addTheme(new SubjectTheme('architecture-2', '2', [
//       new SubjectThemeModule('architecture-2-1', '2.1', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-2-2', '2.2', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-2-3', '2.3', 'Arquitetura de Computadores'),
//     ]))
//     architecture.addTheme(new SubjectTheme('architecture-3', '3', [
//       new SubjectThemeModule('architecture-3-1', '3.1', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-3-2', '3.2', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-3-3', '3.3', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-3-4', '3.4', 'Arquitetura de Computadores'),
//     ]))
//     architecture.addTheme(new SubjectTheme('architecture-4', '4', [
//       new SubjectThemeModule('architecture-4-1', '4.1', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-4-2', '4.2', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-4-3', '4.3', 'Arquitetura de Computadores'),
//     ]))
//     architecture.addTheme(new SubjectTheme('architecture-5', '5', [
//       new SubjectThemeModule('architecture-5-1', '5.1', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-5-2', '5.2', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-5-3', '5.3', 'Arquitetura de Computadores'),
//     ]))
//     architecture.addTheme(new SubjectTheme('architecture-6', '6', [
//       new SubjectThemeModule('architecture-6-1', '6.1', 'Arquitetura de Computadores'),
//       new SubjectThemeModule('architecture-6-2', '6.2', 'Arquitetura de Computadores'),
//     ]))

//     const webDevelopment = new Subject('web-development', 'Desenv. Web em Html5, Css, Javascript e Php', [csFirstPeriod])
//     webDevelopment.addTheme(new SubjectTheme('web-development-1', '1', [
//       new SubjectThemeModule('web-development-1-1', '1.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-1-2', '1.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-1-3', '1.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-1-4', '1.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
//     ]))
//     webDevelopment.addTheme(new SubjectTheme('web-development-2', '2', [
//       new SubjectThemeModule('web-development-2-1', '2.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-2-2', '2.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-2-3', '2.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-2-4', '2.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
//     ]))
//     webDevelopment.addTheme(new SubjectTheme('web-development-3', '3', [
//       new SubjectThemeModule('web-development-3-1', '3.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-3-2', '3.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-3-3', '3.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-3-4', '3.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
//     ]))
//     webDevelopment.addTheme(new SubjectTheme('web-development-4', '4', [
//       new SubjectThemeModule('web-development-4-1', '4.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-4-2', '4.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-4-3', '4.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-4-4', '4.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
//     ]))
//     webDevelopment.addTheme(new SubjectTheme('web-development-5', '5', [
//       new SubjectThemeModule('web-development-5-1', '5.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-5-2', '5.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-5-3', '5.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-5-4', '5.4', 'Desenv. Web em Html5, Css, Javascript e Php'),
//     ]))
//     webDevelopment.addTheme(new SubjectTheme('web-development-6', '6', [
//       new SubjectThemeModule('web-development-6-1', '6.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-6-2', '6.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-6-3', '6.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
//     ]))
//     webDevelopment.addTheme(new SubjectTheme('web-development-7', '7', [
//       new SubjectThemeModule('web-development-7-1', '7.1', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-7-2', '7.2', 'Desenv. Web em Html5, Css, Javascript e Php'),
//       new SubjectThemeModule('web-development-7-3', '7.3', 'Desenv. Web em Html5, Css, Javascript e Php'),
//     ]))

//     const computingThinking = new Subject('computing-thinking', 'Pensamento Computacional', [csFirstPeriod, cyberSecurityFirstPeriod])
//     computingThinking.addTheme(new SubjectTheme('computing-thinking-1', '1', [
//       new SubjectThemeModule('computing-thinking-1-1', '1.1', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-1-2', '1.2', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-1-3', '1.3', 'Pensamento Computacional'),
//     ]))
//     computingThinking.addTheme(new SubjectTheme('computing-thinking-2', '2', [
//       new SubjectThemeModule('computing-thinking-2-1', '2.1', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-2-2', '2.2', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-2-3', '2.3', 'Pensamento Computacional'),
//     ]))
//     computingThinking.addTheme(new SubjectTheme('computing-thinking-3', '3', [
//       new SubjectThemeModule('computing-thinking-3-1', '3.1', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-3-2', '3.2', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-3-3', '3.3', 'Pensamento Computacional'),
//     ]))
//     computingThinking.addTheme(new SubjectTheme('computing-thinking-4', '4', [
//       new SubjectThemeModule('computing-thinking-4-1', '4.1', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-4-2', '4.2', 'Pensamento Computacional'),
//     ]))
//     computingThinking.addTheme(new SubjectTheme('computing-thinking-5', '5', [
//       new SubjectThemeModule('computing-thinking-5-1', '5.1', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-5-2', '5.2', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-5-3', '5.3', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-5-4', '5.4', 'Pensamento Computacional'),
//     ]))
//     computingThinking.addTheme(new SubjectTheme('computing-thinking-6', '6', [
//       new SubjectThemeModule('computing-thinking-6-1', '6.1', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-6-2', '6.2', 'Pensamento Computacional'),
//       new SubjectThemeModule('computing-thinking-6-3', '6.3', 'Pensamento Computacional'),
//     ]))

//     const math = new Subject('matematica', 'Matemática e Lógica', [csSecondPeriod])
//     math.addTheme(new SubjectTheme('math-2','2', [
//       new SubjectThemeModule('math-2-1', "2.1", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-2-2', "2.2", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-2-3', "2.3", 'Matemática e Lógica')]))
//     math.addTheme(new SubjectTheme('math-3','3', [
//       new SubjectThemeModule('math-3-1', "3.1", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-3-2', "3.2", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-3-3', "3.3", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-3-4', "3.4", 'Matemática e Lógica')
//     ]))
//     math.addTheme(new SubjectTheme('math-4','4', [
//       new SubjectThemeModule('math-4-1', "4.1", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-4-2', "4.2", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-4-3', "4.3", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-4-4', "4.4", 'Matemática e Lógica')
//     ]))
//     math.addTheme(new SubjectTheme('math-5','5', [
//       new SubjectThemeModule('math-5-1', "5.1", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-5-2', "5.2", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-5-3', "5.3", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-5-4', "5.4", 'Matemática e Lógica')
//     ]))
//     math.addTheme(new SubjectTheme('math-6','6', [
//       new SubjectThemeModule('math-6-1', "6.1", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-6-2', "6.2", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-6-3', "6.3", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-6-4', "6.4", 'Matemática e Lógica')
//     ]))
//     math.addTheme(new SubjectTheme('math-7','7', [
//       new SubjectThemeModule('math-7-1', "7.1", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-7-2', "7.2", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-7-3', "7.3", 'Matemática e Lógica'),
//       new SubjectThemeModule('math-7-4', "7.4", 'Matemática e Lógica'),
//     ]))

//     const cloud = new Subject('cloud', 'Computação em Nuvem', [csSecondPeriod, sdSecondPeriod, cyberSecuritySecondPeriod])
//     cloud.addTheme(new SubjectTheme('cloud-2', '2', [
//       new SubjectThemeModule('cloud-2-1', '2.1', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-2-2', '2.2', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-2-3', '2.3', 'Computação em Nuvem'),
//     ]))
//     cloud.addTheme(new SubjectTheme('cloud-3', '3', [
//       new SubjectThemeModule('cloud-3-1', '3.1', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-3-2', '3.2', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-3-3', '3.3', 'Computação em Nuvem'),

//     ]))
//     cloud.addTheme(new SubjectTheme('cloud-4', '4', [
//       new SubjectThemeModule('cloud-4-1', '4.1', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-4-2', '4.2', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-4-3', '4.3', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-4-4', '4.4', 'Computação em Nuvem')
//     ]))
//     cloud.addTheme(new SubjectTheme('cloud-5', '5', [
//       new SubjectThemeModule('cloud-5-1', '5.1', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-5-2', '5.2', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-5-3', '5.3', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-5-4', '5.4', 'Computação em Nuvem')
//     ]))
//     cloud.addTheme(new SubjectTheme('cloud-6', '6', [
//       new SubjectThemeModule('cloud-6-1', '6.1', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-6-2', '6.2', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-6-3', '6.3', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-6-4', '6.4', 'Computação em Nuvem')
//     ]))
//     cloud.addTheme(new SubjectTheme('cloud-7', '7', [
//       new SubjectThemeModule('cloud-7-1', '7.1', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-7-2', '7.2', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-7-3', '7.3', 'Computação em Nuvem'),
//       new SubjectThemeModule('cloud-7-4', '7.4', 'Computação em Nuvem')
//     ]))

//     const dataStructure = new Subject('data-structure', 'Estrutura de dados', [csSecondPeriod, sdSecondPeriod])
//     dataStructure.addTheme(new SubjectTheme('data-structure-1', '1', [
//       new SubjectThemeModule('data-structure-1-1', '1.1', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-1-2', '1.2', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-1-3', '1.3', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-1-4', '1.4', 'Estrutura de dados')
//     ]))
//     dataStructure.addTheme(new SubjectTheme('data-structure-2', '2', [
//       new SubjectThemeModule('data-structure-2-1', '2.1', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-2-2', '2.2', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-2-3', '2.3', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-2-4', '2.4', 'Estrutura de dados')
//     ]))
//     dataStructure.addTheme(new SubjectTheme('data-structure-3', '3', [
//       new SubjectThemeModule('data-structure-3-1', '3.1', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-3-2', '3.2', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-3-3', '3.3', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-3-4', '3.4', 'Estrutura de dados')
//     ]))
//     dataStructure.addTheme(new SubjectTheme('data-structure-4', '4', [
//       new SubjectThemeModule('data-structure-4-1', '4.1', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-4-2', '4.2', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-4-3', '4.3', 'Estrutura de dados'),
//       new SubjectThemeModule('data-structure-4-4', '4.4', 'Estrutura de dados')
//     ]))

//     const database = new Subject('database', 'Banco de dados', [csSecondPeriod])
//     database.addTheme(new SubjectTheme('database-2', '2', [
//       new SubjectThemeModule('database-2-1', '2.1', 'Banco de dados'),
//       new SubjectThemeModule('database-2-2', '2.2', 'Banco de dados'),
//       new SubjectThemeModule('database-2-3', '2.3', 'Banco de dados'),
//     ]))
//     database.addTheme(new SubjectTheme('database-3', '3', [
//       new SubjectThemeModule('database-3-1', '3.1', 'Banco de dados'),
//       new SubjectThemeModule('database-3-2', '3.2', 'Banco de dados'),
//       new SubjectThemeModule('database-3-3', '3.3', 'Banco de dados'),
//       new SubjectThemeModule('database-3-4', '3.4', 'Banco de dados')
//     ]))
//     database.addTheme(new SubjectTheme('database-4', '4', [
//       new SubjectThemeModule('database-4-1', '4.1', 'Banco de dados'),
//       new SubjectThemeModule('database-4-2', '4.2', 'Banco de dados'),
//       new SubjectThemeModule('database-4-3', '4.3', 'Banco de dados'),
//       new SubjectThemeModule('database-4-4', '4.4', 'Banco de dados')
//     ]))
//     database.addTheme(new SubjectTheme('database-5', '5', [
//       new SubjectThemeModule('database-5-1', '5.1', 'Banco de dados'),
//       new SubjectThemeModule('database-5-2', '5.2', 'Banco de dados'),
//       new SubjectThemeModule('database-5-3', '5.3', 'Banco de dados'),
//       new SubjectThemeModule('database-5-4', '5.4', 'Banco de dados')
//     ]))
//     database.addTheme(new SubjectTheme('database-6', '6', [
//       new SubjectThemeModule('database-6-1', '6.1', 'Banco de dados'),
//       new SubjectThemeModule('database-6-2', '6.2', 'Banco de dados'),
//       new SubjectThemeModule('database-6-3', '6.3', 'Banco de dados'),
//       new SubjectThemeModule('database-6-4', '6.4', 'Banco de dados')
//     ]))
//     database.addTheme(new SubjectTheme('database-7', '7', [
//       new SubjectThemeModule('database-7-1', '7.1', 'Banco de dados'),
//       new SubjectThemeModule('database-7-2', '7.2', 'Banco de dados'),
//       new SubjectThemeModule('database-7-3', '7.3', 'Banco de dados'),
//       new SubjectThemeModule('database-7-4', '7.4', 'Banco de dados')
//     ]))

//     const uml = new Subject('uml', 'Modelagem de Sistemas UML', [csSecondPeriod, sdSecondPeriod])
//     uml.addTheme(new SubjectTheme('uml-1', '1', [
//       new SubjectThemeModule('uml-1-1', '1.1', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-1-2', '1.2', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-1-3', '1.3', 'Modelagem de Sistemas UML'),
//     ]))
//     uml.addTheme(new SubjectTheme('uml-2', '2', [
//       new SubjectThemeModule('uml-2-1', '2.1', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-2-2', '2.2', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-2-3', '2.3', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-2-4', '2.4', 'Modelagem de Sistemas UML')
//     ]))
//     uml.addTheme(new SubjectTheme('uml-3', '3', [
//       new SubjectThemeModule('uml-3-1', '3.1', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-3-2', '3.2', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-3-3', '3.3', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-3-4', '3.4', 'Modelagem de Sistemas UML')
//     ]))
//     uml.addTheme(new SubjectTheme('uml-4', '4', [
//       new SubjectThemeModule('uml-4-1', '4.1', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-4-2', '4.2', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-4-3', '4.3', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-4-4', '4.4', 'Modelagem de Sistemas UML')
//     ]))
//     uml.addTheme(new SubjectTheme('uml-5', '5', [
//       new SubjectThemeModule('uml-5-1', '5.1', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-5-2', '5.2', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-5-3', '5.3', 'Modelagem de Sistemas UML'),
//       new SubjectThemeModule('uml-5-4', '5.4', 'Modelagem de Sistemas UML')
//     ]))

//     const communication = new Subject('communication', 'Comunicação entre Aplicações', [sdSecondPeriod])
//     communication.addTheme(new SubjectTheme('communication-1', '1', [
//       new SubjectThemeModule('communication-1-1', '1.1', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-1-2', '1.2', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-1-3', '1.3', 'Comunicação entre Aplicações'),
//     ]))
//     communication.addTheme(new SubjectTheme('communication-2', '2', [
//       new SubjectThemeModule('communication-2-1', '2.1', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-2-2', '2.2', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-2-3', '2.3', 'Comunicação entre Aplicações'),
//     ]))
//     communication.addTheme(new SubjectTheme('communication-3', '3', [
//       new SubjectThemeModule('communication-3-1', '3.1', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-3-2', '3.2', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-3-3', '3.3', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-3-4', '3.4', 'Comunicação entre Aplicações'),
//     ]))
//     communication.addTheme(new SubjectTheme('communication-4', '4', [
//       new SubjectThemeModule('communication-4-1', '4.1', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-4-2', '4.2', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-4-3', '4.3', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-4-4', '4.4', 'Comunicação entre Aplicações'),
//     ]))
//     communication.addTheme(new SubjectTheme('communication-5', '5', [
//       new SubjectThemeModule('communication-5-1', '5.1', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-5-2', '5.2', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-5-3', '5.3', 'Comunicação entre Aplicações'),
//     ]))
//     communication.addTheme(new SubjectTheme('communication-6', '6', [
//       new SubjectThemeModule('communication-6-1', '6.1', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-6-2', '6.2', 'Comunicação entre Aplicações'),
//       new SubjectThemeModule('communication-6-3', '6.3', 'Comunicação entre Aplicações'),
//     ]))
//     const usability = new Subject('usability', 'Engenharia de Usabilidade', [sdSecondPeriod])
//     usability.addTheme(new SubjectTheme('usability-2', '2', [
//       new SubjectThemeModule('usability-2-1', '2.1', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-2-2', '2.2', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-2-3', '2.3', 'Engenharia de Usabilidade'),
//     ]))
//     usability.addTheme(new SubjectTheme('usability-3', '3', [
//       new SubjectThemeModule('usability-3-1', '3.1', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-3-2', '3.2', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-3-3', '3.3', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-3-4', '3.4', 'Engenharia de Usabilidade'),
//     ]))
//     usability.addTheme(new SubjectTheme('usability-4', '4', [
//       new SubjectThemeModule('usability-4-1', '4.1', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-4-2', '4.2', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-4-3', '4.3', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-4-4', '4.4', 'Engenharia de Usabilidade'),
//     ]))
//     usability.addTheme(new SubjectTheme('usability-5', '5', [
//       new SubjectThemeModule('usability-5-1', '5.1', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-5-2', '5.2', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-5-3', '5.3', 'Engenharia de Usabilidade'),
//       new SubjectThemeModule('usability-5-4', '5.4', 'Engenharia de Usabilidade'),
//     ]))

//     const agileDevelopementPython = new Subject('agile-developement-python', 'Desenvolvimento Rápido com Python', [cyberSecuritySecondPeriod])
//     agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-1', '1', [
//       new SubjectThemeModule('agile-developement-python-1-1', '1.1', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-1-2', '1.2', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-1-3', '1.3', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-1-4', '1.4', 'Desenvolvimento Rápido com Python'),
//     ]))
//     agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-2', '2', [
//       new SubjectThemeModule('agile-developement-python-2-1', '2.1', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-2-2', '2.2', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-2-3', '2.3', 'Desenvolvimento Rápido com Python'),
//     ]))
//     agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-3', '3', [
//       new SubjectThemeModule('agile-developement-python-3-1', '3.1', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-3-2', '3.2', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-3-3', '3.3', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-3-4', '3.4', 'Desenvolvimento Rápido com Python'),
//     ]))
//     agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-4', '4', [
//       new SubjectThemeModule('agile-developement-python-4-1', '4.1', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-4-2', '4.2', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-4-3', '4.3', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-4-4', '4.4', 'Desenvolvimento Rápido com Python'),
//     ]))
//     agileDevelopementPython.addTheme(new SubjectTheme('agile-developement-python-5', '5', [
//       new SubjectThemeModule('agile-developement-python-5-1', '5.1', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-5-2', '5.2', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-5-3', '5.3', 'Desenvolvimento Rápido com Python'),
//       new SubjectThemeModule('agile-developement-python-5-4', '5.4', 'Desenvolvimento Rápido com Python'),
//     ]))
//     // gestão de serviços de ti
//     const itServiceManagement = new Subject('it-service-management', 'Gestão de Serviços de TI', [cyberSecuritySecondPeriod])
//     itServiceManagement.addTheme(new SubjectTheme('it-service-management-1', '1', [
//       new SubjectThemeModule('it-service-management-1-1', '1.1', 'Gestão de Serviços de TI'),
//     ]))
//     itServiceManagement.addTheme(new SubjectTheme('it-service-management-2', '2', [
//       new SubjectThemeModule('it-service-management-2-1', '2.1', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-2-2', '2.2', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-2-3', '2.3', 'Gestão de Serviços de TI'),
//     ]))
//     itServiceManagement.addTheme(new SubjectTheme('it-service-management-3', '3', [
//       new SubjectThemeModule('it-service-management-3-1', '3.1', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-3-2', '3.2', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-3-3', '3.3', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-3-4', '3.4', 'Gestão de Serviços de TI'),
//     ]))
//     itServiceManagement.addTheme(new SubjectTheme('it-service-management-4', '4', [
//       new SubjectThemeModule('it-service-management-4-1', '4.1', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-4-2', '4.2', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-4-3', '4.3', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-4-4', '4.4', 'Gestão de Serviços de TI'),
//     ]))
//     itServiceManagement.addTheme(new SubjectTheme('it-service-management-5', '5', [
//       new SubjectThemeModule('it-service-management-5-1', '5.1', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-5-2', '5.2', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-5-3', '5.3', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-5-4', '5.4', 'Gestão de Serviços de TI'),
//     ]))
//     itServiceManagement.addTheme(new SubjectTheme('it-service-management-6', '6', [
//       new SubjectThemeModule('it-service-management-6-1', '6.1', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-6-2', '6.2', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-6-3', '6.3', 'Gestão de Serviços de TI'),
//       new SubjectThemeModule('it-service-management-6-4', '6.4', 'Gestão de Serviços de TI'),
//     ]))

//     // Inteligência de Ameaças Cibernéticas
//     const cyberSecurityThreatIntelligence = new Subject('cyber-security-threat-intelligence', 'Inteligência de Ameaças Cibernéticas', [cyberSecuritySecondPeriod])
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-1', '1', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-1-1', '1.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-2', '2', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-2-1', '2.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-3', '3', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-3-1', '3.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-4', '4', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-4-1', '4.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-5', '5', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-5-1', '5.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-6', '6', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-6-1', '6.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-7', '7', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-7-1', '7.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-8', '8', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-8-1', '8.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-9', '9', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-9-1', '9.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-10', '10', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-10-1', '10.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))
//     cyberSecurityThreatIntelligence.addTheme(new SubjectTheme('cyber-security-threat-intelligence-11', '11', [
//       new SubjectThemeModule('cyber-security-threat-intelligence-11-1', '11.1', 'Inteligência de Ameaças Cibernéticas'),
//     ]))

//     // protocolos de redes de computadores
//     const computerNetworkProtocols = new Subject('computer-network-protocols', 'Protocolos de Redes de Computadores', [cyberSecuritySecondPeriod])
//     computerNetworkProtocols.addTheme(new SubjectTheme('computer-network-protocols-1', '1', [
//       new SubjectThemeModule('computer-network-protocols-1-1', '1.1', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-1-2', '1.2', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-1-3', '1.3', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-1-4', '1.4', 'Protocolos de Redes de Computadores'),
//     ]))
//     computerNetworkProtocols.addTheme(new SubjectTheme('computer-network-protocols-2', '2', [
//       new SubjectThemeModule('computer-network-protocols-2-1', '2.1', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-2-2', '2.2', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-2-3', '2.3', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-2-4', '2.4', 'Protocolos de Redes de Computadores'),
//     ]))
//     computerNetworkProtocols.addTheme(new SubjectTheme('computer-network-protocols-3', '3', [
//       new SubjectThemeModule('computer-network-protocols-3-1', '3.1', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-3-2', '3.2', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-3-3', '3.3', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-3-4', '3.4', 'Protocolos de Redes de Computadores'),
//     ]))
//     computerNetworkProtocols.addTheme(new SubjectTheme('computer-network-protocols-4', '4', [
//       new SubjectThemeModule('computer-network-protocols-4-1', '4.1', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-4-2', '4.2', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-4-3', '4.3', 'Protocolos de Redes de Computadores'),
//       new SubjectThemeModule('computer-network-protocols-4-4', '4.4', 'Protocolos de Redes de Computadores'),
//     ]))

//     // Padrões de Projetos de Software Com Java
//     const softwareDesignPatternsJava = new Subject('software-design-patterns-java', 'Padrões de Projetos de Software Com Java')
//     // Tema 1 (1 modulo)
//     softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-1', '1', [
//       new SubjectThemeModule('software-design-patterns-java-1-1', '1.1', 'Padrões de Projetos de Software Com Java'),
//     ]))
//     // tema 2 (4)
//     softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-2', '2', [
//       new SubjectThemeModule('software-design-patterns-java-2-1', '2.1', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-2-2', '2.2', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-2-3', '2.3', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-2-4', '2.4', 'Padrões de Projetos de Software Com Java'),
//     ]))
//     // tema 3 (4)
//     softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-3', '3', [
//       new SubjectThemeModule('software-design-patterns-java-3-1', '3.1', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-3-2', '3.2', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-3-3', '3.3', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-3-4', '3.4', 'Padrões de Projetos de Software Com Java'),
//     ]))
//     // tema 4 (4)
//     softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-4', '4', [
//       new SubjectThemeModule('software-design-patterns-java-4-1', '4.1', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-4-2', '4.2', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-4-3', '4.3', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-4-4', '4.4', 'Padrões de Projetos de Software Com Java'),
//     ]))
//     // tema 5 (4)
//     softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-5', '5', [
//       new SubjectThemeModule('software-design-patterns-java-5-1', '5.1', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-5-2', '5.2', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-5-3', '5.3', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-5-4', '5.4', 'Padrões de Projetos de Software Com Java'),
//     ]))
//     // tema 6 (4)
//     softwareDesignPatternsJava.addTheme(new SubjectTheme('software-design-patterns-java-6', '6', [
//       new SubjectThemeModule('software-design-patterns-java-6-1', '6.1', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-6-2', '6.2', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-6-3', '6.3', 'Padrões de Projetos de Software Com Java'),
//       new SubjectThemeModule('software-design-patterns-java-6-4', '6.4', 'Padrões de Projetos de Software Com Java'),
//     ]))
//     // Programação para dispositivos móveis para Android
//     const mobileProgrammingAndroid = new Subject('mobile-programming-android', 'Programação para Dispositivos Móveis para Android')
//     // Tema 1 (2 modulos)
//     mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-1', '1', [
//       new SubjectThemeModule('mobile-programming-android-1-1', '1.1', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-1-2', '1.2', 'Programação para Dispositivos Móveis para Android'),
//     ]))
//     // tema 2 (3)
//     mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-2', '2', [
//       new SubjectThemeModule('mobile-programming-android-2-1', '2.1', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-2-2', '2.2', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-2-3', '2.3', 'Programação para Dispositivos Móveis para Android'),
//     ]))
//     // tema 3 (4)
//     mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-3', '3', [
//       new SubjectThemeModule('mobile-programming-android-3-1', '3.1', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-3-2', '3.2', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-3-3', '3.3', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-3-4', '3.4', 'Programação para Dispositivos Móveis para Android'),
//     ]))
//     // tema 4 (4)
//     mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-4', '4', [
//       new SubjectThemeModule('mobile-programming-android-4-1', '4.1', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-4-2', '4.2', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-4-3', '4.3', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-4-4', '4.4', 'Programação para Dispositivos Móveis para Android'),
//     ]))
//     // tema 5 (3)
//     mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-5', '5', [
//       new SubjectThemeModule('mobile-programming-android-5-1', '5.1', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-5-2', '5.2', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-5-3', '5.3', 'Programação para Dispositivos Móveis para Android'),
//     ]))
//     // tema 6 (4)
//     mobileProgrammingAndroid.addTheme(new SubjectTheme('mobile-programming-android-6', '6', [
//       new SubjectThemeModule('mobile-programming-android-6-1', '6.1', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-6-2', '6.2', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-6-3', '6.3', 'Programação para Dispositivos Móveis para Android'),
//       new SubjectThemeModule('mobile-programming-android-6-4', '6.4', 'Programação para Dispositivos Móveis para Android'),
//     ]))
//     // Tópicos de big data em python
//     const bigDataPython = new Subject('big-data-python', 'Tópicos de Big Data em Python')
//     // Tema 1 (2 modulos)
//     bigDataPython.addTheme(new SubjectTheme('big-data-python-1', '1', [
//       new SubjectThemeModule('big-data-python-1-1', '1.1', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-1-2', '1.2', 'Tópicos de Big Data em Python'),
//     ]))
//     // tema 2 (4)
//     bigDataPython.addTheme(new SubjectTheme('big-data-python-2', '2', [
//       new SubjectThemeModule('big-data-python-2-1', '2.1', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-2-2', '2.2', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-2-3', '2.3', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-2-4', '2.4', 'Tópicos de Big Data em Python'),
//     ]))
//     // tema 3 (3)
//     bigDataPython.addTheme(new SubjectTheme('big-data-python-3', '3', [
//       new SubjectThemeModule('big-data-python-3-1', '3.1', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-3-2', '3.2', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-3-3', '3.3', 'Tópicos de Big Data em Python'),
//     ]))
//     // tema 4 (4)
//     bigDataPython.addTheme(new SubjectTheme('big-data-python-4', '4', [
//       new SubjectThemeModule('big-data-python-4-1', '4.1', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-4-2', '4.2', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-4-3', '4.3', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-4-4', '4.4', 'Tópicos de Big Data em Python'),
//     ]))
//     // tema 5 (4)
//     bigDataPython.addTheme(new SubjectTheme('big-data-python-5', '5', [
//       new SubjectThemeModule('big-data-python-5-1', '5.1', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-5-2', '5.2', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-5-3', '5.3', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-5-4', '5.4', 'Tópicos de Big Data em Python'),
//     ]))
//     // tema 6 (3)
//     bigDataPython.addTheme(new SubjectTheme('big-data-python-6', '6', [
//       new SubjectThemeModule('big-data-python-6-1', '6.1', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-6-2', '6.2', 'Tópicos de Big Data em Python'),
//       new SubjectThemeModule('big-data-python-6-3', '6.3', 'Tópicos de Big Data em Python'),
//     ]))

//     // Tópicos de cloud iot e indústria 4.0 em python
//     const cloudIotIndustryPython = new Subject('cloud-iot-industry-python', 'Tópicos de Cloud IoT e Indústria 4.0 em Python')
//     // Tema 1 (1 modulo)
//     cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-1', '1', [
//       new SubjectThemeModule('cloud-iot-industry-python-1-1', '1.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//     ]))
//     // tema 2 (3)
//     cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-2', '2', [
//       new SubjectThemeModule('cloud-iot-industry-python-2-1', '2.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//       new SubjectThemeModule('cloud-iot-industry-python-2-2', '2.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//       new SubjectThemeModule('cloud-iot-industry-python-2-3', '2.3', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//     ]))
//     // tema 3 (2)
//     cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-3', '3', [
//       new SubjectThemeModule('cloud-iot-industry-python-3-1', '3.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//       new SubjectThemeModule('cloud-iot-industry-python-3-2', '3.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//     ]))
//     // tema 4 (3)
//     cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-4', '4', [
//       new SubjectThemeModule('cloud-iot-industry-python-4-1', '4.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//       new SubjectThemeModule('cloud-iot-industry-python-4-2', '4.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//       new SubjectThemeModule('cloud-iot-industry-python-4-3', '4.3', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//     ]))
//     // tema 5 (4)
//     cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-5', '5', [
//       new SubjectThemeModule('cloud-iot-industry-python-5-1', '5.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//       new SubjectThemeModule('cloud-iot-industry-python-5-2', '5.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//       new SubjectThemeModule('cloud-iot-industry-python-5-3', '5.3', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//       new SubjectThemeModule('cloud-iot-industry-python-5-4', '5.4', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//     ]))
//     // tema 6 (2)
//     cloudIotIndustryPython.addTheme(new SubjectTheme('cloud-iot-industry-python-6', '6', [
//       new SubjectThemeModule('cloud-iot-industry-python-6-1', '6.1', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//       new SubjectThemeModule('cloud-iot-industry-python-6-2', '6.2', 'Tópicos de Cloud IoT e Indústria 4.0 em Python'),
//     ]))

//     this.add(securityIntroduction)
//     this.add(programmingParadigms)
//     this.add(architecture)
//     this.add(webDevelopment)
//     this.add(computingThinking)
//     this.add(math)
//     this.add(cloud)
//     this.add(dataStructure)
//     this.add(database)
//     this.add(uml)
//     this.add(communication)
//     this.add(usability)
//     this.add(agileDevelopementPython)
//     this.add(networkFundamentals)
//     this.add(itServiceManagement)
//     this.add(cyberSecurityThreatIntelligence)
//     this.add(computerNetworkProtocols)
//     this.add(softwareDesignPatternsJava)
//     this.add(bigDataPython)
//     this.add(cloudIotIndustryPython)
//     this.add(mobileProgrammingAndroid)
//   }

//   public async add(subject: Subject): Promise<void> {
//     this.subjects.push(subject)
//   }

//   public async findAll(): Promise<Subject[]> {
//     return this.subjects
//   }

//   public async findAllByIds(ids: string[]): Promise<Subject[]> {
//     return this.subjects.filter(subject => ids.includes(subject.getId()))
//   }
// }
