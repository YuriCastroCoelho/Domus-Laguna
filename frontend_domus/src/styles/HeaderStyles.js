import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  color: white;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

export const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  img { width: 40px; height: 40px; object-fit: contain; }
  h1 { margin: 0; font-size: 1.5rem; }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NavItem = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;
  &:hover { color: #4da6ff; }
`;

export const LoginButton = styled.button`
  background-color: ${props => props.logout ? '#ef4444' : '#2563eb'};
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 15px;
  transition: background-color 0.2s;
  &:hover { opacity: 0.9; }
`;