import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCardHome";
import { 
  PageContainer, HeaderArea, Title, SectionTitle, GridContainer, EmptyMessage 
} from "../../styles/DashboardStylesPerfil";
import { carregarFavoritos, alternarFavorito } from "../../utils/favorites";

// ANTES: recebia "imoveisFavoritos" com TODOS os imóveis da plataforma
// (não eram favoritos de verdade). AGORA: recebe o "userData" e busca a
// lista real de favoritos (backend, com fallback para localStorage).
const Favoritos = ({ userData }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarFavoritos(userData).then((lista) => {
      setFavoritos(lista);
      setCarregando(false);
    });
  }, [userData]);

  const handleToggleFavorito = async (imovel) => {
    const novaLista = await alternarFavorito(userData, imovel, favoritos);
    setFavoritos(novaLista);
  };

  return (
    <PageContainer>
      <HeaderArea>
        <Title>Meus Favoritos</Title>
      </HeaderArea>

      <SectionTitle>Imóveis salvos por você</SectionTitle>

      {carregando ? (
        <p>Carregando seus favoritos...</p>
      ) : favoritos.length === 0 ? (
        <EmptyMessage>Você ainda não adicionou nenhum imóvel aos favoritos.</EmptyMessage>
      ) : (
        <GridContainer>
          {favoritos.map(imovel => (
            <PropertyCard
              key={imovel.id}
              imovel={imovel}
              favorito={true}
              onFavoritar={() => handleToggleFavorito(imovel)}
            />
          ))}
        </GridContainer>
      )}
    </PageContainer>
  );
};

export default Favoritos;
