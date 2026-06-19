import React, { useState } from "react"; // 1. Importamos o useState aqui no topo
import PropertyCard from "../PropertyCardHome";
import { 
  PageContainer, HeaderArea, Title, StatsGrid, StatCard, SectionTitle, GridContainer 
} from "../../styles/DashboardStylesPerfil";

const ResumoGeral = ({ userData, recomendacoes }) => {
  // 2. Criamos o "estado" que controla o número de mensagens
  const [mensagensNaoLidas, setMensagensNaoLidas] = useState(2);

  // 3. Função que zera o contador quando o usuário clica
  const lerMensagens = () => {
    setMensagensNaoLidas(0);
  };

  return (
    <PageContainer>
      <HeaderArea>
        {/* Trava de segurança simples caso userData não carregue a tempo */}
        <Title>Olá, {userData?.nome || "Usuário"}!</Title>
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

      {/* --- INÍCIO DA SEÇÃO DE AVISOS DINÂMICOS --- */}
      <SectionTitle>Avisos Importantes</SectionTitle>
      
      <div style={{ background: '#f4f6f8', padding: '15px', borderRadius: '8px', marginBottom: '40px' }}>
        
        {/* A MÁGICA DA RENDERIZAÇÃO CONDICIONAL: Só mostra se for maior que zero */}
        {mensagensNaoLidas > 0 && (
          <p 
            onClick={lerMensagens} 
            style={{ cursor: 'pointer', marginBottom: '10px', color: '#333', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            🔔 <span>Você tem <strong>{mensagensNaoLidas} novas mensagens</strong> sobre suas visitas. (Clique aqui para limpar)</span>
          </p>
        )}

        {/* Este aviso fixo vai continuar na tela mesmo depois que o de cima sumir */}
        <p style={{ color: '#333', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          📅 <span>Lembrete: Sua visita em Itapeba está confirmada para amanhã.</span>
        </p>
      </div>
      {/* --- FIM DA SEÇÃO DE AVISOS --- */}

      <SectionTitle>Recomendações baseadas nas suas buscas</SectionTitle>
      <GridContainer>
        {recomendacoes && recomendacoes.map(imovel => (
          <PropertyCard key={imovel.id} imovel={imovel} />
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default ResumoGeral;