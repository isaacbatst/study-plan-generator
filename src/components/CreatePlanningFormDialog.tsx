import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { SubjectJSON } from "../domain/entities/Subject"
import CreatePlanningForm from "./CreatePlanningForm"
import StudyPlan from "../domain/entities/StudyPlan"

type Props = {
  subjects: SubjectJSON[]
  addStudyPlan: (studyPlan: StudyPlan) => void
}

export function CreatePlanningFormDialog({subjects, addStudyPlan}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex justify-end">
          <Button>Criar mais um plano</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo plano de estudos</DialogTitle>
          <DialogDescription>
            Não se preocupe, o plano antigo ficará salvo.
          </DialogDescription>
        </DialogHeader>
        {<CreatePlanningForm addStudyPlan={(studyPlan) => {
          addStudyPlan(studyPlan)
          setOpen(false)
        }} subjects={subjects} />}
      </DialogContent>
    </Dialog>
  )
}
