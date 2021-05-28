import React from "react";
import { ArrowIcon } from "../../../Assets/icons";
import { UserPaths } from "../../../Routes/routes";
import { fetchAPI } from "../../../APIService";
import { useDispatch } from "react-redux";
import { userActions } from "../../../Store";
import {
  DropdownLink,
  DropdownItem,
  DropdownButton,
  IconWrapper,
} from "./HeaderDropdownStyle";
import { Dropdown, useComponentOpened } from "../../../Components";

export interface DropdownStyleProps {
  isOpened: boolean;
}
interface DropdownProps {
  userName: string;
}

const HeaderDropdown: React.FC<DropdownProps> = ({ userName }) => {
  const dispatch = useDispatch();
  const { ref, isOpened, setIsOpened } = useComponentOpened(false);

  const handleLogOut = async () => {
    await fetchAPI.logOut().then(() => {
      localStorage.clear();
      dispatch(userActions.resetStore());
    });
  };
  return (
    <div ref={ref}>
      <DropdownButton onClick={() => setIsOpened(!isOpened)}>
        {userName}
        <IconWrapper>
          <ArrowIcon />
        </IconWrapper>
      </DropdownButton>
      <Dropdown isOpened={isOpened}>
        <DropdownLink
          to={UserPaths.profile}
          onClick={() => setIsOpened(!isOpened)}
        >
          My Profile
        </DropdownLink>
        <DropdownItem onClick={handleLogOut}>Log Out</DropdownItem>
      </Dropdown>
    </div>
  );
};

export default HeaderDropdown;
