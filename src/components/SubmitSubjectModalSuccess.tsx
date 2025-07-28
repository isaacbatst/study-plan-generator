import React from "react";
import { Button } from "./ui/button";
import { DialogClose, DialogFooter } from "./ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import {
  CheckCircle2,
  CheckCircle2Icon,
  Mail,
  Phone,
  Send,
} from "lucide-react";

type Props = {
  onBack: () => void;
};

const SubmitSubjectModalSuccess = ({ onBack }: Props) => {
  return (
    <div>
      <Alert variant="default" className="mb-2">
        <CheckCircle2Icon />
        <AlertTitle>Matéria enviada com sucesso!</AlertTitle>
        <AlertDescription>
          Me mande uma mensagem para que eu possa liberar a matéria no sistema.
        </AlertDescription>
      </Alert>

      <ul className="flex flex-wrap mb-4">
        <li>
          <Button variant="link" asChild>
            <a
              target="_blank"
              href="mailto:isaacbatst@gmail.com"
              className="text-blue-600 hover:underline"
            >
              <Mail />
              Email
            </a>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <a
              target="_blank"
              href={`https://wa.me/5584994531473?text=${encodeURIComponent(
                `Olá, gostaria de solicitar a liberação de uma matéria no Planejei.`
              )}`}
              className="text-blue-600 hover:underline"
            >
              <Phone />
              WhatsApp
            </a>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <a
              target="_blank"
              href="https://t.me/isaacbatst"
              className="text-blue-600 hover:underline"
            >
              <Send />
              Telegram
            </a>
          </Button>
        </li>
      </ul>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Fechar</Button>
        </DialogClose>
        <Button
          onClick={() => {
            onBack();
          }}
        >
          Enviar outra matéria
        </Button>
      </DialogFooter>
    </div>
  );
};

export default SubmitSubjectModalSuccess;
