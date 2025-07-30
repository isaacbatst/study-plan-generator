"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, Minus, Plus } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import RotativeText from "./RotativeText";

export type ConfirmSubjectData = {
  subjectName: string;
  studyObjects: {
    name: string;
    hours: number;
    position: number;
  }[];
  coursePeriod: string;
  isNewCoursePeriod: boolean;
};

const confirmSubjectSchema = z.object({
  subjectName: z.string().min(1, "Nome da matéria é obrigatório"),
  studyObjects: z
    .array(
      z.object({
        name: z.string().min(1, "Nome do objeto de estudo é obrigatório"),
        hours: z.number().min(1, "Horas devem ser no mínimo 1"),
        position: z.number(),
      })
    )
    .min(1, "Pelo menos um objeto de estudo é necessário"),
  coursePeriod: z.string(),
  isNewCoursePeriod: z.boolean(),
});

type Props = {
  data: ConfirmSubjectData;
  onConfirm: (data: ConfirmSubjectData) => Promise<void>;
  onBack: () => void;
};

const SubmitSubjectModalConfirmation = ({ data, onConfirm, onBack }: Props) => {
  const form = useForm<ConfirmSubjectData>({
    resolver: zodResolver(confirmSubjectSchema),
    defaultValues: data,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "studyObjects",
  });

  const onSubmit = async (values: ConfirmSubjectData) => {
    try {
      await onConfirm(values);
    } catch (error) {
      toast.error("Erro ao criar matéria. Por favor, tente novamente.");
    }
  };

  return (
    <div className="flex flex-col gap-4 flex-1">
      <h3 className="text-lg font-medium">Confirme os dados da matéria</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-1"
        >
          <div className="flex-1 flex flex-col overflow-y-auto space-y-6 min-h-0 gap-2">
            <FormField
              control={form.control}
              name="subjectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Matéria</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <FormLabel>Objetos de Estudo / Horas</FormLabel>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    append({
                      name: "",
                      hours: 2,
                      position: fields.length,
                    })
                  }
                >
                  <Plus className="h-4 w-4 mr-1" /> Adicionar
                </Button>
              </div>

              <div
                style={{
                  maxHeight: "300px",
                }}
                className="overflow-y-auto flex flex-col gap-2 py-1"
              >
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex flex-col md:flex-row md:items-start space-x-2 space-y-2 md:space-y-0"
                  >
                    <FormField
                      control={form.control}
                      name={`studyObjects.${index}.name`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Nome do objeto de estudo"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`studyObjects.${index}.hours`}
                      render={({ field }) => (
                        <FormItem style={{ flex: 0.3 }}>
                          <FormControl>
                            <Input
                              type="number"
                              min={1}
                              placeholder="Horas"
                              {...field}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="button"
                      variant="outline"
                      className="mr-2"
                      onClick={() => remove(index)}
                      disabled={fields.length <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-between pt-4 bg-background">
            <Button type="button" variant="outline" onClick={onBack}>
              Voltar
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <>
                  <LoaderCircle className="animate-spin" />
                  <RotativeText
                    texts={["Enviando", "Salvando no banco", "Quase lá..."]}
                    ms={3000}
                  />
                </>
              ) : (
                "Confirmar e Enviar"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SubmitSubjectModalConfirmation;
