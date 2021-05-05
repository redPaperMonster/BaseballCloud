import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { LogoIcon } from "../Assets/icons";
import { userSelector } from "../Store";
import { AuthRoute, UserRoute } from "./";
import {
  Footer,
  FooterLink,
  HeaderContainer,
  LegalSpan,
  LegalWrapper,
  Main,
  MainContent,
  MediaWrapper,
} from "./MainRouteStyle";

//TODO: routing (2 routes??) PROPS NAMES
//TODO: redux toolkit
//TODO: get all Apollo
//TODO: isToken? userRoute: authRoute (authPath = '/login', userPath = '/')
//TODO: clients for every Route
//TODO: redux persist
//TODO: final form
//TODO: layout
//TODO: auth functional
//TODO: normalizr

function MainRoute() {
  const token = useSelector(userSelector.getToken());

  return (
    <Main>
      <HeaderContainer>
        <a href="/">
          <LogoIcon />
        </a>
      </HeaderContainer>
      <MainContent>
        <Route
          path="/"
          render={() => {
            return token ? (
              <Redirect to="/profile" />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route path="/login" render={() => <AuthRoute />} />
        <Route path="/profile" render={() => <UserRoute />} />
      </MainContent>
      <Footer>
        <LegalWrapper>
          <LegalSpan>© 2018 BaseballCloud</LegalSpan>
          <FooterLink href="/legal/terms">Terms of Service</FooterLink>
          <FooterLink href="/legal/privacy">Privacy Policy</FooterLink>
        </LegalWrapper>
        <MediaWrapper>
          <FooterLink href="https://baseballcloud.blog" target="_blank">
            Blog
          </FooterLink>
          <FooterLink href="http://twitter.com/baseballcloudus" target="_blank">
            Twitter
          </FooterLink>
          <FooterLink
            href="http://www.instagram.com/baseballcloudus/"
            target="_blank"
          >
            Instagram
          </FooterLink>
          <FooterLink
            href="http://www.facebook.com/BaseballCloudUS/"
            target="_blank"
          >
            Facebook
          </FooterLink>
        </MediaWrapper>
      </Footer>
    </Main>
  );
}
export default MainRoute;
