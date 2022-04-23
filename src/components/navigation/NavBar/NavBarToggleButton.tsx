import styled from "styled-components";
import { noTouchEffect } from "../../../common/styles";
import React, { MouseEventHandler } from "react";

type Props = {
  crossed: Boolean;
  onClick: MouseEventHandler;
};

export default function NavBarToggleButton({ crossed, onClick }: Props) {
  return (
    <NonStyledButton onClick={onClick}>
      <div>
        <Bread crossed={crossed} angle={45} />
        <Bread crossed={crossed} angle={-45} />
      </div>
    </NonStyledButton>
  );
}

const NonStyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: transparent;
  outline: none;
  border: none;
  height: 48px;
  width: 48px;

  ${noTouchEffect}
`;

const Bread = styled.span<{ crossed: Boolean; angle: number }>`
  display: block;
  width: 22px;
  height: 2px;
  background: #222;
  border-radius: 4px;
  margin-top: 6px;
  margin-bottom: 6px;

  transition: transform 0.4s, margin 0.4s;

  ${({ crossed, angle }) =>
    crossed &&
    `
    margin: -2px;
    transform: rotateZ(${angle}deg);
  `}
`;
