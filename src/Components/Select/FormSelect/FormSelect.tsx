import _ from "lodash";
import * as React from "react";
import { FieldInputProps, FieldMetaState } from "react-final-form";
import {
  isArray,
  setDefaultOption,
} from "../../../Routes/User/Profile/Sidebar/Utils/setDefaultOptions";
import { SelectOptionType } from "../../../Utils";
import { ErrorText, SelectElement } from "./FormSelectStyle";
interface FormSelectProps {
  options: SelectOptionType | SelectOptionType[];
  placeholder: string;
  input: FieldInputProps<any, HTMLElement>;
  meta: FieldMetaState<any>;
  isSearchable?: boolean;
  isMulti?: boolean;
}

export type FormSelectStyleProps = {};

const FormSelect: React.FC<FormSelectProps> = ({
  options,
  placeholder,
  isSearchable = false,
  isMulti = false,
  input,
  meta,
}) => {
  const defaultOptions = setDefaultOption(options, input.value);

  return (
    <div>
      <SelectElement
        defaultValue={defaultOptions}
        options={options}
        classNamePrefix="react-select"
        onChange={(e: SelectOptionType | SelectOptionType[]) => {
          input.onChange(
            isArray(e)
              ? (e as SelectOptionType[]).map((i: SelectOptionType) => {
                  return i.value;
                })
              : (e as SelectOptionType).value
          );
        }}
        isSearchable={isSearchable}
        isMulti={isMulti}
        placeholder={placeholder}
        onInputChange={() => {}}
        controlShouldRenderValue={input.value}
      />
      {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    </div>
  );
};
export default FormSelect;
