import styled from "styled-components";

interface LoaderProps {
  isChild?: boolean;
}
//  height: ${(props) => (props.isChild ? "100%" : "100vh")};

export const LoaderWrapper = styled.div<LoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.isChild ? "" : " height:100vh")};
`;
