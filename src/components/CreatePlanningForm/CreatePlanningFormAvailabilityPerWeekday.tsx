import {
  FieldArray,
  useFieldArray,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { CreatePlanningFormSchemaType } from "./CreatePlanningFormSchema";

type Props = {
  index: number;
  field: FieldArray<CreatePlanningFormSchemaType, "availabilityPerWeekday">;
};

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const CreatePlanningFormAvailabilityPerWeekday = (props: Props) => {
  const availableDays = useWatch({ name: "availableDays" });
  return (
    <FormItem>
      <FormLabel className="text-xs text-center inline-block">
        {days[props.index]}
      </FormLabel>
      <FormControl>
        <Input
          placeholder="2"
          {...props.field}
          disabled={!availableDays[props.index]}
          type="number"
          step="2"
          className="text-center"
          max={24}
          min={0}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CreatePlanningFormAvailabilityPerWeekday;
