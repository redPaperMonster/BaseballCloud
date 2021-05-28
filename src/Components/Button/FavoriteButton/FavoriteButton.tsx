import * as React from "react";
import { Button } from "./FavoriteButtonStyle";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../Utils";

interface FavoriteProps {
  isFavorite: boolean;
  handleClick: () => void;
}

export type FavoriteButtonStyleProps = {};

const FavoriteButton: React.FC<FavoriteProps> = ({
  isFavorite,
  handleClick,
}) => {
  return (
    <Button onClick={handleClick}>
      <FontAwesomeIcon
        icon={isFavorite ? filledHeart : faHeart}
        color={colors.lightBlue}
      />
    </Button>
  );
};
export default FavoriteButton;
