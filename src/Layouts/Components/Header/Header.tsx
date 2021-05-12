import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../Assets/icons";
import { AuthPaths, UserPaths } from "../../../Routes/routes";
import {
  HeaderContainer,
  NavContainer,
  NavLink,
  NavMenu,
  NavWrapper,
  UserImage,
} from "./HeaderStyle";
import { DropdownMenu } from "..";
import { useSelector } from "react-redux";
import { userSelector } from "../../../Store";
import { useLocation } from "react-router-dom";
interface HeaderProps {
  isAuthorized?: boolean;
  avatarUrl?: string;
}
export type HeaderImageStyleProps = {
  url: string;
};
export type HeaderLinkStyleProps = {
  active: string;
};
const Header: React.FC<HeaderProps> = ({ isAuthorized = false }) => {
  const userData = useSelector(userSelector.getUserData());
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <Link to={isAuthorized ? UserPaths.profile : AuthPaths.login}>
        <LogoIcon />
      </Link>
      {isAuthorized && (
        <NavContainer>
          <NavWrapper>
            <NavLink
              to={UserPaths.leaderBoard}
              active={(pathname === UserPaths.leaderBoard).toString()}
            >
              Leaderboard
            </NavLink>
            <NavLink
              to={UserPaths.network}
              active={(pathname === UserPaths.network).toString()}
            >
              Network
            </NavLink>
          </NavWrapper>
          <NavMenu>
            <Link to={UserPaths.profile}>
              <UserImage url={userData.avatar} />
            </Link>
            <DropdownMenu
              userName={`${userData.first_name} ${userData.last_name}`}
            />
          </NavMenu>
        </NavContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
