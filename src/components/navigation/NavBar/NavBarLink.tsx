import styled from "styled-components";
import { NavLink, NavLinkProps } from "react-router-dom";
import { boldText, noListStyle, primaryText } from "../../../common/styles";

type Props = NavLinkProps;

export default function NavBarLink({ children, ...rest }: Props) {
  return (
    <StyledNavLink {...rest} className={({ isActive }) => (isActive ? "active" : "")}>
      {children}
    </StyledNavLink>
  );
}

const StyledNavLink = styled(NavLink)`
  width: 100%; // 가로폭 전체를 터치 영역에 넣기 위함입니다.
  padding: 16px;
  text-align: center;

  ${primaryText}
  ${noListStyle}
  
  &.active {
    ${boldText}
  }
`;
