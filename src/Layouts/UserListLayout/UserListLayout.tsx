import React from "react";

import { Footer, Header } from "../Components";
import { Content, Main, MainContent } from "./UserListLayoutStyle";
interface UserListLayoutProps {}
const UserListLayout: React.FC<UserListLayoutProps> = ({ children }) => {
  return (
    <Main>
      <Header isAuthorized />
      <MainContent>
        <Content>{children}</Content>
      </MainContent>
      <Footer />
    </Main>
  );
};

export default UserListLayout;
