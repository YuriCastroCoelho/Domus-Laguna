import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // <-- useLocation adicionado
import HeaderMain from "../components/HeaderMain";
import Footer from "../components/Footer";

import ResumoGeral from "../components/dashboard/ResumoGeral";
import Favoritos from "../components/dashboard/Favoritos";
import MinhasVisitas from "../components/dashboard/MinhasVisitas";
import ResumoAnunciante from "../components/dashboard/ResumoAnunciante";
import MeusAnuncios from "../components/dashboard/MeusAnuncios";
import MensagensLeads from "../components/dashboard/MensagensLeads";
import NovoAnuncio from "../components/dashboard/NovoAnuncio";
import ChatLead from "../components/dashboard/ChatLead";
import Configuracoes from "../components/dashboard/Configuracoes";

import { DashboardContainer, Sidebar, SidebarItem, MainContent } from "../styles/DashboardStyles";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Lê o estado passado pela navegação
  
  const [userData, setUserData] = useState(null);
  
  // Inicia na aba que veio do "state" ou, se não tiver, no "resumo"
  const [activeMenu, setActiveMenu] = useState(location.state?.abaAtiva || "resumo");
  const [chatAtivo, setChatAtivo] = useState(null);

  // Monitora se o usuário clicou no botão "Começar agora" enquanto já estava no dashboard
  useEffect(() => {
    if (location.state?.abaAtiva) {
      setActiveMenu(location.state.abaAtiva);
    }
  }, [location.state]);

  const [imoveisPlataforma, setImoveisPlataforma] = useState(() => {
    const imoveisSalvos = JSON.parse(localStorage.getItem('domus_imoveis'));
    if (imoveisSalvos && imoveisSalvos.length > 0) return imoveisSalvos;
    
    return [
      { id: 1, tipo: "Casa em Condomínio", preco: "R$ 850.000", endereco: "Itapeba", quartos: 4, banheiros: 3, vaga: 2, area: "220m²", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80" },
      { id: 2, tipo: "Terreno", preco: "R$ 150.000", endereco: "Ponta Negra", quartos: "-", banheiros: "-", vaga: "-", area: "360m²", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80" }
    ];
  });

  const [leadsGlobais, setLeadsGlobais] = useState(() => {
    const chatsSalvos = JSON.parse(localStorage.getItem('domus_chats'));
    if (chatsSalvos && chatsSalvos.length > 0) return chatsSalvos;
    
    return [{
      id: 1,
      interesse: "Casa em Condomínio - Itapeba",
      statusVendedor: "Novo",
      statusComprador: "Lida",
      mensagens: [
        { id: 1, autorId: "comprador_teste", nome: "Comprador Teste", texto: "Olá! O imóvel ainda está disponível?", hora: "10:30" }
      ]
    }];
  });

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem('domus_usuarioAtual'));
    if (!usuarioLogado) navigate('/login'); 
    else setUserData(usuarioLogado);
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem('domus_imoveis', JSON.stringify(imoveisPlataforma));
  }, [imoveisPlataforma]);

  useEffect(() => {
    localStorage.setItem('domus_chats', JSON.stringify(leadsGlobais));
  }, [leadsGlobais]);

  const handleLogout = () => {
    localStorage.removeItem('domus_usuarioAtual');
    navigate('/login');
  };

  if (!userData) return null; 
  const isVendedor = userData.tipoUsuario === "vendedor" || userData.tipoUsuario === "anunciante";

  const renderConteudoAtivo = () => {
    if (activeMenu === "chat" && chatAtivo) {
      return <ChatLead chatAtual={chatAtivo} userData={userData} leadsGlobais={leadsGlobais} setLeadsGlobais={setLeadsGlobais} voltar={() => setActiveMenu("leads")} />;
    }
    if (activeMenu === "leads") {
      return <MensagensLeads userData={userData} leadsGlobais={leadsGlobais} setLeadsGlobais={setLeadsGlobais} abrirChat={(chat) => { setChatAtivo(chat); setActiveMenu("chat"); }} />;
    }
    if (activeMenu === "config") return <Configuracoes userData={userData} />;

    if (isVendedor) {
      switch (activeMenu) {
        case "resumo": return <ResumoAnunciante userData={userData} />;
        case "anuncios": return <MeusAnuncios setActiveMenu={setActiveMenu} meusImoveis={imoveisPlataforma} />;
        case "novo_anuncio": return <NovoAnuncio adicionarImovel={(novo) => setImoveisPlataforma([novo, ...imoveisPlataforma])} voltarParaAnuncios={() => setActiveMenu("anuncios")} />;
        default: return <ResumoAnunciante userData={userData} />;
      }
    } else {
      switch (activeMenu) {
        case "resumo": return <ResumoGeral userData={userData} recomendacoes={imoveisPlataforma} />;
        case "favoritos": return <Favoritos imoveisFavoritos={imoveisPlataforma} />;
        case "visitas": return <MinhasVisitas />;
        default: return <ResumoGeral userData={userData} recomendacoes={imoveisPlataforma} />;
      }
    }
  };

  return (
    <>
      <HeaderMain />
      <DashboardContainer>
        <Sidebar>
          <div style={{ padding: '0 30px 25px', fontSize: '0.8rem', color: '#666', borderBottom: '1px solid #333', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Painel</div>
          <SidebarItem $active={activeMenu === "resumo"} onClick={() => setActiveMenu("resumo")}>Resumo Geral</SidebarItem>
          {isVendedor ? (
            <SidebarItem $active={activeMenu === "anuncios" || activeMenu === "novo_anuncio"} onClick={() => setActiveMenu("anuncios")}>Meus Anúncios</SidebarItem>
          ) : (
            <>
              <SidebarItem $active={activeMenu === "favoritos"} onClick={() => setActiveMenu("favoritos")}>Meus Favoritos</SidebarItem>
              <SidebarItem $active={activeMenu === "visitas"} onClick={() => setActiveMenu("visitas")}>Minhas Visitas</SidebarItem>
            </>
          )}
          <SidebarItem $active={activeMenu === "leads" || activeMenu === "chat"} onClick={() => setActiveMenu("leads")}>Mensagens (Chat)</SidebarItem>
          <SidebarItem $active={activeMenu === "config"} onClick={() => setActiveMenu("config")}>Configurações</SidebarItem>
          <div style={{ flex: 1 }}></div>
          <SidebarItem onClick={handleLogout} style={{ color: '#ff6b6b', marginTop: 'auto', borderLeftColor: 'transparent' }}>Sair</SidebarItem>
        </Sidebar>
        <MainContent>{renderConteudoAtivo()}</MainContent>
      </DashboardContainer>
      <Footer />
    </>
  );
};

export default Dashboard;