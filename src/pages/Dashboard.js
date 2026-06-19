import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { getImoveis, createImovel } from "../utils/fetch";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userData, setUserData] = useState(null);
  const [activeMenu, setActiveMenu] = useState(location.state?.abaAtiva || "resumo");
  const [chatAtivo, setChatAtivo] = useState(null);

  useEffect(() => {
    if (location.state?.abaAtiva) {
      setActiveMenu(location.state.abaAtiva);
    }
  }, [location.state]);

  const [imoveisPlataforma, setImoveisPlataforma] = useState(() => JSON.parse(localStorage.getItem('domus_imoveis')) || []);
  const [leadsGlobais, setLeadsGlobais] = useState(() => JSON.parse(localStorage.getItem('domus_chats')) || []);

  // Visitas agendadas pelo usuário em DetalhesImovel (ModalAgendamento),
  // salvas em 'domus_solicitacoes_visita'. Estava sendo lido aqui mas
  // não chegava a ser usado pelo componente MinhasVisitas — corrigido.
  const [visitas, setVisitas] = useState(() => JSON.parse(localStorage.getItem('domus_solicitacoes_visita')) || []);

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem('domus_usuarioAtual'));
    if (!usuarioLogado) navigate('/login');
    else setUserData(usuarioLogado);
  }, [navigate]);

  // Busca os imóveis reais do backend para usar como recomendações /
  // base de "Meus Anúncios". Se falhar, mantém o que já estava salvo
  // localmente (modo offline), sem travar a tela.
  useEffect(() => {
    getImoveis()
      .then((dados) => {
        if (dados && dados.length > 0) setImoveisPlataforma(dados);
      })
      .catch((err) => console.warn("Não foi possível buscar imóveis do backend.", err));
  }, []);

  useEffect(() => { localStorage.setItem('domus_imoveis', JSON.stringify(imoveisPlataforma)); }, [imoveisPlataforma]);
  useEffect(() => { localStorage.setItem('domus_chats', JSON.stringify(leadsGlobais)); }, [leadsGlobais]);
  useEffect(() => { localStorage.setItem('domus_solicitacoes_visita', JSON.stringify(visitas)); }, [visitas]);

  const handleLogout = () => {
    localStorage.removeItem('domus_usuarioAtual');
    navigate('/login');
  };

  // Tenta criar o anúncio direto no backend; se a chamada falhar
  // (endpoint indisponível, sem internet, etc.) mantém o comportamento
  // anterior de salvar só localmente, sem travar o fluxo do anunciante.
  const handleAdicionarImovel = async (novo) => {
    try {
      const imovelCriado = await createImovel(novo);
      setImoveisPlataforma([imovelCriado, ...imoveisPlataforma]);
    } catch (err) {
      console.warn("Não foi possível salvar o anúncio no backend, salvando localmente.", err);
      setImoveisPlataforma([novo, ...imoveisPlataforma]);
    }
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

    // Visitas é comum a qualquer perfil que tenha agendado algo
    if (activeMenu === "visitas") return <MinhasVisitas visitas={visitas} />;

    if (isVendedor) {
      switch (activeMenu) {
        case "resumo": return <ResumoAnunciante userData={userData} />;
        case "anuncios": return <MeusAnuncios setActiveMenu={setActiveMenu} meusImoveis={imoveisPlataforma} />;
        case "novo_anuncio": return <NovoAnuncio adicionarImovel={handleAdicionarImovel} voltarParaAnuncios={() => setActiveMenu("anuncios")} />;
        default: return <ResumoAnunciante userData={userData} />;
      }
    } else {
      switch (activeMenu) {
        case "resumo": return <ResumoGeral userData={userData} recomendacoes={imoveisPlataforma} />;
        // Antes passava "imoveisPlataforma" inteiro como se fosse a lista de
        // favoritos. Agora Favoritos busca a lista real (backend/localStorage).
        case "favoritos": return <Favoritos userData={userData} />;
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
