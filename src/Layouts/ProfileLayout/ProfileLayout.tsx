import React from "react";
import Sidebar from "../../Routes/User/Profile/Sidebar/Sidebar";
import { Footer, Header } from "../Components";
import {
  Content,
  Main,
  MainContent,
  SidebarWrapper,
} from "./ProfileLayoutStyle";

interface ProfileLayoutProps {
  isSidebarEdited?: boolean;
  params?: any;
}
const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, params }) => {
  return (
    <Main>
      <Header isAuthorized />
      <MainContent>
        <SidebarWrapper>
          <Sidebar params={params} />
        </SidebarWrapper>

        <Content>{children}</Content>
      </MainContent>
      <Footer />
    </Main>
  );
};

export default ProfileLayout;
