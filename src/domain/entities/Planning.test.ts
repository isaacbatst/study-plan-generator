import { beforeEach, describe, expect, it } from 'vitest'
import { Planning } from './Planning'
import { PlanningDistributionType } from './PlanningDistributor'
import Subject from './Subject'
import SubjectTheme from './SubjectTheme'
import SubjectThemeModule from './SubjectThemeModule'

describe('Planning', () => {
  let math: Subject
  let physics: Subject
  let english: Subject

  beforeEach(() => {
    math = new Subject('math', 'Maths')
    math.addTheme(new SubjectTheme('math-1', '1', [new SubjectThemeModule('math-1-1', '1.1', 'Maths')]))
    physics = new Subject('phy', 'Physics')
    physics.addTheme(new SubjectTheme('phy-1', '1', [new SubjectThemeModule('phy-1-1', '1.1', 'Physics')]))
    physics.addTheme(new SubjectTheme('phy-2', '2', [new SubjectThemeModule('phy-2-1', '2.1', 'Physics')]))
    english = new Subject('en', 'English')
    english.addTheme(new SubjectTheme('en-1', '1', [new SubjectThemeModule('en-1-1', '1.1', 'English')]))
    english.addTheme(new SubjectTheme('en-2', '2', [
      new SubjectThemeModule('en-2-1', '2.1', 'English'), 
      new SubjectThemeModule('en-2-2', '2.2', 'English')
    ]))
  })

  it('should have a start date', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
    })
    expect(planning.getStartDate()).toEqual(new Date('2024-01-01'))
  })

  it('should have no subjects initially', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
    })

    expect(planning.getSubjects()).toEqual([])
  })

  it('should add a subject', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
    })

    planning.addSubject(math)
    const subjects = planning.getSubjects()
    expect(subjects.length).toBe(1)
  })

  it('should calculate necessary days', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
    })

    planning.addSubject(math)
    planning.addSubject(physics)
    planning.addSubject(english)

    expect(planning.calculateNecessaryDays()).toBe(6)
  })

  it('should calculate end date with until finish strategy', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
    })

    planning.addSubject(math)
    planning.addSubject(physics)
    planning.addSubject(english)

    expect(planning.getEndDate()).toEqual(new Date('2024-01-06'))
  })

  it('should calculate end date with until finish strategy considering available days', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      availableWeekDays: [false, true, true, true, true, true, false]
    })

    planning.addSubject(math)
    planning.addSubject(physics)
    planning.addSubject(english)

    expect(planning.getEndDate()).toEqual(new Date('2024-01-08'))
  })

  it('should allocate subjects with until finish strategy', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
    })

    planning.addSubject(math)
    planning.addSubject(physics)
    planning.addSubject(english)
    const studyDays = planning.getStudyDays()
    expect(studyDays[0].studyObjects[0].getId()).toBe('math-1-1')
    expect(studyDays[0].date).toEqual(new Date('2024-01-01'))
    expect(studyDays[1].studyObjects[0].getId()).toBe('phy-1-1')
    expect(studyDays[1].date).toEqual(new Date('2024-01-02'))
    expect(studyDays[2].studyObjects[0].getId()).toBe('phy-2-1')
    expect(studyDays[2].date).toEqual(new Date('2024-01-03'))
    expect(studyDays[3].studyObjects[0].getId()).toBe('en-1-1')
    expect(studyDays[3].date).toEqual(new Date('2024-01-04'))
    expect(studyDays[4].studyObjects[0].getId()).toBe('en-2-1')
    expect(studyDays[4].date).toEqual(new Date('2024-01-05'))
    expect(studyDays[5].studyObjects[0].getId()).toBe('en-2-2')
    expect(studyDays[5].date).toEqual(new Date('2024-01-06'))
    expect(studyDays.length).toBe(6)
  })

  it('should allocate subjects with until finish strategy considering available days', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      availableWeekDays: [false, true, true, true, true, true, false]
    })

    planning.addSubject(math)
    planning.addSubject(physics)
    planning.addSubject(english)
    const studyDays = planning.getStudyDays()
    expect(studyDays[0].studyObjects[0].getId()).toBe('math-1-1')
    expect(studyDays[0].date).toEqual(new Date('2024-01-01'))
    expect(studyDays[1].studyObjects[0].getId()).toBe('phy-1-1')
    expect(studyDays[1].date).toEqual(new Date('2024-01-02'))
    expect(studyDays[2].studyObjects[0].getId()).toBe('phy-2-1')
    expect(studyDays[2].date).toEqual(new Date('2024-01-03'))
    expect(studyDays[3].studyObjects[0].getId()).toBe('en-1-1')
    expect(studyDays[3].date).toEqual(new Date('2024-01-04'))
    expect(studyDays[4].studyObjects[0].getId()).toBe('en-2-1')
    expect(studyDays[4].date).toEqual(new Date('2024-01-05'))
    expect(studyDays[5].studyObjects[0].getId()).toBe('en-2-2')
    expect(studyDays[5].date).toEqual(new Date('2024-01-08'))
  })

  it('should allocate subjects with until finish strategy considering available hours', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      availableHoursPerDay: 4
    })

    planning.addSubject(math)
    planning.addSubject(physics)

    const studyDays = planning.getStudyDays()
    expect(studyDays[0].studyObjects[0].getId()).toBe('math-1-1')
    expect(studyDays[0].studyObjects[1].getId()).toBe('phy-1-1')
    expect(studyDays[0].date).toEqual(new Date('2024-01-01'))
    expect(studyDays[1].studyObjects[0].getId()).toBe('phy-2-1')
    expect(studyDays[1].date).toEqual(new Date('2024-01-02'))
  })

  it('should allocate subjects to study days alternating subjects', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      distribution: PlanningDistributionType.ALTERNATE,
      availableHoursPerDay: 4,
      availableWeekDays: [true, true, false, true, true, true, true]
    })

    planning.addSubject(math)
    planning.addSubject(physics)
    planning.addSubject(english)

    const studyDays = planning.getStudyDays()
    expect(studyDays[0].studyObjects[0].getId()).toBe('math-1-1')
    expect(studyDays[0].studyObjects[1].getId()).toBe('phy-1-1')
    expect(studyDays[0].date).toEqual(new Date('2024-01-01'))
    expect(studyDays[1].studyObjects[0].getId()).toBe('en-1-1')
    expect(studyDays[1].studyObjects[1].getId()).toBe('phy-2-1')
    expect(studyDays[1].date).toEqual(new Date('2024-01-03'))
    expect(studyDays[2].studyObjects[0].getId()).toBe('en-2-1')
    expect(studyDays[2].studyObjects[1].getId()).toBe('en-2-2')
    expect(studyDays[2].date).toEqual(new Date('2024-01-04'))
  })

  it('should allocate subjects to study days alternating daily', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      availableHoursPerDay: 4,
      distribution: PlanningDistributionType.ALTERNATE_DAILY
    })

    planning.addSubject(physics)
    planning.addSubject(math)
    planning.addSubject(english)

    const studyDays = planning.getStudyDays()
    expect(studyDays[0].date).toEqual(new Date('2024-01-01'))
    expect(studyDays[0].studyObjects[0].getId()).toBe('phy-1-1')
    expect(studyDays[0].studyObjects[1].getId()).toBe('phy-2-1')
    expect(studyDays[1].date).toEqual(new Date('2024-01-02'))
    expect(studyDays[1].studyObjects[0].getId()).toBe('math-1-1')
    expect(studyDays[2].date).toEqual(new Date('2024-01-03'))
    expect(studyDays[2].studyObjects[0].getId()).toBe('en-1-1')
    expect(studyDays[2].studyObjects[1].getId()).toBe('en-2-1')
    expect(studyDays[3].date).toEqual(new Date('2024-01-04'))
    expect(studyDays[3].studyObjects[0].getId()).toBe('en-2-2')
  })

  it('should throw trying to add module needed hours greater than available hours per day', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      availableHoursPerDay: 1,
      distribution: PlanningDistributionType.ALTERNATE_DAILY
    })
    
    expect(() => {
      planning.addSubject(physics)
    }).toThrow('O mínimo de horas por dia é 2')
  })


  it('should throw with no available day', () => {
    expect(() => {
      new Planning({
        startDate: new Date('2024-01-01'),
        availableWeekDays: [false, false, false, false, false, false, false]
      })
    }).toThrow('É necessário informar pelo menos um dia da semana disponível')
  })

  it('should throw with 0 available hours per day', () => {
    expect(() => {
      new Planning({
        startDate: new Date('2024-01-01'),
        availableHoursPerDay: 0
      })
    }).toThrow('Não há horas disponíveis')
  })
})