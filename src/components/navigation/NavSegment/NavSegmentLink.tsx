import React from "react";
import styled from "styled-components";
import { NavLink, NavLinkProps } from "react-router-dom";
import { boldText, noListStyle, primaryTextColor, tertiaryTextSize } from "../../../common/styles";

type Props = NavLinkProps;

export default function NavSegmentLink({ children, ...rest }: Props) {
  return (
    <StyledNavLink {...rest} className={({ isActive }) => (isActive ? "active" : "")}>
      {children}
    </StyledNavLink>
  );
}

const StyledNavLink = styled(NavLink)`
  z-index: 1;
  flex: 1;
  padding: 10px;
  text-align: center;

  ${tertiaryTextSize}
  ${primaryTextColor}
  ${noListStyle}
  &.active {
    ${boldText}
  }
`;
