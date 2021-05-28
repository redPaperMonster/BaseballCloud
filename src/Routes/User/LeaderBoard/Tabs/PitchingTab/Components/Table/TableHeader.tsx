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

const PitchingTableHeader: React.FC<TableHeaderProps> = ({}) => {
  return (
    <TableHeaderContainer>
      <TableHeaderItemWrapper>
        <TableHeaderItem width="6">Rank</TableHeaderItem>

        <TableHeaderItem width="14">Pitcher name</TableHeaderItem>

        <TableHeaderItem width="5">Age</TableHeaderItem>
        <TableHeaderItem width="10">School</TableHeaderItem>
        <TableHeaderItem width="10">Teams</TableHeaderItem>

        <TableHeaderItem width="10">Pitch Type</TableHeaderItem>

        <TableHeaderItem width="10">Velocity</TableHeaderItem>

        <TableHeaderItem width="10">Spin Rate</TableHeaderItem>

        <TableHeaderItem width="5">Favorite</TableHeaderItem>
      </TableHeaderItemWrapper>
    </TableHeaderContainer>
  );
};
export default PitchingTableHeader;
