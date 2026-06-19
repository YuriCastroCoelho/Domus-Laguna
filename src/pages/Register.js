import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/HeaderMain";
import Footer from "../components/Footer";

import { 
  PageContainer, Card, Title, Subtitle, ToggleContainer, 
  ToggleButton, Form, Input, SubmitButton, LoginLink 
} from "../styles/RegisterStyles";

import { registrarUsuario } from "../utils/fetch";

const Register = () => {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState("comprador");
  const [form, setForm] = useState({ nome: '', email: '', senha: '', documentoExtra: '' });
  const [carregando, setCarregando] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setCarregando(true);

    const novoUsuario = { ...form, tipoUsuario };

    try {
      // Tenta cadastrar no backend real
      const usuarioCriado = await registrarUsuario(novoUsuario);
      localStorage.setItem('domus_usuarioAtual', JSON.stringify(usuarioCriado));
      alert("Cadastro realizado com sucesso!");
      navigate('/dashboard');
    } catch (erroBackend) {
      // Fallback: endpoint de cadastro ainda não confirmado no backend (ou fora
      // do ar) — mantém o comportamento anterior, salvando localmente.
      console.warn("Cadastro no backend falhou, salvando localmente.", erroBackend);

      const usuariosSalvos = JSON.parse(localStorage.getItem('domus_usuarios')) || [];
      const emailJaExiste = usuariosSalvos.find(user => user.email === form.email);
      if (emailJaExiste) {
        alert("Este e-mail já está cadastrado. Faça login!");
        setCarregando(false);
        return;
      }

      usuariosSalvos.push(novoUsuario);
      localStorage.setItem('domus_usuarios', JSON.stringify(usuariosSalvos));
      localStorage.setItem('domus_usuarioAtual', JSON.stringify(novoUsuario));

      alert("Cadastro realizado com sucesso! (modo offline)");
      navigate('/dashboard');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>  
      <Header />
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
            <SubmitButton type="submit" disabled={carregando}>
              {carregando ? "Enviando..." : "Finalizar Cadastro"}
            </SubmitButton>
          </Form>

          <LoginLink>
            Já possui uma conta? <Link to="/login">Faça Login</Link>
          </LoginLink>
        </Card>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Register;
