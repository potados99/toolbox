import "./App.css";
import Past from "./features/Past";
import React from "react";
import Future from "./features/Future";
import NavigationBar from "./components/NavigationBar";
import NavigationLink from "./components/NavigationLink";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavigationBar>
        <NavigationLink to="/">D-day 계산</NavigationLink>
        <NavigationLink to="/future">남은 날짜 계산</NavigationLink>
      </NavigationBar>

      <Routes>
        <Route path="/" element={<Past />} />
        <Route path="/future" element={<Future />} />
      </Routes>
    </BrowserRouter>
  );
}
