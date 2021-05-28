import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../../../../Utils";
import { TableHeaderItemStyleProps } from "./TableHeader";
import { TableRowStyleProps } from "./TableRow";

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
  margin-bottom: 21px;
  padding: 16px;
`;

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
