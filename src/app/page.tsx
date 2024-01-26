import Image from "next/image";
import { Calendar } from "../components/ui/calendar";
import React from "react";
import CreatePlanningForm from "../components/CreatePlanningForm";
import { SubjectRepositoryMemorySingleton } from "../infra/persistance/repository/SubjectRepositoryMemorySingleton";

const subjectsRepository = SubjectRepositoryMemorySingleton.getInstance()

export default async function Home() {
  const subjects = await subjectsRepository.findAll()

  return (
    <main className="flex min-h-screen flex-col py-10 px-5">
      <CreatePlanningForm subjects={subjects.map(subject => subject.toJSON())} />
    </main>
  );
}
