import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route element={<Main/>} path="/people/" />
        <Route element={<Detail/>} path="/people/:id" /> 
      </BrowserRouter>                           
    </div>
  );
}

<Route element={<Update/>} path="/people/edit/:id"/>

export default App;






