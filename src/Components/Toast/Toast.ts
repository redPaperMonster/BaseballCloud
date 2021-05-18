import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { colors } from "../../Utils";

export const StyledToast = styled(ToastContainer).attrs({
  autoClose: false,
})`
  .Toastify__toast-container {
    background-color: ${colors.green};
  }
  .Toastify__toast {
    background-color: ${colors.green};
    color: ${colors.white};
  }
  .Toastify__toast--error {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
    background-color: ${colors.green};
    color: ${colors.white};
  }
`;
