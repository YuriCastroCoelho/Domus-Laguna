import React from "react";
import PropertyCard from "../PropertyCardHome";
import { 
  PageContainer, HeaderArea, Title, SectionTitle, GridContainer, EmptyMessage 
} from "../../styles/DashboardStylesPerfil";

const Favoritos = ({ imoveisFavoritos }) => {
  return (
    <PageContainer>
      <HeaderArea>
        <Title>Meus Favoritos</Title>
      </HeaderArea>

      <SectionTitle>Imóveis salvos por você</SectionTitle>
      
      {imoveisFavoritos.length === 0 ? (
        <EmptyMessage>Você ainda não adicionou nenhum imóvel aos favoritos.</EmptyMessage>
      ) : (
        <GridContainer>
          {imoveisFavoritos.map(imovel => (
            <PropertyCard key={imovel.id} imovel={imovel} />
          ))}
        </GridContainer>
      )}
    </PageContainer>
  );
};

export default Favoritos;