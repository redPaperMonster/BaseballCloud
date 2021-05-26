import styled from "styled-components";

interface LoaderProps {
  isChild?: boolean;
  fullWidth?: boolean;
}
export const LoaderWrapper = styled.div<LoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.isChild ? "" : "height:100vh")};
  ${(props) => (props.fullWidth ? "width:100vw" : "")};
`;
