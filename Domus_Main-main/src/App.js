import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import Landing from './pages/Landing';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

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
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;