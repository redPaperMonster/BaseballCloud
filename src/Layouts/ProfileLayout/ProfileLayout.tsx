import React from "react";
import { Footer, Header } from "../Components";
import {
  Content,
  Main,
  MainContent,
  SidebarWrapper,
} from "./ProfileLayoutStyle";
interface ProfileLayoutProps {
  Sidebar: React.FC<any>;
}
const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, Sidebar }) => {
  return (
    <Main>
      <Header isAuthorized />
      <MainContent>
        {Sidebar && (
          <SidebarWrapper>
            <Sidebar />
          </SidebarWrapper>
        )}

        <Content>{children}</Content>
      </MainContent>
      <Footer />
    </Main>
  );
};

export default ProfileLayout;
