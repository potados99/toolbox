import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Past from './features/Past/Past';
import Future from './features/Future/Future';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>과거</Link>
            </li>
            <li>
              <Link to='/future'>미래</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Past />} />
          <Route path='/future' element={<Future />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
