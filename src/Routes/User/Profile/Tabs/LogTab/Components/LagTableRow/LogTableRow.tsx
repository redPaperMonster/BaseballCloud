import * as React from "react";
import { useState } from "react";
import LogTableHeader from "../LogTableHeader/LogTableHeader";

import {
  ExpandedArea,
  RowContainer,
  RowWrapper,
  TableCell,
} from "./LogTableRowStyle";
export interface TableRowStyleProps {
  width: string;
}

export interface ExpandedAreaStyleProps {
  isVisible: boolean;
}

export type TableRowProps = {
  playerData?: any; //TODO:
  rank?: string;
};
const LogTableRow: React.FC<TableRowProps> = ({ playerData, rank }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <RowContainer isVisible={isVisible}>
      <RowWrapper onClick={() => setIsVisible(!isVisible)}>
        <TableCell width="10">-</TableCell>
        <TableCell width="10">Brooks Brophy</TableCell>
        <TableCell width="10">R</TableCell>
        <TableCell width="10">Fastball</TableCell>
        <TableCell width="10">Swinging Strike</TableCell>
      </RowWrapper>
      {isVisible && (
        <ExpandedArea>
          <LogTableHeader isChild />
          <RowWrapper>
            <TableCell width="19.5">-</TableCell>
            <TableCell width="19.5">-</TableCell>
            <TableCell width="15">-</TableCell>
            <TableCell width="15">-</TableCell>
            <TableCell width="16">-</TableCell>
          </RowWrapper>
        </ExpandedArea>
      )}
    </RowContainer>
  );
};
export default LogTableRow;
