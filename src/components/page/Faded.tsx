import { useLocation } from "react-router-dom";
import React, { PropsWithChildren } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

type Props = PropsWithChildren<{
  duration: number;
}>;

export default function Faded({ duration, children }: Props) {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition classNames={"fade"} timeout={{ enter: duration, exit: 0 }} key={location.pathname}>
        <Container duration={duration}>{children}</Container>
      </CSSTransition>
    </TransitionGroup>
  );
}

const Container = styled.div<Pick<Props, "duration">>`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: ${({ duration }) => `opacity ${duration}ms ease-in`};
  }

  &.fade-exit.fade-exit-active {
    visibility: hidden; // 퇴장시 즉시 숨겨줍니다.
    position: absolute; // 퇴장시 깜빡임을 막아줍니다.
    top: 0;
    left: 0;
    right: 0;
  }
`;
