import * as React from "react";
import { FavoriteButton } from "../../../../../Components";
import { PlayerDataType, TeamDataType } from "../../../../../Store";
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
  playerData: PlayerDataType;
};
const NetworkTableRow: React.FC<TableRowProps> = ({ playerData }) => {
  return (
    <RowContainer>
      <TableNetworkCellLink
        width="23"
        to={`${UserPaths.profile}/${playerData.id}`}
      >{`${playerData.first_name} ${playerData.last_name}`}</TableNetworkCellLink>

      <TableNetworkCell width="12">-</TableNetworkCell>
      <TableNetworkCell width="17">
        {(playerData.school && playerData.school.name) || "-"}
      </TableNetworkCell>

      <TableCell width="19">
        {(playerData.teams &&
          playerData.teams.map((i: TeamDataType) =>
            i === playerData.teams.slice(-1).find(() => true)
              ? i.name
              : `${i.name}, `
          )) ||
          "-"}
      </TableCell>

      <TableNetworkCell width="13">{playerData.age}</TableNetworkCell>
      <TableCell width="5">
        <FavoriteButton isFavorite={playerData.favorite} id={playerData.id} />
      </TableCell>
    </RowContainer>
  );
};
export default NetworkTableRow;
