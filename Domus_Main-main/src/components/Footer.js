
import React from "react";
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #264653;
    color: #fffde9;
    text-align: center;
    padding: 1.5rem 0;
    margin-top: 0;
`;

const Footer = () => <StyledFooter>&copy; 2024 Domus Laguna. Todos os direitos reservados.</StyledFooter>;

export default Footer;