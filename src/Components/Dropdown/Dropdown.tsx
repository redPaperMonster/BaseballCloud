import React, { Dispatch, SetStateAction } from "react";
import { DropdownContainer, DropdownPanel } from "./DropdownStyle";

export interface DropdownStyleProps {
  isOpened: boolean;
}
interface DropdownProps {
  isOpened: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpened, children }) => {
  return (
    <DropdownContainer>
      <DropdownPanel isOpened={isOpened}>{children}</DropdownPanel>
    </DropdownContainer>
  );
};

export default Dropdown;
