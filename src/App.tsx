import "./App.css";
import Past from "./features/day/Past";
import React from "react";
import Future from "./features/day/Future";
import Decode from "./features/base64/Decode";
import Encode from "./features/base64/Encode";
import { Navigate, useRoutes } from "react-router-dom";
import Day from "./features/day/Day";
import Base64 from "./features/base64/Base64";
import Home from "./features/home/Home";
import Main from "./features/main/Main";

export default function App() {
  return useRoutes([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "/day",
          element: <Day />,
          children: [
            { path: "", element: <Navigate to={"past"} /> },
            { path: "past", element: <Past /> },
            { path: "future", element: <Future /> },
          ],
        },
        {
          path: "/base64",
          element: <Base64 />,
          children: [
            { path: "", element: <Navigate to={"decode"} /> },
            { path: "decode", element: <Decode /> },
            { path: "encode", element: <Encode /> },
          ],
        },
      ],
    },
  ]);
}
