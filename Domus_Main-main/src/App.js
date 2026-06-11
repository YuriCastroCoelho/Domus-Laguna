import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

// Importações das páginas
import Landing from './pages/Landing';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; // 1. Adicionamos a importação aqui!

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* 2. Adicionamos a rota do Dashboard aqui! */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;