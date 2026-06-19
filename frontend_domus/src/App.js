import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

// Componentes Globais
import HeaderMain from './components/HeaderMain'; 
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; 
import DetalhesImovel from './pages/DetalhesImovel';
import CheckoutPlano from './pages/CheckoutPlano';
import SuccessPlano from './pages/SuccessPlano';
import Support from './pages/Support';
import Resultados from './pages/Resultados';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <HeaderMain /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/imovel/:id" element={<DetalhesImovel />} />
          <Route path="/checkout/:plano" element={<CheckoutPlano />} />
          <Route path="/sucesso-assinatura/:plano" element={<SuccessPlano />} />
          <Route path="/suporte" element={<Support />} />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

// ESTA LINHA É A MAIS IMPORTANTE E ESTAVA FALTANDO!
export default App;