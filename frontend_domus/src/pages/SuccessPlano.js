import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SuccessWrapper, IconCircle, ActionButton } from '../styles/SuccessStyles';

const SuccessPlano = () => {
  const { plano } = useParams();
  const navigate = useNavigate();

  return (
    <SuccessWrapper>
      <IconCircle>✓</IconCircle>
      <h1>Parabéns!</h1>
      <p>Sua assinatura do <strong>Plano {plano.toUpperCase()}</strong> foi ativada com sucesso.</p>
      <ActionButton onClick={() => navigate('/dashboard')}>
        Ir para meu Painel
      </ActionButton>
    </SuccessWrapper>
  );
};

export default SuccessPlano;