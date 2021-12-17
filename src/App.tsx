import "./App.css";
import Past from "./features/Past";
import React from "react";
import Future from "./features/Future";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navigation-bar">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navigation-bar-item navigation-bar-item-selected" : "navigation-bar-item"
          }
          to="/"
        >
          D-day 계산
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navigation-bar-item navigation-bar-item-selected" : "navigation-bar-item"
          }
          to="/future"
        >
          남은 날짜 계산
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Past />} />
        <Route path="/future" element={<Future />} />
      </Routes>
    </BrowserRouter>
  );
}
