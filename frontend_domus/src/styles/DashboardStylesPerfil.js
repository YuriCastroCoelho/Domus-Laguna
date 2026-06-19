import styled from "styled-components";

// --- Container Principal da Página ---
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  padding: 10px 20px 40px 0;
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin: 0;
  font-weight: 700;
`;

export const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: #34495e;
  margin: 40px 0 20px 0;
  border-bottom: 2px solid #f0f2f5;
  padding-bottom: 10px;
  width: 100%;
`;

// --- Resumo Geral ---
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  width: 100%;
`;

export const StatCard = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
  border-left: 5px solid #0056b3;
  display: flex;
  flex-direction: column;
  
  h4 {
    margin: 0 0 15px;
    font-size: 1rem;
    color: #7f8c8d;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  p {
    margin: 0;
    font-size: 2.2rem;
    font-weight: 800;
    color: #2c3e50;
  }
`;

// --- Listas e Grids ---
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
`;

export const EmptyMessage = styled.p`
  color: #7f8c8d;
  font-size: 1.1rem;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

// --- Minhas Visitas ---
export const ListContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
  width: 100%;
  overflow: hidden;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 1px solid #f0f2f5;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fdfdfd;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemTitle = styled.h4`
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 1.1rem;
`;

export const ItemSubtitle = styled.span`
  font-size: 0.95rem;
  color: #7f8c8d;
`;

export const StatusBadge = styled.span`
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background-color: ${props => props.$status === 'Confirmada' ? '#e8f5e9' : '#fff8e1'};
  color: ${props => props.$status === 'Confirmada' ? '#2e7d32' : '#f57f17'};
`;

// --- Formulários ---
export const FormContainer = styled.form`
  width: 100%;
  background-color: #fff;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #2c3e50;
  font-weight: 600;
  font-size: 0.95rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dcdde1;
  font-size: 1rem;
  color: #2c3e50;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #0056b3;
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(0,86,179,0.1);
  }
`;

export const ActionButton = styled.button`
  background-color: #0056b3;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004494;
  }
`;