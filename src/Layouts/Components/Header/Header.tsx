import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../Assets/icons";
import { AuthPaths, UserPaths } from "../../../Routes/routes";
import {
  HeaderContainer,
  NavContainer,
  NavigationLink,
  NavMenu,
  NavWrapper,
  UserImage,
} from "./HeaderStyle";
import { DropdownMenu } from "..";
import { useSelector } from "react-redux";
import { userSelector } from "../../../Store";
import { useLocation } from "react-router-dom";
import image from "../../../Assets/img/UserAvatar.png";
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
            <NavigationLink
              to={UserPaths.leaderBoard}
              active={(pathname === UserPaths.leaderBoard).toString()}
            >
              Leaderboard
            </NavigationLink>
            <NavigationLink
              to={UserPaths.network}
              active={(pathname === UserPaths.network).toString()}
            >
              Network
            </NavigationLink>
          </NavWrapper>
          <NavMenu>
            <Link to={UserPaths.profile}>
              <UserImage url={userData.avatar || image} />
            </Link>
            <DropdownMenu
              userName={`${userData.first_name || "Profile"} ${
                userData.last_name || "Name"
              }`}
            />
          </NavMenu>
        </NavContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
