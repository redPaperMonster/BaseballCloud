import React from "react";
import { Route } from "react-router-dom";
import { AuthLayout, ProfileLayout, UserListLayout } from "../../Layouts";
import { ForgotPassword, Login, Registration } from "../Auth";
import { LeaderBoard, Network, UserProfile } from "../User";

interface RouteWrapperProps {
  path: string;
  layoutType: LayoutType;
}
export enum LayoutType {
  userProfile,
  leaderBoard,
  network,
  login,
  singUp,
  forgotPassword,
  playerProfile,
}

const CreateRoute = (
  Component: React.FC<any>,
  Layout: React.FC<any>,
  path: string,
  isSidebarEdited?: boolean,
  exact?: boolean
) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        return (
          <Layout params={props.match.params}>
            <Component params={props.match.params} />
          </Layout>
        );
      }}
    />
  );
};

const RouteWrapper: React.FC<RouteWrapperProps> = ({ path, layoutType }) => {
  switch (layoutType) {
    case LayoutType.userProfile:
      return CreateRoute(UserProfile, ProfileLayout, path, true, true);
    case LayoutType.network:
      return CreateRoute(Network, UserListLayout, path);
    case LayoutType.leaderBoard:
      return CreateRoute(LeaderBoard, UserListLayout, path);
    case LayoutType.playerProfile:
      return CreateRoute(UserProfile, ProfileLayout, path, false, true);
    case LayoutType.login:
      return CreateRoute(Login, AuthLayout, path);
    case LayoutType.forgotPassword:
      return CreateRoute(ForgotPassword, AuthLayout, path);
    case LayoutType.singUp:
      return CreateRoute(Registration, AuthLayout, path);
    default:
      return CreateRoute(UserProfile, ProfileLayout, path, true);
  }
};
export default RouteWrapper;
