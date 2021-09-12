import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <Container>
      <a href="/#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="/#">Model S</a>
        </p>
        <p>
          <a href="/#">Model Y</a>
        </p>
        <p>
          <a href="/#">Model 3</a>
        </p>
        <p>
          <a href="/#">Model X</a>
        </p>
        <p>
          <a href="/#">Accessories</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="/#">Shop</a>
        <a href="/#">Tesla Account</a>
        <CustomIcon onClick={() => setIsOpened(false)} />
      </RightMenu>
      <BurgerNav showStatus={isOpened}>
        <CustomWrapper>
          <CustomClose onClick={() => setIsOpened(true)} />
        </CustomWrapper>
        <li>
          <a href="/#">Model S</a>
        </li>
        <li>
          <a href="/#">Model Y</a>
        </li>
        <li>
          <a href="/#">Model 3</a>
        </li>
        <li>
          <a href="/#">Model X</a>
        </li>
        <li>
          <a href="/#">used iventory</a>
        </li>
        <li>
          <a href="/#">trade in</a>
        </li>
        <li>
          <a href="/#">cyber truck</a>
        </li>
        <li>
          <a href="/#">accessories</a>
        </li>
        <li>
          <a href="/#">roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  img {
    height: 12px;
    width: 100px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 10px;
    flex-wrap: nowrap;
  }
  a {
    color: black;
    font-size: 14.3px;
    font-weight: 550;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 650;
    text-transform: uppercase;
    color: black;
    margin-right: 13px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    margin-left: 30px;
  }
`;

const CustomIcon = styled(MenuIcon)`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  background: white;
  width: 300px;
  z-index: 10;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: 0.4s ease-out;
  transform: ${(props) =>
    props.showStatus ? "translateX(100%)" : "translateX(0)"};

  li {
    padding: 15px 0px;
    border-bottom: 1px solid silver;
  }

  a {
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CustomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
