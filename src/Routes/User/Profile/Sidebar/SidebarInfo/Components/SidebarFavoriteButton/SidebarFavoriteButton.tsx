import { useMutation } from "@apollo/client";
import * as React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  FavoriteIcon,
  FavoriteIconActive,
} from "../../../../../../../Assets/icons";
import { ToastBody } from "../../../../../../../Components";
import { playerActions } from "../../../../../../../Store/PlayersSlice/PlayerSlice";
import { mutations } from "../../../../Schemas";
import { Button } from "./SidebarFavoriteButtonStyle";

interface FavoriteProps {
  isFavorite: boolean;
  id: string;
}

export type FavoriteButtonStyleProps = {};

const SidebarFavoriteButton: React.FC<FavoriteProps> = ({ isFavorite, id }) => {
  const [updateFavorite] = useMutation(mutations.updateFavorite);
  const dispatch = useDispatch();
  const handleClick = () => {
    updateFavorite({
      variables: { form: { favorite: !isFavorite, profile_id: id } },
    }).then((data) => {
      toast.success(() => (
        <ToastBody
          text={
            isFavorite
              ? "This profile removed from favorite list successfully!"
              : "This profile added to favorite list successfully!"
          }
        />
      ));

      dispatch(
        playerActions.updateFavorite({
          id,
          favorite: data.data.update_favorite_profile.favorite,
        })
      );
    });
  };

  return (
    <Button onClick={handleClick}>
      {isFavorite ? <FavoriteIconActive /> : <FavoriteIcon />}
    </Button>
  );
};
export default SidebarFavoriteButton;
