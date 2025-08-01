import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { format } from "date-fns";
import React from "react";
import { cn } from "../../lib/utils";
import { FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { CreatePlanningFormField } from "./CreatePlanningFormSchema";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";

type Props = {
  field: CreatePlanningFormField<"startDate">;
};

const CreatePlanningFormPeriod = ({ field }: Props) => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel className="mb-2">Quando vou começar:</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              className={cn(
                "pl-3 text-left font-normal",
                !field.value && "text-muted-foreground",
              )}
            >
              {field.value && field.value ? (
                <span>{format(field.value, "dd/MM/yyyy")}</span>
              ) : (
                <span>Selecione a data para começar</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
};

export default CreatePlanningFormPeriod;
