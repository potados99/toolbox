import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { primaryTextColor } from "../../../common/styles";

export type Params = {
  options: number[];
  value: number;
  onChange: (value: number) => void;
};

export default function Roller(params: Params) {
  const { options, value, onChange } = params;

  const selected = useRef(null);

  const renderItem = (valueHere: number) => {
    return (
      <Item
        key={valueHere}
        className={valueHere === value ? "selected" : ""}
        onClick={() => {
          onChange(valueHere);
        }}
        ref={valueHere === value ? selected : null}
      >
        {valueHere}
      </Item>
    );
  };

  useEffect(() => {
    if (selected.current == null) {
      return;
    }

    // @ts-ignore
    selected.current.scrollIntoView({
      block: "center",
    });
  }, []);

  return (
    <Container>
      <ItemWrapper>{options.map(renderItem)}</ItemWrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  box-sizing: border-box;

  overflow-y: auto;
  overflow-x: hidden;

  height: 250px;
  padding-top: 80px;
  padding-bottom: 80px;

  &:nth-child(2n) {
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
  }
`;

const ItemWrapper = styled.ul`
  padding: 0;
  list-style-type: none;
  text-align: center;
`;

const Item = styled.li`
  font-size: 28px;
  font-weight: bold;

  ${primaryTextColor}

  &.selected {
    color: cornflowerblue;
    background: #edeffe;
  }
`;
