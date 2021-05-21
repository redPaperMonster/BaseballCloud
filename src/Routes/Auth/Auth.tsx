import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ForgotPassword, Login, Registration } from ".";
import { AuthLayout } from "../../Layouts";
import CustomRoute from "../Components/RouteWrapper";
import { AuthPaths } from "../routes";

interface AuthRouteProps {}

const AuthRoute: React.FC<AuthRouteProps> = ({}) => {
  return (
    <Router>
      <Switch>
        <CustomRoute
          path={AuthPaths.login}
          Layout={AuthLayout}
          Component={Login}
        />
        <CustomRoute
          path={AuthPaths.registration}
          Layout={AuthLayout}
          Component={Registration}
        />
        <CustomRoute
          path={AuthPaths.forgotPassword}
          Layout={AuthLayout}
          Component={ForgotPassword}
        />
      </Switch>
    </Router>
  );
};

export default AuthRoute;
