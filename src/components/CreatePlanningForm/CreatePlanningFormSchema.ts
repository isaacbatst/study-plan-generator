import { ControllerRenderProps, FieldPath } from "react-hook-form";
import { z } from "zod";
import { PlanningDistributionType } from "../../domain/entities/PlanningDistributor";

export const CreatePlanningFormSchema = z.object({
  startDate: z.date({
    required_error: 'Data de início é obrigatória'
  }),
  subjects: z.array(z.object({
    label: z.string(),
    value: z.string()
  })).min(1, {
    message: 'É necessário pelo menos uma matéria'
  }),
  availableDays: z.array(z.boolean()),
  hoursPerDay: z.coerce.number().min(1, {
    message: 'É necessário pelo menos 1 hora disponível'
  }).max(24),
  distribution: z.nativeEnum(PlanningDistributionType)
})

export type CreatePlanningFormSchemaType = z.infer<typeof CreatePlanningFormSchema>
export type CreatePlanningFormField<
  FieldName extends FieldPath<CreatePlanningFormSchemaType>
> = ControllerRenderProps<CreatePlanningFormSchemaType, FieldName>