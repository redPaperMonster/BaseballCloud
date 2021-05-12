import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../../../../Utils/colors";
import { ExpandedAreaStyleProps, TableRowStyleProps } from "./LogTableRow";

export const RowContainer = styled.div<ExpandedAreaStyleProps>`
  display: block;
  ${(props) =>
    props.isVisible && "box-shadow: 0 0 6px 1px rgb(72 187 255 / 63%);"}
  border-radius: 4px;
`;
export const RowWrapper = styled.div`
  margin-bottom: 4px;
  min-height: 44px;
  margin-bottom: 6px;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  background-color: #f7f8f9;
  cursor: pointer;
`;
export const TableCell = styled.div<TableRowStyleProps>`
  padding-left: 6px;
  width: ${(props) => props.width}%;
  flex: 1 0 ${(props) => props.width}%;
  min-width: 0;
  font-size: 14px;
  color: ${colors.lightBlack};
`;

export const ExpandedArea = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;
