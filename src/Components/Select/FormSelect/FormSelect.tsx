import * as React from "react";
import { useState } from "react";
import { FieldInputProps } from "react-final-form";
import { SelectElement } from "./FormSelectStyle";
interface FormSelectProps {
  options: { value: string | number; label: string }[];
  placeholder: string;
  isShouldRenderValue?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  input: FieldInputProps<any, HTMLElement>;
}

export type FormSelectStyleProps = {};

const FormSelect: React.FC<FormSelectProps> = ({
  options,
  placeholder,
  isShouldRenderValue = true,
  isSearchable = false,
  isMulti = false,
  input,
}) => {
  function isArray(arr: any) {
    return arr instanceof Array;
  }
  const defaultValues = isArray(input.value)
    ? input.value.map((i: any) => {
        return i.u_name
          ? { value: i.u_name, label: i.u_name }
          : { value: i.name, label: i.name };
      })
    : typeof input.value === "object"
    ? { value: input, label: input.value.name }
    : { value: input.value, label: input.value };

  return (
    <SelectElement
      defaultValue={defaultValues}
      options={options}
      classNamePrefix="react-select"
      onChange={(e: any) => {
        input.onChange(isArray(e) ? e.map((i: any) => i.value) : e.value);
      }}
      isSearchable={isSearchable}
      isMulti={isMulti}
      placeholder={placeholder}
      onInputChange={() => {}}
      controlShouldRenderValue={isShouldRenderValue}
    />
  );
};
export default FormSelect;
