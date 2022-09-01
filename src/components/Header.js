import styled from "styled-components";
import { Link } from "react-scroll";

function Header() {
  return (
    <Nav>
      <Contain>
        <Link to="1" smooth={true}>
          <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z" />
          </Logo>
        </Link>
        <Items>
          <Item>
            <Link to="1" smooth={true}>
              Profile
            </Link>
          </Item>
          <Item>
            <Link to="2" smooth={true}>
              Stack
            </Link>
          </Item>
          <Item>
            <Link to="3" smooth={true}>
              Project
            </Link>
          </Item>
        </Items>
      </Contain>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  padding: 10px 0;
  position: fixed;
  width: 100vw;
  z-index: 99;
`;

const Contain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const Logo = styled.svg`
  height: 40px;
  fill: green;
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  font-size: 23px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    font-size: 28px;
  }
`;
