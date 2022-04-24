import React from "react";
import styled from "styled-components";
import { BasicHTMLProps } from "../../common/types";
import { bottomMargin, horizontalMargin, primaryTextColor } from "../../common/styles";

export default function CardBigText({ children, ...rest }: BasicHTMLProps) {
  return <Text {...rest}>{children}</Text>;
}

const Text = styled.h1`
  // h1의 기본 margin 초기화 조져줍니다~
  margin: 0;

  ${primaryTextColor}

  ${horizontalMargin}
  ${bottomMargin}
`;
