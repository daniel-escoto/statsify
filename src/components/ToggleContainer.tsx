import React from "react";
import Button from "./Button";

interface ToggleContainerProps<T> {
  options: { label: string; value: T }[];
  activeValue: T;
  onChange: (value: T) => void;
}

export default function ToggleContainer<T>({
  options,
  activeValue,
  onChange,
}: ToggleContainerProps<T>) {
  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <Button
          key={option.value as string}
          isActive={activeValue === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
