import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; 

// --- ESTILOS ---
const Card = styled(Link)`
  display: block; 
  text-decoration: none; 
  color: inherit; 
  
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const Price = styled.h3`
  font-size: 1.5rem;
  color: #0056b3;
  margin: 0 0 10px 0;
`;

const PropertyType = styled.span`
  background: #e9ecef;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #555;
  font-weight: bold;
`;

const Address = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 10px 0;
`;

const Features = styled.div`
  display: flex;
  gap: 15px;
  color: #555;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
  padding-top: 10px;
  margin-top: 10px;
`;

// --- COMPONENTE ---
const PropertyCard = (props) => {
  const dados = props.imovel || props.property || props.data;

  if (!dados) return null;

  const idDoImovel = dados.id || 1;

  return (
    <Card to={`/imovel/${idDoImovel}`}>
      {/* CORREÇÃO: Agora ele procura por 'imagem' primeiro. Se não achar nada, usa uma foto padrão */}
      <CardImage 
        src={dados.imagem || dados.img || dados.image || "https://via.placeholder.com/400x200?text=Sem+Foto"} 
        alt={dados.tipo || "Imóvel"} 
      />
      
      <CardContent>
        <PropertyType>{dados.tipo || dados.type}</PropertyType>
        <Price>{dados.preco || dados.price}</Price>
        <Address>{dados.endereco || dados.address}</Address>
        
        <Features>
          <span>🛏️ {dados.quartos || dados.bedrooms || 0} qts</span>
          <span>🚿 {dados.banheiros || dados.bathrooms || 0} banh</span>
          {/* CORREÇÃO: Adicionado 'dados.vagas' no plural para bater com nosso formulário */}
          <span>🚗 {dados.vagas || dados.vaga || dados.parking || 0} vagas</span>
          <span>📐 {dados.area}</span>
        </Features>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;