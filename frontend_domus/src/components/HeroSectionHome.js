import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importando os estilos isolados
import {
  HeroContainer, HeroTitle, HeroSubtitle, InteractiveArea, TabsContainer,
  Tab, ContentBox, Select, Input, Button, AnnounceMessage
} from "../styles/HeroSectionHomeStyles";

const HeroSection = () => {
  const navigate = useNavigate();

  // Estado que controla qual aba está aberta ('comprar', 'alugar' ou 'anunciar')
  const [activeTab, setActiveTab] = useState("comprar");
  
  // Estados da busca
  const [propertyType, setPropertyType] = useState("Casa"); // Valor padrão Casa
  const [searchQuery, setSearchQuery] = useState("");

  // --- LÓGICA DE BUSCA (ATUALIZADA) ---
  const handleSearch = () => {
    // A busca navega para a página de resultados com os filtros na URL
    // Exemplo: /resultados?tipo=Casa&local=centro
    navigate(`/resultados?tipo=${propertyType}&local=${encodeURIComponent(searchQuery)}`);
  };

  // --- LÓGICA DE ANÚNCIO ---
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
        {/* ABAS */}
        <TabsContainer>
          <Tab 
            active={activeTab === "comprar"} 
            onClick={() => setActiveTab("comprar")}
          >
            Comprar
          </Tab>
          <Tab 
            active={activeTab === "alugar"} 
            onClick={() => setActiveTab("alugar")}
          >
            Alugar
          </Tab>
          <Tab 
            active={activeTab === "anunciar"} 
            onClick={() => setActiveTab("anunciar")}
          >
            Anunciar
          </Tab>
        </TabsContainer>

        {/* CAIXA DE CONTEÚDO DINÂMICA */}
        <ContentBox>
          {/* Se a aba for Comprar OU Alugar, mostra os filtros de busca */}
          {(activeTab === "comprar" || activeTab === "alugar") && (
            <>
              <Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Terreno">Terreno</option>
                <option value="Comercial">Comercial</option>
              </Select>
              <Input 
                type="text" 
                placeholder="Digite o bairro ou local..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button onClick={handleSearch}>Buscar</Button>
            </>
          )}

          {/* Se a aba for Anunciar */}
          {activeTab === "anunciar" && (
            <>
              <AnnounceMessage>
                <h3>Quer vender ou alugar rápido?</h3>
                <p>Anuncie seu imóvel no Domus Laguna e alcance milhares de interessados na região de Maricá.</p>
              </AnnounceMessage>
              <div style={{ width: '100%', maxWidth: '200px' }}>
                <Button style={{ backgroundColor: "#28a745" }} onClick={handleComecarAgora}>
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