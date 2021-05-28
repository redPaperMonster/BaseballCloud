import styled from "styled-components";
import { colors } from "../../../Utils";

export const LeaderBoardHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const HeaderText = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: ${colors.darkGray};
`;
export const FilterContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  padding-right: 50px;
`;
export const LeaderBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FilterWrapper = styled.div`
  margin-left: 15px;
`;
