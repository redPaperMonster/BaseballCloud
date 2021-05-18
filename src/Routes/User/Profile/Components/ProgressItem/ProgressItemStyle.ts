import styled from "styled-components";
import { colors } from "../../../../../Utils/colors";

export const ProgressItemWrapper = styled.div`
  padding: 16px 24px 0 0;
  display: flex;
  flex-direction: column;
  width: 300px;
`;
export const ProgressTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProgressTitle = styled.div`
  font-size: 16px;
  color: ${colors.darkGray};
`;
export const ProgressInfo = styled(ProgressTitle)`
  font-weight: 700;
`;
