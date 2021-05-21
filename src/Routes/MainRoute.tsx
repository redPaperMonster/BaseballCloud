import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, UserRoute } from "./";
import authGuard from "./Components/AuthGuard";
import { AuthPaths, UserPaths } from "./routes";

function MainRoute() {
  return (
    <div>
      <Route path="/" component={authGuard()} />
      <Route path={UserPaths.profile} component={authGuard(UserRoute)} />
      <Route path={AuthPaths.login} component={authGuard(AuthRoute)} />
    </div>
  );
}
export default MainRoute;
