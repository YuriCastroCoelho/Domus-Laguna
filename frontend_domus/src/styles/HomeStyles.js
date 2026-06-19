import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #f8f9fa;
`;

export const SectionWhite = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
`;

export const SectionLightGray = styled.section`
  background-color: #f8fafc;
  padding: 80px 20px;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
`;

export const SectionDark = styled.section`
  background-color: #0f172a;
  padding: 100px 20px;
  color: white;
`;

export const SectionHelp = styled.section`
  background-color: #e0f2fe;
  padding: 80px 20px;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.2rem;
    color: ${props => props.dark ? '#ffffff' : '#1e293b'};
    margin-bottom: 15px;
    font-weight: 800;
  }

  p {
    font-size: 1.1rem;
    color: ${props => props.dark ? '#94a3b8' : '#64748b'};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  justify-content: center;
`;

export const PriceGrid = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PriceCard = styled.div`
  background-color: ${props => props.destaque ? '#2563eb' : '#1e293b'};
  padding: 40px;
  border-radius: 16px;
  flex: 1;
  max-width: 350px;
  text-align: center;
  box-shadow: ${props => props.destaque ? '0 10px 25px rgba(37, 99, 235, 0.4)' : 'none'};
  transform: ${props => props.destaque ? 'scale(1.05)' : 'scale(1)'};
  border: 1px solid ${props => props.destaque ? '#2563eb' : '#334155'};

  h3 { color: ${props => props.destaque ? '#ffffff' : '#e2e8f0'}; font-size: 1.5rem; margin-bottom: 10px; }
  h2 { color: #ffffff; font-size: 2.5rem; margin-bottom: 20px; }
  p { color: ${props => props.destaque ? '#bfdbfe' : '#94a3b8'}; }
`;

export const BotaoWhatsApp = styled.button`
  padding: 16px 35px;
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

// ... adicione isso ao seu arquivo HomeStyles.js ...

export const PriceButton = styled.button`
  margin-top: 25px;
  padding: 15px 30px;
  border-radius: 50px; /* Botão arredondado estilo moderno */
  border: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 200px;
  
  /* O botão fica branco com borda azul no card escuro */
  background-color: ${props => props.destaque ? '#ffffff' : 'transparent'};
  color: ${props => props.destaque ? '#2563eb' : '#ffffff'};
  border: 2px solid ${props => props.destaque ? '#ffffff' : '#ffffff'};

  &:hover {
    transform: scale(1.05); /* Efeito de crescimento ao passar o mouse */
    background-color: ${props => props.destaque ? '#f8f9fa' : '#ffffff'};
    color: #0f172a;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
`;