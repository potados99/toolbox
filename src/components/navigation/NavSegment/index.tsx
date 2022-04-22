import styled from "styled-components";
import React from "react";
import { Destinations } from "../../../common/types";
import NavSegmentLink from "./NavSegmentLink";

type Props = {
  links: Destinations;
};

export default function NavSegment({ links }: Props) {
  return (
    <Nav>
      {links.map((l) => (
        <NavSegmentLink to={l.path}>{l.name}</NavSegmentLink>
      ))}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgb(230, 230, 234);
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0 2px 10px 0;
`;
