import * as React from "react";
import {
  FavoriteIcon,
  FavoriteIconActive,
} from "../../../../../../../Assets/icons";
import { Button } from "./SidebarFavoriteButtonStyle";

interface FavoriteProps {
  isFavorite: boolean;
  handleClick: () => void;
}

export type FavoriteButtonStyleProps = {};

const SidebarFavoriteButton: React.FC<FavoriteProps> = ({
  isFavorite,
  handleClick,
}) => {
  return (
    <Button onClick={handleClick}>
      {isFavorite ? <FavoriteIconActive /> : <FavoriteIcon />}
    </Button>
  );
};
export default SidebarFavoriteButton;
