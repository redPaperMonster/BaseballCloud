import React from "react";
import { PlayerDataType } from "../../../../../../../Store";
import { DropdownListItem } from "./SearchDropdownItemStyle";

interface DropdownProps {
  player: PlayerDataType;
  setCurrentPlayer: React.Dispatch<
    React.SetStateAction<PlayerDataType | undefined>
  >;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchDropdownItem: React.FC<DropdownProps> = ({
  player,
  setCurrentPlayer,
  setIsOpened,
  setPlayerName,
}) => {
  return (
    <DropdownListItem
      onClick={() => {
        setCurrentPlayer(player);
        setIsOpened(false);
        setPlayerName(`${player.first_name} ${player.last_name}`);
      }}
    >{`${player.first_name} ${player.last_name}`}</DropdownListItem>
  );
};

export default SearchDropdownItem;
