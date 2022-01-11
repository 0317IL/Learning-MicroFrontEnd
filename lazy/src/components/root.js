import React, {Suspense} from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const Home = React.lazy(() => import("../pages/Home"));
const Contato = React.lazy(() => import("../pages/Contato"));
const Sobre = React.lazy(() => import("../pages/Sobre"));

export default function Root({name}){
  return(
    <Suspense fallback={<h1>Carregando...</h1>}>
      <BrowserRouter basename="lazy">
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
    </Suspense>
  );
}
