import Home from "./features/Home";
import Past from "./features/day/Past";
import React from "react";
import Future from "./features/day/Future";
import { Sitemap } from "./common/types";
import buildRoutes from "./components/buildRoutes";
import { useRoutes } from "react-router-dom";
import Base64 from "./features/encoding/Base64";
import Percent from "./features/encoding/Percent";

/**
 * 이 앱의 전체 구조도입니다.
 */
const sitemap: Sitemap = [
  {
    name: "감자도스 툴박스",
    path: "/",
    children: [
      {
        name: "홈",
        path: "",
        element: <Home />,
      },
      {
        name: "날짜 계산",
        path: "day",
        children: [
          { name: "D-day 계산", path: "past", element: <Past /> },
          { name: "남은 날짜 계산", path: "future", element: <Future /> },
        ],
      },
      {
        name: "인코딩 변환",
        path: "encoding",
        children: [
          { name: "Base64", path: "base64", element: <Base64 /> },
          { name: "URL 인코딩", path: "percent", element: <Percent /> },
        ],
      },
    ],
  },
];

export default function App() {
  return useRoutes(buildRoutes(sitemap, { segmentTransitionDuration: 0 /* 세그먼트 전환할 때에 페이드 안 할거임 */ }));
}
