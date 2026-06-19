import React, { useState } from 'react';
import { SupportWrapper, FAQItem, Question, Answer } from '../styles/SupportStyles';

const faqs = [
  { q: "Como faço para anunciar um imóvel?", a: "Basta criar uma conta, selecionar o perfil de anunciante e ir para o Dashboard, onde você poderá clicar em 'Novo Anúncio'." },
  { q: "O plano Grátis tem limitações?", a: "Sim, o plano Grátis permite manter até 2 imóveis ativos simultaneamente em nossa plataforma." },
  { q: "Como funcionam as assinaturas?", a: "No momento, estamos em fase de desenvolvimento e validação. Em breve, disponibilizaremos planos premium com recursos exclusivos para nossos anunciantes." }
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
      
      {/* Botão removido conforme solicitado */}
    </SupportWrapper>
  );
};

export default Support;