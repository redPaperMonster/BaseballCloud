import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthLayout, ProfileLayout, UserListLayout } from "../Layouts";
import { ForgotPassword, Login, Registration } from "./Auth";
import authGuard from "./Components/AuthGuard";
import ProfileRouteWrapper from "./Components/ProfileRouteWrapper";
import RouteWrapper from "./Components/RouteWrapper";
import { AuthPaths, UserPaths } from "./routes";
import { LeaderBoard, Network, UserProfile } from "./User";

function MainRoute() {
  return (
    <Switch>
      <Route exact path={AuthPaths.home} component={authGuard()} />
      <RouteWrapper
        path={UserPaths.network}
        Component={authGuard(Network)}
        Layout={UserListLayout}
      />
      <ProfileRouteWrapper
        exact
        path={UserPaths.profile}
        Component={authGuard(UserProfile)}
        Layout={ProfileLayout}
      />

      <RouteWrapper
        path={UserPaths.leaderBoard}
        Component={authGuard(LeaderBoard)}
        Layout={UserListLayout}
      />
      <RouteWrapper
        path={UserPaths.playerProfile}
        Component={authGuard(UserProfile)}
        Layout={ProfileLayout}
      />
      <RouteWrapper
        path={AuthPaths.login}
        Component={authGuard(Login)}
        Layout={AuthLayout}
      />
      <RouteWrapper
        path={AuthPaths.forgotPassword}
        Component={authGuard(ForgotPassword)}
        Layout={AuthLayout}
      />
      <RouteWrapper
        path={AuthPaths.registration}
        Component={authGuard(Registration)}
        Layout={AuthLayout}
      />
    </Switch>
  );
}
export default MainRoute;
