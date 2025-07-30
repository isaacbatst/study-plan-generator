"use client";
import { LightbulbIcon, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { mutate } from "swr";
import { SubjectJSON } from "../domain/entities/Subject";
import CoursePeriodsSelect, {
  CoursePeriodOption,
} from "./CoursePeriodsSelect/CoursePeriodsSelect";
import RotativeText from "./RotativeText";
import SubmitSubjectModalAnalysis from "./SubmitSubjectModalAnalysis";
import SubmitSubjectModalConfirmation, {
  ConfirmSubjectData,
} from "./SubmitSubjectModalConfirmation";
import SubmitSubjectModalSuccess from "./SubmitSubjectModalSuccess";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";
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
import { Label } from "./ui/label";
import UploadFile from "./UploadFile";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [processedData, setProcessedData] = useState<ConfirmSubjectData | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState<
    "upload" | "confirmation" | "success"
  >("upload");

  const handleUpload = async () => {
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
            : "Erro ao processar a matéria. Tente novamente mais tarde.";
        toast.error(message);
        return;
      }

      const data = await response.json();
      setProcessedData(data);
      setCurrentStep("confirmation");
    } catch (error) {
      toast.error("Erro ao processar o arquivo. Tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirm = async (data: ConfirmSubjectData) => {
    try {
      const response = await fetch("/api/subjects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const message =
          "error" in errorData
            ? errorData.error
            : "Erro ao criar a matéria. Tente novamente mais tarde.";
        throw new Error(message);
      }

      await mutate("/api/subjects");
      setCurrentStep("success");
    } catch (error) {
      throw error;
    }
  };

  const resetForm = () => {
    setCoursePeriod(null);
    setIsCoursePeriodNew(false);
    setSelectedFile(null);
    setProcessedData(null);
    setCurrentStep("upload");
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
      <DialogContent
        style={{
          maxHeight: "90vh",
        }}
        className="flex flex-col"
      >
        <DialogHeader>
          <DialogTitle>Envie uma matéria</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm text-muted-foreground">
          Contribua enviando uma matéria que não está na lista.
        </DialogDescription>
        {currentStep === "upload" && (
          <>
            <div className="flex-1 overflow-y-auto p-2">
              <div className="flex flex-col items-center justify-center gap-2 mb-2">
                <Label className="text-sm text-muted-foreground">
                  Selecione o curso/período
                </Label>
                <CoursePeriodsSelect
                  className="self-stretch"
                  subjects={props.subjects}
                  creatable
                  selected={coursePeriod ?? undefined}
                  isOptionDisabled={(option) => option.status === "pending"}
                  onCreateOption={(inputValue) => {
                    setCoursePeriod({ label: inputValue, value: inputValue });
                    setIsCoursePeriodNew(true);
                  }}
                  onChange={(coursePeriod) => {
                    setCoursePeriod(coursePeriod ?? null);
                    if (coursePeriod) {
                      setIsCoursePeriodNew(false);
                    }
                  }}
                />
                <UploadFile
                  onFileAccepted={handleFileAccepted}
                  selectedFile={selectedFile}
                />
                <Alert>
                  <LightbulbIcon />
                  <AlertTitle>Seu curso/período não está na lista?</AlertTitle>
                  <AlertDescription>
                    Digite no primeiro campo, por exemplo, &quot;2º Período de
                    Engenharia de Software&quot;, confirme e envie o PDF da
                    matéria que deseja adicionar.
                  </AlertDescription>
                </Alert>
              </div>
              <SubmitSubjectModalAnalysis />
            </div>
            <DialogFooter className="sticky bottom-0 bg-background pt-4 pb-2 z-10">
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button
                type="button"
                onClick={handleUpload}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="animate-spin" />
                    <RotativeText
                      texts={[
                        "Analisando o PDF 🔍",
                        "Extraindo Dados 🎲",
                        "Processando com AI ✨",
                        "Quase lá... 🥅",
                      ]}
                      ms={3000}
                    />
                  </>
                ) : (
                  "Processar"
                )}
              </Button>
            </DialogFooter>
          </>
        )}

        {currentStep === "confirmation" && processedData && (
          <SubmitSubjectModalConfirmation
            data={processedData}
            onConfirm={handleConfirm}
            onBack={() => setCurrentStep("upload")}
          />
        )}

        {currentStep === "success" && (
          <SubmitSubjectModalSuccess
            onBack={() => {
              resetForm();
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SubmitSubjectModal;
