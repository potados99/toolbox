import styled from "styled-components";
import NavBarLink from "./NavBarLink";
import { useState } from "react";
import NavBarToggleButton from "./NavBarToggleButton";
import { Destinations } from "../../../common/types";

type Props = {
  title: string;
  links: Destinations;
};

export default function NavBar({ title, links }: Props) {
  const [opened, setOpened] = useState(false);

  const toggle = () => setOpened(!opened);
  const close = () => setOpened(false);

  return (
    <>
      <Nav>
        <Header>
          <li>
            <b>{title}</b>
          </li>
          <li>
            <NavBarToggleButton crossed={opened} onClick={toggle} />
          </li>
        </Header>
        <Links opened={opened}>
          {links.map((d) => (
            <NavBarLink to={d.path} onClick={close}>
              {d.name}
            </NavBarLink>
          ))}
        </Links>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  background: #ffffffaa;
  backdrop-filter: blur(4px);
`;

const Header = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 4px 0 16px;
  padding: 0;

  list-style: none;
`;

const Links = styled.div<{ opened: Boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 0;
  margin: 0;

  transition: opacity 0.4s, height 0.4s ease-in-out, visibility 0.4s;
  opacity: ${({ opened }) => (opened ? "1.0" : "0")};
  height: ${({ opened }) => (opened ? "100vh" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
`;
