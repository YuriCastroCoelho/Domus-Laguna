import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Arial', sans-serif;
`;

export const PropertyCard = styled.div`
  display: flex;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  margin-bottom: 25px;
  border: 1px solid #f1f5f9;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

export const PropertyImage = styled.img`
  width: 320px;
  height: 220px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const PriceTag = styled.h3`
  color: #2563eb;
  font-size: 1.6rem;
  margin: 10px 0;
`;

export const ButtonLink = styled(Link)`
  background: #0056b3;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  width: fit-content;
  &:hover { background: #004494; }
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 50px;
  color: #64748b;
  font-size: 1.2rem;
`;