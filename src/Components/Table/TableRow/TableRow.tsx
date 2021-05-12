import * as React from "react";
import { useState } from "react";
import { UserPaths } from "../../../Routes/routes";
import { TableType } from "../type";
import {
  RowContainer,
  TableCell,
  TableCellLink,
  TableNetworkCell,
  TableNetworkCellLink,
} from "./TableRowStyle";
export interface TableRowStyleProps {
  width: string;
}

export type TableRowProps = {
  playerData: any; //TODO:
  rank?: string;
  type: TableType;
};
// TableNetworkCell;
const TableRow: React.FC<TableRowProps> = ({ playerData, rank, type }) => {
  return (
    <RowContainer>
      {rank && <TableNetworkCell width="6">{rank}</TableNetworkCell>}
      {type === TableType.network ? (
        <TableNetworkCellLink
          width="14"
          to={`${UserPaths.profile}/${playerData.id}`}
        >{`${playerData.first_name} ${playerData.last_name}`}</TableNetworkCellLink>
      ) : (
        <TableCellLink
          width="14"
          to={`${UserPaths.profile}/${
            playerData.batter_datraks_id || playerData.pitcher_datraks_id
          }`}
        >
          {playerData.batter_name || playerData.pitcher_name}
        </TableCellLink>
      )}

      {type !== TableType.network && (
        <TableCell width="5">{playerData.age}</TableCell>
      )}
      {type === TableType.network && (
        <TableNetworkCell width="5">-</TableNetworkCell>
      )}
      {type === TableType.network ? (
        <TableNetworkCell width="10">
          {(playerData.school && playerData.school.name) || "-"}
        </TableNetworkCell>
      ) : (
        <TableCell width="10">
          {(playerData.school && playerData.school.name) || "-"}
        </TableCell>
      )}
      {type === TableType.network ? (
        <TableCell width="10">
          {(playerData.teams && playerData.teams.name) || "-"}
        </TableCell>
      ) : (
        <TableNetworkCell width="10">
          {(playerData.teams && playerData.teams.name) || "-"}
        </TableNetworkCell>
      )}
      {type === TableType.network && (
        <TableNetworkCell width="5">{playerData.age}</TableNetworkCell>
      )}
      {type !== TableType.network && (
        <TableCell width="10">
          {playerData.pitch_type || playerData.exit_velocity}
        </TableCell>
      )}
      {type !== TableType.network && (
        <TableCell width="10">
          {playerData.velocity || playerData.launch_angle}
        </TableCell>
      )}
      {type !== TableType.network && (
        <TableCell width="10">
          {playerData.spin_rate || playerData.distance}
        </TableCell>
      )}
      <TableCell width="5">{playerData.favorite}</TableCell>

      {/* {rank && <TableCell width="6">{rank}</TableCell>}
      <TableCellLink
        width="14"
        to={`${UserPaths.profile}/${
          playerData.batter_datraks_id ||
          playerData.pitcher_datraks_id ||
          playerData.id
        }`}
      >
        {playerData.batter_name ||
          playerData.pitcher_name ||
          (playerData.first_name &&
            playerData.last_name &&
            `${playerData.first_name} ${playerData.last_name}`)}
      </TableCellLink>
      <TableCell width="5">{playerData.age}</TableCell>
      {playerData.events && <TableCell width="5">{playerData.age}</TableCell>}
      <TableCell width="10">
        {(playerData.school && playerData.school.name) || "-"}
      </TableCell>
      <TableCell width="10">
        {(playerData.teams && playerData.teams.name) || "-"}
      </TableCell>
      <TableCell width="10">
        {playerData.pitch_type || playerData.exit_velocity}
      </TableCell>
      <TableCell width="10">
        {playerData.velocity || playerData.launch_angle}
      </TableCell>
      <TableCell width="10">
        {playerData.spin_rate || playerData.distance}
      </TableCell>
      {/* TODO: favorite button+icon */}
      {/* <TableCell width="5">{playerData.favorite}</TableCell> */}
    </RowContainer>
  );
};
export default TableRow;
