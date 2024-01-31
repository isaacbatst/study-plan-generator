import { PlanningField } from "../entities/PlanningField"

export default class InvalidParamsError<T extends string = string> extends Error {
  name = 'InvalidParamsError'

  constructor(message: string, readonly field: T) {
    super(message)
  }
}

export class PlanningInvalidParamsError extends InvalidParamsError<PlanningField> {
  name = 'PlanningInvalidParamsError'
}