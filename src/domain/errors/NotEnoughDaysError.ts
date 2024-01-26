export class NotEnoughDaysError extends Error {
  name: string = 'NotEnoughDaysError'

  constructor(
    public necessaryDays: number, 
    public availableDays: number
  ) {
    super('São necessários ' + necessaryDays + ' dias, mas só foram disponibilizados ' + availableDays + ' dias.');
  }
}