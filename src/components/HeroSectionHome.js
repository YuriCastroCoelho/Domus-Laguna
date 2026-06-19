import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  HeroContainer, HeroTitle, HeroSubtitle, InteractiveArea, TabsContainer,
  Tab, ContentBox, Select, Input, Button, AnnounceMessage
} from "../styles/HeroSectionHomeStyles";

const HeroSection = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("comprar");
  const [propertyType, setPropertyType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // A busca navega para a página de resultados com os filtros na URL
  // Exemplo: /resultados?tipo=Casa&local=centro
  const handleSearch = () => {
    navigate(`/resultados?tipo=${propertyType}&local=${encodeURIComponent(searchQuery)}`);
  };

  const handleComecarAgora = () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('domus_usuarioAtual'));

    if (usuarioLogado && (usuarioLogado.tipoUsuario === 'vendedor' || usuarioLogado.tipoUsuario === 'anunciante')) {
      navigate('/dashboard', { state: { abaAtiva: 'novo_anuncio' } });
    } else {
      navigate('/register');
    }
  };

  return (
    <HeroContainer>
      <HeroTitle>Encontre o imóvel dos seus sonhos</HeroTitle>
      <HeroSubtitle>As melhores oportunidades em Maricá e região</HeroSubtitle>
      
      <InteractiveArea>
        <TabsContainer>
          <Tab active={activeTab === "comprar"} onClick={() => setActiveTab("comprar")}>
            Comprar
          </Tab>
          <Tab active={activeTab === "alugar"} onClick={() => setActiveTab("alugar")}>
            Alugar
          </Tab>
          <Tab active={activeTab === "anunciar"} onClick={() => setActiveTab("anunciar")}>
            Anunciar
          </Tab>
        </TabsContainer>

        <ContentBox>
          {(activeTab === "comprar" || activeTab === "alugar") && (
            <>
              <Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="">Tipo de Imóvel</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Terreno">Terreno</option>
                <option value="Comercial">Comercial</option>
              </Select>
              <Input 
                type="text" 
                placeholder="Digite o bairro (ex: Itaipuaçu, Centro...)" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button onClick={handleSearch}>Buscar</Button>
            </>
          )}

          {activeTab === "anunciar" && (
            <>
              <AnnounceMessage>
                <h3>Quer vender ou alugar rápido?</h3>
                <p>Anuncie seu imóvel no Domus Laguna e alcance milhares de interessados na região de Maricá.</p>
              </AnnounceMessage>
              <div style={{ width: '100%', maxWidth: '200px' }}>
                <Button fullWidth style={{ backgroundColor: "#28a745" }} onClick={handleComecarAgora}>
                  Começar agora
                </Button>
              </div>
            </>
          )}
        </ContentBox>
      </InteractiveArea>
    </HeroContainer>
  );
};

export default HeroSection;
