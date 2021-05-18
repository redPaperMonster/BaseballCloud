import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { userSelector } from "../Store";
import { AuthRoute, UserRoute } from "./";
import { AuthPaths, UserPaths } from "./routes";

function MainRoute() {
  const token = useSelector(userSelector.getToken());
  const auth = (Component?: any) => {
    if (!Component) {
      return <Redirect to={token ? UserPaths.profile : AuthPaths.login} />;
    }
    return <Component />;
  };

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

      <Route path={UserPaths.profile} component={UserRoute} />
      <Route path={AuthPaths.login} component={AuthRoute} />
    </div>
  );
}
export default MainRoute;
