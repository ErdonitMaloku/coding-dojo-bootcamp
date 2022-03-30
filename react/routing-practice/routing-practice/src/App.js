import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import React from 'react';

import Params from './Components/parameters';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/:city" element={<Params />} />
      <Route exact path="/:city/:color/:bcolor" element={<Params />} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
