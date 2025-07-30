import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Send } from "lucide-react";

const links = [
  {
    label: "E-mail",
    value: "mailto:isaacbatst@gmail.com",
    valueLabel: "isaacbatst@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "https://wa.me/5584994531473",
    valueLabel: "+5584994531473",
  },
  {
    label: "Telegram",
    value: "https://t.me/isaacbatst",
    valueLabel: "t.me/isaacbatst",
  },
  {
    label: "Github",
    value: "https://github.com/isaacbatst",
    valueLabel: "github.com/isaacbatst",
  },
];

export function SheetContact() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <span className="mr-3">Me contate</span> <Send />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Isaac Batista</SheetTitle>
          <SheetDescription>@isaacbatst</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <div className="flex flex-col">
            {links.map((link) => (
              <div
                key={link.value}
                className="flex justify-between items-center"
              >
                <Label htmlFor={link.value}>{link.label}</Label>
                <a href={link.value} target="_blank" id={link.value}>
                  <Button variant="link" className="col-span-3">
                    {link.valueLabel}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
