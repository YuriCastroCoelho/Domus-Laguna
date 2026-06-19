import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Importando apenas os estilos isolados
import { 
  PageContainer, Card, Title, Subtitle, ToggleContainer, 
  ToggleButton, Form, Input, SubmitButton, LoginLink 
} from "../styles/RegisterStyles";

const Register = () => {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState("comprador");
  const [form, setForm] = useState({ nome: '', email: '', senha: '', documentoExtra: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const usuariosSalvos = JSON.parse(localStorage.getItem('domus_usuarios')) || [];

    const emailJaExiste = usuariosSalvos.find(user => user.email === form.email);
    if (emailJaExiste) {
      alert("Este e-mail já está cadastrado. Faça login!");
      return;
    }

    const novoUsuario = { ...form, tipoUsuario };

    usuariosSalvos.push(novoUsuario);
    localStorage.setItem('domus_usuarios', JSON.stringify(usuariosSalvos));
    localStorage.setItem('domus_usuarioAtual', JSON.stringify(novoUsuario));

    alert("Cadastro realizado com sucesso!");
    navigate('/dashboard'); 
  };

  return (
    // Removi as tags <Header /> e <Footer />. O App.js já cuida delas!
    <PageContainer>
      <Card>
        <Title>Crie sua conta</Title>
        <Subtitle>Selecione seu perfil para começarmos</Subtitle>

        <ToggleContainer>
          <ToggleButton 
            type="button"
            active={tipoUsuario === "comprador"} 
            onClick={() => setTipoUsuario("comprador")}
          >
            Comprar / Alugar
          </ToggleButton>
          <ToggleButton 
            type="button"
            active={tipoUsuario === "anunciante"} 
            onClick={() => setTipoUsuario("anunciante")}
          >
            Anunciar Imóvel
          </ToggleButton>
        </ToggleContainer>

        <Form onSubmit={handleRegister}>
          <Input 
            name="nome" 
            placeholder={tipoUsuario === "comprador" ? "Seu Nome Completo" : "Nome ou Razão Social"} 
            onChange={handleChange} 
            required 
          />
          <Input 
            name="email" 
            type="email" 
            placeholder="Seu melhor e-mail" 
            onChange={handleChange} 
            required 
          />
          {tipoUsuario === "anunciante" && (
            <Input 
              name="documentoExtra" 
              placeholder="CRECI ou CNPJ (Opcional)" 
              onChange={handleChange} 
            />
          )}
          <Input 
            name="senha" 
            type="password" 
            placeholder="Crie uma senha forte" 
            onChange={handleChange} 
            required 
          />
          <SubmitButton type="submit">Finalizar Cadastro</SubmitButton>
        </Form>

        <LoginLink>
          Já possui uma conta? <Link to="/login">Faça Login</Link>
        </LoginLink>
      </Card>
    </PageContainer>
  );
};

export default Register;