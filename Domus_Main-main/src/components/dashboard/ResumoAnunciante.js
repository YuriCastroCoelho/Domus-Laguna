import React from "react";
import { 
  PageContainer, HeaderArea, Title, StatsGrid, StatCard, SectionTitle 
} from "../../styles/DashboardStylesPerfil";

const ResumoAnunciante = ({ userData }) => {
  return (
    <PageContainer>
      <HeaderArea>
        <Title>Painel do Anunciante, {userData?.nome?.split(' ')[0]}!</Title>
      </HeaderArea>

      <StatsGrid>
        <StatCard style={{ borderLeftColor: '#28a745' }}>
          <h4>Anúncios Ativos</h4>
          <p>4</p>
        </StatCard>
        <StatCard style={{ borderLeftColor: '#f39c12' }}>
          <h4>Visualizações na Semana</h4>
          <p>342</p>
        </StatCard>
        <StatCard style={{ borderLeftColor: '#17a2b8' }}>
          <h4>Novos Contatos</h4>
          <p>8</p>
        </StatCard>
      </StatsGrid>

      <SectionTitle>Avisos Importantes</SectionTitle>
      <div style={{ padding: '20px', backgroundColor: '#eef2f5', borderRadius: '8px', color: '#333' }}>
        <p>🔔 Você tem <strong>2 novas mensagens</strong> de leads aguardando resposta.</p>
        <p>📈 O imóvel <strong>"Casa em Condomínio"</strong> teve um aumento de 40% nas visualizações ontem.</p>
      </div>
    </PageContainer>
  );
};

export default ResumoAnunciante;