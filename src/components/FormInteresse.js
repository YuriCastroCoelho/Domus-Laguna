import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center;
  z-index: 2000; backdrop-filter: blur(4px);
`;

const Modal = styled.div`
  background: white; padding: 32px; border-radius: 16px; width: 400px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  h3 { margin-bottom: 20px; color: #1e293b; }
  .checkbox-group { display: flex; flex-direction: column; gap: 12px; margin-bottom: 25px; }
  label { display: flex; align-items: center; gap: 10px; cursor: pointer; color: #475569; font-weight: 500; }
  input { cursor: pointer; width: 18px; height: 18px; }
`;

const Button = styled.button`
  width: 100%; padding: 14px; border-radius: 8px; border: none;
  background: #2563eb; color: white; font-weight: bold; cursor: pointer;
  &:hover { background: #1d4ed8; }
`;

const FormInteresse = ({ fechar, aoEnviar }) => {
  const [formas, setFormas] = useState([]);

  const toggleForma = (forma) => {
    setFormas(prev => prev.includes(forma) ? prev.filter(i => i !== forma) : [...prev, forma]);
  };

  return (
    <Overlay onClick={fechar}>
      <Modal onClick={e => e.stopPropagation()}>
        <h3>Como você pretende pagar?</h3>
        <div className="checkbox-group">
          {['À vista (PIX/Transferência)', 'Financiamento Bancário', 'Permuta', 'Entrada + Parcelas'].map(f => (
            <label key={f}>
              <input type="checkbox" onChange={() => toggleForma(f)} /> {f}
            </label>
          ))}
        </div>
        <Button onClick={() => aoEnviar(formas)}>Enviar Proposta e Abrir Chat</Button>
      </Modal>
    </Overlay>
  );
};

export default FormInteresse;