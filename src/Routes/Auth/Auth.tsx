import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWrapper, { LayoutType } from "../Components/RouteWrapper";
import { AuthPaths } from "../routes";

interface AuthRouteProps {}

const AuthRoute: React.FC<AuthRouteProps> = ({}) => {
  return (
    <Router>
      <Switch>
        <RouteWrapper path={AuthPaths.login} layoutType={LayoutType.login} />
        <RouteWrapper
          path={AuthPaths.registration}
          layoutType={LayoutType.singUp}
        />
        <RouteWrapper
          path={AuthPaths.forgotPassword}
          layoutType={LayoutType.forgotPassword}
        />
      </Switch>
    </Router>
  );
};

export default AuthRoute;
