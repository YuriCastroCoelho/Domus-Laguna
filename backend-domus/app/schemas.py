from pydantic import BaseModel, ConfigDict


class UsuarioCreate(BaseModel):
    nome: str
    email: str
    senha: str


class UsuarioLogin(BaseModel):
    email: str
    senha: str


class ImovelBase(BaseModel):
    tipo: str
    bairro: str
    endereco: str
    descricao: str
    preco: float
    latitude: float
    longitude: float
    imagem: str
    contato: str


class ImovelCreate(ImovelBase):
    pass


class Imovel(ImovelBase):
    id: int

    model_config = ConfigDict(from_attributes=True)

class FavoritoCreate(BaseModel):
    usuario_id: int
    imovel_id: int
