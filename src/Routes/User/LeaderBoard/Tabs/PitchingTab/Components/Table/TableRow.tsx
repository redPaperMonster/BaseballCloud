import * as React from "react";
import { FavoriteButton } from "../../../../../../../Components";
import { TeamDataType } from "../../../../../../../Store";
import { UserPaths } from "../../../../../../routes";
import { PitchingDataType } from "../../../../Utils/types";
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
  playerData: PitchingDataType;
  rank?: number;
};
const PitchingTableRow: React.FC<TableRowProps> = ({ playerData, rank }) => {
  return (
    <RowContainer>
      <TableNetworkCell width="6">{rank}</TableNetworkCell>

      <TableCellLink
        width="14"
        to={`${UserPaths.profile}/${playerData.pitcher_datraks_id}`}
      >
        {playerData.pitcher_name}
      </TableCellLink>

      <TableCell width="5">{playerData.age}</TableCell>
      <TableNetworkCell width="10">
        {(playerData.school && playerData.school.name) || "-"}
      </TableNetworkCell>
      <TableNetworkCell width="10">
        {(playerData.teams &&
          playerData.teams.map((i: TeamDataType) =>
            i === playerData.teams.slice(-1).find(() => true)
              ? i.name
              : `${i.name}, `
          )) ||
          "-"}
      </TableNetworkCell>
      <TableCell width="10">{playerData.pitch_type}</TableCell>
      <TableCell width="10">{playerData.velocity}</TableCell>
      <TableCell width="10">{playerData.spin_rate}</TableCell>
      <TableCell width="5">
        <FavoriteButton
          isFavorite={playerData.favorite}
          id={playerData.pitcher_datraks_id}
        />
      </TableCell>
    </RowContainer>
  );
};
export default PitchingTableRow;
