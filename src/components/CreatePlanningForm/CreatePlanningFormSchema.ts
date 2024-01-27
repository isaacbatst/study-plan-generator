import { z } from "zod";
import { PlanningDistributionType } from "../../domain/entities/Planning";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

export const CreatePlanningFormSchema = z.object({
  period: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }),
  subjects: z.array(z.object({
    label: z.string(),
    value: z.string()
  })),
  availableDays: z.array(z.boolean()),
  hoursPerDay: z.coerce.number().min(1).max(24),
  distribution: z.nativeEnum(PlanningDistributionType)
}).transform((data) => ({
  ...data,
  period: {
    from: data.period.from,
    to: data.period.to,
  },
}))

export type CreatePlanningFormSchemaType = z.infer<typeof CreatePlanningFormSchema>
export type CreatePlanningFormField<
  FieldName extends FieldPath<CreatePlanningFormSchemaType>
> = ControllerRenderProps<CreatePlanningFormSchemaType, FieldName>