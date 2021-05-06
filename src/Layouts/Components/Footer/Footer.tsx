import React from "react";

import {
  FooterContainer,
  FooterLink,
  LegalSpan,
  LegalWrapper,
  MediaWrapper,
} from "./FooterStyle";

const Footer: React.FC = ({}) => {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};
export default Footer;
