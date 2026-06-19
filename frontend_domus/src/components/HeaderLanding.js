import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.header`
  width: 100%;
  padding: 16px 5%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Brand = styled.a`
  text-decoration: none;
  color: #2E8B57;

  h1 {
    font-size: 1.8rem;
    margin: 0;
    line-height: 1;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;

  li a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #2E8B57;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const AuthLinks = styled.div`
  a {
    margin-left: 10px;
    color: #2E8B57;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: #2E8B57;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => (
  <Navbar>
    <Brand href="/home">
      <h1>Domus</h1>
      <h1>Laguna</h1>
    </Brand>

    <Menu>
      <li><Link to="/home">Home</Link></li>
      <li><a href="#sobre">Sobre Nós</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#contato">Contato</a></li>
      <li><Link to="/login">Já tem uma conta?</Link></li>
    </Menu>

    <AuthLinks>
      <Link to="/login">Entrar</Link> | <Link to="/register">Cadastrar</Link>
    </AuthLinks>

    <MenuButton aria-label="Abrir menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </MenuButton>
  </Navbar>
);

export default Header;
