import React from "react";
import styled from "styled-components";
import { dropShadow, smoothBorder } from "../../common/styles";
import { BasicHTMLProps } from "../../common/types";

export default function Card({ children, ...rest }: BasicHTMLProps) {
  return <StyledSection {...rest}>{children}</StyledSection>;
}

const StyledSection = styled.section`
  margin-top: 12px;
  background: white;

  padding-top: 4px;
  padding-bottom: 4px;

  ${dropShadow}
  ${smoothBorder}
`;
