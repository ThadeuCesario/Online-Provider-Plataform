import React from "react";
import HeaderStyled from "./styles";
import SimpleButton from "../SimpleButton";
import MenuMobile from "../MenuMobile";

const Header = _props => {
  const searchServiceProvider = () => {
    alert("Sistema de busca");
  };

  const ButtonStyles = {
    backgroundColor: "#55DBFA",
    color: "#fff",
    fontWeight: "bold"
  };

  return (
    <HeaderStyled>
      <div className="container">
        <div className="container-group">
          <img
            src={"https://image.flaticon.com/icons/png/512/123/123377.png"}
            alt="logo"
            className="container-logo"
          />
          <span>Prestadores Online</span>
        </div>
        <div className="header-button">
          <SimpleButton
            title={"Encontrar prestador"}
            action={searchServiceProvider}
            styles={ButtonStyles}
          />
        </div>
        <div className="header-menu">
          <MenuMobile />
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
