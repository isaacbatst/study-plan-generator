import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { useState } from "react"
import { Planning } from "../domain/entities/Planning"
import { SubjectJSON } from "../domain/entities/Subject"
import CreatePlanningForm from "./CreatePlanningForm"

type Props = {
  subjects: SubjectJSON[]
  savePlanning: (studyPlan: Planning) => void
}

export function CreatePlanningFormDialog({subjects, savePlanning}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex bg-black">
          <Button variant='link' className="text-white flex-1">+ Criar outro plano</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo plano de estudos</DialogTitle>
          <DialogDescription>
            Não se preocupe, o plano antigo ficará salvo.
          </DialogDescription>
        </DialogHeader>
        {<CreatePlanningForm savePlanning={(studyPlan) => {
          savePlanning(studyPlan)
          setOpen(false)
        }} subjects={subjects} />}
      </DialogContent>
    </Dialog>
  )
}
