import * as React from "react";
import { InputWrapper, Input, IconWrapper, Wrapper } from "./FilterInputStyle";
import { useState } from "react";
interface FilterInputProps {
  placeholder?: string;
  icon: JSX.Element;
  handleFocus?: boolean;
  width?: string;
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
}) => {
  const [isFocused, setFocused] = useState(false);
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          onFocus={() => handleFocus && setFocused(true)}
          placeholder={placeholder}
          onBlur={() => handleFocus && setFocused(false)}
          width={width}
        />
      </InputWrapper>
      <IconWrapper width={width} isFocused={isFocused}>
        {icon}
      </IconWrapper>
    </Wrapper>
  );
};
export default FilterInput;
