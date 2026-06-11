import React from "react";
import styled from "styled-components";

// --- ESTILOS ---
const Card = styled.div`
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
  flex-wrap: wrap;
  gap: 15px;
  color: #555;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
  padding-top: 10px;
  margin-top: 10px;
`;

// --- COMPONENTE ---
const PropertyCardHome = (props) => {
  const dados = props.imovel || props.property || props.data;

  if (!dados) return null;

  return (
    <Card>
      <CardImage src={dados.imagem || dados.img || dados.image} alt={dados.tipo || "Imóvel"} />
      
      <CardContent>
        <PropertyType>{dados.tipo || dados.type} - {dados.bairro}</PropertyType>
        
        <Price>
          {typeof dados.preco === 'number' 
            ? `R$ ${dados.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` 
            : dados.preco || dados.price}
        </Price>
        
        <Address>{dados.endereco || dados.address}</Address>
        
        <Features>
          {dados.contato && <span>📞 {dados.contato}</span>}
          {(dados.quartos || dados.bedrooms) && <span>🛏️ {dados.quartos || dados.bedrooms} qts</span>}
          {(dados.banheiros || dados.bathrooms) && <span>🚿 {dados.banheiros || dados.bathrooms} banh</span>}
          {(dados.vaga || dados.parking) && <span>🚗 {dados.vaga || dados.parking} vagas</span>}
        </Features>
      </CardContent>
    </Card>
  );
};

export default PropertyCardHome;