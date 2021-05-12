import React, { useEffect } from "react";
import { ArrowIcon } from "../../../Assets/icons";
import { AuthPaths, UserPaths } from "../../../Routes/routes";
import { AxiosResponse } from "axios";
import { fetchAPI } from "../../../APIService";
import { useDispatch } from "react-redux";
import { userActions } from "../../../Store";
import {
  DropdownContainer,
  DropdownPanel,
  DropdownLink,
  DropdownItem,
  DropdownButton,
  IconWrapper,
} from "./DropdownStyle";
import useComponentOpened from "./useComponentOpened";
import { gql, useQuery } from "@apollo/client";

export interface DropdownStyleProps {
  isOpened: boolean;
}
interface DropdownProps {
  userName: string;
}
// TODO: ???????
const currentProfile = gql`
  {
    current_profile {
      first_name
      last_name
      avatar
      position
      position2
    }
  }
`;
const DropdownMenu: React.FC<DropdownProps> = ({ userName }) => {
  const dispatch = useDispatch();
  const { ref, isOpened, setIsOpened } = useComponentOpened(false);
  const { client, loading, data } = useQuery(currentProfile, {
    fetchPolicy: "network-only",
  });
  const handleLogOut = async () => {
    await fetchAPI.logOut().then(() => {
      localStorage.clear();
      //dispatch(userActions.setToken(""));
      //client.resetStore();
      dispatch(userActions.resetStore());
    });
  };
  return (
    <DropdownContainer ref={ref}>
      <DropdownButton onClick={() => setIsOpened(!isOpened)}>
        {userName}
        <IconWrapper>
          <ArrowIcon />
        </IconWrapper>
      </DropdownButton>
      <DropdownPanel isOpened={isOpened}>
        <DropdownLink
          to={UserPaths.profile}
          onClick={() => setIsOpened(!isOpened)}
        >
          My Profile
        </DropdownLink>
        <DropdownItem onClick={handleLogOut}>Log Out</DropdownItem>
      </DropdownPanel>
    </DropdownContainer>
  );
};

export default DropdownMenu;
