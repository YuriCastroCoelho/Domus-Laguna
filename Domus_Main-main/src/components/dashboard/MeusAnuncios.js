import React from "react";
import PropertyCard from "../PropertyCardHome"; 
import { 
  PageContainer, HeaderArea, Title, SectionTitle, GridContainer, ActionButton, EmptyMessage 
} from "../../styles/DashboardStylesPerfil";

const MeusAnuncios = ({ setActiveMenu, meusImoveis }) => {
  return (
    <PageContainer>
      <HeaderArea>
        <Title>Meus Anúncios</Title>
        <ActionButton onClick={() => setActiveMenu("novo_anuncio")}>
          + Novo Anúncio
        </ActionButton>
      </HeaderArea>

      <SectionTitle>Imóveis Publicados</SectionTitle>
      
      {meusImoveis && meusImoveis.length === 0 ? (
        <EmptyMessage>Você ainda não tem nenhum imóvel anunciado.</EmptyMessage>
      ) : (
        <GridContainer>
          {meusImoveis.map((imovel, index) => (
            // Usamos o index como fallback caso a imagem ou ID se repitam durante testes
            <PropertyCard key={imovel.id || index} imovel={imovel} />
          ))}
        </GridContainer>
      )}
    </PageContainer>
  );
};

export default MeusAnuncios;