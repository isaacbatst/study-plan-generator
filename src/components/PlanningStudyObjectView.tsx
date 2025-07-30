import React from "react";
import { StudyObjectJSON } from "../domain/entities/StudyObject";
import { usePlanningsContext } from "./PlanningsContext";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { cn } from "../lib/utils";

type Props = {
  studyObject: StudyObjectJSON;
  hours: number;
  done: boolean;
  planningId: string;
  studyDayId: string;
  studyDayDate: string;
};

const capitalize = (str: string) => {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

const getColor = (done: boolean, hasPassed: boolean) => {
  if (done) return "bg-green-400";
  if (hasPassed) return "bg-red-600";
  return "bg-gray-300";
};

const PlanningStudyObjectView = ({
  done,
  hours,
  studyObject,
  planningId,
  studyDayId,
  studyDayDate,
}: Props) => {
  const { toggleStudyObjectDone } = usePlanningsContext();

  const date = new Date(studyDayDate);
  const now = new Date();
  const hasPassed = date < now;
  const bgColor = getColor(done, hasPassed);

  return (
    <div key={studyObject.id} className={cn("p-5 space-y-3", `${bgColor}/15`)}>
      <div className="space-y-1 xl:space-y-2">
        <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
          {studyObject.subjectName}
        </h3>
        <h4 className={`font-semibold`}>{capitalize(studyObject.name)}</h4>
        <p className="max-w-[900px] font-semibold text-gray-500 md:text-base dark:text-gray-400">
          {hours} horas
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`study-object-${studyObject.id}`}
          checked={done}
          onCheckedChange={() => {
            toggleStudyObjectDone(planningId, studyDayId, studyObject.id);
          }}
        />
        <Label htmlFor={`study-object-${studyObject.id}`} className="text-sm">
          {done ? (
            <span className="line-through">Concluído</span>
          ) : (
            <span className="">Pendente</span>
          )}
        </Label>
      </div>
    </div>
  );
};

export default PlanningStudyObjectView;
