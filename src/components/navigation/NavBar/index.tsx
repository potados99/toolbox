import styled from "styled-components";
import NavBarLink from "./NavBarLink";
import { useState } from "react";
import { Destinations } from "../../../common/types";
import NavBarToggleButton from "./NavBarToggleButton";
import { nearWhiteAlphaBackground, titleText, whiteAlphaBackground } from "../../../common/styles";

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
      <Nav opened={opened}>
        <Header>
          <li>
            <Title>{title}</Title>
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

const Nav = styled.nav<{ opened: Boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;

  backdrop-filter: blur(5px);

  transition: all 0.4s;

  ${({ opened }) => (opened ? whiteAlphaBackground : nearWhiteAlphaBackground)}
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

const Title = styled.text`
  ${titleText}
`;

const Links = styled.div<{ opened: Boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 0;
  margin: 0;

  transition: opacity 0.4s ease-in-out, height 0.4s ease-in-out, visibility 0.4s;
  opacity: ${({ opened }) => (opened ? "1.0" : "0")};
  height: ${({ opened }) => (opened ? "100vh" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
`;
