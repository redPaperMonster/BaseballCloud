import * as React from "react";
import { TableType } from "../type";

import {
  TableHeaderContainer,
  TableHeaderItem,
  TableHeaderItemWrapper,
} from "./TableHeaderStyle";

export interface TableHeaderItemStyleProps {
  width: string;
}

export type TableHeaderProps = {
  type: TableType;
};

const TableHeader: React.FC<TableHeaderProps> = ({ type }) => {
  return (
    <TableHeaderContainer>
      <TableHeaderItemWrapper>
        {type !== TableType.network && (
          <TableHeaderItem width="6">Rank</TableHeaderItem>
        )}
        <TableHeaderItem width="14">
          {(type === TableType.batting && "Batter") ||
            (type === TableType.pitching && "Pitcher") ||
            (type === TableType.network && "Player")}{" "}
          name
        </TableHeaderItem>
        {type !== TableType.network && (
          <TableHeaderItem width="5">Age</TableHeaderItem>
        )}
        {type === TableType.network && (
          <TableHeaderItem width="5">Sessions</TableHeaderItem>
        )}
        <TableHeaderItem width="10">School</TableHeaderItem>
        <TableHeaderItem width="10">Teams</TableHeaderItem>
        {type === TableType.network && (
          <TableHeaderItem width="5">Age</TableHeaderItem>
        )}
        {type === TableType.batting && (
          <TableHeaderItem width="10">Exit Velocity</TableHeaderItem>
        )}
        {type === TableType.batting && (
          <TableHeaderItem width="10">Launch Angle</TableHeaderItem>
        )}
        {type === TableType.batting && (
          <TableHeaderItem width="10">Distance</TableHeaderItem>
        )}
        {type === TableType.pitching && (
          <TableHeaderItem width="10">Pitch Type</TableHeaderItem>
        )}
        {type === TableType.pitching && (
          <TableHeaderItem width="10">Velocity</TableHeaderItem>
        )}
        {type === TableType.pitching && (
          <TableHeaderItem width="10">Spin Rate</TableHeaderItem>
        )}

        <TableHeaderItem width="5">Favorite</TableHeaderItem>
      </TableHeaderItemWrapper>
    </TableHeaderContainer>
  );
};
export default TableHeader;
