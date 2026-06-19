import styled from "styled-components";

// Container principal que divide a tela entre Sidebar e Conteúdo
export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f0f2f5; /* Fundo cinza bem claro para dar contraste */
  font-family: 'Poppins', sans-serif; /* Assumindo que você usa uma fonte moderna */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Barra lateral de navegação (Menu Escuro)
export const Sidebar = styled.aside`
  width: 260px;
  background-color: #1c1c1e; /* Preto suave profissional */
  color: #f5f5f7;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    padding: 10px;
  }
`;

// Itens do menu com suporte a $active (Transient Prop)
export const SidebarItem = styled.div`
  padding: 18px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => (props.$active ? "#ffffff" : "#a1a1a6")};
  background-color: ${(props) => (props.$active ? "#0056b3" : "transparent")};
  border-left: ${(props) => (props.$active ? "5px solid #00a8ff" : "5px solid transparent")};
  font-weight: ${(props) => (props.$active ? "600" : "400")};

  &:hover {
    background-color: ${(props) => (props.$active ? "#0056b3" : "#2c2c2e")};
    color: #ffffff;
  }

  @media (max-width: 768px) {
    white-space: nowrap;
    border-left: none;
    border-bottom: ${(props) => (props.$active ? "4px solid #00a8ff" : "4px solid transparent")};
    padding: 15px;
  }
`;

// Área principal de conteúdo (Fundo Claro)
export const MainContent = styled.main`
  flex: 1;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 30px 0 0 30px; /* Arredondamento moderno na junção com a sidebar */

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 0;
  }
`;

// Cabeçalho da área principal (Título e Botão de Ação)
export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Title = styled.h1`
  color: #1d1d1f;
  font-size: 2.2rem;
  margin: 0;
  font-weight: 700;
`;

// Grade para os cartões de estatísticas (StatsCards)
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
`;

// Cartão de Estatística Individual
export const StatCard = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  border-left: 5px solid #0056b3; /* Cor destaque padrão */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    margin: 0 0 12px 0;
    color: #86868b;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 700;
    color: #1d1d1f;
  }
`;

// Título das sessões de conteúdo (ex: Meus Imóveis)
export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: #1d1d1f;
  margin-top: 40px;
  margin-bottom: 25px;
  font-weight: 600;
`;

// Botão de ação (ex: + Novo Anúncio)
export const ActionButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 6px rgba(40, 167, 69, 0.2);

  &:hover {
    background-color: #218838;
    box-shadow: 0 6px 12px rgba(40, 167, 69, 0.3);
    transform: translateY(-2px);
  }
`;