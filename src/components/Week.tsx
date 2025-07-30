import { WeekDay } from "../domain/WeekDay";
import { WeekGroup } from "../domain/WeekGroup";
import PlanningStudyObjectView from "./PlanningStudyObjectView";

type Props = {
  week: WeekGroup;
  planningId: string;
  index: number;
};

const monthNamesPtBr: string[] = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const dayNamesPtBr: string[] = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const Week = ({ week, index, planningId }: Props) => {
  return (
    <section className="w-full py-2 lg:py-10">
      <h2 className="text-center mb-5 text-3xl font-extralight">
        Semana {index + 1}
      </h2>
      <hr className="mb-5" />
      <div className="container grid gap-2 px-2 lg:grid-cols-4 2xl:grid-cols-7">
        {Object.values(WeekDay).map((day, dayIndex) => {
          const date = new Date(week.startDate);
          date.setDate(date.getDate() + dayIndex);
          const isToday = new Date().toDateString() === date.toDateString();
          const dayName = dayNamesPtBr[dayIndex];
          const header = (
            <div
              className={`flex items-end xl:flex-col gap-2 p-2 xl:gap-0 xl:items-start`}
            >
              <h2 className="text-2xl font-bold tracking-tighter leading-7 sm:text-2xl 2xl:text-2xl flex lg:block items-center">
                <span>
                  {date.getDate()} de {monthNamesPtBr[date.getMonth()]}
                </span>
              </h2>
              <p className="text-sm xl:text-base font-light text-gray-500 tracking-normal">
                {dayName}
              </p>
            </div>
          );
          const key = `${week.startDate}-${day}`;
          const studyDay = week.studyDays.find(
            (studyDay) => new Date(studyDay.date).getDay() === dayIndex,
          );
          const studyDayBody = studyDay ? (
            <div className="space-y-2">
              {studyDay.plannedStudyObjects.map(
                ({ hours, studyObject, done }) => (
                  <PlanningStudyObjectView
                    key={studyObject.id}
                    studyObject={studyObject}
                    hours={hours}
                    done={done}
                    planningId={planningId}
                    studyDayId={studyDay.id}
                    studyDayDate={studyDay.date}
                  />
                ),
              )}
            </div>
          ) : (
            <div className="space-y-4 p-5 bg-gray-300/15">
              <div className="space-y-1 xl:space-y-2">
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                  Dia livre
                </h3>
                <p className="max-w-[900px]  text-gray-500 md:text-base dark:text-gray-400">
                  Nenhum estudo programado para este dia
                </p>
              </div>
            </div>
          );

          return (
            <div
              key={key}
              className={`space-y-3 py-3 lg:space-y-4 p-2 ${
                isToday ? "border-2 border-blue-300 bg-blue-100/20" : ""
              }
            `}
            >
              {header}
              {studyDayBody}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Week;
