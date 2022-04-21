import styled from "styled-components";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<any>;

export default function NavSegment({ children }: Props) {
  return <Nav>{children}</Nav>;
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
