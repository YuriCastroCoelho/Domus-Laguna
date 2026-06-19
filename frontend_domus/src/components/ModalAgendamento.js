import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalButtons,
  CancelButton,
  SendButton,
  FormGroup,
  Input,
  Row
} from '../styles/DetalhesImovelStyles';

const ModalAgendamento = ({ fechar, aoConfirmar }) => {
  const [dadosVisita, setDadosVisita] = useState({
    nome: "",
    telefone: "",
    data: "",
    hora: ""
  });

  const handleInputChange = (e) => {
    setDadosVisita(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ModalOverlay onClick={fechar}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>📅 Agendar Visita</h3>

        <FormGroup>
          <label>Nome Completo</label>
          <Input
            name="nome"
            placeholder="Seu nome"
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>WhatsApp</label>
          <Input
            name="telefone"
            placeholder="(00) 00000-0000"
            onChange={handleInputChange}
          />
        </FormGroup>

        <Row>
          <FormGroup>
            <label>Data</label>
            <Input
              type="date"
              name="data"
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Hora</label>
            <Input
              type="time"
              name="hora"
              onChange={handleInputChange}
            />
          </FormGroup>
        </Row>

        <ModalButtons>
          <CancelButton onClick={fechar}>
            Cancelar
          </CancelButton>

          <SendButton onClick={() => aoConfirmar(dadosVisita)}>
            Confirmar Agendamento
          </SendButton>
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAgendamento;
