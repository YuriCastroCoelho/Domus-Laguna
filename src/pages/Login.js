import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/HeaderMain";
import Footer from "../components/Footer";

import { 
  PageContainer, Card, Title, Form, 
  Input, Checkdiv, SubmitButton, RegisterLink 
} from "../styles/LoginStyles";

import { loginUsuario } from "../utils/fetch";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarEmail, setLembrarEmail] = useState(false);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setLembrarEmail(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    try {
      // Tenta autenticar direto no backend real
      const usuario = await loginUsuario(email, senha);
      localStorage.setItem('domus_usuarioAtual', JSON.stringify(usuario));

      if (lembrarEmail) {
        localStorage.setItem('userEmail', email);
      } else {
        localStorage.removeItem('userEmail');
      }

      navigate('/dashboard');
    } catch (erroBackend) {
      // Fallback: contas antigas que só existem no localStorage (modo offline/mock),
      // útil enquanto o backend ainda está sendo finalizado ou fica indisponível.
      const usuariosSalvos = JSON.parse(localStorage.getItem('domus_usuarios')) || [];
      const usuarioEncontrado = usuariosSalvos.find(
        user => user.email === email && user.senha === senha
      );

      if (usuarioEncontrado) {
        localStorage.setItem('domus_usuarioAtual', JSON.stringify(usuarioEncontrado));
        if (lembrarEmail) localStorage.setItem('userEmail', email);
        else localStorage.removeItem('userEmail');
        navigate('/dashboard');
      } else {
        setErro("E-mail ou senha incorretos! Tente novamente.");
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <Header />
      <PageContainer>
        <Card>
          <Title>Acesse sua conta</Title>
          <Form onSubmit={handleSubmit}>
            <Input 
              type="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              autoComplete="email" 
              required 
            />
            <Input 
              type="password" 
              placeholder="Senha" 
              value={senha} 
              onChange={e => setSenha(e.target.value)} 
              autoComplete="current-password" 
              required 
            />

            {erro && (
              <p style={{ color: '#e74c3c', fontSize: '0.9rem', margin: 0 }}>{erro}</p>
            )}
            
            <Checkdiv>
              <input 
                type="checkbox" 
                id="lembrarEmail" 
                checked={lembrarEmail} 
                onChange={(e) => setLembrarEmail(e.target.checked)} 
              />
              <label htmlFor="lembrarEmail">Lembrar meu e-mail</label>
            </Checkdiv>
            
            <SubmitButton type="submit" disabled={carregando}>
              {carregando ? "Entrando..." : "Entrar"}
            </SubmitButton>
          </Form>

          <RegisterLink>
            Não possui conta? <Link to="/register">Cadastre-se</Link>
          </RegisterLink>
        </Card>
      </PageContainer>
      <Footer />
    </>
  );
};

export default Login;
