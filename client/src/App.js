import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./register"
import Login from "./login"
function App() {
  return (
   <BrowserRouter>
       <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
       </Routes>
   </BrowserRouter>
  );
}

export default App;
