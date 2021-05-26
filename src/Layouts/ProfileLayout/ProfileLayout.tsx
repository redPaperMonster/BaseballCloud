import React from "react";
import { match } from "react-router-dom";
import Sidebar from "../../Routes/User/Profile/Sidebar/Sidebar";
import { MatchProps } from "../../Utils";
import { Footer, Header } from "../Components";
import {
  Content,
  Main,
  MainContent,
  SidebarWrapper,
} from "./ProfileLayoutStyle";

interface ProfileLayoutProps {
  match?: match<MatchProps>;
}
const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, match }) => {
  return (
    <Main>
      <Header isAuthorized />
      <MainContent>
        <SidebarWrapper>
          <Sidebar params={match?.params} />
        </SidebarWrapper>

        <Content>{children}</Content>
      </MainContent>
      <Footer />
    </Main>
  );
};

export default ProfileLayout;
