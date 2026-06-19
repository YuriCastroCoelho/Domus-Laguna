import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ResultContainer, 
  PropertyCard, 
  PropertyImage, 
  CardContent, 
  PriceTag,
  ButtonLink,
  NoResults 
} from '../styles/ResultadosStyles';
import { getImoveis } from '../utils/fetch';

const Resultados = () => {
  const [searchParams] = useSearchParams();
  const tipoFiltro = searchParams.get('tipo') || '';
  const localFiltro = searchParams.get('local') || '';

  const [imoveis, setImoveis] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const normalizar = (texto = '') =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  useEffect(() => {
    getImoveis()
      .then((dados) => setImoveis(dados || []))
      .catch((err) => {
        console.warn("Não foi possível buscar imóveis do backend para a busca.", err);
        setImoveis([]);
      })
      .finally(() => setCarregando(false));
  }, []);

  const filtrados = imoveis.filter(i =>
    normalizar(i.tipo).includes(normalizar(tipoFiltro)) &&
    normalizar(i.endereco || i.bairro).includes(normalizar(localFiltro))
  );

  return (
    <ResultContainer>
      <Link to="/home">← Voltar para busca</Link>
      <h1 style={{ margin: '20px 0' }}>Resultados para: <strong>{tipoFiltro}</strong></h1>

      {carregando ? (
        <p>Buscando imóveis...</p>
      ) : filtrados.length > 0 ? filtrados.map(i => (
        <PropertyCard key={i.id}>
          <PropertyImage src={i.imagem || i.img} alt={i.titulo || i.tipo} />
          <CardContent>
            <h2>{i.titulo || i.tipo}</h2>
            <p>📍 {i.endereco || i.bairro}</p>
            <PriceTag>
              {typeof i.preco === 'number'
                ? `R$ ${i.preco.toLocaleString('pt-BR')}`
                : `R$ ${i.preco}`}
            </PriceTag>
            <ButtonLink to={`/imovel/${i.id}`}>Ver Detalhes</ButtonLink>
          </CardContent>
        </PropertyCard>
      )) : <NoResults>Nenhum imóvel encontrado com esses filtros.</NoResults>}
    </ResultContainer>
  );
};

export default Resultados;
