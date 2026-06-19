import React, { useState } from 'react';
import { 
  SupportWrapper, 
  FAQItem, 
  Question, 
  Answer, 
  ChatTriggerButton, 
  ChatWindow, 
  ChatHeader, 
  ChatBody, 
  ChatFooter, 
  ChatInput, 
  SendButton 
} from '../styles/SupportStyles'; // Adicionei novos componentes de estilo aqui

const faqs = [
  { q: "Como faço para anunciar um imóvel?", a: "Basta criar uma conta, selecionar o perfil de anunciante e ir para o Dashboard, onde você poderá clicar em 'Novo Anúncio'." },
  { q: "O plano Grátis tem limitações?", a: "Sim, o plano Grátis permite manter até 2 imóveis ativos simultaneamente em nossa plataforma." },
  { q: "Como funcionam as assinaturas?", a: "No momento, estamos em fase de desenvolvimento e validação. Em breve, disponibilizaremos planos premium com recursos exclusivos para nossos anunciantes." }
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  // Estados para o Chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [historico, setHistorico] = useState([
    { autor: 'suporte', texto: 'Olá! Como posso ajudar você hoje no Domus Laguna?' }
  ]);

  const handleEnviarMensagem = (e) => {
    e.preventDefault();
    if (!mensagem.trim()) return;

    // Adiciona a mensagem do usuário
    const novaMensagem = { autor: 'usuario', texto: mensagem };
    setHistorico([...historico, novaMensagem]);
    setMensagem("");

    // Simula uma resposta automática do suporte após 1 segundo
    setTimeout(() => {
      setHistorico(prev => [...prev, { autor: 'suporte', texto: 'Nossa equipe responderá em breve. Por favor, aguarde.' }]);
    }, 1000);
  };

  return (
    <SupportWrapper>
      <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Central de Ajuda</h1>
      
      {faqs.map((item, index) => (
        <FAQItem key={index}>
          <Question onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.q} <span>{openIndex === index ? '−' : '+'}</span>
          </Question>
          {openIndex === index && <Answer>{item.a}</Answer>}
        </FAQItem>
      ))}

      {/* Botão para abrir o Chat */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h3>Ainda precisa de ajuda?</h3>
        <p>Fale diretamente com nossa equipe de suporte.</p>
        <ChatTriggerButton onClick={() => setIsChatOpen(!isChatOpen)}>
          {isChatOpen ? 'Fechar Chat' : 'Abrir Chat de Suporte'}
        </ChatTriggerButton>
      </div>

      {/* Janela de Chat */}
      {isChatOpen && (
        <ChatWindow>
          <ChatHeader>
            <h4>Suporte Domus Laguna</h4>
            <button onClick={() => setIsChatOpen(false)} style={{background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer'}}>X</button>
          </ChatHeader>
          
          <ChatBody>
            {historico.map((msg, index) => (
              <div key={index} style={{
                textAlign: msg.autor === 'usuario' ? 'right' : 'left',
                margin: '10px 0'
              }}>
                <span style={{
                  display: 'inline-block',
                  padding: '8px 12px',
                  borderRadius: '15px',
                  backgroundColor: msg.autor === 'usuario' ? '#007bff' : '#f1f1f1',
                  color: msg.autor === 'usuario' ? '#fff' : '#333',
                  maxWidth: '80%'
                }}>
                  {msg.texto}
                </span>
              </div>
            ))}
          </ChatBody>

          <ChatFooter onSubmit={handleEnviarMensagem}>
            <ChatInput 
              type="text" 
              placeholder="Digite sua mensagem..." 
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
            <SendButton type="submit">Enviar</SendButton>
          </ChatFooter>
        </ChatWindow>
      )}

    </SupportWrapper>
  );
};

export default Support;