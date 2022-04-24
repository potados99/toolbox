import React from "react";
import styled from "styled-components";
import { BasicHTMLProps } from "../../common/types";
import { bottomMargin, errorText, horizontalMargin } from "../../common/styles";

export default function CardErrorText({ children, ...rest }: BasicHTMLProps) {
  return <Error {...rest}>{children}</Error>;
}

const Error = styled.div`
  ${errorText}

  ${horizontalMargin}
  ${bottomMargin}
`;
