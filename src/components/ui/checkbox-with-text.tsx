"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { PropsWithChildren, useId } from "react"

type Props = {
  checked: boolean
  onChange: (checked: boolean) => void
}

const CheckboxWithText = ({
  children,
  checked,
  onChange
}: PropsWithChildren<Props>) => {
  const id = useId()
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id={id} checked={checked} onCheckedChange={onChange} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {children}
        </label>
      </div>
    </div>
  )
}

export default CheckboxWithText