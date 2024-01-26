import Subject from "../../../domain/entities/Subject"
import SubjectTheme from "../../../domain/entities/SubjectTheme"
import SubjectThemeModule from "../../../domain/entities/SubjectThemeModule"

export default class SubjectRepositoryMemory {
  private subjects: Subject[] = []

  constructor(){
    const math = new Subject('matematica', 'Matemática')
    math.addTheme(new SubjectTheme('math-2','2', [
      new SubjectThemeModule('math-2-1', "2.1"),
      new SubjectThemeModule('math-2-2', "2.2"),
      new SubjectThemeModule('math-2-3', "2.3")]))
    math.addTheme(new SubjectTheme('math-3','3', [
      new SubjectThemeModule('math-3-1', "3.1"),
      new SubjectThemeModule('math-3-2', "3.2"),
      new SubjectThemeModule('math-3-3', "3.3"),
      new SubjectThemeModule('math-3-4', "3.4")
    ]))
    math.addTheme(new SubjectTheme('math-4','4', [
      new SubjectThemeModule('math-4-1', "4.1"),
      new SubjectThemeModule('math-4-2', "4.2"),
      new SubjectThemeModule('math-4-3', "4.3"),
      new SubjectThemeModule('math-4-4', "4.4")
    ]))
    math.addTheme(new SubjectTheme('math-5','5', [
      new SubjectThemeModule('math-5-1', "5.1"),
      new SubjectThemeModule('math-5-2', "5.2"),
      new SubjectThemeModule('math-5-3', "5.3"),
      new SubjectThemeModule('math-5-4', "5.4")
    ]))
    math.addTheme(new SubjectTheme('math-6','6', [
      new SubjectThemeModule('math-6-1', "6.1"),
      new SubjectThemeModule('math-6-2', "6.2"),
      new SubjectThemeModule('math-6-3', "6.3"),
      new SubjectThemeModule('math-6-4', "6.4")
    ]))
    math.addTheme(new SubjectTheme('math-7','7', [
      new SubjectThemeModule('math-7-1', "7.1"),
      new SubjectThemeModule('math-7-2', "7.2"),
      new SubjectThemeModule('math-7-3', "7.3"),
      new SubjectThemeModule('math-7-4', "7.4"),
    ]))

    const cloud = new Subject('cloud', 'Computação em Nuvem')
    cloud.addTheme(new SubjectTheme('2', '2', [
      new SubjectThemeModule('cloud-2-1', '2.1'),
      new SubjectThemeModule('cloud-2-2', '2.2'),
      new SubjectThemeModule('cloud-2-3', '2.3'),
    ]))
    cloud.addTheme(new SubjectTheme('3', '3', [
      new SubjectThemeModule('cloud-3-1', '3.1'),
      new SubjectThemeModule('cloud-3-2', '3.2'),
      new SubjectThemeModule('cloud-3-3', '3.3'),

    ]))
    cloud.addTheme(new SubjectTheme('4', '4', [
      new SubjectThemeModule('cloud-4-1', '4.1'),
      new SubjectThemeModule('cloud-4-2', '4.2'),
      new SubjectThemeModule('cloud-4-3', '4.3'),
      new SubjectThemeModule('cloud-4-4', '4.4')
    ]))
    cloud.addTheme(new SubjectTheme('5', '5', [
      new SubjectThemeModule('cloud-5-1', '5.1'),
      new SubjectThemeModule('cloud-5-2', '5.2'),
      new SubjectThemeModule('cloud-5-3', '5.3'),
      new SubjectThemeModule('cloud-5-4', '5.4')
    ]))
    cloud.addTheme(new SubjectTheme('6', '6', [
      new SubjectThemeModule('cloud-6-1', '6.1'),
      new SubjectThemeModule('cloud-6-2', '6.2'),
      new SubjectThemeModule('cloud-6-3', '6.3'),
      new SubjectThemeModule('cloud-6-4', '6.4')
    ]))
    cloud.addTheme(new SubjectTheme('7', '7', [
      new SubjectThemeModule('cloud-7-1', '7.1'),
      new SubjectThemeModule('cloud-7-2', '7.2'),
      new SubjectThemeModule('cloud-7-3', '7.3'),
      new SubjectThemeModule('cloud-7-4', '7.4')
    ]))

    // const dataStructure = new Subject('data-structure', 'Estrutura de dados')
    // dataStructure.addTheme(new SubjectTheme('1', ['1','2','3','4']))
    // dataStructure.addTheme(new SubjectTheme('2', ['1','2','3','4']))
    // dataStructure.addTheme(new SubjectTheme('3', ['1','2','3','4']))
    // dataStructure.addTheme(new SubjectTheme('4', ['1','2']))

    // const database = new Subject('database', 'Banco de dados')
    // database.addTheme(new SubjectTheme('2', ['1','2','3']))
    // database.addTheme(new SubjectTheme('3', ['1','2','3','4']))
    // database.addTheme(new SubjectTheme('4', ['1','2','3','4']))
    // database.addTheme(new SubjectTheme('5', ['1','2','3','4']))
    // database.addTheme(new SubjectTheme('6', ['1','2','3']))
    // database.addTheme(new SubjectTheme('7', ['1','2','3']))

    // const uml = new Subject('uml', 'Modelagem UML')
    // uml.addTheme(new SubjectTheme('1', ['1','2','3']))
    // uml.addTheme(new SubjectTheme('2', ['1','2','3','4']))
    // uml.addTheme(new SubjectTheme('3', ['1','2','3','4']))
    // uml.addTheme(new SubjectTheme('4', ['1','2','3','4']))
    // uml.addTheme(new SubjectTheme('5', ['1','2','3','4']))

    this.add(math)
    this.add(cloud)
    // this.add(dataStructure)
    // this.add(database)
    // this.add(uml)
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