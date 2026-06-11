import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

// Componentes estruturais da Home (vistos no seu projeto)
import Header from '../components/HeaderMain';
import Footer from '../components/Footer';
import HeroSectionHome from "../components/HeroSectionHome";
import PropertyCardHome from "../components/PropertyCardHome";

const Main = styled.main`
    margin: 0;
    padding: 20px;
    background-color: #f9f9f9; /* Ou a cor padrão do seu GlobalStyle */
`;

// Grid para organizar os cards de imóveis lado a lado de forma responsiva
const ImoveisGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
`;

const LoadingText = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin: 50px 0;
`;

const Home = () => {
    const [imoveis, setImoveis] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect faz a chamada para a API do seu Backend assim que a página carrega
    useEffect(() => {
        axios.get('http://localhost:8000/imoveis/')
            .then((response) => {
                setImoveis(response.data); // Salva a lista de imóveis vinda do PostgreSQL
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao carregar os imóveis do backend:", error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Header />
            <HeroSectionHome />
            <Main>
                {loading ? (
                    <LoadingText>Carregando imóveis de Maricá...</LoadingText>
                ) : (
                    <ImoveisGrid>
                        {imoveis.map((imovel) => (
                            // Renderiza o card passando o imóvel vindo do banco como prop
                            // Nota: Se o seu PropertyCardHome usar um nome de prop diferente de 'imovel' (ex: 'item' ou 'dados'), mude aqui embaixo.
                            <PropertyCardHome key={imovel.id} imovel={imovel} />
                        ))}
                    </ImoveisGrid>
                )}
            </Main>
            <Footer />
        </>    
    );
};

export default Home;