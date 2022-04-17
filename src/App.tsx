import "./App.css";
import Past from "./features/dday/Past";
import React from "react";
import Future from "./features/dday/Future";
import NavigationBar from "./components/NavigationBar";
import NavigationLink from "./components/NavigationLink";
import { useRoutes } from "react-router-dom";

export default function App() {
  const navBar = (
    <NavigationBar>
      <NavigationLink to="/">D-day 계산</NavigationLink>
      <NavigationLink to="/future">남은 날짜 계산</NavigationLink>
    </NavigationBar>
  );

  const contents = useRoutes([
    { path: "/", element: <Past /> },
    { path: "/future", element: <Future /> },
  ]);

  return (
    <>
      {navBar}
      {contents}
    </>
  );
}
