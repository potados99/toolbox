import styled from "styled-components";
import NavSegmentLink from "./NavSegmentLink";
import { useLocation } from "react-router-dom";
import { Destinations } from "../../../common/types";
import React, { useEffect, useState } from "react";
import { dropShadow, nearGrayBackground, noTouchEffect, smoothBorder } from "../../../common/styles";

type Props = {
  links: Destinations;
};

type IndicatorProps = {
  space: string;
  showAnimation: Boolean;
  numberOfSegments: number;
  selectedSegmentIndex: number;
};

export default function NavSegment({ links }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const location = useLocation();

  const findAndUpdateCurrentlySelectedIndex = () => {
    setSelectedIndex(links.findIndex((l) => location.pathname.endsWith(l.path)));
  };

  useEffect(
    () => {
      findAndUpdateCurrentlySelectedIndex();

      /**
       * 처음 페이지 로드 당시에는 인디케이터가 애니메이션 없이 목적지로 가면 좋겠습니다.
       * 최초 로드시 렌더링 이후에 setShowAnimation(true) 호출이 실행될 수 있도록,
       * setTimeout 속에 집어넣었습니다.
       */
      setTimeout(() => {
        setShowAnimation(true);
      }, 0);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  );

  return (
    <>
      <Nav>
        {links.map((l) => (
          <NavSegmentLink key={l.path} to={l.path}>
            {l.name}
          </NavSegmentLink>
        ))}
        <Indicator
          space={"3px"}
          showAnimation={showAnimation}
          numberOfSegments={links.length}
          selectedSegmentIndex={selectedIndex}
        />
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${smoothBorder}

  ${nearGrayBackground}

  ${dropShadow}
  ${noTouchEffect}
`;

const Indicator = styled.div<IndicatorProps>`
  position: absolute;
  left: ${({ space }) => space};
  height: ${({ space }) => `calc(100% - calc(${space} * 2))`};
  width: ${({ space, numberOfSegments }) => `calc(100% / ${numberOfSegments} - calc(${space} * 2))`};

  background-color: #ffffff;
  border-radius: 0.65rem; // smoothBorder에 의존적인 값입니다.
  transition: ${({ showAnimation }) => showAnimation && `transform 0.2s ease-in-out`};
  backface-visibility: hidden;

  transform: ${({ space, selectedSegmentIndex }) =>
    `translate3d(calc(${selectedSegmentIndex} * (100% + calc(${space} * 2))), 0, 0)`};

  ${dropShadow}
`;
