import * as React from "react";

import {
  TableHeaderContainer,
  TableHeaderItem,
  TableHeaderItemWrapper,
} from "./TableStyle";

export interface TableHeaderItemStyleProps {
  width: string;
}

export type TableHeaderProps = {};

const NetworkTableHeader: React.FC<TableHeaderProps> = ({}) => {
  return (
    <TableHeaderContainer>
      <TableHeaderItemWrapper>
        <TableHeaderItem width="14">Player name</TableHeaderItem>
        <TableHeaderItem width="5">Sessions</TableHeaderItem>
        <TableHeaderItem width="10">School</TableHeaderItem>
        <TableHeaderItem width="10">Teams</TableHeaderItem>
        <TableHeaderItem width="5">Age</TableHeaderItem>
        <TableHeaderItem width="5">Favorite</TableHeaderItem>
      </TableHeaderItemWrapper>
    </TableHeaderContainer>
  );
};
export default NetworkTableHeader;
