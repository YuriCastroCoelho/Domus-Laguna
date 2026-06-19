// src/pages/CheckoutPlano.js
import React, { useState, useEffect } from 'react'; // React, useState e useEffect importados
import { useParams, useNavigate } from 'react-router-dom'; // Hooks de navegação importados

// Verifique se o caminho abaixo está correto no seu projeto
import { 
  CheckoutWrapper, 
  PaymentCard, 
  PlanSummary, 
  FormLabel, 
  StyledInput, 
  ConfirmButton 
} from '../styles/CheckoutStyles';

const CheckoutPlano = () => {
  const { plano } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const beneficios = {
    basico: [
      "Anúncios limitados",
      "Duração padrão (30 dias)",
      "Listagem padrão no marketplace",
      "Suporte via Central de Ajuda"
    ],
    pro: [
      "Anúncios Ilimitados",
      "Destaque no topo das buscas",
      "Métricas de cliques e visualizações",
      "Suporte Prioritário 24/7"
    ]
  };

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
          
          <ul style={{ textAlign: 'left', margin: '20px 0', color: '#666' }}>
            {(plano === 'pro' ? beneficios.pro : beneficios.basico).map((item, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>✅ {item}</li>
            ))}
          </ul>
        </PlanSummary>
        
        <form onSubmit={handleFinalizar}>
          <FormLabel>Número do Cartão</FormLabel>
          <StyledInput type="text" placeholder="0000 0000 0000 0000" required />
          <div style={{display: 'flex', gap: '20px'}}>
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
          <ConfirmButton type="submit">
            {loading ? "Processando..." : `Confirmar Assinatura ${plano === 'pro' ? 'PRO' : 'Básica'}`}
          </ConfirmButton>
        </form>
      </PaymentCard>
    </CheckoutWrapper>
  );
};

export default CheckoutPlano;