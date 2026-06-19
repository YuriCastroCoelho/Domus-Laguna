import React, { useState, useEffect, useRef } from "react";
import { PageContainer, HeaderArea, Title, ActionButton } from "../../styles/DashboardStylesPerfil";

const ChatLead = ({ chatAtual, userData, leadsGlobais, setLeadsGlobais, voltar }) => {
  const [mensagem, setMensagem] = useState("");
  const chatFimRef = useRef(null);

  // Faz o scroll descer automaticamente quando há nova mensagem
  useEffect(() => {
    chatFimRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatAtual.mensagens]);

  const enviarMensagem = (e) => {
    e.preventDefault();
    if (mensagem.trim() === "") return;

    const novaMsg = {
      id: Math.random(),
      autorId: userData.email, // Usa o e-mail ou ID para identificar quem mandou
      nome: userData.nome.split(' ')[0],
      texto: mensagem,
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const isVendedor = userData.tipoUsuario === "vendedor" || userData.tipoUsuario === "anunciante";

    // Atualiza o banco de dados global
    const chatsAtualizados = leadsGlobais.map(chat => {
      if (chat.id === chatAtual.id) {
        chat.mensagens.push(novaMsg);
        // Coloca status "Novo" para a outra pessoa que vai receber
        if (isVendedor) chat.statusComprador = "Novo";
        else chat.statusVendedor = "Novo";
      }
      return chat;
    });

    setLeadsGlobais(chatsAtualizados);
    setMensagem("");
  };

  return (
    <PageContainer>
      <HeaderArea>
        <div>
          <Title>{chatAtual.interesse}</Title>
          <span style={{ color: '#666', fontSize: '0.9rem' }}>Conversa protegida e criptografada</span>
        </div>
        <button onClick={voltar} style={{ background: 'none', border: 'none', color: '#0056b3', cursor: 'pointer', fontWeight: 'bold' }}>
          ← Voltar
        </button>
      </HeaderArea>

      <div style={{ display: 'flex', flexDirection: 'column', height: '500px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
        
        {/* Histórico de Mensagens */}
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {chatAtual.mensagens.map(msg => {
            const souEuQuemMandou = msg.autorId === userData.email;
            
            return (
              <div key={msg.id} style={{ 
                alignSelf: souEuQuemMandou ? 'flex-end' : 'flex-start',
                maxWidth: '70%', display: 'flex', flexDirection: 'column'
              }}>
                {!souEuQuemMandou && <span style={{ fontSize: '0.75rem', color: '#666', marginBottom: '3px', marginLeft: '5px' }}>{msg.nome}</span>}
                <div style={{ 
                  backgroundColor: souEuQuemMandou ? '#0056b3' : '#e9ecef',
                  color: souEuQuemMandou ? '#fff' : '#333',
                  padding: '12px 18px',
                  borderRadius: '15px',
                  borderBottomRightRadius: souEuQuemMandou ? '2px' : '15px',
                  borderBottomLeftRadius: souEuQuemMandou ? '15px' : '2px',
                }}>
                  {msg.texto}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#999', marginTop: '5px', alignSelf: souEuQuemMandou ? 'flex-end' : 'flex-start' }}>
                  {msg.hora}
                </span>
              </div>
            );
          })}
          <div ref={chatFimRef} />
        </div>

        {/* Input de Envio */}
        <form onSubmit={enviarMensagem} style={{ padding: '20px', borderTop: '1px solid #eee', display: 'flex', gap: '10px', backgroundColor: '#fff' }}>
          <input 
            type="text" 
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite sua mensagem..." 
            style={{ flex: 1, padding: '12px 15px', borderRadius: '25px', border: '1px solid #ccc', outline: 'none' }}
          />
          <ActionButton type="submit" style={{ borderRadius: '25px', padding: '10px 25px' }}>
            Enviar
          </ActionButton>
        </form>

      </div>
    </PageContainer>
  );
};

export default ChatLead;