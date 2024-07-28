import { useMemo } from 'react';
import { WeekGroup } from '../domain/WeekGroup';
import Week from './Week';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';
import { StudyDayJSON } from '../domain/entities-2/StudyDay';
import { PlanningJSON } from '../domain/entities-2/Planning';

type Props = {
  studyPlan: PlanningJSON
  removeStudyPlan: (id: string) => void
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


const PlanningView = ({studyPlan, removeStudyPlan}: Props) => {
  const weekGroups = useMemo(() => {
    return groupStudyDaysByWeek(studyPlan.studyDays)
  }, [studyPlan.studyDays])
  
  const createdAt = new Date(studyPlan.createdAt)
  const createdAtText = `Criado em ${createdAt.toLocaleDateString('pt-BR')} às ${createdAt.toLocaleTimeString('pt-BR')}`
  return (
    <div className='flex flex-col items-center'>
      <div className="flex gap-2">
        <p className='text-sm font-light p-3 border rounded-full mb-4'>
          <span className='mr-2'>{createdAtText}</span>
        </p>
        <Button 
          onClick={() => removeStudyPlan(studyPlan.id)} 
          variant='destructive' size='icon' className='rounded-full'>
          <Trash size={16} />
        </Button>
      </div>
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
      <hr className='mt-5 self-stretch border-slate-300' />
    </div>
  )
}

export default PlanningView