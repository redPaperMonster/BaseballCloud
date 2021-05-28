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
        <TableHeaderItem width="23">Player name</TableHeaderItem>
        <TableHeaderItem width="13">Sessions</TableHeaderItem>
        <TableHeaderItem width="19">School</TableHeaderItem>
        <TableHeaderItem width="19">Teams</TableHeaderItem>
        <TableHeaderItem width="13">Age</TableHeaderItem>
        <TableHeaderItem width="5">Favorite</TableHeaderItem>
      </TableHeaderItemWrapper>
    </TableHeaderContainer>
  );
};
export default NetworkTableHeader;
