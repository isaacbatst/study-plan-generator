import { beforeEach, describe, expect, it } from 'vitest'
import { Planning } from './Planning'
import Subject from './Subject'
import SubjectTheme from './SubjectTheme'
import { NotEnoughDaysError } from '../errors/NotEnoughDaysError'

describe('Planning', () => {
  let math: Subject
  let physics: Subject
  let english: Subject

  beforeEach(() => {
    math = new Subject('math', 'Maths')
    math.addTheme(new SubjectTheme('1', ['1']))
    physics = new Subject('phy', 'Physics')
    physics.addTheme(new SubjectTheme('1', ['1']))
    physics.addTheme(new SubjectTheme('2', ['1']))
    english = new Subject('en', 'English')
    english.addTheme(new SubjectTheme('1', ['1']))
    english.addTheme(new SubjectTheme('2', ['1']))
    english.addTheme(new SubjectTheme('3', ['1']))
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

  it('should calculate subjects total duration', () => {
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

    expect(studyDays[0].subjects).toEqual(['Maths'])
    expect(studyDays[0].date).toEqual(new Date('2024-01-01'))
    expect(studyDays[1].subjects).toEqual(['Physics'])
    expect(studyDays[1].date).toEqual(new Date('2024-01-02'))
    expect(studyDays[2].subjects).toEqual(['Physics'])
    expect(studyDays[2].date).toEqual(new Date('2024-01-03'))
    expect(studyDays[3].subjects).toEqual(['English'])
    expect(studyDays[3].date).toEqual(new Date('2024-01-04'))
    expect(studyDays[4].subjects).toEqual(['English'])
    expect(studyDays[4].date).toEqual(new Date('2024-01-05'))
    expect(studyDays[5].subjects).toEqual(['English'])
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
    planning.addSubject(english)

    const studyDays = planning.getStudyDays()
    expect(studyDays[0].subjects).toEqual(['Maths'])
    expect(studyDays[0].date).toEqual(new Date('2024-01-01'))
    expect(studyDays[1].subjects).toEqual(['Physics'])
    expect(studyDays[1].date).toEqual(new Date('2024-01-02'))
    expect(studyDays[2].subjects).toEqual(['Physics'])
    expect(studyDays[2].date).toEqual(new Date('2024-01-03'))
    expect(studyDays[3].subjects).toEqual(['English'])
    expect(studyDays[3].date).toEqual(new Date('2024-01-04'))
    expect(studyDays[4].subjects).toEqual(['English'])
    expect(studyDays[4].date).toEqual(new Date('2024-01-05'))
    expect(studyDays[5].subjects).toEqual(['English'])
    expect(studyDays[5].date).toEqual(new Date('2024-01-08'))
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