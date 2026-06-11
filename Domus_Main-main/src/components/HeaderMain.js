import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// Importação da logo
import logoImg from "../assets/images/Logo.png";

// 1. CRIANDO O BOTÃO DE LOGIN ESTILIZADO
const LoginButton = styled(Link)`
    background-color: #0056b3;
    color: white !important;
    text-decoration: none;
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #004494;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

// 2. COMPONENTE DE ESTILO PRINCIPAL
const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fffde9;
    background-color: #1a1a1a;
    padding: 10px 40px;
    box-shadow: 0px 4px 4px #00000040;

    .navbar-left {
        display: flex;
        align-items: center;
        gap: 15px;

        .logo {
            height: 40px;
        }

        .site-name a {
            color: #fffde9;
            text-decoration: none;
            font-size: 20px;
            font-weight: bold;
        }
    }

    .navbar-right {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .nav-links {
        display: flex;
        gap: 15px;

        a {
            color: #fffde9;
            text-decoration: none;
            transition: color 0.3s;

            &:hover {
                color: #0056b3;
            }
        }
    }

    /* --- NOVOS ESTILOS DO MENU DO USUÁRIO LOGADO (DESKTOP) --- */
    .user-menu-desktop {
        display: flex;
        align-items: center;
        gap: 15px;

        .greeting {
            color: #fffde9;
            font-weight: bold;
        }

        .logout-button {
            background-color: transparent;
            border: 1px solid #ff6b6b;
            color: #ff6b6b;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background-color: #ff6b6b;
                color: #fff;
            }
        }
    }

    .menu-toggle {
        cursor: pointer;
        font-size: 24px;
        display: none;
    }

    .mobile-menu {
        display: none;
    }

    @media (max-width: 860px) {
        .nav-links, .login-button-desktop, .user-menu-desktop {
            display: none;
        }
        .menu-toggle {
            display: block;
        }
    }
`;

// 3. O COMPONENTE RENDERIZADO
const Header = () => {
    const navigate = useNavigate();
    const [usuarioLogado, setUsuarioLogado] = useState(null);

    // Verifica no momento que o cabeçalho carrega se existe usuário salvo
    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem('domus_usuarioAtual'));
        if (usuario) {
            setUsuarioLogado(usuario);
        }
    }, []);

    // Função para sair da conta
    const handleLogout = () => {
        localStorage.removeItem('domus_usuarioAtual');
        setUsuarioLogado(null);
        navigate('/login'); // Redireciona para a página de login
    };

    return (
        <StyledHeader>
            <div className="navbar-left">
                <Link to='/home'><img src={logoImg} alt="Logo" className="logo" /></Link>
                <span className="site-name"><Link to='/home'>Domus Laguna</Link></span>
            </div>

            <nav className="navbar-right">
                <div className="nav-links">
                    <a href="#alugar">Alugar</a>
                    <a href="#comprar">Comprar</a>
                    <a href="#anunciar">Anunciar</a>
                    <a href="#preco">Preço</a>
                    <a href="#links">Links úteis</a>
                    <Link to="/favoritos">Favoritos</Link>
                    <a href="#ajuda">Ajuda</a>
                </div>
                
                {/* --- RENDERIZAÇÃO CONDICIONAL (DESKTOP) --- */}
                {usuarioLogado ? (
                    <div className="user-menu-desktop">
                        <span className="greeting">Olá, {usuarioLogado.nome.split(' ')[0]}</span>
                        <Link to="/dashboard" style={{ color: '#fffde9', textDecoration: 'none' }}>Meu Painel</Link>
                        <button onClick={handleLogout} className="logout-button">Sair</button>
                    </div>
                ) : (
                    <LoginButton to='/login' className="login-button-desktop">
                        Entrar
                    </LoginButton>
                )}

                <div className="menu-toggle" id="menu-toggle">☰</div>
            </nav>

            <div className="mobile-menu" id="mobile-menu">
                <a href="#alugar">Alugar</a>
                <a href="#comprar">Comprar</a>
                <a href="#anunciar">Anunciar</a>
                <a href="#preco">Preço</a>
                <a href="#links">Links úteis</a>
                <Link to="/favoritos">Favoritos</Link>
                <a href="#ajuda">Ajuda</a>
                
                {/* --- RENDERIZAÇÃO CONDICIONAL (MOBILE) --- */}
                {usuarioLogado ? (
                    <>
                        <Link to="/dashboard" style={{ color: '#0056b3', fontWeight: 'bold' }}>Meu Painel</Link>
                        <div onClick={handleLogout} style={{ color: '#ff6b6b', cursor: 'pointer', padding: '10px 0' }}>Sair</div>
                    </>
                ) : (
                    <div className="login-button"><Link to='/login'>Entrar</Link></div>
                )}
            </div>
        </StyledHeader>
    );
};

export default Header;