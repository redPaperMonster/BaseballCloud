import * as React from "react";

import {
  TableHeaderContainer,
  TableHeaderItem,
  TableHeaderItemWrapper,
} from "./LogTableHeaderStyle";

export interface TableHeaderItemStyleProps {
  width: string;
}

export type TableHeaderProps = {
  isChild?: boolean;
};

const LogTableHeader: React.FC<TableHeaderProps> = ({ isChild }) => {
  if (isChild)
    return (
      <TableHeaderContainer>
        <TableHeaderItemWrapper>
          <TableHeaderItem width="19">Exit Velocity</TableHeaderItem>
          <TableHeaderItem width="19">Launch Angle</TableHeaderItem>
          <TableHeaderItem width="15">Direction</TableHeaderItem>
          <TableHeaderItem width="15">Hit Spin Rate</TableHeaderItem>
          <TableHeaderItem width="15">Distance</TableHeaderItem>
          <TableHeaderItem width="9">Hang Time</TableHeaderItem>
        </TableHeaderItemWrapper>
      </TableHeaderContainer>
    );
  return (
    <TableHeaderContainer>
      <TableHeaderItemWrapper>
        <TableHeaderItem width="19.5">Date</TableHeaderItem>
        <TableHeaderItem width="19.5">Pitcher Handedness</TableHeaderItem>
        <TableHeaderItem width="21">Pitcher Name</TableHeaderItem>
        <TableHeaderItem width="21">Pitch Type</TableHeaderItem>
        <TableHeaderItem width="19">Pitch Call</TableHeaderItem>
      </TableHeaderItemWrapper>
    </TableHeaderContainer>
  );
};
export default LogTableHeader;
