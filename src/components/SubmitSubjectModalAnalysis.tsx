import { SubjectStatus } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { Info } from "lucide-react";
import { useSubjects } from "../hooks/useSubjects";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

type Props = {};

const SubmitSubjectModalAnalysis = (props: Props) => {
  const subjects = useSubjects([], { status: SubjectStatus.pending });
  if(!subjects.data || subjects.data.length === 0) {
    return <></>
  }
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full">
          <Info className="mr-2" />
          Confira as matérias em análise
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4 py-2">
        <Alert variant="default">
          <AlertDescription>
            As seguintes matérias estão em análise. Envie uma mensagem para
            entramos em contato quando tivermos uma atualização.
            <ul className="list-disc py-2 pl-5 text-sm">
              {subjects.data.map((subject) => (
                <li key={subject.id}>
                  {subject.name}
                  {subject.createdAt && (
                    <span className="text-muted-foreground">
                      {" "}, enviado {formatDistanceToNow(new Date(subject.createdAt), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SubmitSubjectModalAnalysis;
