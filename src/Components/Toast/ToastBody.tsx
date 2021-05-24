import * as React from "react";
import { SuccessIcon } from "../../Assets/icons";
import {
  TextWrapper,
  ToastBodyWrapper,
  ToastIconWrapper,
  ToastText,
  ToastTitle,
} from "./ToastStyle";

interface ToastProps {
  text: string;
}
const ToastBody: React.FC<ToastProps> = ({ text }) => {
  return (
    <ToastBodyWrapper>
      <ToastIconWrapper>
        <SuccessIcon />
      </ToastIconWrapper>
      <TextWrapper>
        <ToastTitle>Success</ToastTitle>
        <ToastText>{text}</ToastText>
      </TextWrapper>
    </ToastBodyWrapper>
  );
};
export default ToastBody;
