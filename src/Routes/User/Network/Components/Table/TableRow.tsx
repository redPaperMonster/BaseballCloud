import * as React from "react";
import { FavoriteButton } from "../../../../../Components";
import { UserPaths } from "../../../../routes";
import {
  RowContainer,
  TableCell,
  TableNetworkCell,
  TableNetworkCellLink,
} from "./TableStyle";
export interface TableRowStyleProps {
  width: string;
}

export type TableRowProps = {
  playerData: any;
  rank?: string;
};
const NetworkTableRow: React.FC<TableRowProps> = ({ playerData, rank }) => {
  return (
    <RowContainer>
      <TableNetworkCellLink
        width="14"
        to={`${UserPaths.profile}/${playerData.id}`}
      >{`${playerData.first_name} ${playerData.last_name}`}</TableNetworkCellLink>

      <TableNetworkCell width="5">-</TableNetworkCell>
      <TableNetworkCell width="10">
        {(playerData.school && playerData.school.name) || "-"}
      </TableNetworkCell>

      <TableCell width="10">
        {(playerData.teams &&
          playerData.teams.map((i: any) =>
            i === playerData.teams.slice(-1)[0] ? i.name : `${i.name}, `
          )) ||
          "-"}
      </TableCell>

      <TableNetworkCell width="5">{playerData.age}</TableNetworkCell>
      <TableCell width="5">
        <FavoriteButton isFavorite={playerData.favorite} id={playerData.id} />
      </TableCell>
    </RowContainer>
  );
};
export default NetworkTableRow;
