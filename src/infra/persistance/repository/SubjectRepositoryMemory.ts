import Subject from "../../../domain/entities/Subject"
import SubjectTheme from "../../../domain/entities/SubjectTheme"

export default class SubjectRepositoryMemory {
  private subjects: Subject[] = []

  constructor(){
    const math = new Subject('matematica', 'Matemática')
    math.addTheme(new SubjectTheme('2', ['1','2','3']))
    math.addTheme(new SubjectTheme('3', ['1','2','3','4']))
    math.addTheme(new SubjectTheme('4', ['1','2','3','4']))
    math.addTheme(new SubjectTheme('5', ['1','2','3','4']))
    math.addTheme(new SubjectTheme('6', ['1','2','3','4']))
    math.addTheme(new SubjectTheme('7', ['1','2','3','4']))

    const cloud = new Subject('cloud', 'Computação em Nuvem')
    cloud.addTheme(new SubjectTheme('2', ['1','2','3']))
    cloud.addTheme(new SubjectTheme('3', ['1','2','3']))
    cloud.addTheme(new SubjectTheme('4', ['1','2','3','4']))
    cloud.addTheme(new SubjectTheme('5', ['1','2','3','4']))
    cloud.addTheme(new SubjectTheme('6', ['1','2','3','4']))
    cloud.addTheme(new SubjectTheme('7', ['1','2','3','4']))

    const dataStructure = new Subject('data-structure', 'Estrutura de dados')
    dataStructure.addTheme(new SubjectTheme('1', ['1','2','3','4']))
    dataStructure.addTheme(new SubjectTheme('2', ['1','2','3','4']))
    dataStructure.addTheme(new SubjectTheme('3', ['1','2','3','4']))
    dataStructure.addTheme(new SubjectTheme('4', ['1','2']))

    const database = new Subject('database', 'Banco de dados')
    database.addTheme(new SubjectTheme('2', ['1','2','3']))
    database.addTheme(new SubjectTheme('3', ['1','2','3','4']))
    database.addTheme(new SubjectTheme('4', ['1','2','3','4']))
    database.addTheme(new SubjectTheme('5', ['1','2','3','4']))
    database.addTheme(new SubjectTheme('6', ['1','2','3']))
    database.addTheme(new SubjectTheme('7', ['1','2','3']))

    const uml = new Subject('uml', 'Modelagem UML')
    uml.addTheme(new SubjectTheme('1', ['1','2','3']))
    uml.addTheme(new SubjectTheme('2', ['1','2','3','4']))
    uml.addTheme(new SubjectTheme('3', ['1','2','3','4']))
    uml.addTheme(new SubjectTheme('4', ['1','2','3','4']))
    uml.addTheme(new SubjectTheme('5', ['1','2','3','4']))

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