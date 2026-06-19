import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/HeaderMain";
import Footer from "../components/Footer";
import PropertyCardHome from "../components/PropertyCardHome";
import { carregarFavoritos, alternarFavorito } from "../utils/favorites";

const Main = styled.main`
  min-height: 60vh;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: #1d1d1f;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
`;

const Vazio = styled.p`
  color: #7f8c8d;
  font-size: 1.1rem;
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
`;

const Favorites = () => {
  const [usuario, setUsuario] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const usuarioSalvo = JSON.parse(localStorage.getItem("domus_usuarioAtual"));
    setUsuario(usuarioSalvo);

    carregarFavoritos(usuarioSalvo).then((lista) => {
      setFavoritos(lista);
      setCarregando(false);
    });
  }, []);

  const handleToggleFavorito = async (imovel) => {
    const novaLista = await alternarFavorito(usuario, imovel, favoritos);
    setFavoritos(novaLista);
  };

  return (
    <>
      <Header />
      <Main>
        <Titulo>Meus Favoritos</Titulo>

        {carregando ? (
          <p>Carregando seus favoritos...</p>
        ) : favoritos.length === 0 ? (
          <Vazio>Você ainda não adicionou nenhum imóvel aos favoritos.</Vazio>
        ) : (
          <Grid>
            {favoritos.map((imovel) => (
              <PropertyCardHome
                key={imovel.id}
                imovel={imovel}
                favorito={true}
                onFavoritar={() => handleToggleFavorito(imovel)}
              />
            ))}
          </Grid>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default Favorites;
