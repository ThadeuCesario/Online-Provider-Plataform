import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fff;
  height: 80px;
  position: fixed;
  top: 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 32px;
    width: 100%;

    &-group {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    &-logo {
      height: 50px;
      margin: 0 15px 0 0;
    }
  }


  ${breakpoint("mobile")`
    .container {
      .header-button {
        display: none;
      }
      .
    }
  `}

  ${breakpoint("tablet")`
    .container {
      .header-menu {
        display: none;
      }
      .header-button {
        display: block;
      }
    }
  `}

  ${breakpoint("desktop")`
    .container {
      .header-menu {
        display: none;
      }
      .header-button {
        display: block;
      }
    }
  `}

`;

export default Header;
