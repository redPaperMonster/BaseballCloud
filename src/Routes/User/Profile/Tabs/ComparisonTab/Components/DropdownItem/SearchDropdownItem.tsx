import React from "react";

import { DropdownListItem } from "./SearchDropdownItemStyle";

interface DropdownProps {
  player: any;
  setCurrentPlayer: any;
  setIsOpened: any;
  setPlayerName: any;
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
