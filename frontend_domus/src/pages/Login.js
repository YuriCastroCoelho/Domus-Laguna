import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Importando apenas os estilos
import { 
  PageContainer, Card, Title, Form, 
  Input, Checkdiv, SubmitButton, RegisterLink 
} from "../styles/LoginStyles";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarEmail, setLembrarEmail] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setLembrarEmail(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuariosSalvos = JSON.parse(localStorage.getItem('domus_usuarios')) || [];
    const usuarioEncontrado = usuariosSalvos.find(
      user => user.email === email && user.senha === senha
    );

    if (usuarioEncontrado) {
      localStorage.setItem('domus_usuarioAtual', JSON.stringify(usuarioEncontrado));
      if (lembrarEmail) {
        localStorage.setItem('userEmail', email);
      } else {
        localStorage.removeItem('userEmail');
      }
      navigate('/dashboard');
    } else {
      alert("E-mail ou senha incorretos! Tente novamente.");
    }
  };

  return (
    // Removi as tags <Header /> e <Footer /> daqui!
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
          
          <Checkdiv>
            <input 
              type="checkbox" 
              id="lembrarEmail" 
              checked={lembrarEmail} 
              onChange={(e) => setLembrarEmail(e.target.checked)} 
            />
            <label htmlFor="lembrarEmail">Lembrar meu e-mail</label>
          </Checkdiv>
          
          <SubmitButton type="submit">Entrar</SubmitButton>
        </Form>

        <RegisterLink>
          Não possui conta? <Link to="/register">Cadastre-se</Link>
        </RegisterLink>
      </Card>
    </PageContainer>
  );
};

export default Login;