"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import CoursePeriodsSelect, {
  CoursePeriodOption,
} from "./CoursePeriodsSelect/CoursePeriodsSelect";
import { SubjectJSON } from "../domain/entities/Subject";
import UploadFile from "./UploadFile";
import { toast } from "sonner";
import { Option } from "../lib/Option";
import {
  Check,
  CheckCircle2,
  Info,
  Loader2,
  LoaderCircle,
  Mail,
  Phone,
  Send,
  Terminal,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { mutate } from "swr";
import SubmitSubjectModalSuccess from "./SubmitSubjectModalSuccess";
import RotativeText from "./RotativeText";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import SubmitSubjectModalAnalysis from "./SubmitSubjectModalAnalysis";

type Props = {
  subjects: SubjectJSON[];
};

const SubmitSubjectModal = (props: Props) => {
  const [coursePeriod, setCoursePeriod] = useState<CoursePeriodOption | null>(
    null
  );
  const [isCoursePeriodNew, setIsCoursePeriodNew] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isShowingSuccessMessage, setIsShowingSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      if (!coursePeriod) {
        toast.error("Por favor, selecione um período de um curso.");
        return;
      }

      if (!selectedFile) {
        toast.error("Por favor, selecione um arquivo PDF.");
        return;
      }
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("coursePeriod", coursePeriod.value);
      formData.append("isNewCoursePeriod", String(isCoursePeriodNew));
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        const message =
          "error" in errorData
            ? errorData.error
            : "Erro ao enviar a matéria. Tente novamente mais tarde.";
        toast.error(message);
        return;
      }
      await mutate("/api/subjects");
      setIsShowingSuccessMessage(true);
      resetForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCoursePeriod(null);
    setIsCoursePeriodNew(false);
    setSelectedFile(null);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const handleFileAccepted = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost">Não encontrou suas matérias?</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Envie uma matéria</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm text-muted-foreground">
          Contribua enviando uma matéria que não está na lista.
        </DialogDescription>
        {isShowingSuccessMessage ? (
          <SubmitSubjectModalSuccess
            onBack={() => {
              setIsShowingSuccessMessage(false);
            }}
          />
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <CoursePeriodsSelect
                className="self-stretch mb-2"
                subjects={props.subjects}
                creatable
                selected={coursePeriod ?? undefined}
                isOptionDisabled={(option) => option.status === "pending"}
                placeholder="Selecione ou crie um período do curso..."
                onCreateOption={(inputValue) => {
                  setCoursePeriod({ label: inputValue, value: inputValue });
                  setIsCoursePeriodNew(true);
                }}
                onChange={(coursePeriod) => {
                  if (coursePeriod) {
                    setCoursePeriod(coursePeriod ?? null);
                    setIsCoursePeriodNew(false);
                  }
                }}
              />
              <UploadFile
                onFileAccepted={handleFileAccepted}
                selectedFile={selectedFile}
              />
            </div>
            <SubmitSubjectModalAnalysis />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="animate-spin mr-2" />
                    <RotativeText
                      texts={[
                        "Processando com AI",
                        "Analisando o PDF",
                        "Extraindo dados",
                        "Quase lá...",
                      ]}
                      ms={5000}
                    />
                  </>
                ) : (
                  "Enviar"
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SubmitSubjectModal;
