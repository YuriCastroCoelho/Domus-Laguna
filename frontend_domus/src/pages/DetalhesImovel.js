import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  PageContainer,
  BackButton,
  HeroImage,
  ContentGrid,
  MainInfo,
  Sidebar,
  PropertyType,
  Title,
  Address,
  DescriptionSection,
  ContactCard,
  Price,
  PrimaryButton,
  SecondaryButton,
  ModalOverlay,
  ModalContent,
  TextArea,
  SendButton,
  ReviewSection,
  ReviewForm,
  ReviewList,
  ReviewCard,
  Stars
} from '../styles/DetalhesImovelStyles';

import FormInteresse from '../components/FormInteresse';
import ModalAgendamento from '../components/ModalAgendamento';

const bancoDeImoveisMock = [
  {
    id: "1",
    tipo: "Apartamento",
    titulo: "Apartamento aconchegante no Centro",
    endereco: "Centro, Maricá - RJ",
    preco: "250.000",
    imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000",
    quartos: 3,
    area: "120m²",
    descricao: "Lindo apartamento bem localizado."
  },
  {
    id: "2",
    tipo: "Casa em Condomínio",
    titulo: "Casa espetacular com design moderno",
    endereco: "Itapeba, Maricá - RJ",
    preco: "850.000",
    imagem: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000",
    quartos: 4,
    area: "220m²",
    descricao: "Magnífica casa em condomínio fechado."
  }
];

function DetalhesImovel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [imovel, setImovel] = useState(null);

  const [modalInteresseAberto, setModalInteresseAberto] = useState(false);
  const [modalVisitaAberto, setModalVisitaAberto] = useState(false);
  const [chatAberto, setChatAberto] = useState(false);
  const [mensagemText, setMensagemText] = useState("");

  const [avaliacoes, setAvaliacoes] = useState([
    {
      id: 1,
      nome: "Carlos Eduardo",
      nota: 5,
      texto: "Excelente imóvel!",
      data: "15/06/2026"
    }
  ]);

  const [novaNota, setNovaNota] = useState(5);
  const [novoComentario, setNovoComentario] = useState("");

  useEffect(() => {
    const imoveisSalvos = JSON.parse(
      localStorage.getItem('domus_imoveis') || '[]'
    );

    const todosOsImoveis = [
      ...bancoDeImoveisMock,
      ...imoveisSalvos
    ];

    const item = todosOsImoveis.find(
      i => String(i.id) === String(id)
    );

    setImovel(item);
  }, [id]);

  const handleAgendamentoConfirmado = (dados) => {
    const novaVisita = {
      id: Date.now(),
      imovel: imovel.titulo,
      data: dados.data,
      hora: dados.hora,
      status: "Pendente"
    };

    const visitas = JSON.parse(
      localStorage.getItem('domus_solicitacoes_visita') || '[]'
    );

    localStorage.setItem(
      'domus_solicitacoes_visita',
      JSON.stringify([...visitas, novaVisita])
    );

    setModalVisitaAberto(false);

    navigate('/dashboard', {
      state: { abaAtiva: 'visitas' }
    });
  };

  const publicarAvaliacao = (e) => {
    e.preventDefault();

    const nova = {
      id: Date.now(),
      nome: "Você",
      nota: novaNota,
      texto: novoComentario
    };

    setAvaliacoes([nova, ...avaliacoes]);
    setNovoComentario("");
  };

  if (!imovel) {
    return (
      <PageContainer>
        <h2>Carregando...</h2>
      </PageContainer>
    );
  }

  let imagemMapeada =
    imovel.imagem ||
    imovel.foto ||
    'https://via.placeholder.com/1000x500?text=Sem+Foto';

  if (
    !imagemMapeada.startsWith('http') &&
    !imagemMapeada.startsWith('data:')
  ) {
    imagemMapeada = imagemMapeada.startsWith('/')
      ? imagemMapeada
      : `/${imagemMapeada}`;
  }

  return (
    <PageContainer>
      <BackButton to="/">
        &larr; Voltar
      </BackButton>

      <HeroImage src={imagemMapeada} />

      <ContentGrid>
        <MainInfo>
          <PropertyType>{imovel.tipo}</PropertyType>

          <Title>{imovel.titulo}</Title>

          <Address>
            📍 {imovel.endereco}
          </Address>

          <DescriptionSection>
            <h2>Sobre</h2>
            <p>{imovel.descricao}</p>
          </DescriptionSection>

          <ReviewSection>
            <h2>Avaliações</h2>

            <ReviewForm onSubmit={publicarAvaliacao}>
              <div>
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    onClick={() => setNovaNota(n)}
                    style={{
                      cursor: 'pointer',
                      color: n <= novaNota ? '#FFD700' : '#ccc'
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              <TextArea
                placeholder="Comentário..."
                value={novoComentario}
                onChange={(e) =>
                  setNovoComentario(e.target.value)
                }
              />

              <SendButton type="submit">
                Publicar
              </SendButton>
            </ReviewForm>

            <ReviewList>
              {avaliacoes.map((av) => (
                <ReviewCard key={av.id}>
                  <strong>{av.nome}</strong>

                  <Stars>
                    {'★'.repeat(av.nota)}
                  </Stars>

                  <p>{av.texto}</p>
                </ReviewCard>
              ))}
            </ReviewList>
          </ReviewSection>
        </MainInfo>

        <Sidebar>
          <ContactCard>
            <Price>{imovel.preco}</Price>

            <PrimaryButton
              onClick={() =>
                setModalInteresseAberto(true)
              }
            >
              💬 Tenho Interesse
            </PrimaryButton>

            <SecondaryButton
              onClick={() =>
                setModalVisitaAberto(true)
              }
            >
              📅 Agendar Visita
            </SecondaryButton>

            <button
              onClick={() => setChatAberto(true)}
              style={{
                background: 'transparent',
                border: 'none',
                marginTop: '10px',
                cursor: 'pointer'
              }}
            >
              Enviar mensagem direta
            </button>
          </ContactCard>
        </Sidebar>
      </ContentGrid>

      {modalInteresseAberto && (
        <FormInteresse
          fechar={() =>
            setModalInteresseAberto(false)
          }
        />
      )}

      {modalVisitaAberto && (
        <ModalAgendamento
          fechar={() =>
            setModalVisitaAberto(false)
          }
          aoConfirmar={handleAgendamentoConfirmado}
        />
      )}

      {chatAberto && (
        <ModalOverlay
          onClick={() => setChatAberto(false)}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Enviar Mensagem</h3>

            <TextArea
              value={mensagemText}
              onChange={(e) =>
                setMensagemText(e.target.value)
              }
            />

            <SendButton
              onClick={() => setChatAberto(false)}
            >
              Enviar
            </SendButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
}

export default DetalhesImovel;
