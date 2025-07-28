import { useId } from "react";
import Select from "react-select";
import { SubjectJSON } from "../../domain/entities/Subject";
import { Option } from "../../lib/Option";
import CoursePeriodsSelect from "../CoursePeriodsSelect/CoursePeriodsSelect";
import SubmitSubjectModal from "../SubmitSubjectModal";
import { FormItem, FormLabel, FormMessage } from "../ui/form";
import { CreatePlanningFormField } from "./CreatePlanningFormSchema";

export type SubjectOption = Option & {
  status?: string;
};

type Props = {
  subjects: SubjectJSON[];
  field: CreatePlanningFormField<"subjects">;
  setSubjects: (subjects: SubjectOption[]) => void;
};

const CreatePlanningFormSubjectSelect = ({
  subjects,
  field,
  setSubjects,
}: Props) => {
  const subjectsSelectId = useId();

  const setCourseSubjects = (selected: Option | null) => {
    if (selected) {
      const selectedSubjects = subjects.filter((subject) =>
        subject.coursePeriods.some(
          (coursePeriod) => coursePeriod.id === selected.value
        )
      );

      setSubjects(
        selectedSubjects.map((subject) => ({
          label: subject.name,
          value: subject.id,
        }))
      );
    }
  };
  const sortedSubjects = subjects
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <FormItem className="flex flex-col">
      <FormLabel>Quais matérias vou estudar:</FormLabel>
      <CoursePeriodsSelect
        subjects={subjects}
        onChange={setCourseSubjects}
        placeholder="Preencha automaticamente escolhendo o curso..."
      />
      <Select
        options={sortedSubjects.map((subject) => ({
          label: `${subject.name}${subject.status === "pending" ? " (Em análise)" : ""}`,
          value: subject.id,
          status: subject.status, 
        }))}
        isMulti
        isOptionDisabled={(option => option.status === "pending")}
        instanceId={subjectsSelectId}
        value={field.value}
        onChange={field.onChange}
        placeholder="Ou selecione manualmente..."
        className="max-w-full"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "blue" : "neutral5",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "rgb(100, 116, 139)",
          }),
        }}
      />
      <SubmitSubjectModal subjects={subjects} />
      <FormMessage />
    </FormItem>
  );
};

export default CreatePlanningFormSubjectSelect;
