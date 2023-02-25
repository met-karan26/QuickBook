import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Sresult from './pages/Search Result/sresult';
import Individual from './pages/Individual/individual';
const App = () => {
  return (<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/searchresult" element={<Sresult />}/>
        <Route path='/hotel/:id' element={<Individual />} />
    </Routes>
  </BrowserRouter>
   
  )
}

export default App