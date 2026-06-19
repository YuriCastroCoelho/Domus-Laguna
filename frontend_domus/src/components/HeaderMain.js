import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HeaderContainer, LogoArea, NavMenu, NavItem, LoginButton 
} from '../styles/HeaderStyles';

const HeaderMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('domus_usuarioAtual');
    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
    } else {
      setUsuario(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('domus_usuarioAtual');
    setUsuario(null);
    navigate('/');
  };

  return (
    <HeaderContainer>
      <LogoArea to="/">
        <img src="/Logo.png" alt="Logo" onError={(e) => e.target.style.display = 'none'} />
        <h1>Domus Laguna</h1>
      </LogoArea>

      <NavMenu>
        {/* Links sempre visíveis */}
        <NavItem onClick={() => navigate('/')}>Início</NavItem>
        <NavItem onClick={() => navigate('/#alugar')}>Alugar</NavItem>
        <NavItem onClick={() => navigate('/#comprar')}>Comprar</NavItem>
        <NavItem onClick={() => navigate('/#precos')}>Preço</NavItem>
        
        {/* CORREÇÃO: O link agora aponta para a página de suporte */}
        <NavItem onClick={() => navigate('/suporte')}>Ajuda</NavItem>

        {/* Lógica do botão Login/Nome */}
        {usuario ? (
          <>
            <NavItem onClick={() => navigate('/dashboard')}>
              Olá, {usuario.nome ? usuario.nome.split(' ')[0] : 'Usuário'}
            </NavItem>
            <LoginButton logout onClick={handleLogout}>
              Sair
            </LoginButton>
          </>
        ) : (
          <LoginButton onClick={() => navigate('/login')}>
            Entrar
          </LoginButton>
        )}
      </NavMenu>
    </HeaderContainer>
  );
};

export default HeaderMain;