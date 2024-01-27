import { beforeEach, describe, expect, it } from 'vitest'
import { Planning, PlanningDistributionType as PlanningDistributionType } from './Planning'
import Subject from './Subject'
import SubjectTheme from './SubjectTheme'
import { NotEnoughDaysError } from '../errors/NotEnoughDaysError'
import SubjectThemeModule from './SubjectThemeModule'

describe('Planning', () => {
  let math: Subject
  let physics: Subject
  let english: Subject

  beforeEach(() => {
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
  })

  it('should have a stard date, and end date', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
    })
    expect(planning.getStartDate()).toEqual(new Date('2024-01-01'))
    expect(planning.getEndDate()).toEqual(new Date('2024-01-31'))
  })

  it('should throw an error if the start date is after the end date', () => {
    expect(() => {
      new Planning({
        startDate: new Date('2024-01-31'),
        endDate: new Date('2024-01-01'),
      })
    }).toThrow('START_DATE_AFTER_END_DATE')
  })

  it('should throw an error if the start date is equal to the end date', () => {
    expect(() => {
      new Planning({
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-01'),
      })
    }).toThrow('START_DATE_EQUAL_END_DATE')
  })

  it('should calculate the number of days between the start date and the end date', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
    })

    expect(planning.getNumberOfDays()).toBe(31)
  })

  it('should have no subjects initially', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
    })

    expect(planning.getSubjects()).toEqual([])
  })

  it('should add a subject', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
    })

    planning.addSubject(math)
    const subjects = planning.getSubjects()
    expect(subjects.length).toBe(1)
  })

  it('should calculate necessary days', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
    })

    planning.addSubject(math)
    planning.addSubject(physics)
    planning.addSubject(english)

    expect(planning.getNecessaryDays()).toBe(6)
  })

  it('should get planning days', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
    })

    const planningDays = planning.getAvailableDays()
    expect(planningDays[0]).toEqual(new Date('2024-01-01'))
    expect(planningDays[planningDays.length - 1]).toEqual(new Date('2024-01-31'))
  })

  it('should allocate subjects to study days', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-07'),
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

  it('should allocate subjects to study days considering available days', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-08'),
      availableWeekDays: [false, true, true, true, true, true, false]
    })

    planning.addSubject(math)
    planning.addSubject(physics)

    const studyDays = planning.getStudyDays()
    expect(studyDays[0].studyObjects[0].getId()).toBe('math-1-1')
    expect(studyDays[0].date).toEqual(new Date('2024-01-01'))
    expect(studyDays[1].studyObjects[0].getId()).toBe('phy-1-1')
    expect(studyDays[1].date).toEqual(new Date('2024-01-02'))
    expect(studyDays[2].studyObjects[0].getId()).toBe('phy-2-1')
    expect(studyDays[2].date).toEqual(new Date('2024-01-03'))
  })

  it('should allocate subjects to study days considering custom available hours per day', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-08'),
      availableWeekDays: [false, true, true, true, true, true, false],
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
      endDate: new Date('2024-01-08'),
      distribution: PlanningDistributionType.ALTERNATE
    })

    planning.addSubject(math)
    planning.addSubject(physics)

    const studyDays = planning.getStudyDays()
    expect(studyDays[0].studyObjects[0].getId()).toBe('math-1-1')
    expect(studyDays[1].studyObjects[0].getId()).toBe('phy-1-1')
    expect(studyDays[2].studyObjects[0].getId()).toBe('phy-2-1')
  })

  it('should allocate subjects to study days alternating daily', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-08'),
      availableHoursPerDay: 4,
      distribution: PlanningDistributionType.ALTERNATE_DAILY
    })

    planning.addSubject(physics)
    planning.addSubject(math)
    planning.addSubject(english)

    const studyDays = planning.getStudyDays()
    console.log(studyDays)
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

  it('should throw error if not enough days to allocate all subjects', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-02'),
    })

    planning.addSubject(math)
    planning.addSubject(physics)
    planning.addSubject(english)

    expect(() => {
      planning.getStudyDays()
    }).toThrow(new NotEnoughDaysError(6, 2))
  })
})