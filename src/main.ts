import { Planning } from "./domain/entities/Planning"
import { PlanningDistributionType } from "./domain/entities/PlanningDistributor"
import Subject from "./domain/entities/Subject"
import SubjectTheme from "./domain/entities/SubjectTheme"
import SubjectThemeModule from "./domain/entities/SubjectThemeModule"

const planning = new Planning({
  startDate: new Date('2024-01-01'),
  distribution: PlanningDistributionType.ALTERNATE_DAILY,
  availableHoursPerDay: 4
})

let math: Subject
let physics: Subject
let english: Subject

math = new Subject('math', 'Maths')
math.addTheme(new SubjectTheme('math-1', '1', [new SubjectThemeModule('math-1-1', '1', 'Maths')]))
physics = new Subject('phy', 'Physics')
physics.addTheme(new SubjectTheme('phy-1', '1', [new SubjectThemeModule('phy-1-1', '1', 'Physics')]))
physics.addTheme(new SubjectTheme('phy-2', '2', [new SubjectThemeModule('phy-2-1', '1', 'Physics')]))
english = new Subject('en', 'English')
english.addTheme(new SubjectTheme('en-1', '1', [new SubjectThemeModule('en-1-1', '1', 'English')]))
english.addTheme(new SubjectTheme('en-2', '2', [
  new SubjectThemeModule('en-2-1', '1', 'English'), 
  new SubjectThemeModule('en-2-2', '2', 'English')
]))
planning.addSubject(math)
planning.addSubject(physics)
planning.addSubject(english)
const studyDays = planning.getStudyDays()
console.log(studyDays)