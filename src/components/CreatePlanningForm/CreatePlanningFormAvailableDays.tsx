import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import React from "react";
import { WeekDay } from "../../domain/WeekDay";
import { FormItem, FormLabel, FormMessage } from "../ui/form";
import {
  CreatePlanningFormField,
  CreatePlanningFormSchemaType,
} from "./CreatePlanningFormSchema";
import { useFormContext } from "react-hook-form";

type Props = {
  field: CreatePlanningFormField<"availableDays">;
};

const weekDayLabels: Record<WeekDay, string> = {
  [WeekDay.Sunday]: "D",
  [WeekDay.Monday]: "S",
  [WeekDay.Tuesday]: "T",
  [WeekDay.Wednesday]: "Q",
  [WeekDay.Thursday]: "Q",
  [WeekDay.Friday]: "S",
  [WeekDay.Saturday]: "S",
};

const CreatePlanningFormAvailableDays = ({ field }: Props) => {
  const { watch, setValue } = useFormContext<CreatePlanningFormSchemaType>();
  const availableDays = watch("availableDays");
  const hoursPerDay = watch("hoursPerDay");
  const previousValue = React.useRef<boolean[]>(undefined);

  React.useEffect(() => {
    if (previousValue.current) {
      const dayDisabledNow = availableDays.findIndex(
        (day, index) => !day && previousValue.current![index],
      );
      const dayEnabledNow = availableDays.findIndex(
        (day, index) => day && !previousValue.current![index],
      );
      if (dayDisabledNow > -1) {
        setValue(`availabilityPerWeekday.${dayDisabledNow}.value`, 0);
      }
      if (dayEnabledNow > -1) {
        setValue(`availabilityPerWeekday.${dayEnabledNow}.value`, hoursPerDay);
      }
    }

    previousValue.current = availableDays;
  }, [availableDays, setValue, hoursPerDay]);

  return (
    <FormItem className="flex flex-col items-center mb-5">
      <FormLabel className="mb-2">Dias que poderei me dedicar:</FormLabel>
      <ToggleGroup
        type="multiple"
        className="flex-wrap"
        value={Object.values(WeekDay).filter((_, index) => field.value[index])}
        onValueChange={(value) => {
          const selectedDays = value as WeekDay[];
          const selectedWeekDays = Object.values(WeekDay).map((day) =>
            selectedDays.includes(day),
          );
          field.onChange(selectedWeekDays);
        }}
      >
        {Object.values(WeekDay).map((day) => (
          <ToggleGroupItem key={day} value={day}>
            {weekDayLabels[day]}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <FormMessage />
    </FormItem>
  );
};

export default CreatePlanningFormAvailableDays;
