import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { userSelector } from "../Store";
import { AuthRoute, UserRoute } from "./";
import { AuthPaths, UserPaths } from "./routes";

function MainRoute() {
  const token = useSelector(userSelector.getToken());

  return (
    <div>
      <Route
        path="/"
        render={(props) => {
          return token ? (
            <Redirect to={UserPaths.profile} />
          ) : (
            <Redirect to={AuthPaths.login} />
          );
        }}
      />
      <Route path={AuthPaths.login} component={AuthRoute} />
      <Route path={UserPaths.profile} component={UserRoute} />
    </div>
  );
}
export default MainRoute;
