import { CoursePeriod } from "@/domain/entities/CoursePeriod";
import { StudyObject } from "@/domain/entities/StudyObject";
import { Subject } from "@/domain/entities/Subject";

export const fromStringsToStudyObjects = (studyObjects: string[], subjectName: string) => {
  return studyObjects.map((so, index) => {
    const studyObject = StudyObject.create({
      name: so,
      hours: 2,
      position: index,
      subjectName,
    });
    if (studyObject.isLeft()) {
      throw new Error(studyObject.getLeft());
    }
    return studyObject.getRight();
  });
}


export type SubjectSeedProps = {
  name: string;
  studyObjects: string[];
  periods: (CoursePeriod | null)[];
}

export const fromPropsToSubject = (
  props: SubjectSeedProps
) => {
  const subject = Subject.create({
    name: props.name,
    coursePeriods: props.periods.filter(
      (p): p is CoursePeriod => p instanceof CoursePeriod
    ),
    studyObjects: props.studyObjects.map((so, index) => {
      const studyObject = StudyObject.create({
        name: so,
        hours: 2,
        position: index,
        subjectName: props.name,
      });
      if (studyObject.isLeft()) {
        throw new Error(studyObject.getLeft());
      }
      return studyObject.getRight();
    }),
  });

  if (subject.isLeft()) {
    throw new Error(subject.getLeft());
  }

  return subject.getRight();
};
