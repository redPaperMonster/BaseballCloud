import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { colors } from "../../Utils";

export const StyledToast = styled(ToastContainer).attrs({})`
  .Toastify__toast-container {
    background-color: ${colors.lightGreen} !important;
  }
  .Toastify__toast {
    background-color: ${colors.lightGreen} !important;
    color: ${colors.white};
  }
  .Toastify__progress-bar {
    background-color: ${colors.darkGreen};
    color: ${colors.white} !important;
  }
`;

export const ToastBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ToastTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
`;
export const ToastText = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
export const ToastIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  padding-top: 20px;
`;
