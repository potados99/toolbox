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

  // 화면 가운데에 일렬로 배치하기 위해 리스트의 시작과 끝에 padding이 필요합니다.
  padding-top: 92px;
  padding-bottom: 92px;

  :nth-child(2n) {
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
  }

  * {
    // IE, Edge에서 스크롤바를 제거합니다.
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    // 크롬에서 스크롤바를 제거합니다.
    display: none;
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
