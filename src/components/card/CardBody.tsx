import styled from "styled-components";
import React from "react";
import { BasicHTMLProps } from "../../common/types";
import { bottomMargin, horizontalMargin, primaryText } from "../../common/styles";

export default function CardBody({ children, ...rest }: BasicHTMLProps) {
  return <Title {...rest}>{children}</Title>;
}

const Title = styled.div`
  ${primaryText}

  ${horizontalMargin}
  ${bottomMargin}
`;
