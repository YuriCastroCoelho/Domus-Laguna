// src/pages/CheckoutPlano.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  CheckoutWrapper, PaymentCard, PlanSummary, 
  FormLabel, StyledInput, ConfirmButton 
} from '../styles/CheckoutStyles';

const CheckoutPlano = () => {
  const { plano } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // PROTEÇÃO: Se não estiver logado, manda pro login na hora
  useEffect(() => {
    const usuarioLogado = localStorage.getItem('domus_usuarioAtual');
    if (!usuarioLogado) {
      alert("Você precisa estar logado para assinar um plano!");
      navigate('/login');
    }
  }, [navigate]);

  const handleFinalizar = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simula processamento
    setTimeout(() => {
      navigate(`/sucesso-assinatura/${plano}`);
    }, 2000);
  };

  return (
    <CheckoutWrapper>
      <PaymentCard>
        <PlanSummary>
          <h4>Plano Selecionado</h4>
          <h2>{plano === 'pro' ? 'Domus PRO 🚀' : 'Domus Básico 🏠'}</h2>
        </PlanSummary>
        
        {/* O formulário agora aparece apenas se o useEffect acima permitir */}
        <form onSubmit={handleFinalizar}>
          <FormLabel>Número do Cartão</FormLabel>
          <StyledInput type="text" placeholder="0000 0000 0000 0000" required />
          <div style={{display: 'flex', gap: '20px'}}>
             {/* ... seus campos de Validade e CVV ... */}
             <div style={{flex: 1}}>
                <FormLabel>Validade</FormLabel>
                <StyledInput placeholder="MM/AA" required />
             </div>
             <div style={{flex: 1}}>
                <FormLabel>CVV</FormLabel>
                <StyledInput placeholder="123" required />
             </div>
          </div>
          <FormLabel>Nome do Titular</FormLabel>
          <StyledInput placeholder="Nome Completo" required />
          <ConfirmButton type="submit">{loading ? "Processando..." : "Confirmar Pagamento"}</ConfirmButton>
        </form>
      </PaymentCard>
    </CheckoutWrapper>
  );
};

export default CheckoutPlano;