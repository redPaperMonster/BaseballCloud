import * as React from "react";
import { Button } from "./FavoriteButtonStyle";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../Utils";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import mutations from "./Mutations";
import { useDispatch } from "react-redux";
import { playerActions } from "../../../Store/PlayersSlice/PlayerSlice";
import { toast } from "react-toastify";
import { ToastBody } from "../..";

interface FavoriteProps {
  isFavorite: boolean;
  id: string;
}

export type FavoriteButtonStyleProps = {};

const FavoriteButton: React.FC<FavoriteProps> = ({ isFavorite, id }) => {
  const [isChecked, setChecked] = useState(isFavorite);
  const [updateFavorite, updateData] = useMutation(mutations.updateFavorite);
  const dispatch = useDispatch();
  const handleClick = () => {
    setChecked(!isChecked);
    updateFavorite({
      variables: { form: { favorite: !isFavorite, profile_id: id } },
    }).then((data) => {
      toast.success(() => (
        <ToastBody
          text={
            isChecked
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
      <FontAwesomeIcon
        icon={isChecked ? filledHeart : faHeart}
        color={colors.lightBlue}
      />
    </Button>
  );
};
export default FavoriteButton;
