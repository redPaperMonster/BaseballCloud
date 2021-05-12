import styled from "styled-components";
import { colors } from "../../../../../../../Utils/colors";
import { TableHeaderItemStyleProps } from "./LogTableHeader";

export const TableHeaderItemWrapper = styled.div`
  min-height: 44px;
  margin-bottom: 6px;
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  color: ${colors.darkGray};
`;

export const TableHeaderItem = styled.div<TableHeaderItemStyleProps>`
  min-width: 0;
  width: ${(props) => props.width}%;
  flex: 1 0 ${(props) => props.width}%;
  display: flex;
`;
export const TableHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
