import React from "react";
import { Outlet } from "react-router-dom";
import NavSegment from "../../components/NavSegment";
import NavSegmentLink from "../../components/NavSegmentLink";

export default function Day() {
  return (
    <>
      <NavSegment>
        <NavSegmentLink to="/day/past">D-day 계산</NavSegmentLink>
        <NavSegmentLink to="/day/future">남은 날짜 계산</NavSegmentLink>
      </NavSegment>
      <Outlet />
    </>
  );
}
