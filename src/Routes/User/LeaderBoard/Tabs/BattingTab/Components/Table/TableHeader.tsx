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

const BattingTableHeader: React.FC<TableHeaderProps> = ({}) => {
  return (
    <TableHeaderContainer>
      <TableHeaderItemWrapper>
        <TableHeaderItem width="6">Rank</TableHeaderItem>
        <TableHeaderItem width="14">Batter name</TableHeaderItem>

        <TableHeaderItem width="5">Age</TableHeaderItem>
        <TableHeaderItem width="10">School</TableHeaderItem>
        <TableHeaderItem width="10">Teams</TableHeaderItem>
        <TableHeaderItem width="10">Exit Velocity</TableHeaderItem>
        <TableHeaderItem width="10">Launch Angle</TableHeaderItem>
        <TableHeaderItem width="10">Distance</TableHeaderItem>
        <TableHeaderItem width="5">Favorite</TableHeaderItem>
      </TableHeaderItemWrapper>
    </TableHeaderContainer>
  );
};
export default BattingTableHeader;
