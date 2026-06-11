import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f8f9fa;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 60px 20px;
`;

export const FilterSection = styled(Section)`
  background-color: white;
  border-radius: 8px;
  padding: 40px 20px;
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

export const TagsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
`;

export const NeighborhoodTag = styled.div`
  background: ${props => props.$active ? '#004494' : '#0056b3'};
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: ${props => props.$active ? 'inset 0 3px 5px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)'};
  transform: ${props => props.$active ? 'translateY(2px)' : 'none'};

  &:hover {
    background: #004494;
    transform: translateY(-2px);
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  padding: 40px 0;
`;