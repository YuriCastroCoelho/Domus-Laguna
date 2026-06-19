import React from "react";
import { 
  PageContainer, HeaderArea, Title, SectionTitle, ListContainer, ListItem, 
  ItemTitle, ItemSubtitle, StatusBadge 
} from "../../styles/DashboardStylesPerfil";

const MinhasVisitas = () => {
  const visitas = [
    { id: 1, imovel: "Casa - Itaipuaçu", data: "15/06/2026", horario: "14:00", status: "Confirmada" },
    { id: 2, imovel: "Apartamento - Centro", data: "18/06/2026", horario: "10:30", status: "Aguardando Corretor" }
  ];

  return (
    <PageContainer>
      <HeaderArea>
        <Title>Minhas Visitas</Title>
      </HeaderArea>

      <SectionTitle>Próximos Agendamentos</SectionTitle>

      <ListContainer>
        {visitas.map(visita => (
          <ListItem key={visita.id}>
            <div>
              <ItemTitle>{visita.imovel}</ItemTitle>
              <ItemSubtitle>📅 {visita.data} | ⏰ {visita.horario}</ItemSubtitle>
            </div>
            <div>
              <StatusBadge $status={visita.status}>
                {visita.status}
              </StatusBadge>
            </div>
          </ListItem>
        ))}
      </ListContainer>
    </PageContainer>
  );
};

export default MinhasVisitas;