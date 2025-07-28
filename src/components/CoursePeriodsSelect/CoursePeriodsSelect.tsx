import { useId } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { SubjectJSON } from "../../domain/entities/Subject";
import { extractCoursePeriodsOptions } from "../../lib/utils";
import { Option } from "../../lib/Option";

export type CoursePeriodOption = Option & {
  status?: string;
};

type Props = {
  subjects: SubjectJSON[];
  onChange: (option: CoursePeriodOption | null) => void;
  placeholder?: string;
  className?: string;
  selected?: CoursePeriodOption | null  ;
  isOptionDisabled?: (option: CoursePeriodOption) => boolean;
} & (
  | {
      creatable: true;
      onCreateOption?: (inputValue: string) => void;
    }
  | {
      onCreateOption?: never;
      creatable?: false;
    }
);

const CoursePeriodsSelect = ({
  subjects,
  creatable = false,
  selected,
  placeholder = "Selecione o período e o curso...",
  className,
  onChange,
  onCreateOption,
  isOptionDisabled,
}: Props) => {
  const coursesSelectId = useId();
  const sortedCoursePeriods = extractCoursePeriodsOptions(subjects);
  if (creatable) {
    return (
      <CreatableSelect
        isClearable
        options={sortedCoursePeriods.map((coursePeriod) => ({
          label: coursePeriod.name,
          value: coursePeriod.id,
          status: coursePeriod.status,
        }))}
        instanceId={coursesSelectId}
        onChange={(course) => onChange(course)}
        placeholder={placeholder}
        className={className}
        onCreateOption={onCreateOption}
        value={selected}
        isOptionDisabled={isOptionDisabled}
        formatCreateLabel={(inputValue) =>
          `Digite o período e o nome do curso: ${inputValue}`
        }
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
    );
  }

  return (
    <Select
      isClearable
      options={sortedCoursePeriods.map((coursePeriod) => ({
        label: coursePeriod.name,
        value: coursePeriod.id,
        status: coursePeriod.status,
      }))}
      instanceId={coursesSelectId}
      onChange={(course) => {
        onChange(course);
      }}
      placeholder={placeholder}
      className={className}
      isOptionDisabled={isOptionDisabled}
      value={selected}
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
  );
};

export default CoursePeriodsSelect;
