import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";

export default function Root({name}){
  return(
    <BrowserRouter basename="multiples">
      <h1>Application: {name}</h1>

      <div style={{display:'flex', flexDirection: "column", fontSize: 20, marginLeft: 50}}>
        <Link style={{textDecoration: 'none'}} to='/'>Home</Link>
        <Link style={{textDecoration: 'none'}} to='/contato'>Contato</Link>
        <Link style={{textDecoration: 'none'}} to='/sobre'>Sobre</Link>
      </div>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  exact path='/contato' element={<Contato />} />
        <Route  exact path='/sobre' element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}
