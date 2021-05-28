import { useMutation } from "@apollo/client";
import * as React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FavoriteButton, ToastBody } from "../../../../../../../Components";
import { TeamDataType } from "../../../../../../../Store";
import { playerActions } from "../../../../../../../Store/PlayersSlice/PlayerSlice";
import { UserPaths } from "../../../../../../routes";
import { mutations } from "../../../../../Profile/Schemas";
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
  refetch: () => void;
};
const PitchingTableRow: React.FC<TableRowProps> = ({
  playerData,
  rank,
  refetch,
}) => {
  const [updateFavorite] = useMutation(mutations.updateFavorite);
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    updateFavorite({
      variables: {
        form: {
          favorite: !playerData.favorite,
          profile_id: playerData.pitcher_datraks_id,
        },
      },
    }).then((data) => {
      toast.success(() => (
        <ToastBody
          text={
            playerData.favorite
              ? "This profile removed from favorite list successfully!"
              : "This profile added to favorite list successfully!"
          }
        />
      ));
      dispatch(
        playerActions.updateFavorite({
          id: playerData.pitcher_datraks_id,
          favorite: data.data.update_favorite_profile.favorite,
        })
      );
      refetch();
    });
  };
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
          handleClick={handleFavoriteClick}
        />
      </TableCell>
    </RowContainer>
  );
};
export default PitchingTableRow;
