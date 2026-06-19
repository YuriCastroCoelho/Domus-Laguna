import React, { useState } from "react"; // 1. Importamos o useState
import { 
  PageContainer, HeaderArea, Title, StatsGrid, StatCard, SectionTitle 
} from "../../styles/DashboardStylesPerfil";

const ResumoAnunciante = ({ userData }) => {
  // 2. Criamos o estado que controla a quantidade de mensagens
  const [mensagensNaoLidas, setMensagensNaoLidas] = useState(2);

  // 3. Função que "zera" as mensagens ao clicar
  const lerMensagens = () => {
    setMensagensNaoLidas(0);
  };

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
        
        {/* 4. A MÁGICA: O aviso só aparece se houver mais de 0 mensagens */}
        {mensagensNaoLidas > 0 && (
          <p 
            onClick={lerMensagens} 
            style={{ cursor: 'pointer', marginBottom: '10px' }}
          >
            🔔 Você tem <strong>{mensagensNaoLidas} novas mensagens</strong> de leads aguardando resposta. <span style={{fontSize: '0.85rem', color: '#777'}}>(Clique para ocultar)</span>
          </p>
        )}

        <p style={{ margin: 0 }}>
          📈 O imóvel <strong>"Casa em Condomínio"</strong> teve um aumento de 40% nas visualizações ontem.
        </p>
      </div>
    </PageContainer>
  );
};

export default ResumoAnunciante;