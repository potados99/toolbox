import styled from "styled-components";
import React from "react";
import { BasicHTMLProps } from "../../common/types";
import { horizontalMargin, titleText, verticalMargin } from "../../common/styles";

export default function CardTitle({ children, ...rest }: BasicHTMLProps) {
  return <Title {...rest}>{children}</Title>;
}

const Title = styled.div`
  ${titleText}

  ${verticalMargin}
  ${horizontalMargin}
`;
