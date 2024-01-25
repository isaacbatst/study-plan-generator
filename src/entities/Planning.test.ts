import { describe, expect, it } from 'vitest'
import { Planning } from './Planning'

describe('Planning', () => {
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

    planning.addSubject('Maths', 1)
    const subjects = planning.getSubjects()
    expect(subjects.length).toBe(1)
  })

  it('should calculate subjects total duration', () => {
    const planning = new Planning({
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
    })

    planning.addSubject('Maths', 1)
    planning.addSubject('Physics', 2)
    planning.addSubject('English', 3)

    expect(planning.getSubjectsDays()).toBe(6)
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

    planning.addSubject('Maths', 1)
    planning.addSubject('Physics', 2)
    planning.addSubject('English', 3)

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

    planning.addSubject('Maths', 1)
    planning.addSubject('Physics', 2)
    planning.addSubject('English', 3)
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
})