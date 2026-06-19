import React from "react";
import PropertyCard from "../PropertyCardHome"; 
import { 
  PageContainer, HeaderArea, Title, SectionTitle, GridContainer, ActionButton, EmptyMessage 
} from "../../styles/DashboardStylesPerfil";

// Adicionei 'setMeusImoveis' como prop opcional para o caso de você enviá-la do Dashboard
const MeusAnuncios = ({ setActiveMenu, meusImoveis, setMeusImoveis }) => {
  
  const apagarAnuncio = (idParaApagar) => {
    const confirmacao = window.confirm("Tem certeza que deseja apagar este anúncio?");
    
    if (confirmacao) {
      // 1. Puxa os dados do localStorage
      const imoveisSalvos = JSON.parse(localStorage.getItem('domus_imoveis') || '[]');
      
      // 2. Remove o imóvel selecionado
      const novaLista = imoveisSalvos.filter(imovel => String(imovel.id) !== String(idParaApagar));
      
      // 3. Salva a nova lista atualizada
      localStorage.setItem('domus_imoveis', JSON.stringify(novaLista));
      
      // 4. Atualiza a tela
      if (typeof setMeusImoveis === 'function') {
        setMeusImoveis(novaLista); // Atualiza suavemente se o pai passou a função
      } else {
        window.location.reload(); // Recarrega a página caso não tenha a função do pai
      }
      
      alert("Anúncio apagado com sucesso!");
    }
  };

  return (
    <PageContainer>
      <HeaderArea>
        <Title>Meus Anúncios</Title>
        <ActionButton onClick={() => setActiveMenu("novo_anuncio")}>
          + Novo Anúncio
        </ActionButton>
      </HeaderArea>

      <SectionTitle>Imóveis Publicados</SectionTitle>
      
      {meusImoveis && meusImoveis.length === 0 ? (
        <EmptyMessage>Você ainda não tem nenhum imóvel anunciado.</EmptyMessage>
      ) : (
        <GridContainer>
          {meusImoveis.map((imovel, index) => (
            // A div extra aqui serve como "âncora" para o botão ficar posicionado no canto do card
            <div key={imovel.id || index} style={{ position: 'relative' }}>
              <PropertyCard imovel={imovel} />
              
              {/* Botão de Excluir posicionado sobre o card */}
              <button 
                onClick={() => apagarAnuncio(imovel.id)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '8px 12px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                  transition: '0.2s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
              >
                🗑️ Apagar
              </button>
            </div>
          ))}
        </GridContainer>
      )}
    </PageContainer>
  );
};

export default MeusAnuncios;