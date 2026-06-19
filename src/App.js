import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import Landing from './pages/Landing';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DetalhesImovel from './pages/DetalhesImovel';
import Resultados from './pages/Resultados';
import CheckoutPlano from './pages/CheckoutPlano';
import SuccessPlano from './pages/SuccessPlano';
import Support from './pages/Support';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* A prop 'basename' é essencial aqui. 
        Ela diz ao React: "Ignore o caminho inicial da URL 
        ao processar as rotas internas".
      */}
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />

          {/* Renomeado de "/favorites" para "/favoritos" para bater com o
              Link usado no HeaderMain e com a chave de menu do Dashboard. */}
          <Route path="/favoritos" element={<Favorites />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Rotas que existiam como páginas prontas mas ainda não estavam
              registradas aqui — por isso eram inacessíveis pela navegação. */}
          <Route path="/imovel/:id" element={<DetalhesImovel />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/checkout/:plano" element={<CheckoutPlano />} />
          <Route path="/sucesso-assinatura/:plano" element={<SuccessPlano />} />
          <Route path="/suporte" element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
