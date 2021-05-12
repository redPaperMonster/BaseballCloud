import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { userSelector } from "../Store";
import { AuthRoute, UserRoute } from "./";
import { AuthPaths, UserPaths } from "./routes";

function MainRoute() {
  const token = useSelector(userSelector.getToken());
  console.log(`here`);

  const auth = (Component?: any) => {
    console.log(`token`, token);
    if (!Component) {
      return <Redirect to={token ? UserPaths.profile : AuthPaths.login} />;
    }
    return <Component />;
  };
  // if (token) {
  //   return <Route path={UserPaths.profile} component={UserRoute} />;
  // }
  return (
    <div>
      {/* <Redirect to={token ? UserPaths.profile : AuthPaths.login} /> */}
      <Route
        path="/"
        render={(props) => {
          //debugger;
          return token ? (
            <Redirect to={UserPaths.profile} />
          ) : (
            <Redirect to={AuthPaths.login} />
          );
        }}
      />
      {/* <Route exact path="/" render={() => auth(AuthRoute)} /> */}

      <Route
        path={UserPaths.profile}
        component={UserRoute}
        //render={() => auth(UserRoute)}
      />
      <Route
        path={AuthPaths.login}
        component={AuthRoute}
        //render={() => auth(AuthRoute)}
      />
    </div>
  );
}
export default MainRoute;
