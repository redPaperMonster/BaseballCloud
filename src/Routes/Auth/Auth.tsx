import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Registration, ForgotPassword, Login } from ".";
import { AuthLayout } from "../../Layouts";
import RouteWrapper from "../Components/RouteWrapper";
import { AuthPaths } from "../routes";

interface AuthRouteProps {}

const AuthRoute: React.FC<AuthRouteProps> = ({}) => {
  return (
    <Router>
      <Switch>
        <RouteWrapper
          path={AuthPaths.login}
          Component={Login}
          Layout={AuthLayout}
        />
        {/* <RouteWrapper path="/" Component={Login} Layout={AuthLayout} /> */}
        <RouteWrapper
          path={AuthPaths.registration}
          Component={Registration}
          Layout={AuthLayout}
        />
        <RouteWrapper
          path={AuthPaths.forgotPassword}
          Component={ForgotPassword}
          Layout={AuthLayout}
        />
      </Switch>
    </Router>
  );
};

export default AuthRoute;
