import styled from "styled-components";
import React from "react";
import { BasicHTMLProps } from "../../common/types";
import { bottomMargin, horizontalMargin, titleText } from "../../common/styles";

export default function CardTitle({ children, ...rest }: BasicHTMLProps) {
  return <Title {...rest}>{children}</Title>;
}

const Title = styled.div`
  ${titleText}

  ${horizontalMargin}
  ${bottomMargin}
`;
