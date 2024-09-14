import React from "react";
import { Checkbox } from "../ui";

interface Props {
  text: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  value?: string;
}

export const FilterCheckbox: React.FC<Props> = ({
  endAdornment,
  onCheckedChange,
  checked,
  value,
  text,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
