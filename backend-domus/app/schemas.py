from pydantic import BaseModel

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

    class Config:
        from_attributes = True
        
from pydantic import BaseModel, ConfigDict 

class Imovel(ImovelBase):
    id: int


    model_config = ConfigDict(from_attributes=True)