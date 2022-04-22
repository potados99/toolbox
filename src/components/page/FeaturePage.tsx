import NavSegment from "../navigation/NavSegment";
import Faded from "./Faded";
import { Outlet } from "react-router-dom";
import React from "react";
import { Destinations } from "../../common/types";

type Props = {
  links: Destinations;
};

export default function FeaturePage({ links }: Props) {
  return (
    <>
      <NavSegment links={links} />

      <Faded duration={300}>
        <Outlet />
      </Faded>
    </>
  );
}
