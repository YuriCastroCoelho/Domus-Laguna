import React from "react";
import { 
  PageContainer, HeaderArea, Title, SectionTitle, ListContainer, ListItem, 
  ItemTitle, ItemSubtitle, StatusBadge, EmptyMessage
} from "../../styles/DashboardStylesPerfil";

// ANTES: ignorava qualquer prop e mostrava 2 visitas fixas hardcoded.
// AGORA: usa a lista real de "visitas" que o Dashboard já monta a partir
// dos agendamentos feitos em DetalhesImovel (domus_solicitacoes_visita).
const MinhasVisitas = ({ visitas = [] }) => {
  return (
    <PageContainer>
      <HeaderArea>
        <Title>Minhas Visitas</Title>
      </HeaderArea>

      <SectionTitle>Próximos Agendamentos</SectionTitle>

      {visitas.length === 0 ? (
        <EmptyMessage>Você ainda não tem nenhuma visita agendada.</EmptyMessage>
      ) : (
        <ListContainer>
          {visitas.map(visita => (
            <ListItem key={visita.id}>
              <div>
                <ItemTitle>{visita.imovel}</ItemTitle>
                <ItemSubtitle>📅 {visita.data} | ⏰ {visita.hora || visita.horario}</ItemSubtitle>
              </div>
              <div>
                <StatusBadge $status={visita.status}>
                  {visita.status}
                </StatusBadge>
              </div>
            </ListItem>
          ))}
        </ListContainer>
      )}
    </PageContainer>
  );
};

export default MinhasVisitas;
