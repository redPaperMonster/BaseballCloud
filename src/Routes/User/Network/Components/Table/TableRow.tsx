import { useMutation } from "@apollo/client";
import * as React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FavoriteButton, ToastBody } from "../../../../../Components";
import { PlayerDataType, TeamDataType } from "../../../../../Store";
import { playerActions } from "../../../../../Store/PlayersSlice/PlayerSlice";
import { UserPaths } from "../../../../routes";
import { mutations } from "../../../Profile/Schemas";
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
  refetch: () => void;
};
const NetworkTableRow: React.FC<TableRowProps> = ({ playerData, refetch }) => {
  const [updateFavorite] = useMutation(mutations.updateFavorite);
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    updateFavorite({
      variables: {
        form: { favorite: !playerData.favorite, profile_id: playerData.id },
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
          id: playerData.id,
          favorite: data.data.update_favorite_profile.favorite,
        })
      );
      refetch();
    });
  };
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
        <FavoriteButton
          isFavorite={playerData.favorite}
          handleClick={handleFavoriteClick}
        />
      </TableCell>
    </RowContainer>
  );
};
export default NetworkTableRow;
