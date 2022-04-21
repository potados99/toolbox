import styled from "styled-components";
import { useState } from "react";
import NavbarToggleButton from "./NavbarToggleButton";

const destinations = [
  { name: "날짜계산", path: "/day" },
  { name: "base64 변환", path: "/base64" },
];

export default function GlobalNavbar() {
  const [opened, setOpened] = useState(false);

  const toggle = () => setOpened(!opened);

  return (
    <>
      <Nav>
        <HeaderItems>
          <li>감자도스 툴박스</li>
          <li>
            <NavbarToggleButton crossed={opened} onClick={toggle} />
          </li>
        </HeaderItems>
        <NavigationItems hidden={!opened}>
          {destinations.map((d) => (
            <li>
              <a href={d.path}>{d.name}</a>
            </li>
          ))}
        </NavigationItems>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffffaa;
  backdrop-filter: blur(2px);
  z-index: 1;
`;

const HeaderItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
`;

const NavigationItems = styled.ul`
  list-style: none;
`;
