import React from "react";
import Faded from "./Faded";
import { Outlet } from "react-router-dom";
import NavSegment from "../navigation/NavSegment";
import { Destinations } from "../../common/types";

type Props = {
  links: Destinations;
  fadeDuration?: number;
};

export default function FeaturePage({ links, fadeDuration }: Props) {
  return (
    <>
      <NavSegment links={links} />

      <Faded duration={fadeDuration ?? 0}>
        <Outlet />
      </Faded>
    </>
  );
}
