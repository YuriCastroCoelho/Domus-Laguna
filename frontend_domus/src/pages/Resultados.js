import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ResultContainer, 
  PropertyCard, 
  PropertyImage, 
  CardContent, 
  PriceTag,
  ButtonLink,
  NoResults 
} from '../styles/ResultadosStyles'; // Vamos criar este arquivo de estilo abaixo

const Resultados = () => {
  const [searchParams] = useSearchParams();
  const tipoFiltro = searchParams.get('tipo') || '';
  const localFiltro = searchParams.get('local') || '';

  const normalizar = (texto) => 
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const bancoDeImoveisMock = [
    { id: "1", tipo: "Apartamento", titulo: "Apartamento aconchegante no Centro", endereco: "Centro, Maricá - RJ", preco: "250.000", imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800" },
    { id: "2", tipo: "Casa", titulo: "Casa espetacular", endereco: "Itapeba, Maricá - RJ", preco: "850.000", imagem: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800" }
  ];

  const filtrados = bancoDeImoveisMock.filter(i => 
    normalizar(i.tipo).includes(normalizar(tipoFiltro)) && 
    normalizar(i.endereco).includes(normalizar(localFiltro))
  );

  return (
    <ResultContainer>
      <Link to="/">← Voltar para busca</Link>
      <h1 style={{ margin: '20px 0' }}>Resultados para: <strong>{tipoFiltro}</strong></h1>
      
      {filtrados.length > 0 ? filtrados.map(i => (
        <PropertyCard key={i.id}>
          <PropertyImage src={i.imagem} alt={i.titulo} />
          <CardContent>
            <h2>{i.titulo}</h2>
            <p>📍 {i.endereco}</p>
            <PriceTag>R$ {i.preco}</PriceTag>
            <ButtonLink to={`/imovel/${i.id}`}>Ver Detalhes</ButtonLink>
          </CardContent>
        </PropertyCard>
      )) : <NoResults>Nenhum imóvel encontrado com esses filtros.</NoResults>}
    </ResultContainer>
  );
};

export default Resultados;