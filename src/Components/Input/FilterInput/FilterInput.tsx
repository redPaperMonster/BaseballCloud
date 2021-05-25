import * as React from "react";
import { InputWrapper, Input, IconWrapper, Wrapper } from "./FilterInputStyle";
import { Dispatch, SetStateAction, useState } from "react";
interface FilterInputProps {
  placeholder?: string;
  icon: JSX.Element;
  handleFocus?: boolean;
  width?: string;
  onChange: Dispatch<SetStateAction<string>>;
  onFocus?: () => void;
  value?: string;
}

export type FilterIconStyleProps = {
  isFocused: boolean;
  width: string;
};
export type FilterInputStyleProps = {
  width: string;
};
const FilterInput: React.FC<FilterInputProps> = ({
  placeholder = "",
  icon,
  handleFocus,
  width = "135",
  onChange,
  onFocus = () => {},
  value,
}) => {
  const [isFocused, setFocused] = useState(false);
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          onFocus={() => (handleFocus ? setFocused(true) : onFocus())}
          placeholder={placeholder}
          onBlur={() => handleFocus && setFocused(false)}
          width={width}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </InputWrapper>
      <IconWrapper width={width} isFocused={isFocused}>
        {icon}
      </IconWrapper>
    </Wrapper>
  );
};
export default FilterInput;
