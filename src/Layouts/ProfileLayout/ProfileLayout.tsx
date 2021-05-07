import React from "react";
import { Footer, Header } from "../Components";
import { Content, Main, MainContent, Sidebar } from "./ProfileLayoutStyle";
interface ProfileLayoutProps {
  SidebarChildren: React.FC<any>;
}
const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  children,
  SidebarChildren,
}) => {
  return (
    <Main>
      <Header isAuthorized />
      <MainContent>
        <Sidebar>{SidebarChildren && <SidebarChildren />}</Sidebar>
        <Content>{children}</Content>
      </MainContent>
      <Footer />
    </Main>
  );
};

export default ProfileLayout;
