import React from "react";
import "./styles";

const MenuMobile = _props => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <ul id="menu">
          <a href="#">
            <li>Encontrar prestador</li>
          </a>
          <a href="#">
            <li>Sobre nós</li>
          </a>
          <a href="#">
            <li>Contatos</li>
          </a>
          <a href="#">
            <li>Melhores prestadores</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default MenuMobile;
