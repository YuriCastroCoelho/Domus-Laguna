import React from "react";
import PropertyCard from "../PropertyCardHome";
import { 
  PageContainer, HeaderArea, Title, StatsGrid, StatCard, SectionTitle, GridContainer 
} from "../../styles/DashboardStylesPerfil";

const ResumoGeral = ({ userData, recomendacoes }) => {
  return (
    <PageContainer>
      <HeaderArea>
        <Title>Olá, {userData.nome}!</Title>
      </HeaderArea>

      <StatsGrid>
        <StatCard>
          <h4>Imóveis Favoritos</h4>
          <p>12</p>
        </StatCard>
        <StatCard style={{ borderLeftColor: '#f39c12' }}>
          <h4>Visitas Agendadas</h4>
          <p>2</p>
        </StatCard>
        <StatCard style={{ borderLeftColor: '#16a085' }}>
          <h4>Propostas Ativas</h4>
          <p>1</p>
        </StatCard>
      </StatsGrid>

      <SectionTitle>Recomendações baseadas nas suas buscas</SectionTitle>
      <GridContainer>
        {recomendacoes.map(imovel => (
          <PropertyCard key={imovel.id} imovel={imovel} />
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default ResumoGeral;