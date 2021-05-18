import * as React from "react";
import { Dispatch, SetStateAction, useState } from "react";
import { components } from "react-select";
import { BoldArrowIcon } from "../../../Assets/icons";
import { SelectElement } from "./FilterSelectStyle";
interface FilterSelectProps {
  options: { value: string | number; label: string }[];
  onInputChange: (value: string) => void;
  placeholder?: string;
  isShouldRenderValue?: boolean;
  defaultValue?: any;
  width?: string;
}

export type FilterSelectStyleProps = {
  width: string;
};

type OptionType = {
  value: string;
  label: string;
};
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <BoldArrowIcon />
    </components.DropdownIndicator>
  );
};
const FilterSelect: React.FC<FilterSelectProps> = ({
  options,
  onInputChange,
  placeholder = "",
  isShouldRenderValue = true,
  defaultValue,
  width = "100",
}) => {
  return (
    <SelectElement
      width={width}
      defaultValue={defaultValue}
      options={options}
      classNamePrefix="react-select"
      onChange={onInputChange}
      isSearchable={false}
      components={{ DropdownIndicator }}
      placeholder={placeholder}
      controlShouldRenderValue={isShouldRenderValue}
    />
  );
};
export default FilterSelect;
