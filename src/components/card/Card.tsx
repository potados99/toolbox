import React from "react";
import styled from "styled-components";
import { BasicHTMLProps } from "../../common/types";
import { dropShadow, smoothBorder, topPadding } from "../../common/styles";

export default function Card({ children, ...rest }: BasicHTMLProps) {
  return <StyledSection {...rest}>{children}</StyledSection>;
}

/**
 * 카드뷰 스타일링 기본 원칙:
 * 1. flex 사용, 내부 아이템들은 가로로는 stretch, 세로로는 start,
 * 2. 가로 패딩 제공 안 함. 위 패딩 제공함.
 * 3. 카드뷰 내 컴포넌트는 가로 및 아래 방향 margin을 지정해야 함.
 */
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch; // 가로로는 쫘악 늘리기,
  justify-content: start; // 세로로는 위에서부터 차곡차곡.

  margin-top: 12px;
  background: white;

  // 카드 전체 영역을 쓰는 컴포넌트(DateRoller 등)가 있을 수 있기 때문에 가로 패딩은 지정하지 않습니다.
  // 카드 내부의 컴포넌트들은 아래 방향 margin만 지정할 것이기 때문에 카드는 위 방향 패딩만 지정해줍니다.
  ${topPadding}

  ${dropShadow}
  ${smoothBorder}
`;
