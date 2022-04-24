import Card from "../components/card/Card";
import styled from "styled-components";
import CardBody from "../components/card/CardBody";
import CardTitle from "../components/card/CardTitle";
import { NavLink } from "react-router-dom";
import { noListStyle, noTouchEffect } from "../common/styles";

export default function Home() {
  return (
    <>
      <NonStyledNavLink to={"day"}>
        <FeaturePanel backgroundColor={"cornflowerblue"}>
          <FeaturePanelTitle color={"white"}>날짜 계산</FeaturePanelTitle>
          <FeaturePanelBody color={"white"}>D-day, 남은 날짜 계산</FeaturePanelBody>
        </FeaturePanel>
      </NonStyledNavLink>

      <NonStyledNavLink to={"encoding"}>
        <FeaturePanel backgroundColor={"orange"}>
          <FeaturePanelTitle color={"white"}>인코딩 변환</FeaturePanelTitle>
          <FeaturePanelBody color={"white"}>Base64, URL encode</FeaturePanelBody>
        </FeaturePanel>
      </NonStyledNavLink>
    </>
  );
}

const NonStyledNavLink = styled(NavLink)`
  ${noListStyle}
  ${noTouchEffect}
`;

const FeaturePanel = styled(Card)<{ backgroundColor: string }>`
  background: ${({ backgroundColor }) => backgroundColor};
`;

const FeaturePanelTitle = styled(CardTitle)<{ color: string }>`
  color: ${({ color }) => color};
`;

const FeaturePanelBody = styled(CardBody)<{ color: string }>`
  color: ${({ color }) => color};
`;
