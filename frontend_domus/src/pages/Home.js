import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HeroSectionHome from '../components/HeroSectionHome';
import PropertyCardHome from '../components/PropertyCardHome';

import {
  PageWrapper,
  SectionWhite,
  SectionLightGray,
  SectionDark,
  SectionHelp,
  Container,
  SectionHeader,
  GridCards,
  PriceGrid,
  PriceCard,
  PriceButton,
  BotaoWhatsApp
} from '../styles/HomeStyles';

// Dados simulados movidos para fora do componente
const imoveisDaHome = [
  {
    id: "1",
    status: "venda",
    tipo: "Apartamento",
    titulo: "Apto no Centro",
    endereco: "Centro, Maricá",
    preco: "250.000",
    imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000",
    quartos: 3,
    banheiros: 4,
    vagas: 4,
    area: "120m²"
  },
  {
    id: "2",
    status: "venda",
    tipo: "Casa em Condomínio",
    titulo: "Casa Espetacular",
    endereco: "Itapeba, Maricá",
    preco: "850.000",
    imagem: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000",
    quartos: 4,
    banheiros: 3,
    vagas: 2,
    area: "220m²"
  },
  {
    id: "3",
    status: "aluguel",
    tipo: "Casa Padrão",
    titulo: "Casa aconchegante",
    endereco: "Ponta Negra, Maricá",
    preco: "2.500/mês",
    imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000",
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    area: "90m²"
  }
];

function Home() {
  const navigate = useNavigate();

  const [listaCompleta, setListaCompleta] = useState([]);

  useEffect(() => {
    const imoveisSalvos = JSON.parse(
      localStorage.getItem('domus_imoveis') || '[]'
    );

    setListaCompleta([
      ...imoveisDaHome,
      ...imoveisSalvos
    ]);
  }, []);

  const imoveisVenda = listaCompleta.filter(
    i => i.status === 'venda'
  );

  const imoveisAluguel = listaCompleta.filter(
    i => i.status === 'aluguel'
  );

  return (
    <PageWrapper>
      <div id="inicio">
        <HeroSectionHome />
      </div>

      <SectionWhite id="comprar">
        <Container>
          <SectionHeader>
            <h2>Imóveis em Destaque para Comprar</h2>
          </SectionHeader>

          <GridCards>
            {imoveisVenda.map(imovel => (
              <PropertyCardHome
                key={imovel.id}
                imovel={imovel}
              />
            ))}
          </GridCards>
        </Container>
      </SectionWhite>

      <SectionLightGray id="alugar">
        <Container>
          <SectionHeader>
            <h2>Melhores Opções para Alugar</h2>
          </SectionHeader>

          <GridCards>
            {imoveisAluguel.map(imovel => (
              <PropertyCardHome
                key={imovel.id}
                imovel={imovel}
              />
            ))}
          </GridCards>
        </Container>
      </SectionLightGray>

      <SectionDark id="precos">
        <Container>
          <SectionHeader dark>
            <h2>Planos para Anunciantes</h2>
          </SectionHeader>

          <PriceGrid>
            <PriceCard>
              <h3>Plano Básico</h3>
              <PriceButton
                onClick={() => navigate('/checkout/basico')}
              >
                Ativar Grátis
              </PriceButton>
            </PriceCard>

            <PriceCard destaque>
              <h3>Plano Pro</h3>
              <PriceButton
                destaque
                onClick={() => navigate('/checkout/pro')}
              >
                Assinar Plano Pro
              </PriceButton>
            </PriceCard>
          </PriceGrid>
        </Container>
      </SectionDark>

      <SectionHelp id="ajuda">
        <Container>
          <SectionHeader>
            <h2>Ficou com alguma dúvida?</h2>
            <p>
              Nossa equipe está pronta para te ajudar a encontrar o imóvel ideal.
            </p>
          </SectionHeader>

          <BotaoWhatsApp
            onClick={() => navigate('/suporte')}
          >
            Ver Central de Ajuda
          </BotaoWhatsApp>
        </Container>
      </SectionHelp>
    </PageWrapper>
  );
}

export default Home;
