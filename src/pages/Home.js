import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import Header from '../components/HeaderMain';
import Footer from '../components/Footer';
import HeroSectionHome from "../components/HeroSectionHome";
import PropertyCardHome from "../components/PropertyCardHome";
import { getImoveis } from "../utils/fetch";
import { carregarFavoritos, alternarFavorito, isFavorito } from "../utils/favorites";

const Main = styled.main`
    margin: 0;
    padding: 20px;
    background-color: #f9f9f9;
`;

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

const ErrorText = styled.p`
    text-align: center;
    font-size: 1.1rem;
    color: #e74c3c;
    margin: 50px 0;
`;

const Home = () => {
    const [imoveis, setImoveis] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const usuarioSalvo = JSON.parse(localStorage.getItem('domus_usuarioAtual'));
        setUsuario(usuarioSalvo);

        // Busca os imóveis reais do backend (PostgreSQL via api.py)
        getImoveis()
            .then((data) => {
                setImoveis(data || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao carregar os imóveis do backend:", error);
                setErro("Não foi possível carregar os imóveis agora. Tente novamente em alguns minutos.");
                setLoading(false);
            });

        // Carrega os favoritos do usuário (backend se tiver id, senão localStorage)
        carregarFavoritos(usuarioSalvo).then(setFavoritos);
    }, []);

    const handleToggleFavorito = async (imovel) => {
        const novaLista = await alternarFavorito(usuario, imovel, favoritos);
        setFavoritos(novaLista);
    };

    return (
        <>
            <Header />
            <HeroSectionHome />
            <Main>
                {loading ? (
                    <LoadingText>Carregando imóveis de Maricá...</LoadingText>
                ) : erro ? (
                    <ErrorText>{erro}</ErrorText>
                ) : (
                    <ImoveisGrid>
                        {imoveis.map((imovel) => (
                            <PropertyCardHome
                                key={imovel.id}
                                imovel={imovel}
                                favorito={isFavorito(imovel.id, favoritos)}
                                onFavoritar={handleToggleFavorito}
                            />
                        ))}
                    </ImoveisGrid>
                )}
            </Main>
            <Footer />
        </>    
    );
};

export default Home;
