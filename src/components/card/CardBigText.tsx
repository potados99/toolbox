import styled from "styled-components";
import React from "react";
import { BasicHTMLProps } from "../../common/types";
import { horizontalMargin, primaryTextColor, verticalMargin } from "../../common/styles";

export default function CardBigText({ children, ...rest }: BasicHTMLProps) {
  return <Text {...rest}>{children}</Text>;
}

const Text = styled.h1`
  ${primaryTextColor}

  ${verticalMargin}
  ${horizontalMargin}
`;
