import { ControllerRenderProps, FieldPath } from "react-hook-form";
import { z } from "zod";
import { PlanningDistribution } from "../../domain/entities/PlanningDistribution";

export const CreatePlanningFormSchema = z.object({
  startDate: z.date({
    required_error: "Data de início é obrigatória",
  }),
  availabilityPerWeekday: z.array(
    z.object({
      value: z.coerce.number({ coerce: true }).min(0).max(24),
    }),
  ),
  subjects: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
        status: z.string().optional(),
      }),
    )
    .min(1, {
      message: "É necessário pelo menos uma matéria",
    }),
  availableDays: z.array(z.boolean()),
  hoursPerDay: z.coerce
    .number()
    .min(1, {
      message: "É necessário pelo menos 1 hora disponível",
    })
    .max(24)
    .int(),
  distribution: z.nativeEnum(PlanningDistribution),
});

export type CreatePlanningFormSchemaType = z.infer<
  typeof CreatePlanningFormSchema
>;
export type CreatePlanningFormField<
  FieldName extends FieldPath<CreatePlanningFormSchemaType>,
> = ControllerRenderProps<CreatePlanningFormSchemaType, FieldName>;
