import * as React from "react";
import { useState } from "react";
import { SelectElement } from "./FormSelectStyle";
interface FormSelectProps {
  options: { value: string; label: string }[];
}

export type FormSelectStyleProps = {};

const FormSelect: React.FC<FormSelectProps> = ({ options }) => {
  return (
    <SelectElement
      options={options}
      classNamePrefix="react-select"
      isClearable
      onChange={() => {}}
      onInputChange={() => {}}
    />
  );
};
export default FormSelect;
