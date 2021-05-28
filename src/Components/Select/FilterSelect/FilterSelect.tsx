import * as React from "react";
import {
  CommonProps,
  components,
  GroupTypeBase,
  OptionTypeBase,
} from "react-select";
import { BoldArrowIcon } from "../../../Assets/icons";
import { SelectOptionType } from "../../../Utils";
import { SelectElement } from "./FilterSelectStyle";

interface FilterSelectProps {
  options: { value: string | number; label: string }[];
  onInputChange: (value: SelectOptionType) => void;
  placeholder?: string;
  isShouldRenderValue?: boolean;
  defaultValue?: SelectOptionType;
  width?: string;
}

export type FilterSelectStyleProps = {
  width: string;
};

const DropdownIndicator = (
  props: JSX.IntrinsicAttributes &
    CommonProps<OptionTypeBase, boolean, GroupTypeBase<OptionTypeBase>> & {
      children: React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
      >;
      innerProps: any;
      isFocused: boolean;
      isRtl: boolean;
      isDisabled: boolean;
    }
) => {
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
