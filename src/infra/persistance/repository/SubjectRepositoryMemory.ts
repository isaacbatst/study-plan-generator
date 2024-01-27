import Subject from "../../../domain/entities/Subject"
import SubjectTheme from "../../../domain/entities/SubjectTheme"
import SubjectThemeModule from "../../../domain/entities/SubjectThemeModule"

export default class SubjectRepositoryMemory {
  private subjects: Subject[] = []

  constructor(){
    const math = new Subject('matematica', 'Matemática')
    math.addTheme(new SubjectTheme('math-2','2', [
      new SubjectThemeModule('math-2-1', "2.1", 'Matemática'),
      new SubjectThemeModule('math-2-2', "2.2", 'Matemática'),
      new SubjectThemeModule('math-2-3', "2.3", 'Matemática')]))
    math.addTheme(new SubjectTheme('math-3','3', [
      new SubjectThemeModule('math-3-1', "3.1", 'Matemática'),
      new SubjectThemeModule('math-3-2', "3.2", 'Matemática'),
      new SubjectThemeModule('math-3-3', "3.3", 'Matemática'),
      new SubjectThemeModule('math-3-4', "3.4", 'Matemática')
    ]))
    math.addTheme(new SubjectTheme('math-4','4', [
      new SubjectThemeModule('math-4-1', "4.1", 'Matemática'),
      new SubjectThemeModule('math-4-2', "4.2", 'Matemática'),
      new SubjectThemeModule('math-4-3', "4.3", 'Matemática'),
      new SubjectThemeModule('math-4-4', "4.4", 'Matemática')
    ]))
    math.addTheme(new SubjectTheme('math-5','5', [
      new SubjectThemeModule('math-5-1', "5.1", 'Matemática'),
      new SubjectThemeModule('math-5-2', "5.2", 'Matemática'),
      new SubjectThemeModule('math-5-3', "5.3", 'Matemática'),
      new SubjectThemeModule('math-5-4', "5.4", 'Matemática')
    ]))
    math.addTheme(new SubjectTheme('math-6','6', [
      new SubjectThemeModule('math-6-1', "6.1", 'Matemática'),
      new SubjectThemeModule('math-6-2', "6.2", 'Matemática'),
      new SubjectThemeModule('math-6-3', "6.3", 'Matemática'),
      new SubjectThemeModule('math-6-4', "6.4", 'Matemática')
    ]))
    math.addTheme(new SubjectTheme('math-7','7', [
      new SubjectThemeModule('math-7-1', "7.1", 'Matemática'),
      new SubjectThemeModule('math-7-2', "7.2", 'Matemática'),
      new SubjectThemeModule('math-7-3', "7.3", 'Matemática'),
      new SubjectThemeModule('math-7-4', "7.4", 'Matemática'),
    ]))

    const cloud = new Subject('cloud', 'Computação em Nuvem')
    cloud.addTheme(new SubjectTheme('2', '2', [
      new SubjectThemeModule('cloud-2-1', '2.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-2-2', '2.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-2-3', '2.3', 'Computação em Nuvem'),
    ]))
    cloud.addTheme(new SubjectTheme('3', '3', [
      new SubjectThemeModule('cloud-3-1', '3.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-3-2', '3.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-3-3', '3.3', 'Computação em Nuvem'),

    ]))
    cloud.addTheme(new SubjectTheme('4', '4', [
      new SubjectThemeModule('cloud-4-1', '4.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-4-2', '4.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-4-3', '4.3', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-4-4', '4.4', 'Computação em Nuvem')
    ]))
    cloud.addTheme(new SubjectTheme('5', '5', [
      new SubjectThemeModule('cloud-5-1', '5.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-5-2', '5.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-5-3', '5.3', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-5-4', '5.4', 'Computação em Nuvem')
    ]))
    cloud.addTheme(new SubjectTheme('6', '6', [
      new SubjectThemeModule('cloud-6-1', '6.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-6-2', '6.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-6-3', '6.3', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-6-4', '6.4', 'Computação em Nuvem')
    ]))
    cloud.addTheme(new SubjectTheme('7', '7', [
      new SubjectThemeModule('cloud-7-1', '7.1', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-7-2', '7.2', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-7-3', '7.3', 'Computação em Nuvem'),
      new SubjectThemeModule('cloud-7-4', '7.4', 'Computação em Nuvem')
    ]))

    const dataStructure = new Subject('data-structure', 'Estrutura de dados')
    dataStructure.addTheme(new SubjectTheme('1', '1', [
      new SubjectThemeModule('data-structure-1-1', '1.1', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-1-2', '1.2', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-1-3', '1.3', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-1-4', '1.4', 'Estrutura de dados')
    ]))
    dataStructure.addTheme(new SubjectTheme('2', '2', [
      new SubjectThemeModule('data-structure-2-1', '2.1', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-2-2', '2.2', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-2-3', '2.3', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-2-4', '2.4', 'Estrutura de dados')
    ]))
    dataStructure.addTheme(new SubjectTheme('3', '3', [
      new SubjectThemeModule('data-structure-3-1', '3.1', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-3-2', '3.2', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-3-3', '3.3', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-3-4', '3.4', 'Estrutura de dados')
    ]))
    dataStructure.addTheme(new SubjectTheme('4', '4', [
      new SubjectThemeModule('data-structure-4-1', '4.1', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-4-2', '4.2', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-4-3', '4.3', 'Estrutura de dados'),
      new SubjectThemeModule('data-structure-4-4', '4.4', 'Estrutura de dados')
    ]))

    const database = new Subject('database', 'Banco de dados')
    database.addTheme(new SubjectTheme('2', '2', [
      new SubjectThemeModule('database-2-1', '2.1', 'Banco de dados'),
      new SubjectThemeModule('database-2-2', '2.2', 'Banco de dados'),
      new SubjectThemeModule('database-2-3', '2.3', 'Banco de dados'),
    ]))
    database.addTheme(new SubjectTheme('3', '3', [
      new SubjectThemeModule('database-3-1', '3.1', 'Banco de dados'),
      new SubjectThemeModule('database-3-2', '3.2', 'Banco de dados'),
      new SubjectThemeModule('database-3-3', '3.3', 'Banco de dados'),
      new SubjectThemeModule('database-3-4', '3.4', 'Banco de dados')
    ]))
    database.addTheme(new SubjectTheme('4', '4', [
      new SubjectThemeModule('database-4-1', '4.1', 'Banco de dados'),
      new SubjectThemeModule('database-4-2', '4.2', 'Banco de dados'),
      new SubjectThemeModule('database-4-3', '4.3', 'Banco de dados'),
      new SubjectThemeModule('database-4-4', '4.4', 'Banco de dados')
    ]))
    database.addTheme(new SubjectTheme('5', '5', [
      new SubjectThemeModule('database-5-1', '5.1', 'Banco de dados'),
      new SubjectThemeModule('database-5-2', '5.2', 'Banco de dados'),
      new SubjectThemeModule('database-5-3', '5.3', 'Banco de dados'),
      new SubjectThemeModule('database-5-4', '5.4', 'Banco de dados')
    ]))
    database.addTheme(new SubjectTheme('6', '6', [
      new SubjectThemeModule('database-6-1', '6.1', 'Banco de dados'),
      new SubjectThemeModule('database-6-2', '6.2', 'Banco de dados'),
      new SubjectThemeModule('database-6-3', '6.3', 'Banco de dados'),
      new SubjectThemeModule('database-6-4', '6.4', 'Banco de dados')
    ]))
    database.addTheme(new SubjectTheme('7', '7', [
      new SubjectThemeModule('database-7-1', '7.1', 'Banco de dados'),
      new SubjectThemeModule('database-7-2', '7.2', 'Banco de dados'),
      new SubjectThemeModule('database-7-3', '7.3', 'Banco de dados'),
      new SubjectThemeModule('database-7-4', '7.4', 'Banco de dados')
    ]))

    const uml = new Subject('uml', 'Modelagem UML')
    uml.addTheme(new SubjectTheme('1', '1', [
      new SubjectThemeModule('uml-1-1', '1.1', 'Modelagem UML'),
      new SubjectThemeModule('uml-1-2', '1.2', 'Modelagem UML'),
      new SubjectThemeModule('uml-1-3', '1.3', 'Modelagem UML'),
    ]))
    uml.addTheme(new SubjectTheme('2', '2', [
      new SubjectThemeModule('uml-2-1', '2.1', 'Modelagem UML'),
      new SubjectThemeModule('uml-2-2', '2.2', 'Modelagem UML'),
      new SubjectThemeModule('uml-2-3', '2.3', 'Modelagem UML'),
      new SubjectThemeModule('uml-2-4', '2.4', 'Modelagem UML')
    ]))
    uml.addTheme(new SubjectTheme('3', '3', [
      new SubjectThemeModule('uml-3-1', '3.1', 'Modelagem UML'),
      new SubjectThemeModule('uml-3-2', '3.2', 'Modelagem UML'),
      new SubjectThemeModule('uml-3-3', '3.3', 'Modelagem UML'),
      new SubjectThemeModule('uml-3-4', '3.4', 'Modelagem UML')
    ]))
    uml.addTheme(new SubjectTheme('4', '4', [
      new SubjectThemeModule('uml-4-1', '4.1', 'Modelagem UML'),
      new SubjectThemeModule('uml-4-2', '4.2', 'Modelagem UML'),
      new SubjectThemeModule('uml-4-3', '4.3', 'Modelagem UML'),
      new SubjectThemeModule('uml-4-4', '4.4', 'Modelagem UML')
    ]))
    uml.addTheme(new SubjectTheme('5', '5', [
      new SubjectThemeModule('uml-5-1', '5.1', 'Modelagem UML'),
      new SubjectThemeModule('uml-5-2', '5.2', 'Modelagem UML'),
      new SubjectThemeModule('uml-5-3', '5.3', 'Modelagem UML'),
      new SubjectThemeModule('uml-5-4', '5.4', 'Modelagem UML')
    ]))

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