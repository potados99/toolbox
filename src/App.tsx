import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Past from "./features/Past";
import Left from "./features/Left";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">며칠이나 됐지?</Link>
            </li>
            <li>
              <Link to="/future">며칠 남았지?</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Past />} />
          <Route path="/future" element={<Left />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
