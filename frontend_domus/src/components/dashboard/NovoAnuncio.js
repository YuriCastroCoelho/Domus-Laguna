import React, { useState } from "react";
import { 
  PageContainer, HeaderArea, Title, SectionTitle, ActionButton, 
  FormContainer, FormGroup, Label, Input 
} from "../../styles/DashboardStylesPerfil";

const NovoAnuncio = ({ adicionarImovel, voltarParaAnuncios }) => {
  const [formData, setFormData] = useState({
    tipo: "Casa",
    status: "venda", // <-- NOVO: Adicionado para aparecer na Home
    preco: "",
    endereco: "", 
    quartos: "",
    banheiros: "",
    vaga: "",
    area: "",
    imagem: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80" // <-- CORRIGIDO: nome da propriedade
  });

  const [previewImagens, setPreviewImagens] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length > 0) {
      const conversoesBase64 = files.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      });

      const novasImagensBase64 = await Promise.all(conversoesBase64);
      const todasImagens = [...previewImagens, ...novasImagensBase64];
      setPreviewImagens(todasImagens);
      setFormData({ ...formData, imagem: todasImagens[0] }); // <-- CORRIGIDO
    }
  };

  const removerImagem = (indexParaRemover) => {
    const novasImagens = previewImagens.filter((_, index) => index !== indexParaRemover);
    setPreviewImagens(novasImagens);
    
    if (novasImagens.length > 0) {
        setFormData({ ...formData, imagem: novasImagens[0] }); // <-- CORRIGIDO
    } else {
        setFormData({ ...formData, imagem: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80" }); // <-- CORRIGIDO
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const novoImovel = {
      id: Math.floor(Math.random() * 10000),
      status: formData.status, // <-- NOVO
      tipo: formData.tipo,
      preco: `R$ ${formData.preco}`,
      endereco: formData.endereco,
      quartos: formData.quartos || "-",
      banheiros: formData.banheiros || "-",
      vagas: formData.vaga || "-", // <-- Ajustado para plural (vagas) para bater com a Home
      area: `${formData.area}m²`,
      imagem: formData.imagem // <-- CORRIGIDO
    };

    adicionarImovel(novoImovel);
    alert("Anúncio criado com sucesso!");
    voltarParaAnuncios(); 
  };

  return (
    <PageContainer>
      <HeaderArea>
        <Title>Criar Novo Anúncio</Title>
        <button onClick={voltarParaAnuncios} style={{ background: 'none', border: 'none', color: '#0056b3', cursor: 'pointer', fontWeight: 'bold' }}>
          ← Voltar
        </button>
      </HeaderArea>

      <FormContainer onSubmit={handleSubmit}>
        
        <SectionTitle style={{ marginTop: '0' }}>Fotos do Imóvel</SectionTitle>
        <FormGroup>
          <div style={{ border: '2px dashed #b2bec3', padding: '30px', textAlign: 'center', borderRadius: '8px', backgroundColor: '#f8f9fa', transition: 'all 0.3s' }}>
            <Label style={{ cursor: 'pointer', color: '#0056b3', margin: 0, fontSize: '1.1rem', display: 'block' }}>
              📸 Clique aqui para fazer o upload das fotos
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                onChange={handleImageUpload} 
                style={{ display: 'none' }} 
              />
            </Label>
            <p style={{ fontSize: '0.85rem', color: '#636e72', marginTop: '8px' }}>
              Formatos suportados: JPG, PNG. A primeira imagem será a capa do anúncio.
            </p>
          </div>

          {previewImagens.length > 0 && (
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px', flexWrap: 'wrap' }}>
              {previewImagens.map((url, index) => (
                <div key={index} style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <img src={url} alt={`Preview ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                  {index === 0 && (
                    <span style={{ position: 'absolute', bottom: '5px', left: '5px', backgroundColor: '#0056b3', color: 'white', fontSize: '0.65rem', padding: '2px 5px', borderRadius: '4px', fontWeight: 'bold' }}>
                      CAPA
                    </span>
                  )}
                  <button 
                    type="button"
                    onClick={() => removerImagem(index)}
                    style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
        </FormGroup>

        <SectionTitle>Detalhes do Imóvel</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <FormGroup>
            <Label>Tipo de Negócio</Label>
            {/* <-- NOVO: Adicionado select de Status --> */}
            <select 
              name="status" 
              value={formData.status} 
              onChange={handleChange}
              style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #dcdde1', fontSize: '1rem', backgroundColor: '#f8f9fa' }}
            >
              <option value="venda">Venda</option>
              <option value="aluguel">Aluguel</option>
            </select>
          </FormGroup>
          
          <FormGroup>
            <Label>Tipo de Imóvel</Label>
            <select 
              name="tipo" 
              value={formData.tipo} 
              onChange={handleChange}
              style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #dcdde1', fontSize: '1rem', backgroundColor: '#f8f9fa' }}
            >
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Terreno">Terreno</option>
              <option value="Comercial">Comercial</option>
            </select>
          </FormGroup>
        </div>

        <FormGroup>
          <Label>Preço (R$)</Label>
          <Input type="text" name="preco" placeholder="Ex: 450.000 ou 2.500/mês" required onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Bairro (Maricá)</Label>
          <select 
            name="endereco" 
            value={formData.endereco} 
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #dcdde1', fontSize: '1rem', backgroundColor: '#f8f9fa' }}
          >
            <option value="" disabled>Selecione o bairro...</option>
            <option value="Itaipuaçu">Itaipuaçu</option>
            <option value="Centro">Centro</option>
            <option value="Ponta Negra">Ponta Negra</option>
            <option value="Araçatiba">Araçatiba</option>
            <option value="Inoã">Inoã</option>
            <option value="Cordeirinho">Cordeirinho</option>
            <option value="Itapeba">Itapeba</option>
            <option value="Ubatiba">Ubatiba</option>
            <option value="Mumbuca">Mumbuca</option>
          </select>
        </FormGroup>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '15px' }}>
          <FormGroup>
            <Label>Quartos</Label>
            <Input type="number" name="quartos" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Banheiros</Label>
            <Input type="number" name="banheiros" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Vagas</Label>
            <Input type="number" name="vaga" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Área (m²)</Label>
            <Input type="number" name="area" placeholder="Ex: 120" required onChange={handleChange} />
          </FormGroup>
        </div>

        <ActionButton type="submit" style={{ marginTop: '20px', width: '100%', fontSize: '1.1rem', padding: '15px' }}>
          Publicar Anúncio
        </ActionButton>
      </FormContainer>
    </PageContainer>
  );
};

export default NovoAnuncio;