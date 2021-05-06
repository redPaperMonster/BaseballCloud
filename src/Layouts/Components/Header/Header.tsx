import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../Assets/icons";
import { HeaderContainer } from "./HeaderStyle";
const Header: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoIcon />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
