import React, { useState } from "react";
import { 
  PageContainer, HeaderArea, Title, SectionTitle, ActionButton, 
  FormContainer, FormGroup, Label, Input 
} from "../../styles/DashboardStylesPerfil";

const Configuracoes = ({ userData }) => {
  const [formData, setFormData] = useState({
    nome: userData?.nome || "",
    email: userData?.email || "",
    telefone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Configurações salvas com sucesso!");
  };

  return (
    <PageContainer>
      <HeaderArea>
        <Title>Configurações da Conta</Title>
      </HeaderArea>

      <SectionTitle>Meus Dados Pessoais</SectionTitle>

      <FormContainer onSubmit={handleSave}>
        <FormGroup>
          <Label>Nome Completo</Label>
          <Input 
            type="text" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>E-mail</Label>
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup style={{ marginBottom: '35px' }}>
          <Label>Telefone</Label>
          <Input 
            type="text" 
            name="telefone" 
            value={formData.telefone} 
            onChange={handleChange}
            placeholder="(00) 00000-0000"
          />
        </FormGroup>

        <ActionButton type="submit">
          Salvar Alterações
        </ActionButton>
      </FormContainer>
    </PageContainer>
  );
};

export default Configuracoes;