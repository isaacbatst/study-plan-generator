import React from 'react'
import StudyDay, { StudyDayJSON } from '../domain/entities/StudyDay'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import Week from './Week';
import { WeekGroup } from '../domain/WeekGroup';

type Props = {
  studyDays: StudyDayJSON[]
}

function groupStudyDaysByWeek(studyDays: StudyDayJSON[]): WeekGroup[] {
  const sortedStudyDays = [...studyDays].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const weekGroups: WeekGroup[] = [];
  let currentWeek: WeekGroup | null = null;

  for (const studyDay of sortedStudyDays) {
    const currentDate = new Date(studyDay.date);
    const currentDayOfWeek = currentDate.getDay(); // Sunday is 0, Saturday is 6

    if (!currentWeek) {
      // Set "startDate" to the Sunday of the week
      const startDate = new Date(currentDate);
      startDate.setDate(startDate.getDate() - currentDayOfWeek);
      
      currentWeek = {
        startDate: startDate.toISOString(),
        endDate: studyDay.date,
        studyDays: [studyDay],
      };
    } else {
      const lastDate = new Date(currentWeek.endDate);
      const lastDayOfWeek = lastDate.getDay();

      // Check if the current study day is part of the same week
      if (currentDayOfWeek >= lastDayOfWeek && currentDayOfWeek <= 6) {
        currentWeek.endDate = studyDay.date;
        currentWeek.studyDays.push(studyDay);
      } else {
        weekGroups.push(currentWeek);
        
        // Set "startDate" to the Sunday of the new week
        const startDate = new Date(currentDate);
        startDate.setDate(startDate.getDate() - currentDayOfWeek);
        
        currentWeek = {
          startDate: startDate.toISOString(),
          endDate: studyDay.date,
          studyDays: [studyDay],
        };
      }
    }
  }

  if (currentWeek) {
    weekGroups.push(currentWeek);
  }

  return weekGroups;
}

const StudyDays = ({studyDays}: Props) => {
  const weekGroups = groupStudyDaysByWeek(studyDays);

  return (
    <div className='my-5 flex flex-col items-center'>
      <Carousel className="max-w-[75vw] lg:max-w-[90vw] ">
        <CarouselContent>
          {weekGroups.map((week, index) => (
            <CarouselItem key={`${week.startDate}-${week.endDate}`}>
              <Week week={week} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='-left-[2.1rem]'  />
        <CarouselNext className='-right-[2.1rem]' />
      </Carousel>
    </div>
  )
}

export default StudyDays