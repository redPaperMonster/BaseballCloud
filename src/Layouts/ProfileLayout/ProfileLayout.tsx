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
  match?: any;
}
const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, match }) => {
  console.log(`profile layout`);
  return (
    <Main>
      <Header isAuthorized />
      <MainContent>
        <SidebarWrapper>
          <Sidebar params={match.params} />
        </SidebarWrapper>

        <Content>{children}</Content>
      </MainContent>
      <Footer />
    </Main>
  );
};

export default ProfileLayout;
