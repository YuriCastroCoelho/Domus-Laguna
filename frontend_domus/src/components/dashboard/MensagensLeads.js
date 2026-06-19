import React from "react";
import { PageContainer, HeaderArea, Title, SectionTitle, ListContainer, ListItem, ItemTitle, ItemSubtitle, ActionButton } from "../../styles/DashboardStylesPerfil";

const MensagensLeads = ({ userData, leadsGlobais, setLeadsGlobais, abrirChat }) => {
  const isVendedor = userData.tipoUsuario === "vendedor" || userData.tipoUsuario === "anunciante";

  const handleEntrarNoChat = (chat) => {
    // Tira o status de "Novo" de quem clicou
    const chatsAtualizados = leadsGlobais.map(c => {
      if (c.id === chat.id) {
        if (isVendedor) c.statusVendedor = "Lida";
        else c.statusComprador = "Lida";
      }
      return c;
    });
    setLeadsGlobais(chatsAtualizados);
    abrirChat(chat);
  };

  return (
    <PageContainer>
      <HeaderArea><Title>Mensagens</Title></HeaderArea>
      <SectionTitle>Suas Conversas</SectionTitle>

      <ListContainer>
        {leadsGlobais.length === 0 ? (
          <p style={{ padding: '20px', color: '#666' }}>Nenhuma conversa iniciada.</p>
        ) : (
          leadsGlobais.map(chat => {
            // Verifica o status dependendo de quem está logado
            const statusAtual = isVendedor ? chat.statusVendedor : chat.statusComprador;
            // Pega a última mensagem para mostrar na lista
            const ultimaMsg = chat.mensagens[chat.mensagens.length - 1];

            return (
              <ListItem key={chat.id}>
                <div>
                  <ItemTitle>{chat.interesse}</ItemTitle>
                  <ItemSubtitle>
                    <span style={{ color: '#999', fontSize: '0.85rem' }}>Última msg de {ultimaMsg.nome}:</span> <br/>
                    {ultimaMsg.texto.substring(0, 40)}...
                  </ItemSubtitle>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  {statusAtual === "Novo" ? (
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#e74c3c' }}>🟢 NOVA</span>
                  ) : (
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#7f8c8d' }}>Lida</span>
                  )}
                  <ActionButton onClick={() => handleEntrarNoChat(chat)} style={{ padding: '8px 15px', fontSize: '0.9rem' }}>
                    Abrir
                  </ActionButton>
                </div>
              </ListItem>
            );
          })
        )}
      </ListContainer>
    </PageContainer>
  );
};

export default MensagensLeads;