import React from "react";

import { Footer, Header } from "../Components";
import {
  AuthWrapper,
  FormContainer,
  Main,
  MainContent,
} from "./AuthLayoutStyle";
const AuthLayout: React.FC = ({ children }) => {
  return (
    <Main>
      <Header />
      <MainContent>
        <AuthWrapper>
          <FormContainer>{children}</FormContainer>
        </AuthWrapper>
      </MainContent>
      <Footer />
    </Main>
  );
};

export default AuthLayout;
