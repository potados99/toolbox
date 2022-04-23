import Home from "./features/Home";
import Past from "./features/day/Past";
import React from "react";
import Future from "./features/day/Future";
import Decode from "./features/base64/Decode";
import Encode from "./features/base64/Encode";
import { Sitemap } from "./common/types";
import buildRoutes from "./components/buildRoutes";
import { useRoutes } from "react-router-dom";

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
        name: "Base64 변환",
        path: "base64",
        children: [
          { name: "Decode", path: "decode", element: <Decode /> },
          { name: "Encode", path: "encode", element: <Encode /> },
        ],
      },
    ],
  },
];

export default function App() {
  return useRoutes(buildRoutes(sitemap));
}
