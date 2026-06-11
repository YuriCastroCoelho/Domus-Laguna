// src/components/ContactInfo.js

import React from "react";
import styled from "styled-components";

const StyledContact = styled.footer`
    width: 100%;
    background-color: #2E8B57;
    color: white;
    padding: 40px 5%;
    margin-bottom: 0;
    margin-top: auto;
    display: flex;
    justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const FooterColumn = styled.div`
  flex: 1 1 200px;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p,
  address,
  li,
  a {
    font-size: 0.95rem;
    color: #ddd;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #ddd;

    &:hover {
      color: #fff;
    }
  }

  address {
    font-style: normal;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const ContactInfo = () => {
  return (
    <StyledContact>
      <FooterContent>
        <FooterColumn>
          <h3>Sobre nós</h3>
          <p>Nós somos um marketplace que conecta compradores...</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Links rápidos</h3>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#politicas">Políticas de privacidade</a></li>
            <li><a href="#ajuda">Ajuda</a></li>
            <li><a href="#termos">Termos e condições</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Sobre Imóveis</h3>
          <ul>
            <li><a href="#casas">Casas</a></li>
            <li><a href="#apartamentos">Apartamentos</a></li>
            <li><a href="#bairros">Bairros</a></li>
            <li><a href="#cidade">Cidade</a></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Contate-nos</h3>
          <address>
            Av. Roberto Silveira 437<br />
            Maricá, RJ, 24900-000<br />
            Telefone: <a href="tel:+552126371521">(21) 2637-1521</a><br />
            Email: <a href="mailto:domuslaguna@gmail.com">domuslaguna@gmail.com</a>
          </address>
        </FooterColumn>
      </FooterContent>
    </StyledContact>
  );
};

export default ContactInfo;
