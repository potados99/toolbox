import React from "react";
import { Outlet } from "react-router-dom";
import NavSegment from "../../components/NavSegment";
import NavSegmentLink from "../../components/NavSegmentLink";

export default function Base64() {
  return (
    <>
      <NavSegment>
        <NavSegmentLink to="/base64/decode">디코드</NavSegmentLink>
        <NavSegmentLink to="/base64/encode">인코드</NavSegmentLink>
      </NavSegment>
      <Outlet />
    </>
  );
}
