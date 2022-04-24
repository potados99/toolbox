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
  const [showAnimation, setShowAnimation] = useState(false);
  const selectedIndex = useSelectedIndex(links);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 0);
  }, []);

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

function useSelectedIndex(links: Destinations) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setSelectedIndex(links.findIndex((l) => location.pathname.endsWith(l.path)));
  }, [links, location.pathname]);

  return selectedIndex;
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
