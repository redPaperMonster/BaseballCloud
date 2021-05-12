import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../Utils/colors";
import { TableRowStyleProps } from "./TableRow";

export const RowContainer = styled.div`
  margin-bottom: 4px;
  min-height: 44px;
  margin-bottom: 6px;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  background-color: #f7f8f9;
`;
export const TableCell = styled.div<TableRowStyleProps>`
  padding-left: 6px;
  width: ${(props) => props.width}%;
  flex: 1 0 ${(props) => props.width}%;
  min-width: 0;
  font-size: 14px;
  color: ${colors.lightBlack};
`;
export const TableCellLink = styled(Link)<TableRowStyleProps>`
  padding-left: 6px;
  width: ${(props) => props.width}%;
  flex: 1 0 ${(props) => props.width}%;
  min-width: 0;
  font-size: 14px;
  color: ${colors.lightBlack};
`;

export const TableNetworkCell = styled(TableCell)`
  padding-left: 20px;
`;
export const TableNetworkCellLink = styled(TableCellLink)`
  padding-left: 20px;
`;
