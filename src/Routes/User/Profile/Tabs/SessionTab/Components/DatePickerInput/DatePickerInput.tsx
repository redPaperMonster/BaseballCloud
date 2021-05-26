import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BoldArrowIcon, DateIcon } from "../../../../../../../Assets/icons";
import {
  ArrowIconWrapper,
  IconWrapper,
  InputButton,
  InputContainer,
} from "./DatePickerInputStyle";

type ButtonProps = React.HTMLProps<HTMLButtonElement>;
const DatePickerInput = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <InputContainer>
      <InputButton onClick={props.onClick} ref={ref}>
        <IconWrapper>
          <DateIcon />
        </IconWrapper>
        {props.value || "Date"}
        <ArrowIconWrapper>
          <BoldArrowIcon />
        </ArrowIconWrapper>
      </InputButton>
    </InputContainer>
  )
);

export default DatePickerInput;
