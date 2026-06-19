import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// --- ESTILOS ---
const Card = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const FavoritoButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.1);
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
// Aceita os dados chegando como 'imovel' (novo), 'property' (antigo) ou 'data'.
// Se receber a prop "onFavoritar", mostra o botão de coração no canto do card
// (usado em Home, Favoritos e Resumo). Se não receber, o card fica só com o link.
const PropertyCardHome = (props) => {
  const dados = props.imovel || props.property || props.data;

  if (!dados) return null;

  const idDoImovel = dados.id || 1;

  const handleFavoritoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (props.onFavoritar) props.onFavoritar(dados);
  };

  return (
    <Card>
      {props.onFavoritar && (
        <FavoritoButton onClick={handleFavoritoClick} aria-label="Favoritar imóvel">
          {props.favorito ? "❤️" : "🤍"}
        </FavoritoButton>
      )}

      <CardLink to={`/imovel/${idDoImovel}`}>
        <CardImage src={dados.imagem || dados.img || dados.image} alt={dados.tipo || "Imóvel"} />

        <CardContent>
          <PropertyType>
            {dados.tipo || dados.type}{dados.bairro ? ` - ${dados.bairro}` : ""}
          </PropertyType>

          <Price>
            {typeof dados.preco === "number"
              ? `R$ ${dados.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
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
      </CardLink>
    </Card>
  );
};

export default PropertyCardHome;
