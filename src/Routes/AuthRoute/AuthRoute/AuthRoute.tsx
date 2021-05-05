import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthWrapper, FormContainer } from "./AuthRouteStyle";
import { Registration, ForgotPassword, Login } from "../";
interface AuthRouteProps {}

const AuthRoute: React.FC<AuthRouteProps> = ({}) => {
  return (
    <AuthWrapper>
      <FormContainer>
        <Router>
          <Route exact path="/login" render={() => <Login />} />
          <Route path="/registration" render={() => <Registration />} />
          <Route path="/forgotpassword" render={() => <ForgotPassword />} />
        </Router>
      </FormContainer>
    </AuthWrapper>
  );
};

export default AuthRoute;
