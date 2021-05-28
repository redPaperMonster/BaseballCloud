import React from "react";

import { Footer, Header } from "../Components";
import { Main, MainContent } from "./UserListLayoutStyle";
interface UserListLayoutProps {}
const UserListLayout: React.FC<UserListLayoutProps> = ({ children }) => {
  return (
    <Main>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Main>
  );
};

export default UserListLayout;
