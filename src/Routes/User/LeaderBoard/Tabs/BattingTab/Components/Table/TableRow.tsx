import * as React from "react";
import { FavoriteButton } from "../../../../../../../Components";
import { TeamDataType } from "../../../../../../../Store";
import { UserPaths } from "../../../../../../routes";
import { BatterDataType } from "../../../../Utils/types";
import {
  RowContainer,
  TableCell,
  TableCellLink,
  TableNetworkCell,
} from "./TableStyle";
export interface TableRowStyleProps {
  width: string;
}

export type TableRowProps = {
  playerData: BatterDataType;
  rank?: number;
};
const BattingTableRow: React.FC<TableRowProps> = ({ playerData, rank }) => {
  return (
    <RowContainer>
      <TableNetworkCell width="6">{rank}</TableNetworkCell>
      <TableCellLink
        width="13"
        to={`${UserPaths.profile}/${playerData.batter_datraks_id}`}
      >
        {playerData.batter_name}
      </TableCellLink>
      <TableCell width="4">{playerData.age}</TableCell>
      <TableNetworkCell width="10">
        {(playerData.school && playerData.school.name) || "-"}
      </TableNetworkCell>

      <TableCell width="10">
        {(playerData.teams &&
          playerData.teams.map((i: TeamDataType) =>
            i === playerData.teams.slice(-1).find(() => true)
              ? i.name
              : `${i.name}, `
          )) ||
          "-"}
      </TableCell>

      <TableCell width="10">{playerData.exit_velocity}</TableCell>

      <TableCell width="10">{playerData.launch_angle}</TableCell>

      <TableCell width="10">{playerData.distance}</TableCell>
      <TableCell width="5">
        <FavoriteButton
          isFavorite={playerData.favorite}
          id={playerData.batter_datraks_id}
        />
      </TableCell>
    </RowContainer>
  );
};
export default BattingTableRow;
